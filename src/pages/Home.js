import React from 'react';
import Navigation from '../components/Navigation';
import { Button, Container, Box } from '@mui/material';


const Home = () => {
    return (
        <Box>
            <Navigation/>

            <Container maxWidth="md" sx={{
                    p:"5%",
                    display:"grid",
                    gap:1,
                    gridTemplate:"repeat(2,1fr) / repeat(3,1fr)"
                }}>
                <Button variant="outlined" href="http://pma.otchi.games">PhpMyAdmin</Button>
                <Button variant="outlined" href="http://portfolio.otchi.games">Portfolio</Button>
                <Button variant="outlined" href="https://github.com/OtchiTan">Github</Button>
                <Button variant="outlined" href="https://gitlab.com/OtchiTan">Gitlab</Button>
                <Button variant="outlined">...</Button>
                <Button variant="outlined">...</Button>
            </Container>
        </Box>
    );
};

export default Home;