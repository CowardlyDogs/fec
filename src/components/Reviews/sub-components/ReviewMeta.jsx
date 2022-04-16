import React from 'react';
import StarRating from '../../StarRatingDisplay.jsx';
let Metareview = ({product}) => {
  let totalRatings = 0;
  let ratingPoints = 0;
  for (let star in product.ratings) { totalRatings += parseInt(product.ratings[star]); ratingPoints += parseInt(star) * product.ratings[star]; }
  let averageRating = ratingPoints / totalRatings;
  if (product.ratings) {
    return (
      <div className='Meta-Reviews'>
        <p>{totalRatings} total reviews</p>
        <h3>Average User Rating</h3>
        <h5>{averageRating.toFixed(1)} stars out of 5</h5>
        <StarRating rating={(Math.round(averageRating * 4) / 4).toFixed(2)}/>
        <hr/>
        <StarRating rating='5' special='rating-small'/> <p>{product.ratings['5']} five star reviews</p>
        <hr/>
        <StarRating rating='4' special='rating-small'/> <p>{product.ratings['4']} four star reviews</p>
        <hr/>
        <StarRating rating='3' special='rating-small'/> <p>{product.ratings['3']} three star reviews</p>
        <hr/>
        <StarRating rating='2' special='rating-small'/> <p>{product.ratings['2']} two star reviews</p>
        <hr/>
        <StarRating rating='1' special='rating-small'/> <p>{product.ratings['1']} one star reviews</p>
      </div>
    );
  } else {
    return (
      <p>
        Oops!
      </p>
    );
  }
};
export default Metareview;