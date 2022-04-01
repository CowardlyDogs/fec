import React from 'react';
import './css/Related.css';
const sHelp = require('./ServerHelper.js');
const shirt = require("./temp/shirt.png");
//import hooks

//will be carousel scrolling horizontal
//must have all related products in carousel
//on initial load, first related is furthest left
//arrows on right and left to scroll (maybe draggable scroll?)
//clicking arrow should only scroll one item at a time
//when first item all the way left, left arrow hides (inital load)
//once last card on right is displayed, right arrow hides
//action button opens modal comparing details of current product and selected product
function Related() {
  return (
    <div
      className="card"
      // onClick={update main product id to clicked id}
      >
      <div>
        {/* star image */}
        *****
      </div>
      <button>
        {/* action button */}
        STAR
      </button>
      <img src={shirt}/>
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


export default Related;