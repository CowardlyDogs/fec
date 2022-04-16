import React, { useState, useContext } from 'react';
import {ProductInfo, ProductContext } from './ProductInfo.jsx';

const ProductCategory = () => {
  const product = useContext(ProductContext).product;

  return (
    <div className="product-category">
      <i>{product.category}</i>
    </div>
  );
};

export default ProductCategory;