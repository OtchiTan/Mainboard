import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import Navigation from '../components/Navigation';
const axios = require('axios')

class Portfolio extends Component {
    state = {
        projects:[]
    }

    componentDidMount(){
        axios.get('https://otchi.games:8001/project')
            .then((res) => {
                this.setState({projects:res.data})

                console.log(this.state);
            })
    }

    render() {
        return (
            <Box height="90vh">
                <Navigation/>              
                <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh'}}>
                    
                </Paper>  
            </Box>
        );
    }
}

export default Portfolio;