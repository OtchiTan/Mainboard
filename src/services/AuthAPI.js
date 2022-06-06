import jwtDecode from 'jwt-decode'
import AxiosClient from './AxiosClient'
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
    return AxiosClient
        .post('loginAttempt', credentials)
        .then(res => res.data.token)
        .then(token => {
            if (tokenIsValid(token)) {
                addItem('authToken',token)
                return tokenIsValid(token)
            } else {
                return false
            }
        })
}

export function logout() {
    removeItem('authToken')
}

export function tokenIsValid(token) {
    var expiration = null
    try {
        const { exp } = jwtDecode(token)
        expiration = exp
    }
    catch (error) {
        
    }
    
    if (expiration * 1000 > new Date().getTime()) {
        return true
    } else {
        return false
    }
}

export function getToken() {
    return getItem('authToken')
}