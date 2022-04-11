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


const ProductInfo = ({ productInfo, numRatings }) => {
  const currentStyle = useContext(OverviewContext).currentStyle;

  console.log(productInfo);
  console.log(numRatings);



  return (
    <ProductContext.Provider value={{currentStyle: currentStyle, product: productInfo}}>
      {/* TODO: Delete Styles Selector Title */}
      <h1>Product Info</h1>
      <StarRating numRatings={numRatings} />
      <ProductCategory />
      <ProductTitle />
      <Price />
      <ProductOverview />
      <Share />
    </ProductContext.Provider>
  );
};

export default ProductInfo;