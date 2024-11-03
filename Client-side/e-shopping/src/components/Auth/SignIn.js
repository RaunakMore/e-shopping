import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox  }from '@material-ui/core';
import { Link, Grid, Box, Typography, makeStyles, Container } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


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

export default function Signin({setUserDetails}) {
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState("Enter Credentials")     

  let history = useHistory();


  const submitHandler = e => {

    e.preventDefault()

    const API_URL = "http://localhost:7777/api/auth/";

    let username = email;

     axios.post(API_URL + "signin", { username, password, })
       .then((response) => {
         if (response.data.accessToken) {
             
           setUserDetails(response.data);
          //  console.log(response.data);
           history.push("/checkout");
         }
       })
       .catch(error => {
         setMsg("Incorrect Username or Password. Try again!");
        //  console.log(error.toJSON());
       })
    
   
    
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  onSubmit={ submitHandler }  className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email} onChange={ e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} onChange={ e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {msg}
            </Grid>
            <Grid item>
              <Link href ="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}