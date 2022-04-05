import React, { useState, useEffect, useRef, useCallback } from 'react';
import './css/Related.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import FlareIcon from '@material-ui/icons/Flare';
// import items from './sampledata.jsx';

function Carousel(props) {
  const start = useRef(0);
  const end = useRef(props.items.length > 6 ? 6 : props.items.length);
  const [products, setProducts] = useState(props.items);
  const [display, setDisplay] = useState(() => displayFill(props.items));
  console.log(display)
  const length = props.items.length;


  if (!Array.isArray(props.items) || length <= 0) {
    return null;
  };

  function displayFill() {
      return props.items.slice(start.current, end.current);
  }

  const left = () => {
    start.current = start.current - 1;
    end.current = end.current - 1;
    setDisplay(display => {
      const tempLeft = [...display];
      tempLeft.pop();
      tempLeft.unshift(props.items[start.current]);
      return tempLeft;
    })
    console.log('start: ', start.current, 'end: ', end.current);
  };

  const right = () => {
    start.current = start.current + 1;
    end.current = end.current + 1;
    setDisplay(display => {
      const tempRight = [...display];
      tempRight.push(props.items[end.current]);
      tempRight.shift();
      return tempRight;
    })
    console.log('start: ', start.current, 'end: ', end.current);
  };

  return (
    <div className="main">
      {start.current > 0 &&
        <div className="left" onClick={left}> <ArrowBackIosIcon/> </div>}
      <div className="track">
          {display.map((product, key) => {
            return (
              <div className="card">
                <div className="card-inner" style={{backgroundImage: `url(${product.image})`}}>
                  <div className="stars">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                  </div>
                  <div className="action"><FlareIcon/></div>
                </div>
                <div className="bottom">
                  <div>{product.title}</div>
                  <div>{product.category}</div>
                  <div className="price-container">
                      <div className="price">{product.price}</div>
                      <div className="sale">{product.sale}</div>
                  </div>
                </div>
               </div>
            )}
          )}
      </div>
      {end.current < (length - 1) &&
        <div className="right" onClick={right}> <ArrowForwardIosIcon/> </div>}
    </div>
  )
}


export default Carousel;