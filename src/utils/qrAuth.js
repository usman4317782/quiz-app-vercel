/**
 * Generate a unique quiz start token
 * Format: QZ-XXXX-XXXX-YEAR
 * @returns {string}
 */
export const generateQuizToken = () => {
    const part1 = Math.floor(1000 + Math.random() * 9000);
    const part2 = Math.random().toString(36).substring(2, 7).toUpperCase();
    const year = new Date().getFullYear();
    return `QZ-${part1}-${part2}-${year}`;
};

/**
 * Save admin's active token
 * @param {string} token 
 */
export const saveActiveToken = (token) => {
    localStorage.setItem('admin_active_token', token);
    localStorage.setItem('admin_token_created', Date.now().toString());
};

/**
 * Get admin's active token
 * @returns {string|null}
 */
export const getActiveToken = () => {
    return localStorage.getItem('admin_active_token');
};

/**
 * Clear admin's token
 */
export const clearActiveToken = () => {
    localStorage.removeItem('admin_active_token');
    localStorage.removeItem('admin_token_created');
};

/**
 * Verify if student's token matches admin's active token
 * @param {string} studentToken 
 * @returns {boolean}
 */
export const verifyToken = (studentToken) => {
    const activeToken = getActiveToken();
    return studentToken === activeToken;
};

/**
 * Check if quiz has already been started
 * @returns {boolean}
 */
export const isQuizStarted = () => {
    return localStorage.getItem('quiz_started') === 'true';
};

/**
 * Mark quiz as started (prevents restart with same QR)
 */
export const markQuizAsStarted = () => {
    localStorage.setItem('quiz_started', 'true');
};

/**
 * Reset quiz started flag (for testing/admin)
 */
export const resetQuizStarted = () => {
    localStorage.removeItem('quiz_started');
};
