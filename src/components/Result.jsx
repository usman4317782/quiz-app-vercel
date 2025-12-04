import { getPassStatus } from '../utils/helpers';
import '../App.css';
import '../StudentStyles.css';

const Result = ({ result, onReviewWrong, onRestart }) => {
    const passStatus = getPassStatus(result.percentage);
    const isPassed = passStatus === 'PASS';

    // Get student info from localStorage
    const studentInfo = JSON.parse(localStorage.getItem('studentInfo') || '{}');

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="screen-container">
            <div className="card result-card">
                {/* Print Header - Only visible when printing */}
                <div className="print-only" style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Quiz Result Certificate</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Secure Quiz Application</p>
                </div>

                {/* Student Information Card */}
                <div className="student-info-card">
                    <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Student Information</h3>
                    <div className="student-info-grid">
                        <div className="info-item">
                            <span className="info-label">Name:</span>
                            <span className="info-value">{studentInfo.fullName || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Roll Number:</span>
                            <span className="info-value">{studentInfo.rollNumber || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Discipline:</span>
                            <span className="info-value">{studentInfo.discipline || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Subject:</span>
                            <span className="info-value">{studentInfo.subject || 'N/A'}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Date:</span>
                            <span className="info-value">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Time:</span>
                            <span className="info-value">{new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>
                </div>

                <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px solid var(--border-color)' }} />

                <div className={`result-icon ${isPassed ? 'pass' : 'fail'} no-print`}>
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

                <div className="button-group no-print">
                    <button className="btn btn-secondary" onClick={handlePrint}>
                        🖨️ Print Result
                    </button>
                    {result.wrongQuestions.length > 0 && (
                        <button className="btn btn-secondary" onClick={onReviewWrong}>
                            Review Wrong Answers
                        </button>
                    )}
                    <button className="btn btn-primary" onClick={onRestart}>
                        Restart Quiz
                    </button>
                </div>

                {/* Print Footer */}
                <div className="print-only" style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <p>This is a computer-generated result. No signature required.</p>
                    <p>© {new Date().getFullYear()} Secure Quiz Application</p>
                </div>
            </div>
        </div>
    );
};

export default Result;
