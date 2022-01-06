import  React, {useContext, useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import { useGoogleAuth, GoogleAuthContext } from './GoogleAuthProvider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function NaviagtionBar() {
  
    const [userName, setUserName] = useState('')
    const [userPicture, setUserPicture] = useState('')

    const userObject = useContext(GoogleAuthContext)
    //console.log("Auth", userObject.googleUser.profileObj.name)
    const { signOut, isSignedIn } = useGoogleAuth();
    const navigate = useNavigate();
    console.log("is2", isSignedIn)

    
    useEffect(() => {
        if(!isSignedIn){ 
          navigate("/")
        }
        else{
        setUserName(userObject.googleUser.profileObj.name)
        setUserPicture(userObject.googleUser.profileObj.imageUrl)
        }  

    },[])
    
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="inherit" style={{ borderRadius: "80px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome {userName}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={userPicture} />
            </Stack>
            {/* <Link to="/"> */}
          <Button color="inherit" onClick={signOut}>Logout</Button>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
