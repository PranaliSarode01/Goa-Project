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
  const [id, setId] = React.useState();

  const { addRoom, add_room_data, getRoom, get_room_data, addBookings, add_bookings_data } = useContext(GoaContext)
  const handleOpen = (id) => {
    setOpen(true);
    setId(id)
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getRoom()

  }, [add_room_data, add_bookings_data])
  const submit = () => {
    console.log(selectedCheckinDate)
    console.log(selectedCheckoutDate)
    const data1 = [{ selectedCheckinDate, selectedCheckoutDate }]

    addBookings(data1, id)
    console.log(selectedCheckinDate, selectedCheckoutDate, id)


    setSelectedCheckinDate('');
    setSelectedCheckoutDate('');

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
                      {room.room_name}
                    </Typography>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {room.about_room}
                      </Typography>
                      {room.check_in ? <div> <h1>Booked</h1><h1>Check in:{room.check_in}</h1><h1>Check Out:{room.check_in}</h1></div> : <h1>Available</h1>}
                    </CardContent>

                  </CardContent>
                </CardActionArea>
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
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  format="MM/dd/yyyy"
                  name="selectedDate"
                  className={classes.textField}
                  onChange={handleDateChange}
                  value={selectedCheckinDate}
                  defaultValue={selectedCheckinDate}
                  InputLabelProps={{
                    shrink: true,
                  }} />
                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
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

          </Grid>
        </Grid>
      </div>
    </>
  );
}
