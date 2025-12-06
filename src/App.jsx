import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Review from './components/Review';
import questionBank from './data/questions';
import { shuffleArray, calculateScore } from './utils/helpers';
import { resetQuiz, saveResult, getResult, saveShuffledQuestions, getShuffledQuestions } from './utils/storage';
import { initSecurityFeatures } from './utils/security';
import './App.css';

function App() {
    const navigate = useNavigate();
    const [screen, setScreen] = useState('quiz'); // Only manages quiz flow now
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [result, setResult] = useState(null);

    // Initialize security features on mount
    useEffect(() => {
        const cleanup = initSecurityFeatures(() => {
            // This callback is called when violation limit is reached
            // The security module will handle the reset and reload
        });

        return cleanup;
    }, []);

    // Load or shuffle questions when component mounts
    useEffect(() => {
        const existingQuestions = getShuffledQuestions();
        if (existingQuestions && existingQuestions.length > 0) {
            setShuffledQuestions(existingQuestions);
        } else {
            const shuffled = shuffleArray(questionBank);
            setShuffledQuestions(shuffled);
            saveShuffledQuestions(shuffled);
        }
    }, []);

    // Handle quiz completion
    const handleComplete = (answers) => {
        // Use shuffled questions for score calculation
        const quizResult = calculateScore(answers, shuffledQuestions);
        setResult(quizResult);
        saveResult(quizResult);
        setScreen('result');
    };

    // Handle review wrong answers
    const handleReviewWrong = () => {
        setScreen('review');
    };

    // Handle back to results
    const handleBackToResults = () => {
        setScreen('result');
    };

    // Handle restart quiz
    const handleRestart = () => {
        resetQuiz();
        navigate('/');
        window.location.reload(); // Force full reload to start from beginning
    };

    return (
        <div className="app">
            {screen === 'quiz' && shuffledQuestions.length > 0 && (
                <Quiz
                    questions={shuffledQuestions}
                    onComplete={handleComplete}
                />
            )}

            {screen === 'result' && result && (
                <Result
                    result={result}
                    onReviewWrong={handleReviewWrong}
                    onRestart={handleRestart}
                />
            )}

            {screen === 'review' && result && (
                <Review
                    wrongQuestions={result.wrongQuestions}
                    onBack={handleBackToResults}
                />
            )}
        </div>
    );
}

export default App;
