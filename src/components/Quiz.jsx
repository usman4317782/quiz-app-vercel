import { useState, useEffect, useCallback } from 'react';
import { saveAnswer, getAnswers, saveProgress } from '../utils/storage';
import { shuffleArray } from '../utils/helpers';
import '../App.css';

const Quiz = ({ questions, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [shuffledOptions, setShuffledOptions] = useState({});
    const [timeLeft, setTimeLeft] = useState(50);

    // Load saved answers on mount
    useEffect(() => {
        const savedAnswers = getAnswers();
        setAnswers(savedAnswers);

        // Shuffle options for all questions
        const optionsMap = {};
        questions.forEach(q => {
            optionsMap[q.id] = shuffleArray(q.options);
        });
        setShuffledOptions(optionsMap);
    }, [questions]);

    // Save progress whenever current index changes
    useEffect(() => {
        saveProgress(currentIndex);
        setTimeLeft(50); // Reset timer on question change
    }, [currentIndex]);

    const currentQuestion = questions[currentIndex];
    const currentOptions = shuffledOptions[currentQuestion?.id] || currentQuestion?.options || [];

    const handleAnswer = (option) => {
        const newAnswers = { ...answers, [currentQuestion.id]: option };
        setAnswers(newAnswers);
        saveAnswer(currentQuestion.id, option);
    };

    const goToNext = useCallback(() => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // If it's the last question, we need to handle submission differently
            // But for now, let's just let the user click submit manually or auto-submit?
            // The user said "once submitted just move to next". 
            // If time runs out on last question, maybe just stop or auto-submit?
            // Let's auto-submit if time runs out on last question.
            onComplete(answers); // This might be risky if answers is stale, but answers is a ref dependency?
            // Actually, onComplete needs the latest answers. 
            // Let's just handle next question for now.
        }
    }, [currentIndex, questions.length, answers, onComplete]);

    // Timer logic
    useEffect(() => {
        if (timeLeft === 0) {
            // Time's up! Move to next question automatically
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                // Last question time up - auto submit?
                // Let's just do nothing or maybe alert? 
                // "maximum allow 50 seconds to attemp each quiz"
                // Let's auto-submit to be safe/strict.
                onComplete(answers);
            }
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, currentIndex, questions.length, onComplete, answers]);


    const handleNext = () => {
        // Check if current question is answered
        if (!answers[currentQuestion.id]) {
            // Add shake animation to options container
            const optionsContainer = document.querySelector('.options-container');
            const questionContainer = document.querySelector('.question-container');

            // Add shake class
            optionsContainer?.classList.add('shake-animation');
            questionContainer?.classList.add('highlight-required');

            // Show interactive message
            const message = document.createElement('div');
            message.className = 'answer-required-message';
            message.innerHTML = '⚠️ Please select an answer to continue';

            const quizCard = document.querySelector('.quiz-card');
            quizCard?.appendChild(message);

            // Remove after 3 seconds
            setTimeout(() => {
                optionsContainer?.classList.remove('shake-animation');
                questionContainer?.classList.remove('highlight-required');
                message.remove();
            }, 3000);

            return;
        }

        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleSubmit = () => {
        const unanswered = questions.length - Object.keys(answers).length;

        if (unanswered > 0) {
            const confirmSubmit = window.confirm(
                `You have ${unanswered} unanswered question(s). Do you want to submit anyway?`
            );
            if (!confirmSubmit) return;
        }

        onComplete(answers);
    };

    if (!currentQuestion) {
        return <div className="screen-container">Loading...</div>;
    }

    const progress = ((currentIndex + 1) / questions.length) * 100;
    const isLastQuestion = currentIndex === questions.length - 1;

    // Timer color warning
    const getTimerColor = () => {
        if (timeLeft > 20) return '#10b981'; // Green
        if (timeLeft > 10) return '#f59e0b'; // Orange
        return '#ef4444'; // Red
    };

    return (
        <div className="screen-container">
            <div className="card quiz-card">
                {/* Header with Progress and Timer */}
                <div className="quiz-header">
                    <div className="progress-container" style={{ flex: 1, marginBottom: 0 }}>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="progress-text">
                            Question {currentIndex + 1} of {questions.length}
                        </div>
                    </div>

                    <div className="timer-container" style={{
                        marginLeft: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        color: getTimerColor(),
                        fontSize: '1.2rem',
                        border: `2px solid ${getTimerColor()}`,
                        padding: '5px 15px',
                        borderRadius: '20px'
                    }}>
                        ⏱️ {timeLeft}s
                    </div>
                </div>

                <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />

                {/* Question */}
                <div className="question-container">
                    <h2 className="question-number">Question {currentIndex + 1}</h2>
                    <p className="question-text">{currentQuestion.question}</p>
                </div>

                {/* Options */}
                <div className="options-container">
                    {currentOptions.map((option, index) => (
                        <button
                            key={index}
                            className={`option-btn ${answers[currentQuestion.id] === option ? 'selected' : ''}`}
                            onClick={() => handleAnswer(option)}
                        >
                            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                            <span className="option-text">{option}</span>
                        </button>
                    ))}
                </div>

                {/* Navigation */}
                <div className="navigation-container" style={{ justifyContent: 'flex-end' }}>
                    <div className="answered-count" style={{ marginRight: 'auto' }}>
                        Answered: {Object.keys(answers).length} / {questions.length}
                    </div>

                    {isLastQuestion ? (
                        <button
                            className="btn btn-success"
                            onClick={handleSubmit}
                        >
                            Submit Quiz
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={handleNext}
                        >
                            Next →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
