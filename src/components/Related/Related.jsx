import React from 'react';
import './css/Related.css';
// import sHelp from './ServerHelper.js';
//import hooks

//will be carousel scrolling horizontal
//must have all related products in carousel
//on initial load, first related is furthest left
//arrows on right and left to scroll (maybe draggable scroll?)
//clicking arrow should only scroll one item at a time
//when first item all the way left, left arrow hides (inital load)
//once last card on right is displayed, right arrow hides
//action button opens modal comparing details of current product and selected product
// onClick={update main product id to clicked id}
function Related() {
  return (
    <div>
      <h2>Related Items</h2>
      <div className="card">
        <img className="image" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Loading"/>
        <div className="stars">*****</div>
        <p className="product-name"> Product Name <br/> in <br/> Product Category </p>
        <p className="price"> Sale Price <br/> was <br/> Full Price </p>
        <button className="action"> ! </button>
      </div>
    </div>
  )
}


export default Related;