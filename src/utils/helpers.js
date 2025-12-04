// Fisher-Yates shuffle algorithm
export const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

// Calculate quiz results
export const calculateScore = (answers, questions) => {
    let correct = 0;
    let wrong = 0;
    const wrongQuestions = [];

    questions.forEach((question) => {
        const userAnswer = answers[question.id];
        if (userAnswer === question.correctAnswer) {
            correct++;
        } else if (userAnswer) {
            wrong++;
            wrongQuestions.push({
                ...question,
                userAnswer
            });
        }
    });

    const total = questions.length;
    const percentage = Math.round((correct / total) * 100);

    return {
        correct,
        wrong,
        unanswered: total - correct - wrong,
        total,
        percentage,
        wrongQuestions
    };
};

// Determine PASS/FAIL status (≥60% = PASS)
export const getPassStatus = (percentage) => {
    return percentage >= 60 ? 'PASS' : 'FAIL';
};
