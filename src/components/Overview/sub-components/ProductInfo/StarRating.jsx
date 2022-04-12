import React, { useState, useContext } from 'react';
import { ProductInfo, ProductContext } from './ProductInfo.jsx';
import StarRatingDisplay from '../../../StarRatingDisplay.jsx';


const StarRating = ({ numRatings, averageRatings }) => {
  const product = useContext(ProductContext).product;


  return (
    <div>
      <StarRatingDisplay rating={averageRatings} special="rating-overview"/>
      <span className="star-text"> {`Read all ${numRatings} reviews`}</span>
    </div>
  );
};

export default StarRating;