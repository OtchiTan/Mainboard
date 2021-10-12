import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import Navigation from '../components/Navigation';

const login = (e) => {
    console.log(e)
}

const Test = () => {

    return (
        <div className="page">
            <Navigation/>
            <Container sx={{ p:"5%"}} maxWidth="xs">
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={login}>
                    <TextField sx={{marginY:"1rem"}} variant="standard" label="Username"/>
                    <TextField sx={{marginY:"1rem"}} variant="standard" type="password" label="Password"/>
                    <Button type="submit" sx={{marginY:"1rem"}}>Se connecter</Button>
                </form>     
            </Container>
        </div>
    );
};

export default Test;