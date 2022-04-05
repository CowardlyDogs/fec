import React, { useState, useContext } from 'react';
import {ProductInfo, ProductContext } from './ProductInfo.jsx';


function StarRating () {
  const product = useContext(ProductContext).product

  return (
    <div>
      {[...Array(5)].map((star, i) =>
      <span key={i} >&#9734;</span>)}
      <span>{'Read all TODO reviews'}</span>
    </div>
  )
}

export default StarRating;