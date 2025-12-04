import { useEffect } from 'react';
import '../App.css';

const StartScreen = ({ onStart }) => {
    useEffect(() => {
        // Show instructions about security features
        const hasSeenInstructions = sessionStorage.getItem('seen_instructions');

        if (!hasSeenInstructions) {
            alert(
                '⚠️ IMPORTANT QUIZ INSTRUCTIONS:\n\n' +
                '1. This quiz contains 50 multiple-choice questions\n' +
                '2. You need 60% or higher to pass\n' +
                '3. SECURITY FEATURES ENABLED:\n' +
                '   • Screenshots are disabled\n' +
                '   • Right-click is disabled\n' +
                '   • Copy/paste is disabled\n' +
                '   • Tab switching is limited to 3 times\n' +
                '   • Developer tools are blocked\n\n' +
                '4. If you switch tabs 3 times, your quiz will reset automatically\n' +
                '5. Stay focused and complete the quiz in one session\n\n' +
                'Good luck!'
            );
            sessionStorage.setItem('seen_instructions', 'true');
        }
    }, []);

    return (
        <div className="screen-container">
            <div className="card start-card">
                <div className="quiz-icon">📝</div>
                <h1 className="title">Secure Quiz Application</h1>
                <p className="subtitle">Test Your Knowledge</p>

                <div className="instructions">
                    <h3>Instructions:</h3>
                    <ul>
                        <li>This quiz contains <strong>50 multiple-choice questions</strong></li>
                        <li>Each question has <strong>4 options</strong> with only one correct answer</li>
                        <li>You can navigate between questions using Next/Previous buttons</li>
                        <li>Your answers are automatically saved</li>
                        <li>You need <strong>≥60% to pass</strong></li>
                    </ul>

                    <div className="security-notice">
                        <h4>🔒 Security Features Active:</h4>
                        <ul>
                            <li>Screenshots disabled</li>
                            <li>Right-click disabled</li>
                            <li>Copy/paste disabled</li>
                            <li>Tab switching limited (3 max)</li>
                            <li>Developer tools blocked</li>
                        </ul>
                        <p className="warning-text">
                            ⚠️ Switching tabs more than 3 times will reset your quiz!
                        </p>
                    </div>
                </div>

                <button className="btn btn-primary btn-large" onClick={onStart}>
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default StartScreen;
