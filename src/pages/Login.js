import { Button, Container, TextField } from '@mui/material';
import Navigation from '../components/Navigation';
import AuthContext from '../components/AuthContext'
import Axios from 'axios'
import { useContext, useEffect, useState } from 'react';

const Login = () => {
    const [token, setToken] = useContext(AuthContext)
    const [refLogin,setRefLogin] = useState("")
    const [refPwd,setRefPwd] = useState("")
    const [appState, setAppState] = useState()

    const Attempt = () => {
        useEffect(() => {
            Axios.post('http://localhost:8000/').then((res) => {
                var test = res.data.map()
                setAppState(test)
            })
        })
        
        setToken(appState)

        console.log(token)
    }
    const loginChangeHandler = (event) => {
        setRefLogin(event.target.value)
    }
    const pwdChangeHandler = (event) => {
        setRefPwd(event.target.value)
    } 

    return (
        <div className="page">
            <Navigation/>
            <Container sx={{ p:"5%"}} maxWidth="xs">
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={Attempt}>
                    <TextField sx={{marginY:"1rem"}} variant="standard" label="Username" value={refLogin} onChange={loginChangeHandler}/>
                    <TextField sx={{marginY:"1rem"}} variant="standard" type="password" label="Password" value={refPwd} onChange={pwdChangeHandler}/>
                    <Button type="submit" sx={{marginY:"1rem"}}>Se connecter</Button>
                </form>     
            </Container>
        </div>
    );
};

export default Login;
