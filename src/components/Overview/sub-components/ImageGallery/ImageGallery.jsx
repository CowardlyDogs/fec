import React, { useState, useContext } from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import { Overview, OverviewContext } from '../../Overview.jsx';

const ImageGallery = () => {
  const currentStyle = useContext(OverviewContext).currentStyle;
  const [isDefault, setIsDefault] = useState(true);
  const [expandedPhoto, setExpandedPhoto] = useState({});




  return (
    <div>
      {
        !isDefault ?
          <ExpandedView setIsDefault={setIsDefault} expandedPhoto={expandedPhoto} photos={currentStyle.photos} />
          : null
      }
      <DefaultView currentStyle={currentStyle} setIsDefault={setIsDefault} setExpandedPhoto={setExpandedPhoto} />
    </div>
  );

};

export default ImageGallery;