import React from 'react';
import '../Related.css';
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
  return
    <div
      className="related"
      // onClick={update main product id to clicked id}
      >
      <div>
        {/* star image */}
      </div>
      <img>
      {/* product.image */}
      </img>
      <p>
        {/* product.name
        in
        product.category */}
      </p>
      <p>
        {/* product.saleprice */}
        {/* was */}
        {/* product.price */}
      </p>
      <button>
        {/* action button */}
      </button>
    </div>
}


export default Related;