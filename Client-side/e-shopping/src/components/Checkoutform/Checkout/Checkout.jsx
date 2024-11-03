import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ caart, userDetails, handleEmptyCart }) => {
  const [activeStep, setActiveStep] = useState(0);
  // const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [orderId, setOrderId] = useState('');

    const classes = useStyles();
    
useEffect(() => {
   
  setShippingData(shippingData);
  // console.log(shippingData, userDetails, caart);
  // console.log(userDetails);

}, [shippingData]);
  
useEffect(() => {
   
  setOrderId(orderId);

},[orderId]);
  
  
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep-1);

  const next = (data) => {
    // console.log(data);
    setShippingData(data);
    nextStep();
    // console.log(shippingData);
  }
  
  const sendOrderData = () => {
    
    // console.log(shippingData, userDetails, caart);

    let orderdata = {
      "address":shippingData,
      "cartitems": caart.cart,
      "userid":userDetails.email
    }
    
    // console.log(orderdata);

    const API_URL = "http://localhost:7777/saveorderdata";

        axios.post(API_URL,  orderdata)
          .then(response => {
            // console.log(response.data)
            setOrderId(response.data);
          })

    nextStep();

  }


    const Confirmation = () => (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase {userDetails.username}!</Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6">Order Id: {orderId}</Typography>
          <Typography variant="subtitle2">Please note your Order Id for further reference.
           

          </Typography>
          
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/" onClick={handleEmptyCart} >Continue Shopping</Button>
      </>
    );
  
  
    const Form = () => activeStep === 0
      ? <AddressForm  next={next} />
      : <PaymentForm shippingData={shippingData} caart={caart}
          backStep={backStep} sendOrderData={sendOrderData} />
    
  
  
    return (
        <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : caart && <Form />}
        </Paper>
      </main>
    </>
    )
}

export default Checkout;
