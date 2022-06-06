import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import GridButton from '../components/GridButton';
import Navigation from '../components/Navigation';

const Panel = () => {
    return (
        <Box height="90vh">
            <Navigation/>              
            <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh'}}>
                <Grid container sx={{height:'100%', width:'100%'}}>
                    <GridButton xs={3} name='Portfolio' href='/portfolio'/>
                    <GridButton xs={3} name='Password' href='/changePassword'/>
                    <GridButton xs={3}/>
                    <GridButton xs={3}/>
                    <GridButton xs={3}/>
                    <GridButton xs={3}/>
                    <GridButton xs={3}/>
                    <GridButton xs={3}/>
                </Grid>
            </Paper>  
        </Box>
    );
};

export default Panel;