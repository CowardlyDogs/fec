import React, { useState, useContext } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import stylesData from '../../sample-data/stylesData.js';
// import CheckIcon from '@mui/icons-material/Check';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StylesSelector = ({ setCurrentStyle, currentStyle }) => {
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
              row.map((style, j) => {

                var colors = style.name.split(' & ');
                for (let i = 0; i < colors.length; i++) {
                  if (colors[i].split(' ').length > 1) {
                    colors[i] = colors[i].split(' ')[1];
                  }
                }

                return (

                  <div key={j} className="style">

                    <span className="style-title">{style.name}</span>
                    {style.name === currentStyle.name ?
                      <div className="checkmark">
                        <CheckCircleIcon style={{fontSize: '15px'}}/>
                      </div>
                      : null}
                    <div className="style-thumbnail"
                      style={{
                        // backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
                        backgroundImage: `linear-gradient(-45deg, ${colors[1]}, ${colors[0]})`

                      }}
                      onClick={() => {
                        setCurrentStyle(style);
                      }} />
                  </div>
                );
              }
              )
            }
          </div>
        )

      }
    </div>
  );
};

export default StylesSelector;