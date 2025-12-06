import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePIN } from '../utils/qrAuth';
import { getVerificationData } from '../utils/storage';
import '../App.css';
import '../QRAuth.css';

const PINEntry = () => {
    const navigate = useNavigate();
    const [pin, setPin] = useState('');
    const [error, setError] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const [loading, setLoading] = useState(false);
    const MAX_ATTEMPTS = 3;

    const handlePINChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Only digits
        if (value.length <= 4) {
            setPin(value);
            setError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (pin.length !== 4) {
            setError('Please enter a 4-digit PIN');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const verificationData = getVerificationData();

            if (!verificationData) {
                setError('Verification data not found. Please restart the process.');
                setLoading(false);
                return;
            }

            const isValid = await validatePIN(
                pin,
                verificationData.sessionKey,
                verificationData.studentInfo.rollNumber,
                verificationData.timestamp
            );

            if (isValid) {
                // Success! Navigate to quiz
                navigate('/quiz');
            } else {
                const newAttempts = attempts + 1;
                setAttempts(newAttempts);

                if (newAttempts >= MAX_ATTEMPTS) {
                    setError(`Maximum attempts reached (${MAX_ATTEMPTS}). Please get a new verification from the administrator.`);
                    setTimeout(() => {
                        navigate('/start');
                    }, 3000);
                } else {
                    setError(`Incorrect PIN. ${MAX_ATTEMPTS - newAttempts} attempt(s) remaining.`);
                    setPin('');
                }
            }
        } catch (err) {
            console.error('Error validating PIN:', err);
            setError('An error occurred. Please try again.');
        }

        setLoading(false);
    };

    const handleBack = () => {
        navigate('/student-qr');
    };

    return (
        <div className="screen-container">
            <div className="card">
                <div className="pin-entry-header">
                    <h2>🔑 Enter Verification PIN</h2>
                    <p className="subtitle">Step 3 of 3: Final Verification</p>
                </div>

                <div className="pin-instructions" style={{ marginTop: '30px' }}>
                    <p>The administrator has scanned your QR code and generated a 4-digit PIN.</p>
                    <p><strong>Ask the administrator for the PIN and enter it below:</strong></p>
                </div>

                <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                    <div className="pin-input-container">
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={pin}
                            onChange={handlePINChange}
                            placeholder="0000"
                            className="pin-input"
                            maxLength="4"
                            autoFocus
                            disabled={loading || attempts >= MAX_ATTEMPTS}
                        />
                    </div>

                    {error && (
                        <div className={`alert ${attempts >= MAX_ATTEMPTS ? 'alert-error' : 'alert-warning'}`}
                            style={{ marginTop: '20px' }}>
                            {error}
                        </div>
                    )}

                    <div className="button-group" style={{ marginTop: '30px' }}>
                        <button
                            type="button"
                            onClick={handleBack}
                            className="btn btn-secondary"
                            disabled={loading}
                        >
                            ← Back to QR
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading || pin.length !== 4 || attempts >= MAX_ATTEMPTS}
                        >
                            {loading ? 'Verifying...' : 'Verify PIN →'}
                        </button>
                    </div>
                </form>

                <div className="security-notice" style={{ marginTop: '30px' }}>
                    <p className="info-text">
                        🔒 The PIN is uniquely generated for your verification and expires after use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PINEntry;
