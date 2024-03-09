import React, { useContext, useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//👇🏻 component
import Dashboard from "./components/dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import ChangePass from "./components/chpass";
import PilihSchedule from "./components/PilihSchedule";
import { AuthProvider } from "./context/AuthContext";

//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ChangePass" element={<ChangePass />} />
            <Route path="/PilihSchedule" element={<PilihSchedule />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
