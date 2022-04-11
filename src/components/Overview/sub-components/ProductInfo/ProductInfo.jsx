import React, { useState, useContext, useEffect } from 'react';
import Price from './Price.jsx';
import StarRating from './StarRating.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductTitle from './ProductTitle.jsx';
import ProductOverview from './ProductOverview.jsx';
import Share from './Share.jsx';
import {Overview, OverviewContext } from '../../Overview.jsx';
import authorization from '../../../../../config.js';

const axios = require('axios');

export const ProductContext = React.createContext(null);


const ProductInfo = ({ productInfo, ratings }) => {
  const currentStyle = useContext(OverviewContext).currentStyle;
  const [averageRatings, setAverageRatings] = useState(0);
  const [numRatings, setNumRatings] = useState(0);


  const getAverage = () => {
    let sum = 0;
    let totalReviews = 0;
    let ratingLength = Object.keys(ratings).length;
    for (let key in ratings) {
      let tempKeyTimesValue = (Number(key) * Number(ratings[key]));
      sum += tempKeyTimesValue;
      totalReviews += Number(ratings[key]);
    }
    let average = sum / totalReviews;
    setAverageRatings(average);
  };

  const getNumRatings = () => {
    let totalRatings = 0;
    for (let rating in ratings) {
      totalRatings += Number(ratings[rating]);
    }
    setNumRatings(totalRatings);

  };

  useEffect(() => {
    getAverage();
    getNumRatings();
  }, [ratings]);

  return (
    <ProductContext.Provider value={{currentStyle: currentStyle, product: productInfo}}>
      {/* TODO: Delete Styles Selector Title */}
      <h1>Product Info</h1>
      <StarRating numRatings={numRatings} averageRatings={averageRatings} />
      <ProductCategory />
      <ProductTitle />
      <Price />
      <ProductOverview />
      <Share />
    </ProductContext.Provider>
  );
};

export default ProductInfo;