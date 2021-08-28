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

  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };
  const [open, setOpen] = React.useState(false);
  const { addRoom, add_room_data, getRoom, get_room_data } = useContext(GoaContext)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getRoom()
    console.log(selectedDate)
  }, [add_room_data])

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
                    </CardContent>

                  </CardContent>
                </CardActionArea>
                <Button onClick={handleOpen}>Add Bookings</Button>

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


                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  className={classes.textField}
                  onChange={handleDateChange}
                  value={selectedDate}

                  InputLabelProps={{
                    shrink: true,
                  }}
                />

              </div>

            </Modal>

          </Grid>
        </Grid>
      </div>
    </>
  );
}
