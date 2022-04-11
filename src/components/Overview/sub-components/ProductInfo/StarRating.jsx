import React, { useState, useContext } from 'react';
import { ProductInfo, ProductContext } from './ProductInfo.jsx';
import SharedStarRating from '../../../Reviews/sub-components/StarRating.jsx';


const StarRating = ({ numRatings, averageRatings }) => {
  const product = useContext(ProductContext).product;


  return (
    <div>
      <SharedStarRating rating={averageRatings} />
      <span>{`Read all ${numRatings} reviews`}</span>
    </div>
  );
};

export default StarRating;