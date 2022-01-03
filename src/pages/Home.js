import { Box, Grid, Paper } from '@mui/material';
import React, { Component } from 'react';
import GridButton from '../components/GridButton';
import Navigation from '../components/Navigation';

class Home extends Component {
    render() {
        return (
            <Box height="90vh">
                <Navigation/>              
                <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh'}}>
                    <Grid container sx={{height:'100%', width:'100%'}}>
                        <GridButton xs={4} name="PhpMyAdmin" href="https://pma.otchi.games"/>
                        <GridButton xs={4} name="Portfolio" href="https://portfolio.otchi.games"/>
                        <GridButton xs={4} name="Github" href="https://github.com/OtchiTan"/>
                        <GridButton xs={4} name="Gitlab" href="https://gitlab.com/OtchiTan"/>
                        <GridButton xs={4}/>
                        <GridButton xs={4}/>
                    </Grid>
                </Paper>  
            </Box>
        );
    }
}

export default Home;