import { getPassStatus } from '../utils/helpers';
import '../App.css';

const Result = ({ result, onReviewWrong, onRestart }) => {
    const passStatus = getPassStatus(result.percentage);
    const isPassed = passStatus === 'PASS';

    return (
        <div className="screen-container">
            <div className="card result-card">
                <div className={`result-icon ${isPassed ? 'pass' : 'fail'}`}>
                    {isPassed ? '🎉' : '📚'}
                </div>

                <h1 className="title">Quiz Completed!</h1>

                <div className={`status-badge ${isPassed ? 'pass' : 'fail'}`}>
                    {passStatus}
                </div>

                <div className="result-stats">
                    <div className="stat-item">
                        <div className="stat-label">Total Questions</div>
                        <div className="stat-value">{result.total}</div>
                    </div>

                    <div className="stat-item correct">
                        <div className="stat-label">Correct</div>
                        <div className="stat-value">{result.correct}</div>
                    </div>

                    <div className="stat-item wrong">
                        <div className="stat-label">Wrong</div>
                        <div className="stat-value">{result.wrong}</div>
                    </div>

                    {result.unanswered > 0 && (
                        <div className="stat-item unanswered">
                            <div className="stat-label">Unanswered</div>
                            <div className="stat-value">{result.unanswered}</div>
                        </div>
                    )}
                </div>

                <div className="percentage-container">
                    <div className="percentage-circle">
                        <svg viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="10"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke={isPassed ? '#10b981' : '#ef4444'}
                                strokeWidth="10"
                                strokeDasharray={`${result.percentage * 2.827} 282.7`}
                                strokeLinecap="round"
                                transform="rotate(-90 50 50)"
                            />
                        </svg>
                        <div className="percentage-text">
                            <span className="percentage-number">{result.percentage}</span>
                            <span className="percentage-symbol">%</span>
                        </div>
                    </div>
                </div>

                <div className="result-message">
                    {isPassed ? (
                        <p>Congratulations! You passed the quiz! 🎊</p>
                    ) : (
                        <p>You need 60% or higher to pass. Keep studying and try again! 💪</p>
                    )}
                </div>

                <div className="button-group">
                    {result.wrongQuestions.length > 0 && (
                        <button className="btn btn-secondary" onClick={onReviewWrong}>
                            Review Wrong Answers
                        </button>
                    )}
                    <button className="btn btn-primary" onClick={onRestart}>
                        Restart Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Result;
