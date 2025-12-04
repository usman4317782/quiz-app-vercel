// Desktop-specific security features
import { incrementViolation, resetQuiz } from './storage';
import { getOSInfo } from './deviceDetection';

let keyboardViolationCount = 0;
let fullscreenExitCount = 0;
let isFullscreenEnforced = false;

// Show desktop warning
const showDesktopWarning = (message, isTerminal = false) => {
    const existingWarning = document.getElementById('desktop-security-warning');
    if (existingWarning) {
        existingWarning.remove();
    }

    const warning = document.createElement('div');
    warning.id = 'desktop-security-warning';
    warning.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: ${isTerminal ? 'rgba(220, 38, 38, 0.95)' : 'rgba(239, 68, 68, 0.95)'};
        color: white;
        padding: 15px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        z-index: 10000;
        animation: slideDown 0.3s ease-out;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    warning.textContent = message;
    document.body.appendChild(warning);

    if (!isTerminal) {
        setTimeout(() => {
            warning.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => warning.remove(), 300);
        }, 3000);
    }
};

// Enforce fullscreen mode
export const enforceFullscreen = (onViolationLimit) => {
    const requestFullscreen = () => {
        const elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                console.log('Fullscreen request failed:', err);
            });
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    };

    const isInFullscreen = () => {
        return !!(document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement);
    };

    const handleFullscreenChange = () => {
        if (!isInFullscreen() && isFullscreenEnforced) {
            fullscreenExitCount++;
            const remaining = 3 - fullscreenExitCount;

            if (fullscreenExitCount >= 3) {
                showDesktopWarning('⛔ Exited fullscreen 3 times! Quiz terminated.', true);
                setTimeout(() => {
                    resetQuiz();
                    if (onViolationLimit) onViolationLimit();
                    window.location.reload();
                }, 2000);
            } else {
                showDesktopWarning(`⚠️ Please stay in fullscreen mode! ${remaining} attempt(s) remaining.`);
                // Try to re-enter fullscreen
                setTimeout(requestFullscreen, 1000);
            }
        }
    };

    // Listen for fullscreen changes
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // Initial fullscreen request
    setTimeout(() => {
        requestFullscreen();
        isFullscreenEnforced = true;
    }, 1000);

    return { requestFullscreen, isInFullscreen };
};

// Detect window resizing (half-screen attempts)
const detectWindowResize = () => {
    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;

    const handleResize = () => {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;

        // Check if window is significantly smaller than screen
        const widthRatio = currentWidth / screenWidth;
        const heightRatio = currentHeight / screenHeight;

        if (widthRatio < 0.8 || heightRatio < 0.8) {
            showDesktopWarning('⚠️ Window resize detected! Please use fullscreen mode.');
        }

        initialWidth = currentWidth;
        initialHeight = currentHeight;
    };

    window.addEventListener('resize', handleResize);
};

// Detect on-screen keyboard (Windows)
const detectOnScreenKeyboard = (onViolationLimit) => {
    const os = getOSInfo();

    if (os !== 'Windows') return; // Only for Windows

    // Monitor for process named 'osk.exe' or viewport changes typical of on-screen keyboard
    let lastHeight = window.innerHeight;

    const checkKeyboard = () => {
        const currentHeight = window.innerHeight;
        const heightDiff = lastHeight - currentHeight;

        // If height decreased by more than 200px (typical keyboard height)
        if (heightDiff > 200) {
            keyboardViolationCount++;
            const remaining = 3 - keyboardViolationCount;

            if (keyboardViolationCount >= 3) {
                showDesktopWarning('⛔ On-screen keyboard detected 3 times! Quiz terminated.', true);
                setTimeout(() => {
                    resetQuiz();
                    if (onViolationLimit) onViolationLimit();
                    window.location.reload();
                }, 2000);
            } else {
                showDesktopWarning(`⚠️ On-screen keyboard detected! ${remaining} attempt(s) remaining.`);
            }
        }

        lastHeight = currentHeight;
    };

    window.addEventListener('resize', checkKeyboard);
};

// Detect multiple monitors
const detectMultipleMonitors = () => {
    if (window.screen.isExtended !== undefined) {
        if (window.screen.isExtended) {
            showDesktopWarning('⚠️ Multiple monitors detected! Please use single monitor for the quiz.');
        }
    }

    // Alternative detection using screen position
    if (window.screenX < 0 || window.screenY < 0) {
        showDesktopWarning('⚠️ Window is on secondary monitor! Please move to primary monitor.');
    }
};

// Detect virtual machines (limited)
const detectVirtualMachine = () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();

            if (renderer.includes('vmware') ||
                renderer.includes('virtualbox') ||
                renderer.includes('virtual') ||
                renderer.includes('llvmpipe')) {
                showDesktopWarning('⚠️ Virtual machine detected! Please use physical machine for the quiz.');
            }
        }
    }
};

// Detect screen sharing
const detectScreenSharing = () => {
    // Check if getDisplayMedia was called (screen sharing)
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
        const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia;

        navigator.mediaDevices.getDisplayMedia = function (...args) {
            showDesktopWarning('⚠️ Screen sharing detected! Please disable screen sharing.');
            return originalGetDisplayMedia.apply(this, args);
        };
    }
};

// Detect remote desktop connections
const detectRemoteDesktop = () => {
    // Check for RDP indicators
    const checkRDP = () => {
        // Check for common RDP user agent strings
        const ua = navigator.userAgent.toLowerCase();
        if (ua.includes('remote') || ua.includes('rdp')) {
            showDesktopWarning('⚠️ Remote desktop connection detected!');
        }

        // Check color depth (RDP often uses lower color depth)
        if (screen.colorDepth < 24) {
            showDesktopWarning('⚠️ Low color depth detected - possible remote connection!');
        }
    };

    checkRDP();
};

// Detect rapid window focus changes
const detectFocusStealing = () => {
    let focusChangeCount = 0;
    let lastFocusChange = Date.now();

    const handleFocusChange = () => {
        const now = Date.now();
        const timeDiff = now - lastFocusChange;

        if (timeDiff < 1000) { // Less than 1 second
            focusChangeCount++;
            if (focusChangeCount > 5) {
                showDesktopWarning('⚠️ Rapid window switching detected!');
                focusChangeCount = 0;
            }
        } else {
            focusChangeCount = 0;
        }

        lastFocusChange = now;
    };

    window.addEventListener('blur', handleFocusChange);
    window.addEventListener('focus', handleFocusChange);
};

// Initialize all desktop security features
export const initDesktopSecurity = (onViolationLimit) => {
    console.log('🔒 Initializing desktop security features...');

    enforceFullscreen(onViolationLimit);
    detectWindowResize();
    detectOnScreenKeyboard(onViolationLimit);
    detectMultipleMonitors();
    detectVirtualMachine();
    detectScreenSharing();
    detectRemoteDesktop();
    detectFocusStealing();

    console.log('✅ Desktop security features activated');
};

// Get keyboard violation count
export const getKeyboardViolationCount = () => keyboardViolationCount;

// Reset violations
export const resetDesktopViolations = () => {
    keyboardViolationCount = 0;
    fullscreenExitCount = 0;
};
