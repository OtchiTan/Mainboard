import { Button, Grid } from '@mui/material';
import React from 'react';

const HomeButton = (props) => {
    return (
        <Grid item xs={4} sx={{ height:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button variant='outlined' sx={{height:'95%',width:'95%'}} href={props.href}>
                {props.name}
            </Button>
        </Grid>
    );
};

export default HomeButton;