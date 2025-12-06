import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import PropTypes from 'prop-types';

const QRScanner = ({ onScan, onError, onClose, title = "Scan QR Code" }) => {
    const [error, setError] = useState(null);
    const [scanning, setScanning] = useState(true);

    const handleScan = (result) => {
        if (result && result.length > 0) {
            const text = result[0].rawValue;
            setScanning(false);
            onScan(text);
        }
    };

    const handleError = (error) => {
        console.error('QR Scan Error:', error);
        setError('Camera access denied or not available. Please enable camera permissions.');
        if (onError) {
            onError(error);
        }
    };

    return (
        <div className="qr-scanner-container">
            <div className="qr-scanner-modal">
                <div className="qr-scanner-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="close-btn">✕</button>
                </div>

                <div className="qr-scanner-body">
                    {error ? (
                        <div className="scanner-error">
                            <div className="error-icon">📷</div>
                            <p>{error}</p>
                            <p className="error-help">
                                Please check your browser settings and allow camera access.
                            </p>
                            <button onClick={onClose} className="btn btn-primary">
                                Close
                            </button>
                        </div>
                    ) : scanning ? (
                        <>
                            <div className="scanner-wrapper">
                                <Scanner
                                    onScan={handleScan}
                                    onError={handleError}
                                    constraints={{
                                        facingMode: 'environment'
                                    }}
                                    styles={{
                                        container: {
                                            width: '100%',
                                            maxWidth: '500px',
                                            margin: '0 auto'
                                        }
                                    }}
                                />
                            </div>
                            <div className="scanner-instructions">
                                <p>📱 Point your camera at the QR code</p>
                                <p className="scanner-hint">Make sure the QR code is well-lit and centered</p>
                            </div>
                        </>
                    ) : (
                        <div className="scanner-success">
                            <div className="success-icon">✓</div>
                            <p>QR Code scanned successfully!</p>
                        </div>
                    )}
                </div>

                <div className="qr-scanner-footer">
                    <button onClick={onClose} className="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

QRScanner.propTypes = {
    onScan: PropTypes.func.isRequired,
    onError: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default QRScanner;
