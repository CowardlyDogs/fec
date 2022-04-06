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


function ProductInfo () {
  const currentStyle = useContext(OverviewContext).currentStyle;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/', {
      headers: {
        Authorization: authorization.TOKEN
      }
    })
      .then((results) => {
        setProduct(results.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      })

  }, []);

  if (loading) {
    return (<div></div>)
  }


  return (
    <ProductContext.Provider value={{currentStyle: currentStyle, product: product}}>
      {/* TODO: Delete Styles Selector Title */}
      <h1>Product Info</h1>
      <StarRating />
      <ProductCategory />
      <ProductTitle />
      <Price />
      <ProductOverview />
      <Share />
    </ProductContext.Provider>
  );
}

export default ProductInfo;