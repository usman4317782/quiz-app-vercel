// Mobile-specific security detection
import { incrementViolation, resetQuiz } from './storage';
import { getBrowserInfo, getOSInfo } from './deviceDetection';

let keyboardViolationCount = 0;
let initialViewportHeight = window.innerHeight;
let initialVisualViewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
let isKeyboardOpen = false;

// Show warning message
const showMobileWarning = (message, isTerminal = false) => {
    const existingWarning = document.getElementById('mobile-security-warning');
    if (existingWarning) {
        existingWarning.remove();
    }

    const warning = document.createElement('div');
    warning.id = 'mobile-security-warning';
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
        font-size: 14px;
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

// Detect virtual keyboard (mobile)
const detectVirtualKeyboard = (onViolationLimit) => {
    if (!window.visualViewport) {
        // Fallback for browsers without visualViewport API
        window.addEventListener('resize', () => {
            const currentHeight = window.innerHeight;
            const heightDifference = initialViewportHeight - currentHeight;

            // If viewport shrunk by more than 150px, likely keyboard
            if (heightDifference > 150 && !isKeyboardOpen) {
                isKeyboardOpen = true;
                keyboardViolationCount++;
                const remaining = 3 - keyboardViolationCount;

                if (keyboardViolationCount >= 3) {
                    showMobileWarning('⛔ Virtual keyboard detected 3 times! Quiz terminated.', true);
                    setTimeout(() => {
                        resetQuiz();
                        if (onViolationLimit) onViolationLimit();
                        window.location.reload();
                    }, 2000);
                } else {
                    showMobileWarning(`⚠️ Virtual keyboard detected! ${remaining} attempt(s) remaining before quiz termination.`);
                }
            } else if (heightDifference < 50 && isKeyboardOpen) {
                isKeyboardOpen = false;
            }
        });
        return;
    }

    // Use visualViewport API (more accurate)
    const handleViewportResize = () => {
        const currentVisualHeight = window.visualViewport.height;
        const heightDifference = initialVisualViewportHeight - currentVisualHeight;

        // If visual viewport shrunk by more than 150px, keyboard is likely open
        if (heightDifference > 150 && !isKeyboardOpen) {
            isKeyboardOpen = true;
            keyboardViolationCount++;
            const remaining = 3 - keyboardViolationCount;

            if (keyboardViolationCount >= 3) {
                showMobileWarning('⛔ Virtual keyboard detected 3 times! Quiz terminated.', true);
                setTimeout(() => {
                    resetQuiz();
                    if (onViolationLimit) onViolationLimit();
                    window.location.reload();
                }, 2000);
            } else {
                showMobileWarning(`⚠️ Virtual keyboard detected! ${remaining} attempt(s) remaining before quiz termination.`);
            }
        } else if (heightDifference < 50 && isKeyboardOpen) {
            isKeyboardOpen = false;
        }
    };

    window.visualViewport.addEventListener('resize', handleViewportResize);
};

// Detect screen split mode
const detectScreenSplit = () => {
    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;

    const checkSplit = () => {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        const screen = window.screen;

        // Check if window is significantly smaller than screen (possible split screen)
        const widthRatio = currentWidth / screen.width;
        const heightRatio = currentHeight / screen.height;

        if (widthRatio < 0.7 || heightRatio < 0.7) {
            showMobileWarning('⚠️ Split-screen mode detected! Please use full screen for the quiz.');
        }

        lastWidth = currentWidth;
        lastHeight = currentHeight;
    };

    window.addEventListener('resize', checkSplit);
    // Check on load
    setTimeout(checkSplit, 1000);
};

// Detect Picture-in-Picture mode
const detectPictureInPicture = () => {
    if (!document.pictureInPictureEnabled) return;

    document.addEventListener('enterpictureinpicture', () => {
        showMobileWarning('⚠️ Picture-in-Picture mode is not allowed during the quiz!');
    });
};

// Detect orientation changes (suspicious if frequent)
const detectOrientationChanges = () => {
    let orientationChangeCount = 0;
    const resetInterval = 60000; // Reset count every minute

    const handleOrientationChange = () => {
        orientationChangeCount++;

        if (orientationChangeCount > 3) {
            showMobileWarning('⚠️ Excessive orientation changes detected! Please keep your device stable.');
        }
    };

    if (screen.orientation) {
        screen.orientation.addEventListener('change', handleOrientationChange);
    } else {
        window.addEventListener('orientationchange', handleOrientationChange);
    }

    // Reset counter periodically
    setInterval(() => {
        orientationChangeCount = 0;
    }, resetInterval);
};

// Detect unusual touch patterns (possible automation)
const detectTouchAnomalies = () => {
    let rapidTouchCount = 0;
    let lastTouchTime = 0;

    const handleTouch = (e) => {
        const currentTime = Date.now();
        const timeDiff = currentTime - lastTouchTime;

        // Detect very rapid touches (< 50ms apart, might be automation)
        if (timeDiff < 50 && timeDiff > 0) {
            rapidTouchCount++;
            if (rapidTouchCount > 10) {
                showMobileWarning('⚠️ Unusual touch pattern detected!');
                rapidTouchCount = 0;
            }
        }

        lastTouchTime = currentTime;
    };

    document.addEventListener('touchstart', handleTouch);
};

// Detect screen recording (Android only, limited support)
const detectScreenRecording = () => {
    // This is very limited and may not work on all devices
    const browser = getBrowserInfo();
    const os = getOSInfo();

    if (os === 'Android') {
        // Check for media capture via permissions API
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'camera' }).then((permissionStatus) => {
                permissionStatus.onchange = () => {
                    if (permissionStatus.state === 'granted') {
                        showMobileWarning('⚠️ Camera/screen recording may be active!');
                    }
                };
            }).catch(() => {
                // Permission API not supported
            });
        }
    }
};

// Initialize all mobile security features
export const initMobileSecurity = (onViolationLimit) => {
    console.log('🔒 Initializing mobile security features...');

    detectVirtualKeyboard(onViolationLimit);
    detectScreenSplit();
    detectPictureInPicture();
    detectOrientationChanges();
    detectTouchAnomalies();
    detectScreenRecording();

    console.log('✅ Mobile security features activated');
};

// Get current keyboard violation count
export const getKeyboardViolationCount = () => keyboardViolationCount;

// Reset keyboard violation count
export const resetKeyboardViolations = () => {
    keyboardViolationCount = 0;
    isKeyboardOpen = false;
};
