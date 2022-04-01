import React from 'react';
import '../Outfits.css';
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
  return
    <div className="Outfit">
      <div className="add-outfit">
        Add to Outfit
      </div>
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


export default Outfit;