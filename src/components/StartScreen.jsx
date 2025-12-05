import { useEffect, useState } from 'react';
import '../App.css';
import '../StudentStyles.css';

const StartScreen = ({ onStart }) => {
    const [studentInfo, setStudentInfo] = useState({
        fullName: '',
        rollNumber: '',
        discipline: '',
        subject: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Show instructions about security features
        const hasSeenInstructions = sessionStorage.getItem('seen_instructions');

        if (!hasSeenInstructions) {
            alert(
                '⚠️ IMPORTANT QUIZ INSTRUCTIONS:\n\n' +
                '1. This quiz contains multiple-choice questions\n' +
                '2. You need 60% or higher to pass\n' +
                '3. Each question has 50 seconds time limit\n' +
                // '4. SECURITY FEATURES ENABLED:\n' +
                // '   • Screenshots are disabled\n' +
                // '   • Right-click is disabled\n' +
                // '   • Copy/paste is disabled\n' +
                // '   • Tab switching is limited to 3 times\n' +
                // '   • Developer tools are blocked\n\n' +
                // '5. If you switch tabs 3 times, your quiz will reset automatically\n' +
                '4. Stay focused and complete the quiz in one session\n\n' +
                'Good luck!'
            );
            sessionStorage.setItem('seen_instructions', 'true');
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentInfo(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!studentInfo.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!studentInfo.rollNumber.trim()) {
            newErrors.rollNumber = 'Roll number is required';
        }

        if (!studentInfo.discipline.trim()) {
            newErrors.discipline = 'Discipline is required';
        }

        if (!studentInfo.subject.trim()) {
            newErrors.subject = 'Subject name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Save student info to localStorage
            localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
            onStart();
        }
    };

    return (
        <div className="screen-container">
            <div className="card start-card">
                <div className="quiz-icon">📝</div>
                <h1 className="title">Secure Quiz Application</h1>
                <p className="subtitle">Test Your Knowledge</p>

                <div className="instructions" style={{ marginTop: '30px' }}>
                    <h3>Instructions:</h3>
                    <ul>
                        <li>This quiz contains <strong>multiple-choice questions</strong></li>
                        <li>Each question has <strong>50 seconds</strong> time limit</li>
                        <li>You need <strong>≥60% to pass</strong></li>
                        <li>No going back to previous questions</li>
                    </ul>

                    <div className="security-notice">
                        {/* <h4>🔒 Security Features Active:</h4>
                        <ul>
                            <li>Screenshots disabled</li>
                            <li>Right-click disabled</li>
                            <li>Tab switching limited (3 max)</li>
                        </ul> */}
                        <p className="warning-text">
                            ⚠️ Switching tabs more than 3 times will reset your quiz!
                        </p>
                    </div>
                </div>
                {/* Student Information Form */}
                <form onSubmit={handleSubmit} className="student-form">
                    <h3 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>Student Information</h3>

                    <div className="form-group">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={studentInfo.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className={errors.fullName ? 'error' : ''}
                        />
                        {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="rollNumber">Roll Number *</label>
                        <input
                            type="text"
                            id="rollNumber"
                            name="rollNumber"
                            value={studentInfo.rollNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your roll number"
                            className={errors.rollNumber ? 'error' : ''}
                        />
                        {errors.rollNumber && <span className="error-text">{errors.rollNumber}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="discipline">Discipline *</label>
                        <select
                            id="discipline"
                            name="discipline"
                            value={studentInfo.discipline}
                            onChange={handleInputChange}
                            className={errors.discipline ? 'error' : ''}
                        >
                            <option value="">Select your discipline</option>
                            <option value="CS">Computer Science (CS)</option>
                            <option value="ITM">Information Technology Management (ITM)</option>
                            <option value="SE">Software Engineering (SE)</option>
                            <option value="AI">Artificial Intelligence (AI)</option>
                            <option value="DS">Data Science (DS)</option>
                            <option value="CE">Computer Engineering (CE)</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.discipline && <span className="error-text">{errors.discipline}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject Name *</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={studentInfo.subject}
                            onChange={handleInputChange}
                            placeholder="Enter subject name (e.g., Web Development)"
                            className={errors.subject ? 'error' : ''}
                        />
                        {errors.subject && <span className="error-text">{errors.subject}</span>}
                    </div>

                    <button type="submit" className="btn btn-primary btn-large">
                        Start Quiz
                    </button>
                </form>


            </div>
        </div>
    );
};

export default StartScreen;
