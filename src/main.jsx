import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScanAdminQR from './components/ScanAdminQR';
import StartScreen from './components/StartScreen';
import StudentQRDisplay from './components/StudentQRDisplay';
import PINEntry from './components/PINEntry';
import App from './App';
import AdminApp from './AdminApp';
import './index.css';

// Wrapper component for student flow
const StudentFlow = () => {
    const [currentStep, setCurrentStep] = React.useState('scan');

    const handleScanComplete = () => {
        setCurrentStep('form');
    };

    const handleFormComplete = () => {
        setCurrentStep('qr-display');
    };

    if (currentStep === 'scan') {
        return <ScanAdminQR />;
    } else if (currentStep === 'form') {
        return <StartScreen onStart={handleFormComplete} />;
    } else if (currentStep === 'qr-display') {
        return <Navigate to="/student-qr" replace />;
    }
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="/quiz-app-vercel">
            <Routes>
                {/* Student routes */}
                <Route path="/" element={<StudentFlow />} />
                <Route path="/start" element={<StartScreen onStart={() => window.location.href = '/quiz-app-vercel/student-qr'} />} />
                <Route path="/student-qr" element={<StudentQRDisplay />} />
                <Route path="/pin-entry" element={<PINEntry />} />
                <Route path="/quiz" element={<App />} />

                {/* Admin route */}
                <Route path="/admin" element={<AdminApp />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
