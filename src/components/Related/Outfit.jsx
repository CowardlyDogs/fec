import React from 'react';
import './css/Related.css';
const sHelp = require('./ServerHelper.js');
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
    <div
      className="card">
      <h2>Your Outfit</h2>
      <h3>
        Add to Outfit
      </h3>
      <div>
        {/* star image */}
        *****
      </div>
      <button>
        {/* action button */}
        X
      </button>
      <p className="delete me">Product Image</p>
      {/* <img> */}
      {/* product.image */}
      {/* </img> */}
      <p>
        {/* product.name
        in
        product.category */}
        Product Name <br/>
        in <br/>
        Product Category
      </p>
      <p>
        {/* product.saleprice */}
        {/* was */}
        {/* product.price */}
        Sale Price <br/>
        was <br/>
        Full Price
      </p>
    </div>
  )
}


export default Outfit;