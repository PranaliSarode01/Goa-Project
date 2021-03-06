import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import setToken from '../../utils/setToken'
import axios from 'axios'

import {
    SUCCESS_LOGIN,
    SUCCESS_REGISTER,
    ERROR_LOGIN,
    ERROR_REGISTER,
    USER_DATA,
    ERROR_USER_DATA,
    LOGOUT,
    CHECK_AVAILABLITY_ERROR,
    CHECK_AVAILABLITY_SUCCESS,
} from '../../types'


const AuthState = (props) => {
    const initialState = {
        user: null,
        userAuth: false,
        errors: null,
        checkavailablity_data: null

    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // function to register user
    const registerUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/signup', userData, config)
            dispatch({
                type: SUCCESS_REGISTER,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: ERROR_REGISTER,
                payload: error.response.data
            })
        }
    }

    // function to login user 

    const loginUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/auth', userData, config)

            dispatch({
                type: SUCCESS_LOGIN,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: ERROR_LOGIN,
                payload: error.response.data
            })
        }
    }

    // get user
    const getUser = async () => {
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        try {
            const res = await axios.get('/auth')
            dispatch({
                type: USER_DATA,
                payload: res.data.user
            })
        } catch (error) {
            dispatch({
                type: ERROR_USER_DATA,
                payload: error.response.data
            })
        }
    }
    const checkavailablity = async userData => {

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.get('/signup/check_availablity', userData, config)
            console.log(res.data)
            dispatch({
                type: CHECK_AVAILABLITY_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: CHECK_AVAILABLITY_ERROR,
                payload: error.response.data
            })
        }
    }
    // function to logout 
    const logout = () => {
        window.location.reload(true);

        dispatch({
            type: LOGOUT
        })
    }
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                userAuth: state.userAuth,
                errors: state.errors,
                checkavailablity_data: state.checkavailablity_data,

                checkavailablity,
                registerUser,
                loginUser,
                getUser,
                logout

            }}
        >{props.children}</AuthContext.Provider>
    )
}

export default AuthState
