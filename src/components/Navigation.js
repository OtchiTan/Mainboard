import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';

const Navigation = () => {
    return (
        <AppBar sx={{bgcolor:'primary.dark'}}>
            <Toolbar variant='dense' sx={{display:'flex', justifyContent:'space-between'}}>
                <Button href='/' color='inherit'>Accueil</Button>
                <Button href='/login' color='inherit'>Se connecter</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;