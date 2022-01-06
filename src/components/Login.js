import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import SECRET_API from '../secret'
import GoogleButton from 'react-google-button'

import { useGoogleAuth } from './GoogleAuthProvider';

const Login = () => {
    const { signIn, isSignedIn } = useGoogleAuth();
    const navigate = useNavigate();
   
   

  
        if(isSignedIn)  navigate("/tasks")
        
        
    
      const logout = (response) => {
        
        console.log(response,"successsfully logged out");
        
      }

    //   useEffect(() => {
    //       responseGoogle()
    //     navigate("/tasks")
    //   }, [])
      
    return (
        <div>
             <h1>Welcome To Serge Shopping List App</h1>
                <div className="google-button">
                {/* <GoogleLogin
                    clientId = {SECRET_API}
                    buttonText="Login With Goggle"
                    GoogleButton
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                
                /> */}
                  <GoogleButton onClick={signIn}/>
                  {/* onClick={this.handleClick} */}
                </div>

                <div>
                {/* <GoogleLogout
                    clientId={SECRET_API}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                    >
                </GoogleLogout> */}
                </div>
        </div>
    );
};

export default Login;