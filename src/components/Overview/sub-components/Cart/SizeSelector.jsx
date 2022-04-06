import React, { useState, useContext, useEffect } from 'react';
import { Cart, CartContext } from './Cart.jsx';

function SizeSelector(props) {
  const currentStyle = useContext(CartContext);
  const [listOpen, setListOpen] = useState(false);
  const [forceSize, setForceSize] = useState(false);
  const [buttonText, setButtonText] = useState('Select Size');


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
      >{props.sizeSelected ? buttonText : 'Select Size'} </button>

      {/* if the list is open, display the div below */}
      {listOpen || forceSize ? (
        <div>
          {
            // map through the keys of the skus and display the size of each sku
            Object.keys(currentStyle.skus).map((sku, i) => (
              <li key={i} onClick={() => {
                props.setSku(currentStyle.skus[sku]);
                props.setSizeSelected(currentStyle.skus[sku].size)
                setListOpen(false);
                setForceSize(false);
                setButtonText(currentStyle.skus[sku].size)
                if (props.cartButtonClicked) {
                  props.toggleCart(false)
                }
              }
              }>
                {currentStyle.skus[sku].size}
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