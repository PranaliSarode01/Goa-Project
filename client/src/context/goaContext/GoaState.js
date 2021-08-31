import React, { useReducer } from 'react'
import GoaContext from './goaContext'
import GoaReducer from './goaReducer'

import setToken from '../../utils/setToken'
import axios from 'axios'

import {
    ADD_ROOM_SUCCESS,
    ADD_ROOM_ERROR,
    GET_ROOM_SUCCESS,
    GET_ROOM_ERROR,
    GET_CLASS_ERROR,
    ADD_BOOKINGS_SUCCESS,
    ADD_BOOKINGS_ERROR,

    DELETE_ROOM_SUCCESS,
    DELETE_ROOM_ERROR
} from '../../types'


const GoaState = (props) => {
    const initialState = {

        errors: null,
        add_room_data: null,
        get_room_data: null,
        add_bookings_data: null,
        delete_room_data: null,
    }
    const [state, dispatch] = useReducer(GoaReducer, initialState)

    // function to register user
    const addRoom = async userData => {
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/goa/add_room', userData, config)
            dispatch({
                type: ADD_ROOM_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: ADD_ROOM_ERROR,
                payload: error.response.data
            })
        }
    }
    const addBookings = async (data1, id) => {
        console.log(data1, id)
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/goa/add_bookings/${id}`, data1, config)
            dispatch({
                type: ADD_BOOKINGS_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: ADD_BOOKINGS_ERROR,
                payload: error.response.data
            })
        }
    }

    // function to login user 

    const getRoom = async userData => {
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.get('/goa/getRoom', userData, config)

            dispatch({
                type: GET_ROOM_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: GET_ROOM_ERROR,
                payload: error.response.data
            })
        }
    }

    const deleteRoom = async id => {
        if (localStorage.token) {
            setToken(localStorage.token)
        }
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.delete(`/goa/delete_room/${id}`, config)

            dispatch({
                type: DELETE_ROOM_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: DELETE_ROOM_ERROR,
                payload: error.response.data
            })
        }
    }
    // get user




    return (
        <GoaContext.Provider
            value={{
                add_room_data: state.add_room_data,
                get_room_data: state.get_room_data,
                delete_room_data: state.delete_room_data,

                addRoom,
                getRoom,
                addBookings,

                deleteRoom


            }}
        >{props.children}</GoaContext.Provider>
    )
}

export default GoaState
