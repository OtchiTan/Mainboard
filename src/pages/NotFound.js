import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class NotFound extends Component {
    render() {
        return (
            <Box height="90vh">
                <Navigation/>              
                <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Typography variant='h3' sx={{color:'secondary.dark'}}>404 Not found</Typography>
                    <Button variant='contained' href='/' sx={{marginTop:'1rem'}}>Retour au menu</Button>
                </Paper>  
            </Box>
        );
    }
}

export default NotFound;