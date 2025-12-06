import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import StudentQRDisplay from './components/StudentQRDisplay';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                {/* Student shows QR code */}
                <Route path="/" element={<StudentQRDisplay />} />

                {/* Quiz starts after admin verification */}
                <Route path="/quiz" element={<App />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
