import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';

const Test = () => {
    return (
        <div className="page">
            <Navigation/>
            <Container sx={{display:"flex",flexDirection:"column", p:"5%"}} maxWidth="xs">
                <TextField variant="standard" label="Username"/>
                <TextField variant="standard" type="password" label="Password"/>
                <Button>Se connecter</Button>     
            </Container>
        </div>
    );
};

export default Test;