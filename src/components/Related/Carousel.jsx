import React, { useState, useEffect, useRef, useCallback } from 'react';
import './css/Related.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import FlareIcon from '@material-ui/icons/Flare';

function Carousel(props) {
  const addFit = "https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/plus-2-icon-11-256.png"
  // console.log('Items that made it to Carousel: ', props.items)
  const start = useRef(0);
  const end = useRef(props.add === true ? props.items.length > 5 ? 5 : props.items.length : props.items.length > 6 ? 6 : props.items.length);
  const [products, setProducts] = useState(props.items);
  const [display, setDisplay] = useState(() => displayFill(props.items));
  const length = props.items.length - 1;
  console.log(display)


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
      let tempLeft = [...display];
      tempLeft.pop();
      tempLeft.unshift(props.items[start.current]);
      return tempLeft;
    });
    console.log('start: ', start.current, 'end: ', end.current);
  };

  const right = () => {
    start.current = start.current + 1;
    end.current = end.current + 1;
    setDisplay(display => {
      let tempRight = [...display];
      tempRight.push(props.items[end.current]);
      tempRight.shift();
      return tempRight;
    });
    console.log('start: ', start.current, 'end: ', end.current);
  };

  return (
    <div className="main">
      {start.current > 0 &&
        <div className="left" onClick={left}> <ArrowBackIosIcon/> </div>}
      <div className="track">
        {props.add === true &&
          <div className="card">
            <div className="card-inner" style={{height: "inherit", width: "inherit", backgroundImage: `url(${addFit})`}}>
              <div><h1 className="add">Add Item to Outfit</h1></div>
            </div>
          </div>
        }
          {display.map((product, x) => {
            return (
              <div className="card">
                <div className="card-inner" style={{backgroundImage: `url(${product.url})`}} >
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
                  <div>{product.name}</div>
                  <div>{product.category}</div>
                  <div className="price-container">
                      <div className="price">{product.default_price}</div>
                      <div className="sale">{product.sale_price}</div>
                  </div>
                </div>
               </div>
            )}
          )}
      </div>
      {end.current < (length) &&
        <div className="right" onClick={right}> <ArrowForwardIosIcon/> </div>}
    </div>
  )
}


export default Carousel;