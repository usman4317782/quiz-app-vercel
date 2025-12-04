import '../App.css';

const Review = ({ wrongQuestions, onBack }) => {
    return (
        <div className="screen-container">
            <div className="card review-card">
                <h1 className="title">Review Wrong Answers</h1>
                <p className="subtitle">
                    You got {wrongQuestions.length} question{wrongQuestions.length !== 1 ? 's' : ''} wrong
                </p>

                <div className="review-list">
                    {wrongQuestions.map((question, index) => (
                        <div key={question.id} className="review-item">
                            <div className="review-header">
                                <span className="review-number">Question {index + 1}</span>
                            </div>

                            <div className="review-question">
                                <p><strong>Q:</strong> {question.question}</p>
                            </div>

                            <div className="review-answers">
                                <div className="answer-row wrong-answer">
                                    <span className="answer-label">Your Answer:</span>
                                    <span className="answer-value">
                                        ❌ {question.userAnswer || 'Not answered'}
                                    </span>
                                </div>

                                <div className="answer-row correct-answer">
                                    <span className="answer-label">Correct Answer:</span>
                                    <span className="answer-value">
                                        ✅ {question.correctAnswer}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="btn btn-primary btn-large" onClick={onBack}>
                    Back to Results
                </button>
            </div>
        </div>
    );
};

export default Review;
