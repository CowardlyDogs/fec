import React, { useState, useContext } from 'react';
import {ProductInfo, ProductContext } from './ProductInfo.jsx';

function ProductOverview () {
  const product = useContext(ProductContext).product;

  return (
    <p>
      {product.description}
    </p>
  )
}

export default ProductOverview;