import React, { useEffect } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import GoogleLoginData from '../GoogleLoginAuth/GoogleLoginData'
import { gapi } from 'gapi-script';

//  <FaRegEye />
// <FaRegEyeSlash /> 

const clientId = "309154112174-vifct4d5770e0omn649m856tl8qn2s2g.apps.googleusercontent.com "

const SignUp = () => {
    const navigate = useNavigate()
    const handleLogin = ()=> {
        navigate("/login")
    }

    useEffect(()=> {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    }, [])
  return (
    <div className="login-container ">
             <h3>SignUp</h3>
             <div className="login-wrapper">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Create password"/>
                <input type="password" placeholder="Confirm password"/>
             </div>
             <span className="cursor-pointer hover:text-blue-500">Forgot password?</span>
             <button className="login-btn cursor-pointer hover:bg-blue-600" >SignUp</button>
             <p>Already have an account <span className="signup-span hover:text-blue-500 cursor-pointer" onClick={()=> handleLogin()}>Login</span></p>
             <p className="or">Or</p>
            <GoogleLoginData/>
          </div>
  )
}

export default SignUp