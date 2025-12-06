import { useState } from 'react';
import PropTypes from 'prop-types';
import QRScanner from './QRScanner';
import { verifyStudentQR, parseQRData } from '../utils/qrAuth';
import { addVerifiedStudent } from '../utils/storage';
import '../App.css';
import '../QRAuth.css';

const AdminScanner = ({ sessionKey, onClose, onScanComplete }) => {
    const [scanResult, setScanResult] = useState(null);
    const [error, setError] = useState(null);
    const [pin, setPin] = useState(null);
    const [studentInfo, setStudentInfo] = useState(null);
    const [showScanner, setShowScanner] = useState(true);

    const handleScan = async (qrData) => {
        setShowScanner(false);

        const parsed = parseQRData(qrData);

        if (!parsed) {
            setError('Invalid QR code format');
            return;
        }

        // Verify the student QR code
        const result = await verifyStudentQR(sessionKey, parsed);

        if (result.valid) {
            // Success!
            setPin(result.pin);
            setStudentInfo(result.studentInfo);
            setScanResult('success');

            // Add to verified students list
            addVerifiedStudent(result.studentInfo);
        } else {
            setError(result.error);
            setScanResult('error');
        }
    };

    const handleClose = () => {
        if (scanResult === 'success') {
            onScanComplete();
        }
        onClose();
    };

    const handleScanAnother = () => {
        setScanResult(null);
        setError(null);
        setPin(null);
        setStudentInfo(null);
        setShowScanner(true);
    };

    return (
        <div className="admin-scanner-overlay">
            {showScanner ? (
                <QRScanner
                    title="Scan Student's Verification QR"
                    onScan={handleScan}
                    onClose={onClose}
                />
            ) : (
                <div className="admin-scanner-result">
                    <div className="result-modal">
                        {scanResult === 'success' && pin && studentInfo && (
                            <div className="verification-success">
                                <div className="success-icon-large">✓</div>
                                <h2>Student Verified!</h2>

                                <div className="student-verified-info">
                                    <p><strong>Name:</strong> {studentInfo.fullName}</p>
                                    <p><strong>Roll Number:</strong> {studentInfo.rollNumber}</p>
                                    <p><strong>Discipline:</strong> {studentInfo.discipline}</p>
                                    <p><strong>Subject:</strong> {studentInfo.subject}</p>
                                </div>

                                <div className="pin-display">
                                    <h3>Approval PIN:</h3>
                                    <div className="pin-number">{pin}</div>
                                    <p className="pin-instruction">
                                        Tell this PIN to the student or show them your screen
                                    </p>
                                </div>

                                <div className="button-group">
                                    <button onClick={handleScanAnother} className="btn btn-primary">
                                        📷 Scan Another Student
                                    </button>
                                    <button onClick={handleClose} className="btn btn-secondary">
                                        Done
                                    </button>
                                </div>
                            </div>
                        )}

                        {scanResult === 'error' && error && (
                            <div className="verification-error">
                                <div className="error-icon-large">✕</div>
                                <h2>Verification Failed</h2>

                                <div className="error-message">
                                    <p>{error}</p>
                                </div>

                                <div className="error-help">
                                    <h4>Common Issues:</h4>
                                    <ul>
                                        <li><strong>Session Mismatch:</strong> Student scanned an old administrator QR code</li>
                                        <li><strong>Expired QR:</strong> Student's QR code is older than 10 minutes</li>
                                        <li><strong>Tampered Data:</strong> QR code integrity check failed</li>
                                    </ul>
                                    <p>Ask the student to generate a new verification QR code.</p>
                                </div>

                                <div className="button-group">
                                    <button onClick={handleScanAnother} className="btn btn-primary">
                                        Try Again
                                    </button>
                                    <button onClick={handleClose} className="btn btn-secondary">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

AdminScanner.propTypes = {
    sessionKey: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onScanComplete: PropTypes.func.isRequired
};

export default AdminScanner;
