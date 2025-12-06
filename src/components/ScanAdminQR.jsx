import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRScanner from './QRScanner';
import { parseQRData } from '../utils/qrAuth';
import { saveSessionKey } from '../utils/storage';
import '../App.css';
import '../QRAuth.css';

const ScanAdminQR = () => {
    const navigate = useNavigate();
    const [showScanner, setShowScanner] = useState(false);
    const [error, setError] = useState(null);

    const handleScan = (qrData) => {
        const parsed = parseQRData(qrData);

        if (!parsed) {
            setError('Invalid QR code format');
            setShowScanner(false);
            return;
        }

        if (parsed.type !== 'admin') {
            setError('This is not an administrator QR code. Please scan the correct code.');
            setShowScanner(false);
            return;
        }

        // Save session key and proceed
        saveSessionKey(parsed.sessionKey);
        setShowScanner(false);
        navigate('/start');
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
                    <h3>Step 1: Scan Administrator's QR Code</h3>
                    <div className="instruction-steps">
                        <div className="step-item">
                            <span className="step-number">1</span>
                            <p>Ask the administrator to show their session QR code</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">2</span>
                            <p>Click the button below to activate your camera</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">3</span>
                            <p>Point your camera at the administrator's mobile screen</p>
                        </div>
                        <div className="step-item">
                            <span className="step-number">4</span>
                            <p>Wait for the QR code to be recognized</p>
                        </div>
                    </div>

                    <div className="security-notice" style={{ marginTop: '20px' }}>
                        <p>🔒 <strong>Security Notice:</strong></p>
                        <p>This step ensures that only authorized students can access the quiz.
                            You must scan the administrator's QR code before proceeding.</p>
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
