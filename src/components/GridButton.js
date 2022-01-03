import { Button, Grid } from '@mui/material';
import React from 'react';

const GridButton = ({href,name,xs}) => {
    return (
        <Grid item xs={xs} sx={{ height:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button variant='outlined' sx={{height:'95%',width:'95%'}} href={href}>
                {name}
            </Button>
        </Grid>
    );
};

export default GridButton;