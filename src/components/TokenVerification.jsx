import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { isQuizStarted, markQuizAsStarted } from '../utils/qrAuth';
import '../App.css';

const TokenVerification = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState('verifying');
    const [message, setMessage] = useState('Verifying access token...');

    useEffect(() => {
        const token = searchParams.get('token');

        // Check if quiz already started
        if (isQuizStarted()) {
            setStatus('error');
            setMessage('Quiz already started. You cannot restart with the same QR code.');
            return;
        }

        // No token provided
        if (!token) {
            setStatus('error');
            setMessage('No access token found. Please scan the QR code provided by administrator.');
            return;
        }

        // Verify token format
        if (token.startsWith('QZ-') && token.length > 10) {
            // Valid token format
            markQuizAsStarted();
            setStatus('success');
            setMessage('Access granted! Please fill in your information...');

            // Redirect to student form after 2 seconds
            setTimeout(() => {
                navigate('/start');
            }, 2000);
        } else {
            setStatus('error');
            setMessage('Invalid access token. Please scan the correct QR code from administrator.');
        }
    }, [searchParams, navigate]);

    return (
        <div className="screen-container">
            <div className="card" style={{ textAlign: 'center' }}>
                {status === 'verifying' && (
                    <>
                        <div className="quiz-icon" style={{ fontSize: '60px' }}>⏳</div>
                        <h2>Verifying Access...</h2>
                        <p className="subtitle">{message}</p>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="quiz-icon" style={{ fontSize: '60px' }}>✅</div>
                        <h2 style={{ color: '#10b981' }}>Access Granted!</h2>
                        <p className="subtitle">{message}</p>
                        <div style={{ marginTop: '20px' }}>
                            <div className="spinner" style={{
                                border: '4px solid #f3f3f3',
                                borderTop: '4px solid #4f46e5',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                animation: 'spin 1s linear infinite',
                                margin: '0 auto'
                            }}></div>
                        </div>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="quiz-icon" style={{ fontSize: '60px' }}>❌</div>
                        <h2 style={{ color: '#ef4444' }}>Access Denied</h2>
                        <div className="alert alert-error" style={{ marginTop: '20px' }}>
                            {message}
                        </div>
                        <p style={{ marginTop: '20px', color: '#666' }}>
                            Please contact your administrator for a valid QR code.
                        </p>
                    </>
                )}
            </div>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default TokenVerification;
