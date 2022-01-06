import React from 'react';
import {Routes,Route, Navigate} from 'react-router-dom';
import { useGoogleAuth } from './GoogleAuthProvider';

const PublicRouter = ({component: Component, ...rest}) => {
    const { isSignedIn } = useGoogleAuth();
    console.log("is5", isSignedIn)
    
    return (
        <div>
            <Routes>
            <Route {...rest} render={props => (
                !isSignedIn ?
                <Component {...props} /> : 
                <Navigate exact to="/tasks" />
            )} /> 
            </Routes>
            
        </div>
    );
};

export default PublicRouter;