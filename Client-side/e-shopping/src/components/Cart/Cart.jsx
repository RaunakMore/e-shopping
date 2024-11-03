import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';
 
const Cart = ({ caart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link to="/" className={classes.link}> start adding some </Link>
    </Typography>
  );

  if (!caart.cart) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {caart.cart.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />

          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h5" color="textSecondary">Subtotal - {caart.totalprice} ₹</Typography>
        <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
                Empty cart
            </Button>
           <Button component ={Link} to="/signin" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !caart.cart.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
