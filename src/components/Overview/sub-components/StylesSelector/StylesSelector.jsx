import React, { useState, useEffect, useContext } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import stylesData from '../../sample-data/stylesData.js';
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

  const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
  };

  const updateColor1 = (color) => {
    setColor1(color);
  };

  const updateColor2 = (color) => {
    setColor2(color);
  };
  useEffect(() => {

  }, []);



  return (
    <div className="Styles-Selector">
      {
        productRows.map((row, i) =>
          <div key={i} className="styles-row">
            {
              row.map((style, j) => {

                var styleWords = style.name.split(' ');
                var color1 = null;
                var color2 = null;

                for (let i = 0; i < styleWords.length; i++) {
                  if (isColor(styleWords[i])) {
                    if (color1) {
                      color2 = styleWords[i];
                      break;
                    } else {
                      color1 = styleWords[i];
                    }
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
                      style={ color1 && color2 ? {
                        backgroundImage: `linear-gradient(-45deg, ${color1}, ${color2})`
                      } : {
                        backgroundColor: color1 ? color1 : 'white'
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