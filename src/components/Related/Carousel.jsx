import React, { useState, useEffect, useRef, useCallback } from 'react';
import './css/Related.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import CompareIcon from '@material-ui/icons/Compare';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Carousel(props) {
  const addFit = "https://i.pinimg.com/originals/76/30/ad/7630ad49bdc79b8482c8627c663a1373.png"
  const start = useRef(0);
  const end = useRef(props.add === true ? props.items.length > 5 ? 5 : props.items.length : props.items.length > 6 ? 6 : props.items.length);
  const [products, setProducts] = useState(props.items);
  const [display, setDisplay] = useState(() => displayFill(props.items));
  const length = props.items.length - 1;

  function action() {
    return props.add === true ? <AddCircleOutlineIcon/> : <CompareIcon/>
  }


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
  };

  return (
    <div className="main">
      {start.current > 0 &&
        <div className="left" onClick={left}> <ArrowBackIosIcon/> </div>}
      <div className="track">
        {props.add === true &&
          <div className="add">
            <div className="add-fit" style={{backgroundImage: `url(${addFit})`}}>
              <h1 className="add-text">Add Item to Outfit</h1>
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
                  <div className="action">{action()}</div>
                </div>
                <div className="bottom">
                  <div className="product-name">{product.name}</div>
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