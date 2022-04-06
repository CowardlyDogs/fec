import React, { useState, useContext } from 'react';
import {ProductInfo, ProductContext } from './ProductInfo.jsx';

function ProductCategory () {
  const product = useContext(ProductContext).product;

  return (
    <div>
      {product.category}
    </div>
  )
}

export default ProductCategory;