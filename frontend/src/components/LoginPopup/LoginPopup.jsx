// import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const [CurrState,setCurrState] =useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
      <div className="login-popup-title">
        <h2>{CurrState}</h2>
        <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
          {CurrState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>{CurrState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-conditio">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {CurrState==="Login"
        ?<p>Create a New Account?<span onClick={()=>{setCurrState("Sign Up")}}>Click Here</span></p>
        :<p>Already have an Account?<span onClick={()=>{setCurrState("Login")}}>Login Here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
