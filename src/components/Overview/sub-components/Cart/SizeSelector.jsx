import React, { useState, useContext, useEffect } from 'react';
import { Cart, CartContext } from './Cart.jsx';

const SizeSelector = (props) => {
  const currentStyle = useContext(CartContext);

  const updateSize = (e) => {

    const sku = e.target.value;
    props.setSku(currentStyle.skus[sku]);
    props.setSizeSelected(currentStyle.skus[sku].size);
  };

  return (
    <div className="size-selector">
      <select value={!props.sizeSelected ? '' : null} className="size-list" onChange={(e) => updateSize(e)}>
        <option value="" disabled selected>Select Size</option>
        {
          // map through the keys of the skus and display the size of each sku
          Object.keys(currentStyle.skus).map((sku, i) => (
            <option value={sku} className="size" key={i} >
              {currentStyle.skus[sku].size}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default SizeSelector;