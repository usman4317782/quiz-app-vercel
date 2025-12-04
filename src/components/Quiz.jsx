import { useState, useEffect } from 'react';
import { saveAnswer, getAnswers, saveProgress } from '../utils/storage';
import { shuffleArray } from '../utils/helpers';
import '../App.css';

const Quiz = ({ questions, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [shuffledOptions, setShuffledOptions] = useState({});

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
    }, [currentIndex]);

    const currentQuestion = questions[currentIndex];
    const currentOptions = shuffledOptions[currentQuestion?.id] || currentQuestion?.options || [];

    const handleAnswer = (option) => {
        const newAnswers = { ...answers, [currentQuestion.id]: option };
        setAnswers(newAnswers);
        saveAnswer(currentQuestion.id, option);
    };

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

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
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

    return (
        <div className="screen-container">
            <div className="card quiz-card">
                {/* Progress Bar */}
                <div className="progress-container">
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
                <div className="navigation-container">
                    <button
                        className="btn btn-secondary"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                    >
                        ← Previous
                    </button>

                    <div className="answered-count">
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
