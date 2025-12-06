// Static Admin QR Code Configuration
// This is the master verification code that admin shows to students

export const ADMIN_STATIC_QR_CODE = "QUIZ_ADMIN_MASTER_2024_VERIFICATION_KEY";

/**
 * Verify if scanned QR matches the admin's static code
 * @param {string} scannedData 
 * @returns {boolean}
 */
export const verifyStaticAdminQR = (scannedData) => {
    return scannedData === ADMIN_STATIC_QR_CODE;
};

/**
 * Generate student QR data (simple version)
 * @param {object} studentInfo 
 * @returns {string}
 */
export const generateStudentQRData = (studentInfo) => {
    return JSON.stringify({
        type: 'student',
        ...studentInfo,
        timestamp: Date.now()
    });
};

/**
 * Parse QR data
 * @param {string} qrData 
 * @returns {object|null}
 */
export const parseQRData = (qrData) => {
    try {
        return JSON.parse(qrData);
    } catch {
        // If not JSON, return as plain string (for admin static code)
        return qrData;
    }
};
