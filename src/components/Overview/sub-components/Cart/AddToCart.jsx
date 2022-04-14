import React, { useState, useContext } from 'react';
import { Cart, CartContext } from './Cart.jsx';

const AddToCart = (props) => {
  const product = useContext(CartContext);


  return (
    <div className="add-to-cart">
      <button
        type="button"
        className="add-to-cart-button"
        onClick={() => {
          !props.sizeSelected ?
            props.toggleCart(true)
            : null;
        }}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;