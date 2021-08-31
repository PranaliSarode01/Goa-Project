import React, { useState, useContext, useEffect } from 'react';
import Header from '../Header';
import First from '../First';
import Third from '../Third';
import Fourth from '../Fourth';
import Five from '../Five';
import Six from '../Six';
import Seven from '../Seven';
import Eight from '../Eight';
import AuthContext from '../../context/authContext/authContext'
import GoaContext from '../../context/goaContext/goaContext';


function Landing() {
    const { loginUser, userAuth, errors, checkavailablity_data, checkavailablity } = useContext(AuthContext)
    const { addRoom, add_room_data, getRoom, get_room_data, addBookings, add_bookings_data, deleteRoom, delete_room_data } = useContext(GoaContext)

    useEffect(() => {
        checkavailablity()
        console.log(checkavailablity_data)
    }, [add_room_data, add_bookings_data, delete_room_data])
    return (
        <div>
            <Header />
            <First />
            <Third />
            <Fourth />
            <Five />
            <Six />
            <Seven />
            <Eight />
        </div>
    );
}

export default Landing;