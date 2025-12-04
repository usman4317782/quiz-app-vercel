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
