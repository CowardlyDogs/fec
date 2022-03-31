import React, { useState, useContext } from 'react';

import ProductInfo from './sub-components/ProductInfo/ProductInfo.jsx';
import StylesSelector from './sub-components/StylesSelector/StylesSelector.jsx';
import Cart from './sub-components/Cart/Cart.jsx';
import ImageGallery from './sub-components/ImageGallery/ImageGallery.jsx';

const OverviewContext = React.createContext(null);

function Overview () {

  return (
    <OverviewContext.Provider>
      <ProductInfo />
      <StylesSelector />
      <Cart />
      <ImageGallery />
    </OverviewContext.Provider>
  );
}

export default Overview;