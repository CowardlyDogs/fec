import React from 'react';
import './css/Related.css';
import sHelp from './ServerHelper.js';
// import turtle from './temp/turtle.jpg';
//import needed hooks

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
      <h2>Your Outfit</h2>
      <div className="card">
      <h3 className="add"> Add to Outfit </h3>
        <img className="image" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Loading"/>
        <div className="stars"> ***** </div>
        <p className="product-name"> Product Name <br/> in <br/> Product Category </p>
        <p className="price"> Sale Price <br/> was <br/> Full Price </p>
        <button className="action">X</button>
      </div>
    </div>
  )
}


export default Outfit;