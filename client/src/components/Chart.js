import React, { useState, useContext, useEffect } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import GoaContext from '../context/goaContext/goaContext'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 200,

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function ImgMediaCard() {
  const classes = useStyles();

  const [selectedCheckinDate, setSelectedCheckinDate] = React.useState(Date.now());
  const [selectedCheckoutDate, setSelectedCheckoutDate] = React.useState();


  const handleDateChange = (event) => {
    setSelectedCheckinDate(event.target.value);
    console.log(selectedCheckinDate)

  };
  const handleDateChange2 = (event) => {
    setSelectedCheckoutDate(event.target.value);
    console.log(selectedCheckoutDate)

  };
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const [id, setId] = React.useState();
  const [id1, setId1] = React.useState();


  const { addRoom, add_room_data, getRoom, get_room_data, addBookings, add_bookings_data, deleteRoom, delete_room_data } = useContext(GoaContext)
  const handleOpen = (id) => {
    setOpen(true);
    setId(id)
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen1 = (id) => {
    setOpen1(true);
    setId1(id)
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  useEffect(() => {
    getRoom()
    console.log(get_room_data)
  }, [add_room_data, add_bookings_data, delete_room_data])
  useEffect(() => {
    getRoom()
    console.log(get_room_data)
  }, [])
  const submit = () => {
    console.log(selectedCheckinDate)
    console.log(selectedCheckoutDate)
    const data1 = [{ selectedCheckinDate, selectedCheckoutDate }]

    addBookings(data1, id)
    console.log(selectedCheckinDate, selectedCheckoutDate, id)


    setSelectedCheckinDate('');
    setSelectedCheckoutDate('');
    getRoom()

  }


  return (
    <>
      <div>
        <Grid container>
          <Grid item xs={6}>
            {get_room_data && get_room_data !== null ? get_room_data.map((room) =>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Room Name: {room.room_name}
                    </Typography>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        About Room:   {room.about_room}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        Members  Allowed: {room.members}
                      </Typography>
                      {room.check_in ? <div> <h1>Booked</h1><h1>Check in:{room.check_in}</h1><h1>Check Out:{room.check_out}</h1></div> : <h1>Available</h1>}
                    </CardContent>

                  </CardContent>
                </CardActionArea>
                <Button onClick={() => handleOpen1(room._id)}>DELETE ROOM</Button>

                <Button onClick={() => handleOpen(room._id)}>Add Bookings</Button>

              </Card>
            ) : ''}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >

              <div className={classes.paper}>

                <TextField
                  id="date"
                  label="Next appointment"
                  type="date"
                  format="MM/dd/yyyy"
                  name="CheckinDate"
                  className={classes.textField}
                  onChange={handleDateChange}
                  value={selectedCheckinDate}
                  defaultValue={selectedCheckinDate}
                  InputLabelProps={{
                    shrink: true,
                  }} />
                <TextField
                  id="date"
                  label="CheckoutDate"
                  type="date"
                  format="MM/dd/yyyy"
                  name="selectedDate"
                  className={classes.textField}
                  onChange={handleDateChange2}
                  value={selectedCheckoutDate}
                  defaultValue={selectedCheckoutDate}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button onClick={submit}>save</Button>
              </div>
            </Modal>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open1}
              onClose={handleClose1}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <div className={classes.paper}>
                <h1>Are you sure you want to delete</h1>
                <Button onClick={() => deleteRoom(id1)}>YES</Button>
                <Button onClick={handleClose1}>NO</Button>
              </div>


            </Modal>

          </Grid>
        </Grid>
      </div>
    </>
  );
}
