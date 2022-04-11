import React, { useState, useEffect } from 'react';
import './css/Related.css';


const CompareDisplay = ({ feature, mainValue, relatedValue, rel, main }) => {
  //TODO:
  //handle same feature and value with checkmark
  //possibly: rel[feat] ? rel[feat] === main[feat] ? <CheckMark/> : rel[feat] : null

  return (
    <div className="feat-container">
      {feature.map((feat, index) => {
        return <div className="feat-row" key={index}>
          <div className="main-value">{main[feat] ? main[feat] : null}</div>
          <div className="feature">{feat}</div>
          <div className="cur-value">{rel[feat] ? rel[feat] : null}</div>
        </div>;
      }
      )}
    </div>
  );
};


export default CompareDisplay;