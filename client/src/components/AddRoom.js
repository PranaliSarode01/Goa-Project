import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import GoaContext from '../context/goaContext/goaContext'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
    const { addRoom, add_room_data } = useContext(GoaContext)
    const [state, setState] = useState({ room_name: '', about_room: '', members: '' })
    const { room_name, about_room, members } = state

    const HandleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }
    const submit = e => {
        e.preventDefault()
        addRoom(state)
    }
    return (
        <form className={classes.root} >
            <div
                style={{
                    border: "3px solid black",
                    width: "45rem",
                    margin: "2rem",
                    height: "26rem",
                    marginLeft: "22rem",
                    marginTop: "10rem",
                }}
            >
                <div style={{ margin: "10px", padding: "5px" }}>
                    <div style={{ margin: "10px", marginLeft: "15rem" }}>
                        <TextField
                            id="outlined-search"
                            label="Name of Room"
                            type="search"
                            variant="outlined"
                            value={room_name}
                            name="room_name"
                            onChange={HandleChange}
                        />
                    </div>

                    <TextField
                        style={{ width: "14rem", margin: "10px", marginLeft: "15rem" }}
                        id="outlined-multiline-static"
                        label="About Room"
                        multiline
                        rows={6}
                        onChange={HandleChange}

                        value={about_room}
                        name="about_room"
                        variant="outlined"
                    />

                    <div style={{ margin: "10px", marginLeft: "15rem" }}>
                        <TextField
                            id="outlined-number"
                            label="Member's Allowed"
                            onChange={HandleChange}

                            value={members}
                            name="members"
                        />
                    </div>
                    <div style={{ margin: "15px", marginLeft: "19.5rem" }}>
                        <Button variant="outlined" color="primary" onClick={submit}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>

        </form>
    );
}