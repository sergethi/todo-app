import React from 'react';
import {Routes, Navigate, Route} from 'react-router-dom';
import { useGoogleAuth } from './GoogleAuthProvider';

const PrivateRouter = ({component: Component, ...rest}) => {
    const { isSignedIn } = useGoogleAuth();
    
    return (
        <div>
            <Routes>
            <Route {...rest} render={props => (
                isSignedIn ?
                <Component {...props} /> : 
                <Navigate exact from="/tasks" to="/" />
            )} /> 
            </Routes>
            
        </div>
    );
};

export default PrivateRouter;