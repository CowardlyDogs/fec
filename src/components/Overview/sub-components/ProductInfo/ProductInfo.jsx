import React, { useState, useContext } from 'react';
import Price from './Price.jsx';
import StarRating from './StarRating.jsx';
import ProductCategory from './ProductCategory.jsx';
import ProductTitle from './ProductTitle.jsx';
import ProductOverview from './ProductOverview.jsx';
import Share from './Share.jsx';
import OverviewContext from '../../Overview.jsx';


function ProductInfo () {
  const product = useContext(OverviewContext);


  return (
    <div>
    </div>
  );
}

export default ProductInfo;