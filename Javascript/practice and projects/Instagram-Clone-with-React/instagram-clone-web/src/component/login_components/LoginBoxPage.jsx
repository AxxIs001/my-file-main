import React from 'react'
import { LoginPage, SignUpLink, GetTheApp, Footer } from "./LoginPage";

function LoginBoxPage() {

    return (
        <div>
            <div className='loginPageBox'>
                <LoginPage />
                <SignUpLink />
                <GetTheApp />
            </div>
            <Footer />
        </div>
    )
}
export default LoginBoxPage;