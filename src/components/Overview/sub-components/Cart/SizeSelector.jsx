import React, { useState, useContext } from 'react';
import { Cart, CartContext } from './Cart.jsx';

function SizeSelector () {
  const product = useContext(CartContext);
  const [listOpen, setListOpen] = useState(false);
  console.log(product.results[0].skus['1394769']);


  return (
    <div>
      <button
        type="button"
        className="size-selector"
        onClick={() => setListOpen(!listOpen)}
      >Select Size </button>
      {listOpen ? (
        <div>
          {
            Object.keys(product.results[0].skus).map((sku) => (
              <li>
                {product.results[0].skus[sku].size}
              </li>
            ))
          }
        </div>
      ) : null
    }
    </div>
  )
}

export default SizeSelector;