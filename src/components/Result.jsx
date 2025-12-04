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
                    <h1 style={{ color: '#4f46e5', marginBottom: '10px', fontSize: '2rem' }}>Quiz Result Certificate</h1>
                    <p style={{ color: '#6b7280', fontSize: '1rem' }}>Secure Quiz Application</p>
                    <hr style={{ margin: '20px auto', width: '50%', border: 'none', borderTop: '2px solid #e5e7eb' }} />
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
                    </div>
                </div>

                <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px solid var(--border-color)' }} className="no-print" />

                {/* Print-specific result summary */}
                <div className="print-only" style={{ margin: '30px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '15px', fontWeight: '600', fontSize: '1.1rem' }}>Total Marks:</td>
                                <td style={{ padding: '15px', textAlign: 'right', fontSize: '1.1rem' }}>{result.total}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '15px', fontWeight: '600', fontSize: '1.1rem' }}>Obtained Marks:</td>
                                <td style={{ padding: '15px', textAlign: 'right', fontSize: '1.1rem', color: '#10b981' }}>{result.correct}</td>
                            </tr>
                            <tr style={{ borderBottom: '2px solid #4f46e5' }}>
                                <td style={{ padding: '15px', fontWeight: '600', fontSize: '1.1rem' }}>Percentage:</td>
                                <td style={{ padding: '15px', textAlign: 'right', fontSize: '1.1rem' }}>{result.percentage}%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px', fontWeight: 'bold', fontSize: '1.2rem' }}>Status:</td>
                                <td style={{
                                    padding: '15px',
                                    textAlign: 'right',
                                    fontSize: '1.3rem',
                                    fontWeight: 'bold',
                                    color: isPassed ? '#10b981' : '#ef4444'
                                }}>
                                    {passStatus}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ marginTop: '40px', textAlign: 'center', padding: '20px', background: '#f9fafb', borderRadius: '8px' }}>
                        <p style={{ fontSize: '0.95rem', color: '#6b7280', margin: '5px 0' }}>
                            <strong>Printing Date:</strong> {new Date().toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                        <p style={{ fontSize: '0.95rem', color: '#6b7280', margin: '5px 0' }}>
                            <strong>Time:</strong> {new Date().toLocaleTimeString('en-US')}
                        </p>
                    </div>
                </div>

                {/* Screen display - hidden when printing */}
                <div className="no-print">
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
                </div>

                {/* Print Footer */}
                <div className="print-only" style={{
                    marginTop: '60px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e5e7eb',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    color: '#9ca3af'
                }}>
                    <p style={{ margin: '5px 0' }}>This is a computer-generated result. No signature required.</p>
                    <p style={{ margin: '5px 0' }}>© {new Date().getFullYear()} Secure Quiz Application</p>
                </div>
            </div>
        </div>
    );
};

export default Result;
