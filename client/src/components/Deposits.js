import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Grid from '@material-ui/core/Grid'
import { makeStyles , TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <>
    <form className={classes.container} noValidate>
    <TextField
      id="datetime-local"
      label="From Date"
      type="datetime-local"
      defaultValue="2001-11-22T02:45"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      
    />
  </form>
  <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="To Date"
          type="datetime-local"
          defaultValue="2001-06-15T04:35"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    
</>
  );
}