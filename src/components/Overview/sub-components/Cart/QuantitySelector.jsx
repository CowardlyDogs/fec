import React, { useState, useContext } from 'react';
import { Cart, CartContext } from './Cart.jsx';


function QuantitySelector(props) {
  const currentStyle = useContext(CartContext).currentStyle;
  const sku = props.sku;
  const [listOpen, setListOpen] = useState(false);

  // if the user enters a size, then create an array from 1 to maximum quantity of item, or 15. Whichever is smaller.
  if (sku) {
    var quantity = [];

    for (let i = 1; i <= sku.quantity && i <= 15; i++) {
      quantity.push(i);
    }
  }

  return (
    <div className="quantity-selector">
      <button
        type="button"
        className="quantity-button"
        onClick={() => {
          if (sku) {
            setListOpen(!listOpen)
          }
        }}

        // if the user clicks on a quantity, the text of the button will update to that number
        // else if only the size has been selected, the text will default to '1'
        // else, display '-'
      >{props.qtySelected ? props.qtySelected : sku ? 1 : '-'}</button>

      {/* if the button is clicked, the state is set to open and will render the div below */}
      {listOpen ? (
        <div>
          {quantity.map((num, i) => (
            <li className="quantity-list" key={i} onClick={() => {
              setListOpen(!listOpen);
              props.setQtySelected(num);
            }}>
              {num}
            </li>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default QuantitySelector;