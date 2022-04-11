import React, { useState, useContext, useEffect } from 'react';

import ProductInfo from './sub-components/ProductInfo/ProductInfo.jsx';
import StylesSelector from './sub-components/StylesSelector/StylesSelector.jsx';
import Cart from './sub-components/Cart/Cart.jsx';
import ImageGallery from './sub-components/ImageGallery/ImageGallery.jsx';
import authorization from '../../../config.js';
import APIHelpers from '../APIHelpers.js';
import './styles.css';

export const OverviewContext = React.createContext(null);

const Overview = ({ productId }) => {

  const [styles, setStyles] = useState({});
  const [currentStyle, setCurrentStyle] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    // 65631 original
    // 65635 for styles with lots of pictures
    APIHelpers.getStyles(65635, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setStyles(res);
        setCurrentStyle(res.results[0]);
        setLoading(false);
      }
    });

    APIHelpers.getProduct(65635, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        setProductInfo(res);
      }
    });

  }, []);

  if (loading) {
    return (null);
  }


  return (
    <OverviewContext.Provider value={{ currentStyle: currentStyle, styles: styles }}>
      <ProductInfo productInfo={productInfo} />
      <StylesSelector setCurrentStyle={setCurrentStyle} />
      <Cart />
      <ImageGallery />
    </OverviewContext.Provider>
  );
};

export default Overview;