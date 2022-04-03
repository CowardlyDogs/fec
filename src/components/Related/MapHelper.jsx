import React from 'react';
import Outfit from './Outfit.jsx';
import Related from './Related.jsx';
import Card from './Card.jsx';
import items from './sampledata.jsx';
import StarIcon from '@material-ui/icons/Star';
import FlareIcon from '@material-ui/icons/Flare';


function MapHelper() {
  return (
  <div className="container">
    {items.map((unit, key) => {
      return (
        <div className="card">
        <div className="card-inner" style={{backgroundImage: `url(${unit.image})`}}>
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
          <div>{unit.title}</div>
          <div>{unit.category}</div>
          <div className="price-container">
          <div className="price">{unit.price}</div>
          <div className="sale">{unit.sale}</div>
        </div>
          </div>
      </div>
      )}
    )}
  </div>
  )
}

export default MapHelper;

// {
//   props.wordBank.map((unit, key) =>
//     <WordBuild unit={unit}
//     key={unit._id}
//     wordDeleter={props.wordDeleter}
//     editWord={props.editWord}
//   />
//   )}