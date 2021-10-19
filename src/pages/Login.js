import { Button, Container, TextField } from '@mui/material';
import Navigation from '../components/Navigation';
import Axios from 'axios'
import { useState } from 'react';

const Login = () => {
    const [refLogin,setRefLogin] = useState("")
    const [refPwd,setRefPwd] = useState("")
    const Attempt = () => {
        const body = {
            login:refLogin,
            pwd:refPwd
        }
        /*Axios.post('localhost:8000',body)
                .then((res) => {
                    console.log(res)
                })*/
        Axios({
            method:'POST',
            url:'http://localhost:8000',
            data:body
        })
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
/*

                    <TextField sx={{marginY:"1rem"}} variant="standard" label="Username" ref={refLogin}/>
                    <TextField sx={{marginY:"1rem"}} variant="standard" type="password" label="Password" ref={refPwd}/>
                    <Button type="submit" sx={{marginY:"1rem"}}>Se connecter</Button>
*/

export default Login;
