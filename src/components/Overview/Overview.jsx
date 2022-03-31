import React, { useState, useContext } from 'react';

import ProductInfo from './sub-components/ProductInfo.jsx';
import StylesSelector from './sub-components/StylesSelector.jsx';
import Cart from './sub-components/Cart.jsx';
import ImageGallery from './sub-components/ImageGallery.jsx';

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