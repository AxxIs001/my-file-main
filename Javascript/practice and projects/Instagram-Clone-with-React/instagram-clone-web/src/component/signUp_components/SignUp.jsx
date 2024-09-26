import React from 'react'
import { GetTheApp, Footer } from "../login_components/LoginPage";
import { useNavigate } from 'react-router-dom';
import "./signUp.css"


function SignUp() {

    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate('/log-in');
    }


    function blockShow() {
        const inputField = document.getElementById("myInput2");
        const showHideBtn = document.querySelector(".showHideBtn2");

        if (inputField.value === '') {
            showHideBtn.style.display = "none";
        } else {
            showHideBtn.style.display = "block";
        }
    }

    const togglePassword = () => {
        const inputField = document.getElementById("myInput2");
        if (inputField.type === "password") {
            inputField.type = "text";
            document.querySelector(".showHideBtn2").innerHTML = "Hide";
        } else {
            inputField.type = "password";
            document.querySelector(".showHideBtn2").innerHTML = "Show";
        }
    };



    return (
        <div >
            <div className='signUp-body'>
                <div className='signUp-container'>
                    <div className="signup-form">
                        <img className="logo" src="https://i.imgur.com/zqpwkLQ.png" alt="Instagram logo" />
                        <h2>Sign up to see photos and videos from your friends.</h2>
                        <button className="facebook-btn"><img src="/src/component/img/facbookIcon.png" /><a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522hs5xjwd6p72e1rt1b8eu2r2lj1y9p31lif3jtalbked01lk8zz5%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9e4ce747-a537-46aa-84c9-428104063972%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522hs5xjwd6p72e1rt1b8eu2r2lj1y9p31lif3jtalbked01lk8zz5%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0'>Log in with Facebook</a></button>
                        <div className="separator">
                            <div className="line"></div>
                            <div className="or">OR</div>
                            <div className="line"></div>
                        </div>
                        <form>
                            <input type="text" placeholder="Mobile Number or Email" />
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" id='myInput2' onChange={blockShow} />
                            <button type='button' className="showHideBtn2" onClick={togglePassword}>Show</button>

                        </form>
                        <p className="terms">People who use our service may have uploaded your contact information to Instagram. <a href="https://www.facebook.com/help/instagram/261704639352628">Learn More</a></p>
                        <p className="terms">By signing up, you agree to our <a href="https://help.instagram.com/581066165581870/?locale=en_US">Terms</a>, <a href="https://www.facebook.com/privacy/policy">Privacy Policy</a> and <a href="https://privacycenter.instagram.com/policies/cookies/">Cookies Policy</a>.</p>
                        <button type="submit" className="signup-btn" onClick={() => signup(inputs)}>Sign up</button>
                    </div>
                    <div className="login-redirect">
                        <p>Have an account? <a className='log-in' onClick={handleLogIn}>Log in</a></p>
                    </div>
                </div>
                <div className='getTheApp'>
                    <GetTheApp />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SignUp;