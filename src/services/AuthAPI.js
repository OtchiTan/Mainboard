import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { addItem, getItem, removeItem } from './LocalStorage'

export function hasAuthenticated() {
    const token = getItem('authToken')
    const isValidToken = token ? tokenIsValid(token) : false

    if (!isValidToken) {
        removeItem('authToken')
    }
    
    return isValidToken
}

export function login(credentials) {
    return axios
        .post('https://otchi.games:8000/loginAttempt', credentials)
        .then(res => res.data.token)
        .then(token => {
            addItem('authToken',token)
            return tokenIsValid(token)
        })
}

export function logout() {
    removeItem('authToken')
}

export function tokenIsValid(token) {
    const {exp} = jwtDecode(token)

    if (exp * 1000 > new Date().getTime()) {
        return true
    } else {
        return false
    }
}

export function getToken() {
    return getItem('authToken')
}