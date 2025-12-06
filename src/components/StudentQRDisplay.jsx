import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { generateVerificationCode, generateStudentQRData } from '../utils/qrAuth';
import '../App.css';
import '../QRAuth.css';

const StudentQRDisplay = () => {
    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState('');
    const [qrData, setQrData] = useState('');
    const [enteredCode, setEnteredCode] = useState('');
    const [error, setError] = useState('');
    const [showCodeInput, setShowCodeInput] = useState(false);

    useEffect(() => {
        // Generate unique verification code for this session
        const code = generateVerificationCode();
        setVerificationCode(code);

        // Store in localStorage for verification
        localStorage.setItem('verificationCode', code);

        // Generate QR data
        const qrString = generateStudentQRData(code);
        setQrData(qrString);
    }, []);

    const handleCodeSubmit = (e) => {
        e.preventDefault();

        if (enteredCode === verificationCode) {
            // Correct code - start quiz
            localStorage.setItem('adminVerified', 'true');
            navigate('/quiz');
        } else {
            setError('Incorrect verification code. Please ask administrator to scan QR code again.');
            setEnteredCode('');
        }
    };

    return (
        <div className="screen-container">
            <div className="card">
                <div className="qr-display-header">
                    <h2>📱 Administrator Verification Required</h2>
                    <p className="subtitle">Show this QR code to start quiz</p>
                </div>

                {qrData && (
                    <div className="qr-code-display">
                        <QRCodeSVG
                            value={qrData}
                            size={320}
                            level="H"
                            includeMargin={true}
                        />
                    </div>
                )}

                <div className="qr-instructions">
                    <h3>📋 Verification Steps:</h3>
                    <ol>
                        <li><strong>Show</strong> this QR code to the administrator</li>
                        <li><strong>Wait</strong> for administrator to scan with mobile device</li>
                        <li>Administrator will give you a <strong>4-digit code</strong></li>
                        <li><strong>Enter</strong> the code below to start quiz</li>
                    </ol>
                </div>

                <div className="security-notice" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <p className="warning-text">
                        🔒 Quiz cannot start without administrator's verification code
                    </p>
                </div>

                {!showCodeInput ? (
                    <button
                        onClick={() => setShowCodeInput(true)}
                        className="btn btn-primary btn-large"
                    >
                        I Have Verification Code →
                    </button>
                ) : (
                    <div className="pin-entry-container" style={{ marginTop: '20px' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>
                            Enter Verification Code
                        </h3>

                        {error && (
                            <div className="alert alert-error" style={{ marginBottom: '15px' }}>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleCodeSubmit}>
                            <div className="pin-input-container">
                                <input
                                    type="text"
                                    className="pin-input"
                                    value={enteredCode}
                                    onChange={(e) => setEnteredCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                    placeholder="0000"
                                    maxLength="4"
                                    autoFocus
                                    style={{ width: '200px', fontSize: '2rem', letterSpacing: '15px' }}
                                />
                            </div>

                            <div className="button-group" style={{ marginTop: '20px' }}>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={enteredCode.length !== 4}
                                >
                                    Start Quiz
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowCodeInput(false);
                                        setError('');
                                        setEnteredCode('');
                                    }}
                                    className="btn btn-secondary"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentQRDisplay;
