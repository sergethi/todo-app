import logo from './logo.svg';
import { useContext } from 'react'
import './App.css';
import {Routes, Route } from 'react-router-dom';
// import NaviagtionBar from './components/NavigationBar';
import Task from './components/Task';
import Login from './components/Login'
import { GoogleAuthProvider, useGoogleAuth } from'./components/GoogleAuthProvider';
// import PrivateRouter from './components/PrivateRouter'
// import PublicRouter from './components/PublicRouter'
import { BrowserRouter } from "react-router-dom";

function App() {
  // const userObject = useContext(useGoogleAuth)
  // const { isSignedIn } = useGoogleAuth();
  // console.log("Auth", userObject)
  
  return (

    <GoogleAuthProvider>
    <Routes>
     
        
        <Route path="/" exact element={<Login />}/>

        <Route path="/tasks" exact element={<Task />}/>


    </Routes>
    </GoogleAuthProvider>
    // <div className="App">
    //   <NaviagtionBar />
    //   <Task />
    // </div>
  );
}

export default App;
