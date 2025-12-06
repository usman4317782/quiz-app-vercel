import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { generateStudentQRData } from '../utils/qrAuth';
import { getSessionKey, getVerificationData, saveVerificationData } from '../utils/storage';
import '../App.css';
import '../QRAuth.css';

const StudentQRDisplay = () => {
    const navigate = useNavigate();
    const [qrData, setQrData] = useState(null);
    const [studentInfo, setStudentInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initializeQR = async () => {
            try {
                const sessionKey = getSessionKey();
                if (!sessionKey) {
                    setError('No session found. Please scan administrator QR code first.');
                    setTimeout(() => navigate('/'), 2000);
                    return;
                }

                const verificationData = getVerificationData();
                if (!verificationData) {
                    setError('No student information found.');
                    setTimeout(() => navigate('/start'), 2000);
                    return;
                }

                setStudentInfo(verificationData.studentInfo);

                // Generate QR code
                const qrString = await generateStudentQRData(
                    verificationData.sessionKey,
                    verificationData.studentInfo
                );

                setQrData(qrString);
                setLoading(false);
            } catch (err) {
                console.error('Error generating QR:', err);
                setError('Failed to generate QR code. Please try again.');
                setLoading(false);
            }
        };

        initializeQR();
    }, [navigate]);

    const handleRegenerateQR = async () => {
        setLoading(true);
        setError(null);

        try {
            const sessionKey = getSessionKey();
            const verificationData = getVerificationData();

            // Update timestamp and regenerate
            const timestamp = Date.now();
            saveVerificationData(sessionKey, verificationData.studentInfo, timestamp);

            const qrString = await generateStudentQRData(
                sessionKey,
                verificationData.studentInfo
            );

            setQrData(qrString);
            setLoading(false);
        } catch (err) {
            console.error('Error regenerating QR:', err);
            setError('Failed to regenerate QR code.');
            setLoading(false);
        }
    };

    const handleCancel = () => {
        navigate('/start');
    };

    if (error) {
        return (
            <div className="screen-container">
                <div className="card">
                    <div className="alert alert-error">
                        <strong>Error:</strong> {error}
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="screen-container">
                <div className="card">
                    <p>Generating QR Code...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="screen-container">
            <div className="card">
                <div className="qr-display-header">
                    <h2>📱 Show QR Code to Administrator</h2>
                    <p className="subtitle">Step 2 of 3: Administrator Verification</p>
                </div>

                {studentInfo && (
                    <div className="student-info-summary">
                        <h3>Your Information:</h3>
                        <p><strong>Name:</strong> {studentInfo.fullName}</p>
                        <p><strong>Roll Number:</strong> {studentInfo.rollNumber}</p>
                        <p><strong>Discipline:</strong> {studentInfo.discipline}</p>
                    </div>
                )}

                <div className="qr-code-display">
                    {qrData && (
                        <QRCodeSVG
                            value={qrData}
                            size={320}
                            level="H"
                            includeMargin={true}
                        />
                    )}
                </div>

                <div className="qr-instructions">
                    <h3>📋 Instructions:</h3>
                    <ol>
                        <li>Show this screen to the administrator</li>
                        <li>Administrator will scan this QR code using their mobile device</li>
                        <li>After scanning, administrator will provide you a 4-digit PIN</li>
                        <li>Enter the PIN on the next screen to start your quiz</li>
                    </ol>
                </div>

                <div className="security-notice" style={{ marginTop: '20px' }}>
                    <p className="warning-text">
                        ⏱️ This QR code is valid for 10 minutes. If it expires, generate a new one.
                    </p>
                </div>

                <div className="button-group" style={{ marginTop: '30px' }}>
                    <button onClick={handleRegenerateQR} className="btn btn-secondary">
                        🔄 Regenerate QR Code
                    </button>
                    <button onClick={() => navigate('/pin-entry')} className="btn btn-primary">
                        Next: Enter PIN →
                    </button>
                </div>

                <button onClick={handleCancel} className="btn btn-text" style={{ marginTop: '15px' }}>
                    ← Back to Form
                </button>
            </div>
        </div>
    );
};

export default StudentQRDisplay;
