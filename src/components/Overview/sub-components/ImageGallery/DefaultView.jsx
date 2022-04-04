import React, { useState, useContext } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';


function DefaultView() {
  const product = useContext(OverviewContext);
  console.log(product.results);

  var defaultPhoto = {};
  for (let i = 0; i < product.results.length; i++) {
    if (product.results[i]['default?']) {
      defaultPhoto = product.results[i];
      break;
    }
  }
  console.log(defaultPhoto);
  return (
    <div className="image-gallery-default">
      {/* TODO: Delete Image Gallery Title */}
      <h1>Image Gallery</h1>
      <img className="default-image" src={defaultPhoto.photos[0].url} />
      {
        product.results.map((style) =>
        <div className="thumbnail">
          <img className="photos-thumbnail" src={style.photos[0].thumbnail_url} width={50} height={50} />
        </div>
      )
      }
    </div>
  )
}

export default DefaultView;