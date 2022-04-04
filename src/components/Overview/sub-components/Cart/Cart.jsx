import React, { useState, useContext } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';
import { Overview, OverviewContext } from '../../Overview.jsx';

export const CartContext = React.createContext(null);


function Cart() {
  const product = useContext(OverviewContext);

  return (
    <CartContext.Provider value={product}>
      {/* TODO: Delete Cart Title */}
      <h1>Add to Cart</h1>
      <SizeSelector />
      <QuantitySelector />
      <AddToCart />
    </CartContext.Provider>
  );
}

export default Cart;