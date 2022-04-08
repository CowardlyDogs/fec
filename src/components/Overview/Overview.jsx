import React, { useState, useContext, useEffect } from 'react';

import ProductInfo from './sub-components/ProductInfo/ProductInfo.jsx';
import StylesSelector from './sub-components/StylesSelector/StylesSelector.jsx';
import Cart from './sub-components/Cart/Cart.jsx';
import ImageGallery from './sub-components/ImageGallery/ImageGallery.jsx';
import authorization from '../../../config.js';
import APIHelpers from '../APIHelpers.js';

export const OverviewContext = React.createContext(null);

function Overview () {

  const [styles       , setStyles       ] = useState({});
  const [currentStyle , setCurrentStyle ] = useState({});
  const [productInfo  , setProductInfo  ] = useState({});
  const [loading      , setLoading      ] = useState(true);



  useEffect(() => {

    APIHelpers.getStyles(65631, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setStyles(res);
        setCurrentStyle(res.results[0]);
        setLoading(false);
      }
    })

    APIHelpers.getProductInfo(65631, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setProductInfo(res);
      }
    })

  }, []);

  if (loading) {
    return (null)
  }


  return (
    <OverviewContext.Provider value={{currentStyle: currentStyle, styles: styles}}>
      <ProductInfo productInfo={productInfo}/>
      <StylesSelector setCurrentStyle={setCurrentStyle} />
      <Cart />
      <ImageGallery />
    </OverviewContext.Provider>
  );
}

export default Overview;