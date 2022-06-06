import { Box, Button, FormControl, FormHelperText, Paper, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import Navigation from '../components/Navigation';
import Auth from '../context/Auth';
import { login } from '../services/AuthAPI';

const Login = () => {
    const { setIsAuthenticated } = useContext(Auth)

    const [user, setUser] = useState({
        login:'',
        pwd:''
    })

    const [errorMessage, setErrorMessage] = useState(null)
    const [error, setError] = useState(false)

    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
    
        setUser({...user, [name]: value})
    }
    
    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const res = await login(user)
            if (res) {
                setIsAuthenticated(res)
            } else {
                setErrorMessage('Wrong Login Or Password')
                setError(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Box height="90vh">
            <Navigation/>              
            <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <FormControl component='form' error={error} action='/' sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', height:'30%'}}>
                    <FormHelperText>{errorMessage}</FormHelperText>
                    <TextField type='text' name='login' color='secondary' variant='outlined' label='Login' onChange={handleChange}/>
                    <TextField type='password' name='pwd' color='secondary' variant='outlined' label='Password' onChange={handleChange}/>
                    <Button type='submit' variant='contained' onClick={handleSubmit}>Se connecter</Button>
                </FormControl>
            </Paper>  
        </Box>
    );
};

export default Login;
