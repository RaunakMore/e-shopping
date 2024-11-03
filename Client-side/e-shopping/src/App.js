import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import { NavBar, Products, Cart, Checkout } from './components';
import SignIn from './components/Auth/SignIn.js';
import SignUp from './components/Auth/SignUp.js';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const getProducts = async () => {
    axios.get('http://localhost:7777/files')
      .then((response) => {
        setProducts(response.data)
      
      })
  }

  const getCart = async () => {
    axios.get('http://localhost:7777/Fullcart')
      .then((response) => {
        setCart(response.data)
      
      })
  }
  
  

    const handleAddToCart = (productId, quantity) => { 

        axios.get(`http://localhost:7777/addtocart/?x=${productId}&y=${quantity}`)
         .then((response) => {
              setCart(response.data);
              console.log("addtocart is called");
      })
    };
  
    const handleUpdateCartQty = (productId, quantity) => { 

      axios.get(`http://localhost:7777/updatecart/?x=${productId}&y=${quantity}`)
       .then((response) => {
            setCart(response.data);
            console.log("updatecart is called");
    })
  };
  
    const handleRemoveFromCart= (productId) => { 

      axios.get(`http://localhost:7777/removeitem/?x=${productId}`)
       .then((response) => {
            setCart(response.data);
            console.log("removeitem is called");
    })
  };
  
    const handleEmptyCart= () => { 

      axios.get(`http://localhost:7777/deleteall`)
       .then((response) => {
            setCart(response.data);
            console.log("deleteall is called");
    })
  };
  


  useEffect(() => {
    getProducts();
    getCart();

  }, []);

  useEffect(() => {
    setUserDetails(userDetails);

  }, [userDetails]);


    return (
       <Router>
       <div >
          <NavBar totalItems={cart.totalitems} />
          <Switch>
  
            <Route exact path="/">
              <Products products = {products} onAddToCart={handleAddToCart} />
            </Route>
            
            <Route exact path="/Fullcart">
              <Cart
                caart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart ={ handleEmptyCart } 
              />
            </Route>
  
            <Route exact path="/checkout">
              <Checkout caart={cart} handleEmptyCart={handleEmptyCart} userDetails = {userDetails} />
            </Route>
  
             <Route exact path="/signin">
              <SignIn setUserDetails={setUserDetails} />
             </Route>
              
              <Route exact path="/signup">
                     <SignUp />
              </Route>


          </Switch>
         

          
      </div>
      </Router>
    
    )
  }
export default App;
