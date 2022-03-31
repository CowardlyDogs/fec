import React, { useState, useContext } from 'react';
import Overview from '../Overview.jsx';

function StylesSelector () {
  const product = useContext(OverviewContext);


  return (
    <div>
      StylesSelector
    </div>
  );
}

export default StylesSelector;