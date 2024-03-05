import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//👇🏻 component
import Dashboard from "./components/dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import ChangePass from "./components/chpass";
import PilihSchedule from "./components/PilihSchedule"
import { AuthProvider } from './context/AuthContext';

//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
    return (
    <nav className="navbar">
        <span className="navbar-brand">
            <Link to="/ChangePass" className="nav-link">Ganti Password</Link>
        </span>
        <span className="navbar-brand">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </span>
        <span className="navbar-brand">
        <   Link to="/PilihSchedule" className="nav-link">Pemilihan Jadwal</Link>
        </span>
        <span className="navbar-brand">
        <   Link to="/Logout" className="nav-link" style={{ color: 'red' }}>Logout</Link>
        </span>
    </nav>
    );
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <AuthProvider>
                    <Routes >
                        <Route path='/' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/dashboard/change-pass' element={<ChangePass />} />
                        <Route path='/PilihSchedule' element={<PilihSchedule />} />
                        <Route path='/Logout' element={<Logout />} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
};

export default App;
