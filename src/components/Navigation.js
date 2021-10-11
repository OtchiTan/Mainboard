import { AppBar, Button, Toolbar } from '@mui/material';
import { Box } from '@mui/system';

const Navigation = () => {
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Button href="/" variant="contained">Home</Button>
                    <Box sx={{flexGrow:1}}/>
                    <Button href="/login" variant="contained">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;