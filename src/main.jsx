import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import TokenVerification from './components/TokenVerification';
import StartScreen from './components/StartScreen';
import AdminPanel from './components/AdminPanel';
import App from './App';
import './index.css';

// Wrapper for StartScreen to handle navigation
const StartScreenWrapper = () => {
    const navigate = useNavigate();
    return <StartScreen onStart={() => navigate('/quiz')} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                {/* Student scans QR and lands here with token */}
                <Route path="/" element={<TokenVerification />} />

                {/* Student fills information after token verification */}
                <Route path="/start" element={<StartScreenWrapper />} />

                {/* Quiz starts after student fills form */}
                <Route path="/quiz" element={<App />} />

                {/* Admin generates QR code */}
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
