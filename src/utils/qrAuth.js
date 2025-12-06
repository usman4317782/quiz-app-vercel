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
 * Check if a specific token has already been used
 * @param {string} token 
 * @returns {boolean}
 */
export const isTokenUsed = (token) => {
    const usedToken = localStorage.getItem('used_quiz_token');
    return usedToken === token;
};

/**
 * Mark a specific token as used
 * @param {string} token 
 */
export const markTokenAsUsed = (token) => {
    localStorage.setItem('used_quiz_token', token);
    localStorage.setItem('token_used_at', Date.now().toString());
};

/**
 * Check if quiz has been completed (to prevent retaking)
 * @returns {boolean}
 */
export const isQuizCompleted = () => {
    return localStorage.getItem('quiz_completed') === 'true';
};

/**
 * Mark quiz as completed
 */
export const markQuizAsCompleted = () => {
    localStorage.setItem('quiz_completed', 'true');
};

// Deprecated - keeping for compatibility
export const isQuizStarted = () => {
    return localStorage.getItem('quiz_started') === 'true';
};

export const markQuizAsStarted = () => {
    localStorage.setItem('quiz_started', 'true');
};

export const resetQuizStarted = () => {
    localStorage.removeItem('quiz_started');
};
