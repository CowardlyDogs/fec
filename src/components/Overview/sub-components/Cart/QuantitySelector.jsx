import React, { useState, useContext } from 'react';
import { Cart, CartContext } from './Cart.jsx';


const QuantitySelector = (props) => {
  const currentStyle = useContext(CartContext).currentStyle;
  const sku = props.sku;

  // if the user enters a size, then create an array from 1 to maximum quantity of item, or 15. Whichever is smaller.
  if (sku) {
    var quantity = [];

    for (let i = 1; i <= sku.quantity && i <= 15; i++) {
      quantity.push(i);
    }
  }

  return (
    <div className="quantity-selector">
      <select className="size-list" maxMenuHeight={50} disabled={!sku ? true : null} onChange={(e) => props.setQtySelected(e.target.value)}>
        <option value="" disabled selected>-</option>
        { quantity ?
          quantity.map((num, i) => (
            <option value={num} className="quantity" key={i} >
              {num}
            </option>
          ))
          : null
        }
      </select>
    </div>
  );
};

export default QuantitySelector;