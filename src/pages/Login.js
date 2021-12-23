import { Box, Button, Paper, TextField } from '@mui/material';
import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Login extends Component {
    login(details) {
        console.log("Test");
    }

    render() {
        return (
            <Box height="90vh">
                <Navigation/>              
                <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', height:'30%'}} component='form' onSubmit={this.login}>
                        <TextField type='text' color='secondary' variant='outlined' label='Login'/>
                        <TextField type='password' color='secondary' variant='outlined' label='Password'/>
                        <Button variant='contained' type='submit'>Se connecter</Button>
                    </Box>
                </Paper>  
            </Box>
        );
    }
}

export default Login;