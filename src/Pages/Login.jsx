import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const handleSignUp = ()=> {
        navigate('/signup')
    }
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
   
     return (
          <div className="login-container ">
             <h3>Login</h3>
             <div className="login-wrapper">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
             </div>
             <span className="cursor-pointer hover:text-blue-500">Forgot password?</span>
           {isAuthenticated ?   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out
    </button> : <button onClick={() => loginWithRedirect()}>Login</button>}
           
            
             {/* <p>Don't have an account <span className="signup-span hover:text-blue-500 cursor-pointer" onClick={()=> handleSignUp()}>Signup</span></p> */}
             <p className="or">Or</p>
             <p>Login with google</p>
          </div>
     );
};

export default Login;
