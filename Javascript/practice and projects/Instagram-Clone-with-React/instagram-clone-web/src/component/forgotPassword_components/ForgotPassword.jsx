import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from "../login_components/LoginPage";
import "./forgotPassword.css"



function ForgotPass() {
    //For Navigating to page on button to back Login Page
    const navigate = useNavigate();

    const handleBackToLoginPage = () => {
        navigate('/instagram-logo');
    };

    const handleBackToLogin = () => {
        navigate('/back-to-login-link');
    };


    const handleCreateNewAcc = () => {
        navigate('/create-account-link');

    }

    function enableButton() {
        let sendInput = document.getElementById("sendLinkInput");

        if (sendInput.value != '') {
            document.querySelector(".send-link-btn").disabled = false;
            document.querySelector(".send-link-btn").style.color = "white";

        } else {
            document.querySelector(".send-link-btn").disabled = true;
            document.querySelector(".send-link-btn").style.color = "#d4edfd";
        }

    }



    return (
        <div className='ForgotPasswordBody'>
            <div className="header">
                <div className="logo">
                    <a className="instagram-logo" onClick={handleBackToLoginPage}><img className="instImg" src="https://i.imgur.com/zqpwkLQ.png" alt="Instagram logo" /></a>
                </div>
                <hr className="divider-line" />
            </div>
            <div className="container">
                <div className="card">
                    <div className="lock-icon"><img src="./src/component/img/LockResetIcon.png" alt="" />
                    </div>
                    <h2>Trouble logging in?</h2>
                    <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                    <form>
                        <input id='sendLinkInput' type="text" placeholder="Email, Phone, or Username" onChange={enableButton} />
                        <button className="send-link-btn">Send login link</button>
                    </form>
                    <a href="https://help.instagram.com/374546259294234" className="reset-password-link">Can't reset your password?</a>
                    <div className="divider">
                        <span>OR</span>
                    </div>
                    <a className="create-account-link" onClick={handleCreateNewAcc}>Create new account</a>

                </div>
                <div className='backToLogin'>
                    <a className="back-to-login-link" onClick={handleBackToLogin}>Back to login</a>
                </div>
            </div>

            <Footer />

        </div>


    )
}

export default ForgotPass;
