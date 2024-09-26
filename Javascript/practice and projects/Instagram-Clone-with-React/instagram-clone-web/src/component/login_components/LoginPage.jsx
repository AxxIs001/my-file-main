import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import screenshot1 from "../img/screenshot1.png";
import screenshot2 from "../img/screenshot2.png";
import screenshot3 from "../img/screenshot3.png";
import screenshot4 from "../img/screenshot4.png";
import './login.css';


export function IphoneImage() {

    const iphoneImages = [screenshot1, screenshot2, screenshot3, screenshot4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % iphoneImages.length);
        }, 4000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [iphoneImages.length]);

    return (
        <div style={{ position: "relative" }}>
            {iphoneImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className={`screenshot-img ${index === currentIndex ? "active" : ""}`}
                />
            ))}
        </div>
    );
}


export function LoginPage() {

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    //For Navigating to page on button Forgot Password
    const navigate = useNavigate();

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleLogIn = () => {

        navigate('/logInBtn');
    };

    function blockShow() {
        const inputField = document.getElementById("myInput");
        const showHideBtn = document.querySelector(".showHideBtn");

        if (inputField.value === '') {
            showHideBtn.style.display = "none";
        } else {
            showHideBtn.style.display = "block";
        }
        toggleDisabled();
    }


    const togglePassword = () => {
        const inputField = document.getElementById("myInput");
        if (inputField.type === "password") {
            inputField.type = "text";
            document.querySelector(".showHideBtn").innerHTML = "Hide";
        } else {
            inputField.type = "password";
            document.querySelector(".showHideBtn").innerHTML = "Show";
        }
    };


    const toggleDisabled = () => {
        const inputField = document.getElementById("myInput");
        const inputFieldLogin = document.getElementById("myInputLogin");

        if (inputField.value === "" || inputFieldLogin.value === "") {
            setIsButtonDisabled(true);
        }
        else {
            setIsButtonDisabled(false);
        }

    }




    return (
        <div className="login-box">
            <img className="instImg" src="https://i.imgur.com/zqpwkLQ.png" alt="Instagram logo" />
            <div className="username">
                <input
                    type="text"
                    placeholder="Phone number, username, or email"
                    id="myInputLogin"
                    onChange={toggleDisabled}
                />
            </div>
            <div className="password">
                <input
                    type="password"
                    placeholder="Password"
                    id="myInput"
                    onChange={blockShow}
                />
                <button className="showHideBtn" onClick={togglePassword}>Show</button>
            </div>
            <button type="submit" className="logInBtn" onClick={handleLogIn} disabled={isButtonDisabled}>Log in</button>
            <div className="separator">
                <span>OR</span>
            </div>
            <div className="facebook-login">
                <img src="https://i.imgur.com/QQ89Rt3.jpeg" alt="Facebook logo" width="20" />
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522n6ezowzycrbl1anhoz96afb321ljtx7ksryetyzdzy9d1dlx10n%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D32e94cdd-2708-4087-a467-9d214a7ae479%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522n6ezowzycrbl1anhoz96afb321ljtx7ksryetyzdzy9d1dlx10n%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0">Log in with Facebook</a>
            </div>
            <a className="forgot-password" onClick={handleForgotPassword}>Forgot password?</a>
        </div>
    );
}


export function SignUpLink() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signUpBtn');
    };

    return (
        <div className="signUpLink-box">
            <p>Don't have an account?<button className="signUpBtn" onClick={handleSignUp}>Sign up</button></p>

        </div>
    );
}

export function GetTheApp() {
    return (
        <div className="app-links">
            <p>Get the app.</p>
            <div className="store-buttons">
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DA4B601C3-736B-4C38-BDD2-D900ACEA24FC%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.google.com%252F&pli=1" >
                    <img className="google-play" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSv479P9YVGLOLcKO-lyUEOUTzgY44actorw&s" alt="Get it on Google Play" />
                </a>
                <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1920%2C0%2C1920%2C1032">
                    <img className="microsoft-store" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLJVE9ujZPx6ln-a7SLh5vJrrkAUsg5sLd6A&s" alt="Get it from Microsoft" />
                </a>
            </div>
        </div>

    )

}


export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://about.meta.com/">Meta</a>
                <a href="https://about.instagram.com/">About</a>
                <a href="https://about.instagram.com/blog">Blog</a>
                <a href="https://about.instagram.com/about-us/careers">Jobs</a>
                <a href="https://help.instagram.com/">Help</a>
                <a href="https://developers.facebook.com/docs/instagram-platform">API</a>
                <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacy</a>
                <a href="https://help.instagram.com/581066165581870/">Terms</a>
                <a href="https://www.instagram.com/explore/locations/">Locations</a>
                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                <a href="https://www.threads.net/">Threads</a>
                <a href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploading & Non-Users</a>
                <a href="#">Meta Verified</a>
            </div>
            <div className="footer-bottom">
                <select name="language" id="language-select">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                    <option value="kg">Kyrgyz</option>
                    { /* Add more languages as needed */}
                </select>
                <p>© 2024 Instagram from Meta</p>
            </div>
        </footer>

    )

}
