import React, { useState, useContext } from 'react';
import {ProductInfo, ProductContext } from './ProductInfo.jsx';

const ProductTitle = () => {
  const product = useContext(ProductContext).product;

  return (
    <h2 className="product-title">
      {product.name}
    </h2>
  );
};

export default ProductTitle;