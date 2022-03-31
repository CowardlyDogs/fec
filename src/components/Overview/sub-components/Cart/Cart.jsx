import React, { useState, useContext } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';
import OverviewContext from '../../Overview.jsx';

function Cart () {
  const product = useContext(OverviewContext);

  return (
    <div>
      Cart
    </div>
  );
}

export default Cart;