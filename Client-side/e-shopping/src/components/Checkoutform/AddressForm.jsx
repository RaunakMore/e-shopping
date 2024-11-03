import React, { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox  }from '@material-ui/core';
import {  Grid, Box, Typography, makeStyles, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));
  

const AddressForm = ({ next }) => {

    const classes = useStyles();

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [line1, setLine1] = useState('')  
  const [line2, setLine2] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')

  const submitHandler = e => {

      e.preventDefault()
      
      let shippingData = 
        {
          "firstname": firstname,
          "lastname": lastname,
          "addressline1": line1,
          "addressline2": line2,
          "city": city,
          "pincode": pincode
      }
      
    //   console.log(shippingData);

      next(shippingData);
  
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography variant="h6" gutterBottom>Shipping address</Typography>
         
        <form  onSubmit={ submitHandler }  className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="Firstname"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            value={firstname} onChange={ e => setFirstname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Lastname"
            name="lastname"
            autoComplete="lastname"
            autoFocus
            value={lastname} onChange={ e => setLastname(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="line1"
            label="Address Line1"
            name="line1"
            autoComplete="line1"
            autoFocus
            value={line1} onChange={ e => setLine1(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="line2"
            label="Address Line2"
            name="line2"
            autoComplete="line2"
            autoFocus
            value={line2} onChange={ e => setLine2(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            autoComplete="city"
            autoFocus
            value={city} onChange={ e => setCity(e.target.value)}
          />
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pincod"
            label="Pincode"
            name="pincode"
            autoComplete="pincode"
            autoFocus
            value={pincode} onChange={ e => setPincode(e.target.value)}
          />  
                  
                  
        <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Next
          </Button>
          
        </form>
      </div>
    
    </Container>
  )

}

export default AddressForm;
