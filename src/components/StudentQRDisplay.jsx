import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { ADMIN_STATIC_QR_CODE } from '../utils/qrAuth';
import '../App.css';
import '../QRAuth.css';

const StudentQRDisplay = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="screen-container">
            <div className="card">
                <div className="qr-display-header">
                    <h2>📱 Show This QR Code to Administrator</h2>
                    <p className="subtitle">Wait for administrator verification</p>
                </div>

                <div className="qr-code-display">
                    <QRCodeSVG
                        value={ADMIN_STATIC_QR_CODE}
                        size={320}
                        level="H"
                        includeMargin={true}
                    />
                </div>

                <div className="qr-instructions">
                    <h3>📋 Instructions:</h3>
                    <ol>
                        <li>Show this QR code on your laptop screen to the administrator</li>
                        <li>Administrator will scan this QR code using their mobile device</li>
                        <li>After administrator confirms the match, click "Start Quiz" below</li>
                    </ol>
                </div>

                <div className="security-notice" style={{ marginTop: '20px' }}>
                    <p className="warning-text">
                        🔒 Do not proceed without administrator verification
                    </p>
                </div>

                <button
                    onClick={handleStartQuiz}
                    className="btn btn-primary btn-large"
                    style={{ marginTop: '30px' }}
                >
                    Start Quiz →
                </button>
            </div>
        </div>
    );
};

export default StudentQRDisplay;
