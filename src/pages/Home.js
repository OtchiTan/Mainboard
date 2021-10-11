import React from 'react';
import Navigation from '../components/Navigation';
import { Button, Container } from '@material-ui/core';
import { Grid } from '@mui/material';


const Home = () => {
    return (
        <div className="page">
            <Navigation/>

            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button variant="outlined" href="http://phpmyadmin.otchi.games">PhpMyAdmin</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" href="http://portfolio.otchi.games">Portfolio</Button></Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined">...</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined">...</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined">...</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined">...</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Home;