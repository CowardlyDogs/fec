import React from 'react';
import Outfit from './Outfit.jsx';
import Related from './Related.jsx';
import Card from './Card.jsx';
import items from './sampledata.jsx';


function MapHelper() {
  return (
  <div>
    {items.map((unit, key) => <Card unit={unit}
      />)}
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