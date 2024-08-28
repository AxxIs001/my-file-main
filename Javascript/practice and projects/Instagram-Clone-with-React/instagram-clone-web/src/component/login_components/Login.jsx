import React from 'react'
import { LoginPage, IphoneImage, SignUpLink, GetTheApp, Footer } from "./LoginPage";
function Login() {

  return (
    <div>
      <div className='login-page'>
        <IphoneImage />
        <LoginPage />
        <SignUpLink />
        <GetTheApp />
      </div>
      <Footer />
    </div>
  )
}
export default Login;


