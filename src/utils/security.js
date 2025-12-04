import { incrementViolation, getViolations, resetQuiz } from './storage';
import { isMobile, isDesktop, getDeviceCapabilities } from './deviceDetection';
import { initMobileSecurity, getKeyboardViolationCount as getMobileKeyboardViolations } from './mobileDetection';
import { initDesktopSecurity, getKeyboardViolationCount as getDesktopKeyboardViolations } from './desktopSecurity';

let violationWarningShown = false;

// Initialize all security features
export const initSecurityFeatures = (onViolationLimit) => {
    console.log('🔒 Initializing comprehensive security system...');

    // Log device capabilities
    const capabilities = getDeviceCapabilities();
    console.log('📱 Device Info:', capabilities);

    // Initialize core security (all platforms)
    preventScreenshot();
    preventRightClick();
    preventTextSelection();
    detectTabSwitch(onViolationLimit);
    detectDevTools();
    preventKeyboardShortcuts();
    initMouseTracking();
    initIdleDetection();

    // Initialize platform-specific security
    if (isMobile()) {
        console.log('📱 Mobile device detected - activating mobile security');
        initMobileSecurity(onViolationLimit);
    } else if (isDesktop()) {
        console.log('💻 Desktop device detected - activating desktop security');
        initDesktopSecurity(onViolationLimit);
    }

    console.log('✅ Security system fully activated');
};

// Prevent screenshot attempts
const preventScreenshot = () => {
    // Prevent PrintScreen key
    document.addEventListener('keyup', (e) => {
        if (e.key === 'PrintScreen') {
            navigator.clipboard.writeText('');
            showWarning('Screenshots are not allowed during the quiz!');
        }
    });

    // Prevent common screenshot shortcuts
    document.addEventListener('keydown', (e) => {
        // Windows: Win+Shift+S, Win+PrintScreen
        // Mac: Cmd+Shift+3, Cmd+Shift+4, Cmd+Shift+5
        if (
            (e.key === 'PrintScreen') ||
            (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(e.key)) ||
            (e.key === 's' && e.metaKey && e.shiftKey)
        ) {
            e.preventDefault();
            showWarning('Screenshots are not allowed during the quiz!');
            return false;
        }
    });
};

// Prevent right-click context menu
const preventRightClick = () => {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showWarning('Right-click is disabled during the quiz!');
        return false;
    });
};

// Prevent text selection
const preventTextSelection = () => {
    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
        return false;
    });
};

// Prevent keyboard shortcuts
const preventKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
        // Prevent Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+P
        if (e.ctrlKey && ['c', 'u', 's', 'a', 'p'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            showWarning('This action is not allowed during the quiz!');
            return false;
        }

        // Prevent F12 and Ctrl+Shift+I (DevTools)
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
            showWarning('Developer tools are not allowed during the quiz!');
            return false;
        }

        // Prevent Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }

        // Prevent Ctrl+Shift+C (Inspect)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }
    });

    // Prevent copy/paste
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        return false;
    });

    document.addEventListener('paste', (e) => {
        e.preventDefault();
        return false;
    });

    document.addEventListener('cut', (e) => {
        e.preventDefault();
        return false;
    });
};

// Detect tab switching and window blur
const detectTabSwitch = (onViolationLimit) => {
    let isFirstLoad = true;

    const handleVisibilityChange = () => {
        // Skip the first visibility change (initial page load)
        if (isFirstLoad) {
            isFirstLoad = false;
            return;
        }

        if (document.hidden) {
            const violations = incrementViolation();
            const remaining = 3 - violations;

            if (violations >= 3) {
                alert('You have switched tabs 3 times. The quiz will now reset.');
                resetQuiz();
                if (onViolationLimit) {
                    onViolationLimit();
                }
                window.location.reload();
            } else {
                showWarning(`Warning: Tab switching detected! ${remaining} attempt(s) remaining before quiz reset.`);
            }
        }
    };

    const handleBlur = () => {
        if (!isFirstLoad && !violationWarningShown) {
            showWarning('Please stay on this tab during the quiz!');
        }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);

    // Cleanup function
    return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('blur', handleBlur);
    };
};

// Detect DevTools (limited effectiveness)
const detectDevTools = () => {
    const threshold = 160;

    const detectDevToolsOpen = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            showWarning('Developer tools detected! Please close them to continue.');
        }
    };

    // Check periodically
    setInterval(detectDevToolsOpen, 1000);

    // Alternative detection method using console
    let devtools = { open: false };
    const element = new Image();

    Object.defineProperty(element, 'id', {
        get: function () {
            devtools.open = true;
            showWarning('Developer tools detected! Please close them to continue.');
        }
    });

    setInterval(() => {
        devtools.open = false;
        console.log(element);
    }, 1000);
};

// Mouse movement tracking to detect anomalies
const initMouseTracking = () => {
    let mouseMovements = [];
    let lastMouseTime = Date.now();
    let noMovementWarningShown = false;

    const trackMouse = (e) => {
        const now = Date.now();
        mouseMovements.push({
            x: e.clientX,
            y: e.clientY,
            time: now
        });

        // Keep only last 50 movements
        if (mouseMovements.length > 50) {
            mouseMovements.shift();
        }

        lastMouseTime = now;
        noMovementWarningShown = false;
    };

    document.addEventListener('mousemove', trackMouse);

    // Check for suspicious patterns periodically
    setInterval(() => {
        const now = Date.now();
        const timeSinceLastMove = now - lastMouseTime;

        // If no mouse movement for 30 seconds (but user is still active on keyboard)
        if (timeSinceLastMove > 30000 && !noMovementWarningShown) {
            // This could indicate automation or someone else taking the quiz
            noMovementWarningShown = true;
        }

        // Check for perfectly straight lines (bot behavior)
        if (mouseMovements.length >= 10) {
            let straightLineCount = 0;
            for (let i = 2; i < mouseMovements.length; i++) {
                const prev = mouseMovements[i - 1];
                const curr = mouseMovements[i];
                const prevPrev = mouseMovements[i - 2];

                // Check if points are in a straight line
                const dx1 = curr.x - prev.x;
                const dy1 = curr.y - prev.y;
                const dx2 = prev.x - prevPrev.x;
                const dy2 = prev.y - prevPrev.y;

                const angle1 = Math.atan2(dy1, dx1);
                const angle2 = Math.atan2(dy2, dx2);

                if (Math.abs(angle1 - angle2) < 0.01) {
                    straightLineCount++;
                }
            }

            if (straightLineCount > 7) {
                showWarning('⚠️ Unusual mouse pattern detected!');
                mouseMovements = [];
            }
        }
    }, 10000);
};

// Idle detection
const initIdleDetection = () => {
    let lastActivity = Date.now();
    let idleWarningShown = false;

    const resetIdle = () => {
        lastActivity = Date.now();
        idleWarningShown = false;
    };

    // Track various user activities
    document.addEventListener('mousemove', resetIdle);
    document.addEventListener('mousedown', resetIdle);
    document.addEventListener('keypress', resetIdle);
    document.addEventListener('scroll', resetIdle);
    document.addEventListener('touchstart', resetIdle);

    // Check for idle time
    setInterval(() => {
        const now = Date.now();
        const idleTime = now - lastActivity;

        // Warn if idle for more than 2 minutes
        if (idleTime > 120000 && !idleWarningShown) {
            showWarning('⚠️ Are you still there? Please continue with the quiz.');
            idleWarningShown = true;
        }

        // Could implement auto-submit after extended idle time if needed
        // if (idleTime > 300000) { // 5 minutes
        //     // Auto-submit quiz
        // }
    }, 30000); // Check every 30 seconds
};

// Show warning overlay
const showWarning = (message) => {
    violationWarningShown = true;

    // Remove existing warning if any
    const existingWarning = document.getElementById('security-warning');
    if (existingWarning) {
        existingWarning.remove();
    }

    // Create warning overlay
    const warning = document.createElement('div');
    warning.id = 'security-warning';
    warning.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(239, 68, 68, 0.95);
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    z-index: 10000;
    animation: slideDown 0.3s ease-out;
  `;
    warning.textContent = message;
    document.body.appendChild(warning);

    // Remove warning after 3 seconds
    setTimeout(() => {
        warning.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
            warning.remove();
            violationWarningShown = false;
        }, 300);
    }, 3000);
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }
`;
document.head.appendChild(style);
