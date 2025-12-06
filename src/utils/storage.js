// LocalStorage keys
const STORAGE_KEYS = {
    ANSWERS: 'quiz_answers',
    PROGRESS: 'quiz_progress',
    RESULT: 'quiz_result',
    VIOLATIONS: 'quiz_violations',
    SHUFFLED_QUESTIONS: 'quiz_shuffled_questions'
};

// Save user answer
export const saveAnswer = (questionId, answer) => {
    const answers = getAnswers();
    answers[questionId] = answer;
    localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(answers));
};

// Get all saved answers
export const getAnswers = () => {
    const answers = localStorage.getItem(STORAGE_KEYS.ANSWERS);
    return answers ? JSON.parse(answers) : {};
};

// Save quiz progress (current question index)
export const saveProgress = (currentQuestion) => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, currentQuestion.toString());
};

// Get current progress
export const getProgress = () => {
    const progress = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return progress ? parseInt(progress, 10) : 0;
};

// Save quiz result
export const saveResult = (result) => {
    localStorage.setItem(STORAGE_KEYS.RESULT, JSON.stringify(result));
};

// Get saved result
export const getResult = () => {
    const result = localStorage.getItem(STORAGE_KEYS.RESULT);
    return result ? JSON.parse(result) : null;
};

// Increment violation count
export const incrementViolation = () => {
    const violations = getViolations();
    const newCount = violations + 1;
    localStorage.setItem(STORAGE_KEYS.VIOLATIONS, newCount.toString());
    return newCount;
};

// Get violation count
export const getViolations = () => {
    const violations = localStorage.getItem(STORAGE_KEYS.VIOLATIONS);
    return violations ? parseInt(violations, 10) : 0;
};

// Save shuffled questions order
export const saveShuffledQuestions = (questions) => {
    localStorage.setItem(STORAGE_KEYS.SHUFFLED_QUESTIONS, JSON.stringify(questions));
};

// Get shuffled questions
export const getShuffledQuestions = () => {
    const questions = localStorage.getItem(STORAGE_KEYS.SHUFFLED_QUESTIONS);
    return questions ? JSON.parse(questions) : null;
};

// Reset all quiz data
export const resetQuiz = () => {
    Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
    });
};

// ========================================
// QR Authentication Storage Functions
// ========================================

/**
 * Save session key (student side)
 * @param {string} key - Session key from admin QR
 */
export const saveSessionKey = (key) => {
    localStorage.setItem('qr_sessionKey', key);
};

/**
 * Get session key (student side)
 * @returns {string|null}
 */
export const getSessionKey = () => {
    return localStorage.getItem('qr_sessionKey');
};

/**
 * Clear session key
 */
export const clearSessionKey = () => {
    localStorage.removeItem('qr_sessionKey');
    localStorage.removeItem('qr_verificationData');
};

/**
 * Save admin session (admin side - mobile)
 * @param {string} sessionKey 
 * @param {number} timestamp 
 */
export const saveAdminSession = (sessionKey, timestamp) => {
    const session = {
        sessionKey,
        timestamp,
        createdAt: new Date(timestamp).toISOString()
    };
    localStorage.setItem('admin_session', JSON.stringify(session));
    localStorage.setItem('admin_verifiedStudents', JSON.stringify([]));
};

/**
 * Get admin session
 * @returns {object|null}
 */
export const getAdminSession = () => {
    const session = localStorage.getItem('admin_session');
    return session ? JSON.parse(session) : null;
};

/**
 * Add verified student to list (admin side)
 * @param {object} studentInfo 
 */
export const addVerifiedStudent = (studentInfo) => {
    const students = getVerifiedStudents();
    students.push({
        ...studentInfo,
        verifiedAt: new Date().toISOString()
    });
    localStorage.setItem('admin_verifiedStudents', JSON.stringify(students));
};

/**
 * Get list of verified students
 * @returns {Array}
 */
export const getVerifiedStudents = () => {
    const students = localStorage.getItem('admin_verifiedStudents');
    return students ? JSON.parse(students) : [];
};

/**
 * Clear admin session and verified students
 */
export const clearAdminSession = () => {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_verifiedStudents');
};

/**
 * Save student verification data (student side)
 * Used to regenerate QR and validate PIN
 * @param {string} sessionKey 
 * @param {object} studentInfo 
 * @param {number} timestamp 
 */
export const saveVerificationData = (sessionKey, studentInfo, timestamp) => {
    const data = {
        sessionKey,
        studentInfo,
        timestamp
    };
    localStorage.setItem('qr_verificationData', JSON.stringify(data));
};

/**
 * Get verification data (student side)
 * @returns {object|null}
 */
export const getVerificationData = () => {
    const data = localStorage.getItem('qr_verificationData');
    return data ? JSON.parse(data) : null;
};

/**
 * Clear verification data
 */
export const clearVerificationData = () => {
    localStorage.removeItem('qr_verificationData');
};
