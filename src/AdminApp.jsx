import { useState } from 'react';
import AdminPanel from './components/AdminPanel';
import './App.css';
import './QRAuth.css';

function AdminApp() {
    return (
        <div className="app admin-app">
            <AdminPanel />
        </div>
    );
}

export default AdminApp;
