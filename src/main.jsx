import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import TokenVerification from './components/TokenVerification';
import AdminPanel from './components/AdminPanel';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                {/* Student scans QR and lands here with token */}
                <Route path="/" element={<TokenVerification />} />

                {/* Quiz starts after token verification */}
                <Route path="/quiz" element={<App />} />

                {/* Admin generates QR code */}
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
