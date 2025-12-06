import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { generateSessionKey, generateAdminQRData } from '../utils/qrAuth';
import { saveAdminSession, getAdminSession, getVerifiedStudents, clearAdminSession } from '../utils/storage';
import AdminScanner from './AdminScanner';
import '../App.css';
import '../QRAuth.css';

const AdminPanel = () => {
    const [session, setSession] = useState(null);
    const [qrData, setQrData] = useState(null);
    const [verifiedStudents, setVerifiedStudents] = useState([]);
    const [showScanner, setShowScanner] = useState(false);

    useEffect(() => {
        // Load existing session if any
        const existingSession = getAdminSession();
        if (existingSession) {
            setSession(existingSession);
            const qr = generateAdminQRData(existingSession.sessionKey);
            setQrData(qr);
            setVerifiedStudents(getVerifiedStudents());
        }
    }, []);

    const handleGenerateSession = () => {
        const sessionKey = generateSessionKey();
        const timestamp = Date.now();

        saveAdminSession(sessionKey, timestamp);

        const newSession = {
            sessionKey,
            timestamp,
            createdAt: new Date(timestamp).toISOString()
        };

        setSession(newSession);
        const qr = generateAdminQRData(sessionKey);
        setQrData(qr);
        setVerifiedStudents([]);
    };

    const handleEndSession = () => {
        if (confirm('Are you sure you want to end this session? All verified students will be cleared.')) {
            clearAdminSession();
            setSession(null);
            setQrData(null);
            setVerifiedStudents([]);
        }
    };

    const handleScanComplete = () => {
        setShowScanner(false);
        setVerifiedStudents(getVerifiedStudents());
    };

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h1>🔐 Administrator Panel</h1>
                <p className="subtitle">Quiz Session Management</p>
            </div>

            {!session ? (
                <div className="admin-welcome">
                    <div className="welcome-icon">👨‍💼</div>
                    <h2>Welcome, Administrator</h2>
                    <p>Generate a new session to begin student verification</p>

                    <button
                        onClick={handleGenerateSession}
                        className="btn btn-primary btn-large"
                        style={{ marginTop: '30px' }}
                    >
                        ✨ Generate New Session
                    </button>

                    <div className="admin-instructions" style={{ marginTop: '40px' }}>
                        <h3>How it works:</h3>
                        <ol>
                            <li>Generate a session - you'll get a QR code</li>
                            <li>Students scan your QR code on their laptops</li>
                            <li>Students fill their information forms</li>
                            <li>You scan students' verification QR codes</li>
                            <li>Provide students with the 4-digit PIN</li>
                            <li>Students enter PIN and start quiz</li>
                        </ol>
                    </div>
                </div>
            ) : (
                <div className="admin-session-active">
                    <div className="session-info-card">
                        <h3>📱 Active Session</h3>
                        <div className="session-details">
                            <p><strong>Session ID:</strong></p>
                            <p className="session-id">{session.sessionKey.substring(0, 13)}...</p>
                            <p><strong>Created:</strong> {new Date(session.timestamp).toLocaleString()}</p>
                            <p><strong>Verified Students:</strong> {verifiedStudents.length}</p>
                        </div>
                    </div>

                    <div className="admin-qr-section">
                        <h3>📲 Your Session QR Code</h3>
                        <p className="qr-instruction">Students must scan this code to join the session</p>

                        <div className="admin-qr-display">
                            {qrData && (
                                <QRCodeSVG
                                    value={qrData}
                                    size={280}
                                    level="H"
                                    includeMargin={true}
                                />
                            )}
                        </div>

                        <p className="qr-hint">Show this screen to students so they can scan</p>
                    </div>

                    <div className="admin-actions">
                        <button
                            onClick={() => setShowScanner(true)}
                            className="btn btn-primary btn-large"
                        >
                            📷 Scan Student QR Code
                        </button>

                        <button
                            onClick={handleEndSession}
                            className="btn btn-danger"
                            style={{ marginTop: '15px' }}
                        >
                            ⏹️ End Session
                        </button>
                    </div>

                    {verifiedStudents.length > 0 && (
                        <div className="verified-students-section">
                            <h3>✓ Verified Students ({verifiedStudents.length})</h3>
                            <div className="students-list">
                                {verifiedStudents.map((student, index) => (
                                    <div key={index} className="student-card">
                                        <div className="student-info">
                                            <p className="student-name">{student.fullName}</p>
                                            <p className="student-details">
                                                Roll: {student.rollNumber} | {student.discipline}
                                            </p>
                                            <p className="verified-time">
                                                Verified: {new Date(student.verifiedAt).toLocaleTimeString()}
                                            </p>
                                        </div>
                                        <div className="verified-badge">✓</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {showScanner && session && (
                <AdminScanner
                    sessionKey={session.sessionKey}
                    onClose={() => setShowScanner(false)}
                    onScanComplete={handleScanComplete}
                />
            )}
        </div>
    );
};

export default AdminPanel;
