import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScanAdminQR from './components/ScanAdminQR';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                {/* Student scans admin QR first */}
                <Route path="/" element={<ScanAdminQR />} />

                {/* Quiz starts after successful scan */}
                <Route path="/quiz" element={<App />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
