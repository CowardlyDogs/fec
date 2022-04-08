import React, { useState, useEffect } from 'react';
import Helpers from '../APIHelpers.js';
import './css/Related.css';

//compares selected item in related to current item on page
//title should be "comparing"
//compare same characteristics as those on Overview module (facts or values depending)
//[current product name]    []     [compared product name]
//[current product value]   []     [compared product value]
//etc...
//if fact is true for both, display with checkmark
//if fact/value doesnt apply to product, leave blank
//if no overlapping facts/values, display all but no single characteristic row would have a value for both products <-??
//if comparison too long to display, should become scrollable
//product names remain fixed at top of list


//use reactdom.createportal
//z index 1000
//top 50%
//bottom 50%
//transform translate(-50%, -50%)
//background color #FFF
//padding 50px
//position fixed

//overlay:
//position fixed
//top 0
//left 0
//right 0
//bottom 0
//background color rgba(0,0,0,.7)
//zindex 1000
function Compare({ mainId, currentId }) {
  const [mainFeat     ,   setMainFeat    ] = useState([]);
  const [currentFeat  ,   setCurrentFeat ] = useState([]);


  useEffect(() => {
    Helpers.getFeatures(mainId, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // save features
        setMainFeat(res.data....)
      }
    })
    Helpers.getFeatures(currentId, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // save features
        setCurrentFeat(res.data....)
      }
    })
  }, []);

  return (
  <div className="compare">
    <h3>
      Compare
    </h3>

  </div>
  )
}



export default Compare;