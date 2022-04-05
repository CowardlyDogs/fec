import React, { useState, useContext } from 'react';
import { Cart, CartContext } from './Cart.jsx';

function SizeSelector(props) {
  const product = useContext(CartContext);
  const [listOpen, setListOpen] = useState(false);
  const [forceSize, setForceSize] = useState(false);

  if (props.cartButtonClicked && !forceSize) {
    setForceSize(true);
  }

  return (
    <div>
      {forceSize ? <div>Please select size</div> : null}

      <button
        type="button"
        className="size-selector"
        onClick={() => setListOpen(!listOpen)}

        // if the user has selected a size, the button text will display the size selected
        // else, display default text
      >{props.sizeSelected ? props.sizeSelected : 'Select Size'} </button>

      {/* if the list is open, display the div below */}
      {listOpen || forceSize ? (
        <div>
          {
            // map through the keys of the skus and display the size of each sku
            Object.keys(product.results[0].skus).map((sku, i) => (
              <li key={i} onClick={() => {
                props.setSku(product.results[0].skus[sku]);
                props.setSizeSelected(product.results[0].skus[sku].size)
                setListOpen(false);
                setForceSize(false);
                if (props.cartButtonClicked) {
                  props.toggleCart(false)
                }
              }
              }>
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