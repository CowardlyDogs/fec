import React, { useState, useContext, useEffect } from 'react';

import ProductInfo from './sub-components/ProductInfo/ProductInfo.jsx';
import StylesSelector from './sub-components/StylesSelector/StylesSelector.jsx';
import Cart from './sub-components/Cart/Cart.jsx';
import ImageGallery from './sub-components/ImageGallery/ImageGallery.jsx';
import authorization from '../../../config.js';
const axios = require('axios');

export const OverviewContext = React.createContext(null);

function Overview () {

  const [styles, setStyles] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentStyle, setCurrentStyle] = useState({});



  useEffect(() => {

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles', {
      headers: {
        Authorization: authorization.TOKEN
      }
    })
      .then((results) => {
        setStyles(results.data);
        setCurrentStyle(results.data.results[0]);
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
    <OverviewContext.Provider value={{currentStyle: currentStyle, styles: styles}}>
      <ProductInfo />
      <StylesSelector setCurrentStyle={setCurrentStyle} />
      <Cart />
      <ImageGallery />
    </OverviewContext.Provider>
  );
}

export default Overview;