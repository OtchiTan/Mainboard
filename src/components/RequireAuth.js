import React, { useContext } from 'react';
import Auth from '../context/Auth';
import {Navigate} from 'react-router-dom'

const RequireAuth = ({needLog = true,children}) => {
    const {isAuthenticated} = useContext(Auth)

    if (needLog) {
        return isAuthenticated ? (
            children
        ) : (
            <Navigate to='/' replace={true}/>
        )
    } else {
        return !isAuthenticated ? (
            children
        ) : (
            <Navigate to='/' replace={true}/>
        )
    }
};

export default RequireAuth;