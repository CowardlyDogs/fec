import React, { useState, useContext } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import stylesData from '../../sample-data/stylesData.js';

const StylesSelector = (props) => {
  const product = useContext(OverviewContext).styles;

  // This is to separate the styles by four
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
    <div className="Styles-Selector">
      {
        productRows.map((row, i) =>
          <div key={i} className="styles-row">
            {
              row.map((style, j) =>
                <div key={j} className="style">
                  <span className="style-title">{style.name}</span>
                  <img className="style-thumbnail" src={style.photos[0].thumbnail_url} width={50} height={50}
                    onClick={() => {
                      props.setCurrentStyle(style);
                    }} />
                </div>
              )
            }
          </div>
        )

      }
    </div>
  );
};

export default StylesSelector;