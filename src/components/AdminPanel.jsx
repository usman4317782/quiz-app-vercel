import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { generateQuizToken, saveActiveToken, getActiveToken, clearActiveToken } from '../utils/qrAuth';
import '../App.css';
import '../QRAuth.css';

const AdminPanel = () => {
    const [currentToken, setCurrentToken] = useState(getActiveToken());
    const [tokenCreatedTime, setTokenCreatedTime] = useState(null);

    const handleGenerateToken = () => {
        const token = generateQuizToken();
        saveActiveToken(token);
        setCurrentToken(token);
        setTokenCreatedTime(new Date().toLocaleTimeString());
    };

    const handleClearToken = () => {
        if (confirm('Clear current token? Students with old QR code will not be able to access quiz.')) {
            clearActiveToken();
            setCurrentToken(null);
            setTokenCreatedTime(null);
        }
    };

    // Generate QR URL with token
    const quizURL = currentToken
        ? `https://usman4317782.github.io/quiz-app-vercel/#/?token=${currentToken}`
        : '';

    return (
        <div className="screen-container">
            <div className="card admin-container">
                <div className="admin-header" style={{ marginBottom: '30px' }}>
                    <h1>🔐 Admin Panel</h1>
                    <p className="subtitle">Generate Quiz Start QR Code</p>
                </div>

                {!currentToken ? (
                    <div className="admin-welcome">
                        <div className="welcome-icon">👨‍💼</div>
                        <h2>Generate Start Token</h2>
                        <p style={{ marginBottom: '30px' }}>
                            Click below to create a unique QR code for students to scan
                        </p>

                        <button
                            onClick={handleGenerateToken}
                            className="btn btn-primary btn-large"
                        >
                            ✨ Generate Quiz QR Code
                        </button>

                        <div className="admin-instructions" style={{ marginTop: '40px' }}>
                            <h3>How it works:</h3>
                            <ol>
                                <li><strong>Generate</strong> a unique QR code</li>
                                <li><strong>Show</strong> the QR code to students</li>
                                <li>Students <strong>scan</strong> with their phone camera</li>
                                <li>Quiz <strong>opens automatically</strong> in browser</li>
                                <li>Each QR code works <strong>only once</strong> per student</li>
                            </ol>
                        </div>
                    </div>
                ) : (
                    <div className="admin-session-active">
                        <div className="session-info-card">
                            <h3>📱 Active Quiz Token</h3>
                            <div className="session-details">
                                <p><strong>Token:</strong></p>
                                <p className="session-id">{currentToken}</p>
                                {tokenCreatedTime && (
                                    <p><strong>Created:</strong> {tokenCreatedTime}</p>
                                )}
                            </div>
                        </div>

                        <div className="admin-qr-section">
                            <h3>📲 Scan This QR Code</h3>
                            <p className="qr-instruction">
                                Students scan this with phone camera to start quiz
                            </p>

                            <div className="admin-qr-display">
                                <QRCodeSVG
                                    value={quizURL}
                                    size={300}
                                    level="H"
                                    includeMargin={true}
                                />
                            </div>

                            <div className="qr-hint" style={{ marginTop: '15px', padding: '15px', background: '#f3f4f6', borderRadius: '8px' }}>
                                <p style={{ fontSize: '0.85rem', wordBreak: 'break-all', color: '#666' }}>
                                    <strong>URL:</strong> {quizURL}
                                </p>
                            </div>
                        </div>

                        <div className="admin-instructions" style={{ marginTop: '30px' }}>
                            <h3>Student Instructions:</h3>
                            <ol>
                                <li>Open phone camera app</li>
                                <li>Point camera at this QR code</li>
                                <li>Tap the notification/link that appears</li>
                                <li>Quiz will open in browser automatically</li>
                            </ol>
                        </div>

                        <div className="admin-actions" style={{ marginTop: '30px' }}>
                            <button
                                onClick={handleGenerateToken}
                                className="btn btn-primary"
                            >
                                🔄 Generate New Token
                            </button>
                            <button
                                onClick={handleClearToken}
                                className="btn btn-danger"
                            >
                                🗑️ Clear Token
                            </button>
                        </div>

                        <div className="security-notice" style={{ marginTop: '20px' }}>
                            <p style={{ fontSize: '0.9rem', color: '#92400e' }}>
                                <strong>🔒 Security:</strong> Each student can use this QR code only once.
                                After starting the quiz, they cannot restart even with the same QR code.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
