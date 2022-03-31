import React, { useState, useContext } from 'react';
import Overview from '../Overview.jsx';

function Cart () {
  const product = useContext(OverviewContext);

  return (
    <div>
      Cart
    </div>
  );
}

export default Cart;