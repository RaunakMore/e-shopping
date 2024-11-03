import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ caart }) => {
  
    return(
        <>
            <Typography variant="h6" gutterBottom>Review Order summary</Typography>
            <List disablePadding>
                     {caart.cart.map((product) => (
                        <ListItem style={{ padding: '10px 0' }} key={product.name}>
                            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                            <Typography variant="body2">₹{product.price}</Typography>
                        </ListItem>
                     ))}

                    <ListItem style={{ padding: '10px 0' }}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        ₹ {caart.totalprice}
                        </Typography>
                    </ListItem>
            </List>
        </>
    )
}

export default Review;
