import React, { useState, useEffect, useRef } from 'react';
import OutfitCarousel from './OutfitCarousel.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';

const OutfitMain = ({ productId }) => {
  const [outfit,     setOutfit     ] = useState([]);
  const [dispOutfit, setDispOutfit ] = useState([]);

  const start = useRef(0);
  const end = useRef(1);


  const addFit = 'https://i.pinimg.com/originals/76/30/ad/7630ad49bdc79b8482c8627c663a1373.png';

  useEffect(() => {
    let temp = [];
    for (let x = 0; x < localStorage.length; x++) {
      temp.push(localStorage.getItem(localStorage.key(x)));
    }
    setOutfit(temp);
  }, []);

  useEffect(() => {
    setDispOutfit([outfit[0], outfit[1]]);
  }, [outfit]);

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
    localStorage.setItem(productId, productId);
    let tempOutfit = [...outfit];
    outfit.includes(productId) ? null :
      tempOutfit.unshift(productId);
    setOutfit((outfit) => outfit = tempOutfit);
    setDispOutfit([outfit[0], outfit[1]]);
  };

  const removeOutfit = (id) => {
    localStorage.removeItem(id);
    let tempOutfit = [...outfit];
    let removeMe = tempOutfit.indexOf(id);
    tempOutfit.splice(removeMe, 1);
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
            <h1 className="rel-title">Add to Outfit</h1>
          </button>
        </div>
        {dispOutfit.length > 1 &&
      dispOutfit.map((unit, index) => {
        return (
          <li className="track" key={index}>
            <OutfitCarousel key={index} unit={unit} removeOutfit={removeOutfit}/>
          </li>
        );
      })
        }
        {end.current < outfit.length - 1 &&
        <div className="right" onClick={right}> <ArrowForwardIosIcon/> </div>}
      </div>
    </div>
  );
};


export default OutfitMain;