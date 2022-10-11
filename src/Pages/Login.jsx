import React from 'react'
import Banner from '../components/Banner'
import Picture from '../components/Picture'
import LoginForm from '../components/LoginForm'
import "./Login.css"


function Login() {
  return (
    <div className="login--container">
       <div className="login--leftside">
        <div className="login--logo">
         <Banner/>
        </div>
        <div className="login--picture">
         <Picture/>
        </div>
       </div>
       <div className="login--rightside">
        <LoginForm/>
       </div>
    </div>
  )
}

export default Login