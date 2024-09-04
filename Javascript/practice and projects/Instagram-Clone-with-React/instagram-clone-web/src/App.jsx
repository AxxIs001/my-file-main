import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/login_components/Login.jsx';
import ForgotPass from './component/forgotPassword_components/ForgotPassword.jsx';
import LoginBoxPage from './component/login_components/LoginBoxPage.jsx';
import SignUp from './component/signUp_components/SignUp.jsx';
import AllMainPage from './component/Main_Page/AllMainPage.jsx';
import Explore from './component/Main_Page/Explore.jsx';
import Home from './component/Main_Page/Home.jsx';
import Reels from './component/Main_Page/Reels.jsx';
import Messages from './component/Main_Page/Messages.jsx';

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
                <Route path='/logInBtn' element={<AllMainPage />} />
                {/* Main page routes */}
                <Route element={<AllMainPage />}>

                    <Route path="home" element={<Home />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="reels" element={<Reels />} />
                    <Route path="messages" element={<Messages />} />
                    {/* Add more routes as needed */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

