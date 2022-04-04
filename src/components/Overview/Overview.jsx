import React, { useState, useContext, useEffect } from 'react';

import ProductInfo from './sub-components/ProductInfo/ProductInfo.jsx';
import StylesSelector from './sub-components/StylesSelector/StylesSelector.jsx';
import Cart from './sub-components/Cart/Cart.jsx';
import ImageGallery from './sub-components/ImageGallery/ImageGallery.jsx';
import authorizaion from '../../../config.js';
const axios = require('axios');

export const OverviewContext = React.createContext(null);

function Overview () {

  const [styles, setStyles] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        Authorization: authorizaion.TOKEN
      }
    })
      .then((results) => {
        setStyles(results.data);
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
    <OverviewContext.Provider value={styles}>
      <ProductInfo />
      <StylesSelector />
      <Cart />
      <ImageGallery />
    </OverviewContext.Provider>
  );
}

export default Overview;