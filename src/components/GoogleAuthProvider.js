import React, {useEffect, useState} from 'react';
import { useGoogleLogin } from 'react-use-googlelogin'
import SECRET_API from '../secret'

export const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({children}) => {

    // const [userName, setUserName] = useState('')
    // const [userEmail, setUserEmail] = useState('')
    // const [userPicture, setUserPicture] = useState('')

    const googleAuth = useGoogleLogin({
        clientId: SECRET_API, 
      })

      
        try {
            console.log("user", googleAuth.googleUser.profileObj)
           
           
          } catch (error) {
              console.log(error)
          }



    return (
        <GoogleAuthContext.Provider value={googleAuth}>
        {children}
      </GoogleAuthContext.Provider>
    );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)