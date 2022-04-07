import React, { useState, useEffect, useRef } from 'react';
import './css/Related.css';
import OutfitCarousel from './OutfitCarousel.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';

//appears below related list
//carousel
//user selected
//title = "Your Outfit"
//first card in list = + icon, "Add to Outfit"
//adds current main product to outfit list
//empty be default
//should only apply to current customer (session id cookie?)
//product can only be added once
//no max
//persist across page navigation
//persist after leaving and returning (definitely session id cookie)
//action button = X -> removes item from list
function OutfitMain() {
  const [outfit     ,    SetOutfit     ] = useState(['65644', '65662', '65665', '65680', '65671', '65631']);
  const [dispOutfit ,    setDispOutfit ] = useState([outfit[0], outfit[1]]);

  const start = useRef(0);
  const end = useRef(1);

  const addFit = "https://i.pinimg.com/originals/76/30/ad/7630ad49bdc79b8482c8627c663a1373.png"

  const left = () => {
    start.current = start.current - 1;
    end.current = end.current - 1;
    setDispOutfit(dispOutfit => {
      let tempLeft = [...dispOutfit];
      tempLeft.pop();
      tempLeft.unshift(outfit[start.current]);
      return tempLeft;
    });
  };

  const right = () => {
    start.current = start.current + 1;
    end.current = end.current + 1;
    setDispOutfit(dispOutfit => {
      let tempRight = [...dispOutfit];
      tempRight.push(outfit[end.current]);
      tempRight.shift();
      return tempRight;
    });
  };


  return (
    <div className="main">
      <div className="sub-main">
      {start.current > 0 &&
        <div className="left" onClick={left}> <ArrowBackIosIcon/> </div>}
          <div className="track">
              <div className="add-fit" style={{backgroundImage: `url(${addFit})`}}>
                <h1 className="add-text">Add Item to Outfit</h1>
              </div>
          </div>
      {dispOutfit.map(unit => {
        return (
          <li className="track" key={unit}>
          <OutfitCarousel unit={unit}/>
          </li>
        )
      })}
      {end.current < outfit.length - 1 &&
        <div className="right" onClick={right}> <ArrowForwardIosIcon/> </div>}
      </div>
    </div>
  )
}


export default OutfitMain;