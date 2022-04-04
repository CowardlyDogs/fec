import React, { useState, useContext } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import stylesData from '../../sample-data/stylesData.js';

function StylesSelector() {
  const product = useContext(OverviewContext);
  console.log(product);



  return (
    <div>
      {/* TODO: Delete Styles Selector Title */}
      <h1>Styles Selector</h1>
      {
        product.results.map((style) => {
          return (
            <div>
              <span className="style-title">{style.name}</span>
              <img className="style-thumbnail" src={style.photos[0].thumbnail_url} width={50} height={50} />
            </div>
          )
        })
      }
    </div>
  );
}

export default StylesSelector;