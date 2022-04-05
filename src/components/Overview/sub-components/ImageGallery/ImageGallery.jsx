import React, { useState, useContext } from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import {Overview, OverviewContext } from '../../Overview.jsx';

function ImageGallery () {
  const currentStyle = useContext(OverviewContext).currentStyle;
  const [isDefault, setIsDefault] = useState(true);

  if (isDefault) {
    return (
      <div>
        <DefaultView currentStyle={currentStyle} />
      </div>
    )
  } else {
    return (
      <div>
        <ExpandedView />
      </div>
    );
  }
}

export default ImageGallery;