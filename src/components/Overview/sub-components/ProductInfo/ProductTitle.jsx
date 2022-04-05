import React, { useState, useContext } from 'react';
import {ProductInfo, ProductContext } from './ProductInfo.jsx';

function ProductTitle () {
  const product = useContext(ProductContext).product

  return (
    <div>
      {product.name}
    </div>
  )
}

export default ProductTitle;