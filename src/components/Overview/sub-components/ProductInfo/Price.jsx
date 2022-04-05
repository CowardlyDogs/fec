import React, { useState, useContext } from 'react';
import {ProductInfo, ProductContext } from './ProductInfo.jsx';

function Price () {
  const style = useContext(ProductContext).style;

  return (
    <div>
      {'$' + style.results[0]['original_price']}
    </div>
  )
}

export default Price;