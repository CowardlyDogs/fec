import React, { useState } from 'react';
import './css/Related.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import FlareIcon from '@material-ui/icons/Flare';
import Card from './Card.jsx';
import MapHelper from './MapHelper.jsx';
import items from './sampledata.jsx';


function Carousel() {

  const [curItem, setCurItem] = useState(0);

  return (
    <div className="container">
      <div className="left" onClick={()=>{curItem > 0 && setCurItem(curItem - 1)}}> <ArrowBackIosIcon/> </div>
      <Card/>
      <div className="right" onClick={()=>{curItem < items.length - 1 && setCurItem(curItem + 1)}}> <ArrowForwardIosIcon/> </div>
    </div>
  )
}


export default Carousel;