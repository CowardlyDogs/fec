import React from 'react';
import './css/Related.css';
import items from './sampledata.jsx';
import Carousel from './Carousel.jsx';

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
function Outfit() {
  return (
    <div>
      <Carousel items={items}/>
    </div>
  )
}


export default Outfit;