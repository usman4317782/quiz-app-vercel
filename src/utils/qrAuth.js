// Static QR Codes - Same for all students and admin
export const STUDENT_STATIC_QR = "STUDENT_QUIZ_ACCESS_2024";
export const ADMIN_STATIC_QR = "ADMIN_QUIZ_MASTER_2024";

/**
 * Generate a random 4-digit verification code
 * @returns {string}
 */
export const generateVerificationCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};

/**
 * Verify if scanned QR is the valid student QR
 * @param {string} scannedData 
 * @returns {boolean}
 */
export const verifyStudentQR = (scannedData) => {
    return scannedData === STUDENT_STATIC_QR;
};
