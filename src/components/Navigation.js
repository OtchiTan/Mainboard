import { AppBar, Button, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import Auth from '../context/Auth';
import {logout} from '../services/AuthAPI'

const Navigation = () => {
    const {isAuthenticated} = useContext(Auth)

    const handleLogout = () => {
        logout()
    }

    var homeButton = isAuthenticated ? <Button href='/home' color='inherit'>Home</Button> : null

    var logButton = isAuthenticated ? 
            <Button href='/' color='inherit' onClick={handleLogout}>Se deconnecter</Button>
        : 
            <Button href='/login' color='inherit'>Se connecter</Button>

    return (
        <AppBar sx={{bgcolor:'primary.dark'}}>
            <Toolbar variant='dense' sx={{display:'flex', justifyContent:'space-between'}}>
                <Button href='/' color='inherit'>Accueil</Button>
                {homeButton}
                {logButton}
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;