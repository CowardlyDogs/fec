import React, { useState } from 'react';
import './css/Related.css';
import items from './sampledata.jsx';
import StarIcon from '@material-ui/icons/Star';
import FlareIcon from '@material-ui/icons/Flare';


function Card() {
  const [curItem, setCurItem] = useState(0);
  return (
    <div className="card">
        <div className="card-inner" style={{backgroundImage: `url(${items[curItem].image})`}}>
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
          <div>{items[curItem].title}</div>
          <div>{items[curItem].category}</div>
          <div className="price-container">
          <div className="price">{items[curItem].price}</div>
          <div className="sale">{items[curItem].sale}</div>
        </div>
          </div>
      </div>
  )
}


export default Card;