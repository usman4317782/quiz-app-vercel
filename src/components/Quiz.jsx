import { useState, useEffect, useCallback } from 'react';
import { saveAnswer, getAnswers, saveProgress, getViolations } from '../utils/storage';
import { shuffleArray } from '../utils/helpers';
import { getDeviceCapabilities } from '../utils/deviceDetection';
import '../App.css';
import '../StudentStyles.css';

const Quiz = ({ questions, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [shuffledOptions, setShuffledOptions] = useState({});
    const [timeLeft, setTimeLeft] = useState(50);
    const [violations, setViolations] = useState(0);
    const [deviceInfo, setDeviceInfo] = useState(null);

    // Load saved answers on mount
    useEffect(() => {
        const savedAnswers = getAnswers();
        setAnswers(savedAnswers);

        // Get device capabilities for security display
        const capabilities = getDeviceCapabilities();
        setDeviceInfo(capabilities);

        // Shuffle options for all questions
        const optionsMap = {};
        questions.forEach(q => {
            optionsMap[q.id] = shuffleArray(q.options);
        });
        setShuffledOptions(optionsMap);

        // Monitor violations periodically
        const violationInterval = setInterval(() => {
            const currentViolations = getViolations();
            setViolations(currentViolations);
        }, 1000);

        return () => clearInterval(violationInterval);
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
            {/* Security Status Indicator */}
            <div style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                padding: '12px 20px',
                borderRadius: '12px',
                marginBottom: '15px',
                border: '2px solid #475569',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '1.2rem' }}>🔒</span>
                        <span style={{
                            color: '#10b981',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            Security Active
                        </span>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        fontSize: '0.75rem',
                        color: '#94a3b8'
                    }}>
                        {deviceInfo && (
                            <>
                                <span>📱 {deviceInfo.mobile ? 'Mobile' : deviceInfo.desktop ? 'Desktop' : 'Tablet'}</span>
                                <span>🌐 {deviceInfo.browser}</span>
                            </>
                        )}
                        <span style={{
                            color: violations > 0 ? '#ef4444' : '#10b981',
                            fontWeight: 'bold'
                        }}>
                            ⚠️ Violations: {violations}/3
                        </span>
                    </div>
                </div>

                {/* Security Features Active */}
                <div style={{
                    marginTop: '8px',
                    padding: '8px',
                    background: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    color: '#cbd5e1',
                    lineHeight: '1.6'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        <span>✓ Tab Switch Detection</span>
                        <span>✓ Screenshot Prevention</span>
                        <span>✓ DevTools Detection</span>
                        {deviceInfo?.mobile && (
                            <>
                                <span>✓ Keyboard Detection</span>
                                <span>✓ Screen Split Detection</span>
                            </>
                        )}
                        {deviceInfo?.desktop && (
                            <>
                                <span>✓ Fullscreen Mode</span>
                                <span>✓ Keyboard Detection</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

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
