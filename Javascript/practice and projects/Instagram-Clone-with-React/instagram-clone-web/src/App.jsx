import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/login_components/Login.jsx';
import ForgotPass from './component/forgotPassword_components/ForgotPassword.jsx';
import LoginBoxPage from './component/login_components/LoginBoxPage.jsx'
import SignUp from './component/signUp_components/SignUp.jsx'
import MainPage from './component/Main_Page/MainPage.jsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPass />} />
                <Route path="/instagram-logo" element={<Login />} />
                <Route path="/back-to-login-link" element={<LoginBoxPage />} />
                <Route path="/signUpBtn" element={<SignUp />} />
                <Route path='/log-in' element={<LoginBoxPage />} />
                <Route path='/create-account-link' element={<SignUp />} />
                <Route path='/logInBtn' element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;