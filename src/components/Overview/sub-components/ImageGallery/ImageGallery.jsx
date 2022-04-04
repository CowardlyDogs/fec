import React, { useState, useContext } from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import OverviewContext from '../../Overview.jsx';

function ImageGallery () {
  const product = useContext(OverviewContext);
  const [isDefault, setIsDefault] = useState(true);

  if (isDefault) {
    return (
      <div>
        <DefaultView />
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