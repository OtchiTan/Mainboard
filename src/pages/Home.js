import { Box, Grid, Paper } from '@mui/material';
import React, { Component } from 'react';
import HomeButton from '../components/HomeButton';
import Navigation from '../components/Navigation';

class Home extends Component {
    render() {
        return (
            <Box height="90vh">
                <Navigation/>              
                <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh'}}>
                    <Grid container sx={{height:'100%', width:'100%'}}>
                        <HomeButton name="PhpMyAdmin" href="https://pma.otchi.games"/>
                        <HomeButton name="Portfolio" href="https://portfolio.otchi.games"/>
                        <HomeButton name="Github" href="https://github.com/OtchiTan"/>
                        <HomeButton name="Gitlab" href="https://gitlab.com/OtchiTan"/>
                        <HomeButton/>
                        <HomeButton/>
                    </Grid>
                </Paper>  
            </Box>
        );
    }
}

export default Home;