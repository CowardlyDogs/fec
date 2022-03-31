import React, { useState, useContext } from 'react';
import Overview from '../Overview.jsx';

function ProductInfo () {
  const product = useContext(OverviewContext);


  return (
    <div>
      ProductInfo
    </div>
  );
}

export default ProductInfo;