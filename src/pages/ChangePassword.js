import { Button, FormControl, FormHelperText, OutlinedInput, Paper, TextField, useFormControl } from '@mui/material';
import { Box } from '@mui/system';
import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { getToken } from '../services/AuthAPI';
const axios = require('axios')

function MyFormHelper() {
    const {required} = useFormControl() || {}

    const helperText = React.useMemo(() => {
        if(required) {
            return 'Sah'
        }
    }, [required])

    return <FormHelperText>{helperText}</FormHelperText>
}

const ChangePassword = () => {
    const [user, setUser] = useState({
        login:'',
        oldPwd:'',
        newPwd1:'',
        newPwd2:''
    })

    const decodeToken = jwtDecode(getToken())

    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
    
        setUser({...user, [name]: value, login:decodeToken.login})
    }

    const enterSubmit = (e) => {
        if(e && e.key === "Enter") {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        if (user.oldPwd === '') {
            console.log('Champ 1 manquant');
            return
        }

        if (user.newPwd1 === '') {
            console.log('Champ 2 manquant');
            return

        }

        if (user.newPwd2 === '') {
            console.log('Champ 3 manquant');
            return            
        }

        axios.post('http://localhost:8000/changePassword/',user)
            .then((res) => {
                console.log(res);
            })
    }

    return (
        <Box height="90vh">
            <Navigation/>              
            <Paper sx={{marginTop:'5rem', marginX:'3rem', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box sx={{height:'50%', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                    <FormControl>
                        <OutlinedInput name='oldPwd' type='password' placeholder='Ancien mot de passe' onChange={handleChange} onKeyPress={enterSubmit}/>
                        <MyFormHelper/>
                    </FormControl>

                    <FormControl>
                        <TextField name='newPwd1' type='password' label='Nouveau mot de passe' onChange={handleChange} onKeyPress={enterSubmit}/>
                    </FormControl>

                    <FormControl>
                        <TextField name='newPwd2' type='password' label='Nouveau mot de passe' onChange={handleChange} onKeyPress={enterSubmit}/>
                    </FormControl>
                    <Button variant='contained' onClick={handleSubmit}>Changer de mot de passe</Button>
                </Box>
            </Paper>  
        </Box>
    );
};

export default ChangePassword;