import React, { useState, useContext, useEffect } from 'react';

import ProductInfo from './sub-components/ProductInfo/ProductInfo.jsx';
import StylesSelector from './sub-components/StylesSelector/StylesSelector.jsx';
import Cart from './sub-components/Cart/Cart.jsx';
import ImageGallery from './sub-components/ImageGallery/ImageGallery.jsx';
import authorization from '../../../config.js';
import APIHelpers from '../APIHelpers.js';

export const OverviewContext = React.createContext(null);

const Overview = ({ productId }) => {

  const [styles, setStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState(0);



  useEffect(() => {

    // 65631 original
    // 65635 for styles with lots of pictures
    APIHelpers.getStyles(productId, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setStyles(res);
        setCurrentStyle(res.results[0]);
        setLoading(false);
      }
    });

    APIHelpers.getProduct(productId, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setProductInfo(res);
      }
    });

    APIHelpers.getRatingsMeta(productId, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setRatings(res.ratings);
      }
    });

  }, [productId]);

  if (loading) {
    return (null);
  }


  return (
    <OverviewContext.Provider value={{ currentStyle: currentStyle, styles: styles }}>
      <div className="sidebar">
        <ProductInfo productInfo={productInfo} ratings={ratings} />
        <StylesSelector setCurrentStyle={setCurrentStyle} currentStyle={currentStyle} />
        <Cart />
      </div>
      <ImageGallery />
    </OverviewContext.Provider>
  );
};

export default Overview;