// Static Admin QR Code Configuration
export const ADMIN_STATIC_QR_CODE = "QUIZ_ADMIN_MASTER_2024_VERIFICATION_KEY";

/**
 * Generate a unique verification code for student session
 * @returns {string} 4-digit verification code
 */
export const generateVerificationCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};

/**
 * Generate student QR data with unique verification code
 * @param {string} verificationCode
 * @returns {string}
 */
export const generateStudentQRData = (verificationCode) => {
    return JSON.stringify({
        type: 'student',
        verificationCode: verificationCode,
        adminKey: ADMIN_STATIC_QR_CODE,
        timestamp: Date.now()
    });
};

/**
 * Verify if scanned QR matches the admin's static code
 * @param {string} scannedData 
 * @returns {object} {valid: boolean, verificationCode: string}
 */
export const verifyStudentQR = (scannedData) => {
    try {
        const data = JSON.parse(scannedData);
        return {
            valid: data.type === 'student' && data.adminKey === ADMIN_STATIC_QR_CODE,
            verificationCode: data.verificationCode || null
        };
    } catch {
        return { valid: false, verificationCode: null };
    }
};
