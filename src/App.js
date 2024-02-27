import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//👇🏻 component
import Dashboard from "./components/dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ChangePass from "./components/chpass";

//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/dashboard/change-pass' element={<ChangePass />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
};

export default App;