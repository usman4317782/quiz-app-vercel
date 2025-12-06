import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRScanner from './QRScanner';
import { verifyStaticAdminQR } from '../utils/qrAuth';
import '../App.css';
import '../QRAuth.css';

const ScanAdminQR = () => {
    const navigate = useNavigate();
    const [showScanner, setShowScanner] = useState(false);
    const [error, setError] = useState(null);

    const handleScan = (qrData) => {
        const isValid = verifyStaticAdminQR(qrData);

        if (isValid) {
            // Valid admin QR - proceed to quiz
            localStorage.setItem('adminVerified', 'true');
            setShowScanner(false);
            navigate('/quiz');
        } else {
            setError('Invalid administrator QR code. Please scan the correct code from your administrator.');
            setShowScanner(false);
        }
    };

    const handleError = (error) => {
        console.error('Scanner error:', error);
        setError('Camera access denied. Please enable camera permissions to scan QR code.');
        setShowScanner(false);
    };

    return (
        <div className="screen-container">
            <div className="card start-card">
                <div className="quiz-icon">🔐</div>
                <h1 className="title">Secure Quiz Application</h1>
                <p className="subtitle">Administrator Verification Required</p>

                {error && (
                    <div className="alert alert-error" style={{ marginTop: '20px' }}>
                        <strong>Error:</strong> {error}
                    </div>
                )}

                <div className="instructions" style={{ marginTop: '30px' }}>
                    <h3>Scan Administrator's QR Code to Start Quiz</h3>
                    <div className="instruction-steps">
                        <div className="step-item">
                            <span className="step-number">1</span>
                            <p>Ask the administrator to show their QR code</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">2</span>
                            <p>Click the button below to activate your camera</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">3</span>
                            <p>Point your camera at the administrator's QR code</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">4</span>
                            <p>Quiz will start automatically after verification</p>
                        </div>
                    </div>

                    <div className="security-notice" style={{ marginTop: '20px' }}>
                        <p>🔒 <strong>Security Notice:</strong></p>
                        <p>You must scan the administrator's QR code before you can access the quiz.</p>
                    </div>
                </div>

                <button
                    onClick={() => {
                        setError(null);
                        setShowScanner(true);
                    }}
                    className="btn btn-primary btn-large"
                    style={{ marginTop: '30px' }}
                >
                    📷 Scan Administrator QR Code
                </button>
            </div>

            {showScanner && (
                <QRScanner
                    title="Scan Administrator's QR Code"
                    onScan={handleScan}
                    onError={handleError}
                    onClose={() => setShowScanner(false)}
                />
            )}
        </div>
    );
};

export default ScanAdminQR;
