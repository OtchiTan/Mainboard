import { AppBar, Button, Toolbar } from '@mui/material';
import { Box } from '@mui/system';

const Navigation = () => {
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Button href="/" color="inherit">Home</Button>
                    <Box sx={{flexGrow:1}}/>
                    <Button href="/login" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;