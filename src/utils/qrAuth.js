// QR Code Authentication Utilities
// Provides cryptographic functions for secure QR generation and verification

// Secret salt for integrity hashing (same across all devices)
const SECRET_SALT = "QUIZ_APP_2024_SECURE_SALT_V1";

/**
 * Generate a unique session key (UUID v4)
 * @returns {string} UUID session key
 */
export const generateSessionKey = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

/**
 * Generate admin QR data
 * @param {string} sessionKey - The session UUID
 * @returns {string} JSON string for QR code
 */
export const generateAdminQRData = (sessionKey) => {
    const data = {
        type: 'admin',
        sessionKey: sessionKey,
        timestamp: Date.now()
    };
    return JSON.stringify(data);
};

/**
 * Calculate SHA-256 hash (browser compatible)
 * @param {string} message - Message to hash
 * @returns {Promise<string>} Hex hash string
 */
const sha256 = async (message) => {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};

/**
 * Calculate integrity hash for student data
 * @param {string} sessionKey 
 * @param {object} studentInfo 
 * @param {number} timestamp 
 * @returns {Promise<string>} Integrity hash
 */
export const calculateIntegrityHash = async (sessionKey, studentInfo, timestamp) => {
    const dataString = JSON.stringify({
        sessionKey,
        studentInfo,
        timestamp
    });
    const message = dataString + SECRET_SALT;
    return await sha256(message);
};

/**
 * Generate student verification QR data
 * @param {string} sessionKey 
 * @param {object} studentInfo 
 * @returns {Promise<string>} JSON string for QR code
 */
export const generateStudentQRData = async (sessionKey, studentInfo) => {
    const timestamp = Date.now();
    const integrityHash = await calculateIntegrityHash(sessionKey, studentInfo, timestamp);

    const data = {
        type: 'student',
        sessionKey: sessionKey,
        studentInfo: studentInfo,
        timestamp: timestamp,
        integrityHash: integrityHash
    };

    return JSON.stringify(data);
};

/**
 * Generate 4-digit approval PIN
 * @param {string} sessionKey 
 * @param {string} rollNumber 
 * @param {number} timestamp 
 * @returns {Promise<string>} 4-digit PIN
 */
export const generateApprovalPIN = async (sessionKey, rollNumber, timestamp) => {
    const message = sessionKey + rollNumber + timestamp.toString();
    const hash = await sha256(message);
    // Convert first 8 hex chars to number and mod 10000
    const num = parseInt(hash.substring(0, 8), 16) % 10000;
    return num.toString().padStart(4, '0');
};

/**
 * Verify student QR code (called by admin)
 * @param {string} adminSessionKey - Current admin session
 * @param {object} scannedData - Parsed QR data from student
 * @returns {Promise<object>} {valid: boolean, error: string, pin: string}
 */
export const verifyStudentQR = async (adminSessionKey, scannedData) => {
    try {
        // Check if it's student type QR
        if (scannedData.type !== 'student') {
            return { valid: false, error: 'Invalid QR code type' };
        }

        // Check session match
        if (scannedData.sessionKey !== adminSessionKey) {
            return { valid: false, error: 'Session mismatch - QR code is from a different session' };
        }

        // Check if expired (10 minutes)
        if (isQRExpired(scannedData.timestamp, 10)) {
            return { valid: false, error: 'QR code expired - please generate a new one' };
        }

        // Verify integrity hash
        const expectedHash = await calculateIntegrityHash(
            scannedData.sessionKey,
            scannedData.studentInfo,
            scannedData.timestamp
        );

        if (scannedData.integrityHash !== expectedHash) {
            return { valid: false, error: 'Integrity check failed - QR code has been tampered with' };
        }

        // Generate approval PIN
        const pin = await generateApprovalPIN(
            scannedData.sessionKey,
            scannedData.studentInfo.rollNumber,
            scannedData.timestamp
        );

        return {
            valid: true,
            error: null,
            pin: pin,
            studentInfo: scannedData.studentInfo
        };

    } catch (error) {
        return { valid: false, error: 'Invalid QR code format' };
    }
};

/**
 * Check if QR code is expired
 * @param {number} timestamp 
 * @param {number} maxAgeMinutes 
 * @returns {boolean}
 */
export const isQRExpired = (timestamp, maxAgeMinutes = 10) => {
    const now = Date.now();
    const ageMs = now - timestamp;
    const ageMinutes = ageMs / (1000 * 60);
    return ageMinutes > maxAgeMinutes;
};

/**
 * Validate PIN entered by student
 * @param {string} enteredPIN 
 * @param {string} sessionKey 
 * @param {string} rollNumber 
 * @param {number} timestamp 
 * @returns {Promise<boolean>}
 */
export const validatePIN = async (enteredPIN, sessionKey, rollNumber, timestamp) => {
    const expectedPIN = await generateApprovalPIN(sessionKey, rollNumber, timestamp);
    return enteredPIN === expectedPIN;
};

/**
 * Parse QR code data safely
 * @param {string} qrData 
 * @returns {object|null}
 */
export const parseQRData = (qrData) => {
    try {
        return JSON.parse(qrData);
    } catch {
        return null;
    }
};
