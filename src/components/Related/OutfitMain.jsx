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
function OutfitMain({ mainId }) {
  const [outfit     ,    setOutfit     ] = useState([]);
  const [dispOutfit ,    setDispOutfit ] = useState([]);

  const start = useRef(0);
  const end = useRef(1);

  const addFit = "https://i.pinimg.com/originals/76/30/ad/7630ad49bdc79b8482c8627c663a1373.png"

  useEffect(() => {
    setOutfit((outfit) => outfit = ['65644', '65662', '65665', '65680', '65671']);
  }, []);

  useEffect(() => {
    setDispOutfit([outfit[0], outfit[1]])
  }, [outfit])

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

  const addToOutfit = () => {
    let tempOutfit = [...outfit];
    outfit.includes(mainId) ? null :
    tempOutfit.unshift(mainId);
    setOutfit((outfit) => outfit = tempOutfit)
    setDispOutfit([outfit[0], outfit[1]]);
  };

  const removeOutfit = (id) => {
    let tempOutfit = [...outfit];
    let removeMe = tempOutfit.indexOf(id);
    tempOutfit.splice(removeMe, 1)
    setOutfit((outfit) => outfit = tempOutfit);
    setDispOutfit([outfit[0], outfit[1]]);
  };

  return (
    <div className="main">
      <div className="sub-main">
      {start.current > 0 &&
        <div className="left" onClick={left}> <ArrowBackIosIcon/> </div>}
          <div className="add-track">
              <button className="add-fit" onClick={() => addToOutfit()} style={{backgroundImage: `url(${addFit})`}}>
                <h1 className="add-text">Add to Outfit</h1>
              </button>
          </div>
          {dispOutfit.length > 1 &&
      dispOutfit.map(unit => {
        return (
          <li className="track" key={unit}>
          <OutfitCarousel unit={unit} removeOutfit={removeOutfit}/>
          </li>
        )
      })
    }
      {end.current < outfit.length - 1 &&
        <div className="right" onClick={right}> <ArrowForwardIosIcon/> </div>}
      </div>
    </div>
  )
}


export default OutfitMain;