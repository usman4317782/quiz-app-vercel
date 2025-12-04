// Device detection utilities
// Detects device type and browser capabilities

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isTablet = () => {
    return /iPad|Android/i.test(navigator.userAgent) && !window.MSStream;
};

export const isDesktop = () => {
    return !isMobile() && !isTablet();
};

export const getBrowserInfo = () => {
    const ua = navigator.userAgent;
    let browser = 'Unknown';
    
    if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
    else if (ua.indexOf('SamsungBrowser') > -1) browser = 'Samsung Internet';
    else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) browser = 'Opera';
    else if (ua.indexOf('Trident') > -1) browser = 'IE';
    else if (ua.indexOf('Edge') > -1) browser = 'Edge';
    else if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
    else if (ua.indexOf('Safari') > -1) browser = 'Safari';
    
    return browser;
};

export const getOSInfo = () => {
    const ua = navigator.userAgent;
    
    if (/Windows/i.test(ua)) return 'Windows';
    if (/Mac/i.test(ua)) return 'MacOS';
    if (/Linux/i.test(ua)) return 'Linux';
    if (/Android/i.test(ua)) return 'Android';
    if (/iOS|iPhone|iPad|iPod/i.test(ua)) return 'iOS';
    
    return 'Unknown';
};

// Check if specific APIs are supported
export const checkAPISupport = () => {
    return {
        fullscreen: !!(document.fullscreenEnabled || 
                      document.webkitFullscreenEnabled || 
                      document.mozFullScreenEnabled || 
                      document.msFullscreenEnabled),
        visualViewport: 'visualViewport' in window,
        intersectionObserver: 'IntersectionObserver' in window,
        resizeObserver: 'ResizeObserver' in window,
        clipboard: !!navigator.clipboard,
        mediaDevices: !!navigator.mediaDevices,
        screen: !!window.screen,
        pictureInPicture: 'pictureInPictureEnabled' in document
    };
};

export const getDeviceCapabilities = () => {
    const apis = checkAPISupport();
    
    return {
        mobile: isMobile(),
        tablet: isTablet(),
        desktop: isDesktop(),
        browser: getBrowserInfo(),
        os: getOSInfo(),
        apis,
        touchEnabled: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        screenOrientation: screen.orientation ? screen.orientation.type : 'unknown'
    };
};
