import React, { useContext, useEffect, useState } from 'react';
import { useGoogleAuth, GoogleAuthContext } from './GoogleAuthProvider';
import {useNavigate} from 'react-router-dom';
import SECRET_API from '../secret'
import GoogleButton from 'react-google-button'


const Login = () => {

    

    const userObject = useContext(GoogleAuthContext)
    console.log("Auth", userObject.googleUser)

    const { signIn, isSignedIn } = useGoogleAuth();
    const navigate = useNavigate();

    if(isSignedIn){
      navigate("/tasks")
    }

    // useEffect(() => {
    //   handleSignIn()
    // },[])
    
   
   

  
       
        
        
    // const handleSignIn = async() => {
    //   await signIn()
    //   console.log('new', isSignedIn)
    //   if(isSignedIn){
    //     navigate("/tasks")
    //   }
      


      // const user = {userName, userPicture}
      // console.log("your user is here",user)

    //   fetch("http://localhost:8181/user/add", {
    //     method:"POST",
    //     headers:{"Content-Type": "application/json"},
    //     body: JSON.stringify(user)
    // }).then(() => {
    //     console.log("Your new user is added!!")
    // })
    //}
      
    return (
        <div className="Login-container">
             <h1>Start Planning Here</h1>
                <div className="google-button">
        
                  <GoogleButton onClick={signIn}/>
                  
                </div>
        </div>
    );
};

export default Login;