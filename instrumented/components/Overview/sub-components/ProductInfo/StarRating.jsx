import React, { useState, useContext } from 'react';
import { ProductInfo, ProductContext } from './ProductInfo.jsx';
import StarRatingDisplay from '../../../StarRatingDisplay.jsx';


const StarRating = ({ numRatings, averageRatings }) => {
  const product = useContext(ProductContext).product;
  const [isHover, setIsHover] = useState(false);

  const changeText = (e) => {

    e.target.style.color = 'blue';
    e.target.style.textDecoration = 'underline';
  };

  return (
    <div className="star-rating">
      <StarRatingDisplay rating={averageRatings} special="rating-overview"/>
      <span className="star-text"
        onClick={() => document.getElementsByClassName('review')[0].scrollIntoView()}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={isHover ? {
          color: 'blue',
          textDecoration: 'underline'
        } : null}
      > {`Read all ${numRatings} reviews`}</span>
    </div>
  );
};

export default StarRating;