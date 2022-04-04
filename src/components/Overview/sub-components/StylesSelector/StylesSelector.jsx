import React, { useState, useContext } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import stylesData from '../../sample-data/stylesData.js';

function StylesSelector() {
  const product = useContext(OverviewContext);

  var productRows = [];
  var groupedStyles = [];
  var numStyles = 0;
  for (let i = 0; i < product.results.length; i++) {
    if (groupedStyles.length === 4) {
      productRows.push(groupedStyles);
      groupedStyles = [];
      numStyles = 0;
    }

    groupedStyles.push(product.results[i]);
    numStyles += 1;

  }
  if (groupedStyles.length > 0) {
    productRows.push(groupedStyles);
  }

  return (
    <div className="styles-selector">
      {/* TODO: Delete Styles Selector Title */}
      <h1>Styles Selector</h1>
      {
        productRows.map((row) =>
          <div className="styles-row">
            {
              row.map((style) =>
                <div className="style">
                  <span className="style-title">{style.name}</span>
                  <img className="style-thumbnail" src={style.photos[0].thumbnail_url} width={50} height={50} />
                </div>
              )
            }
          </div>
        )

      }
    </div>
  );
}

export default StylesSelector;