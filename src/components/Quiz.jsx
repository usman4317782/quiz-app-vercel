import { useState, useEffect, useCallback } from 'react';
import { saveAnswer, getAnswers, saveProgress } from '../utils/storage';
import { shuffleArray } from '../utils/helpers';
import '../App.css';
import '../StudentStyles.css';

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

    // Timer logic
    useEffect(() => {
        if (timeLeft === 0) {
            // Time's up! Move to next question automatically
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                // Last question time up - auto submit
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

    // Timer color based on time remaining
    const getTimerColor = () => {
        if (timeLeft > 20) return '#10b981'; // Green
        if (timeLeft > 10) return '#f59e0b'; // Orange
        return '#ef4444'; // Red
    };

    return (
        <div className="screen-container">
            <div className="card quiz-card">
                {/* Header with Progress and Digital Clock Timer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                    <div className="progress-container" style={{ flex: 1 }}>
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

                    {/* Attractive Digital Clock Timer */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                            padding: '8px 18px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2), inset 0 -2px 5px rgba(0, 0, 0, 0.3)',
                            border: '2px solid #475569',
                            minWidth: '90px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontFamily: "'Courier New', 'Consolas', monospace",
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                color: getTimerColor(),
                                textShadow: `0 0 10px ${getTimerColor()}, 0 0 20px ${getTimerColor()}`,
                                letterSpacing: '4px'
                            }}>
                                {String(timeLeft).padStart(2, '0')}
                            </div>
                        </div>
                        <div style={{
                            fontSize: '0.65rem',
                            color: '#64748b',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Seconds
                        </div>
                    </div>
                </div>

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

                {/* Navigation - No Previous button, forward only */}
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
