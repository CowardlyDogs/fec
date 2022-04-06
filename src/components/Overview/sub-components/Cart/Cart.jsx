import React, { useState, useContext, useEffect } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';
import { Overview, OverviewContext } from '../../Overview.jsx';

export const CartContext = React.createContext(null);


function Cart() {
  const currentStyle = useContext(OverviewContext).currentStyle;
  const [sku, setSku] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [qtySelected, setQtySelected] = useState(null);
  const [cartButtonClicked, setCartButtonClicked] = useState(false);
  const [styleId, setStyleId] = useState(currentStyle['style_id']);

  if (styleId !== currentStyle['style_id']) {
    setStyleId(currentStyle['style_id']);
    setSku(null);
    setSizeSelected(null);
    setQtySelected(null);
    setCartButtonClicked(false);
  }


  function toggleCart(value) {
    setCartButtonClicked(value);
  }

  return (
    <CartContext.Provider value={currentStyle}>
      {/* TODO: Delete Cart Title */}
      <h1>Add to Cart</h1>
      <SizeSelector setSku={setSku} setSizeSelected={setSizeSelected} sizeSelected={sizeSelected} cartButtonClicked={cartButtonClicked} setCartButtonClicked={setCartButtonClicked} toggleCart={toggleCart}/>
      <QuantitySelector sku={sku} setQtySelected={setQtySelected} qtySelected={qtySelected}/>
      <AddToCart sizeSelected={sizeSelected} qtySelected={qtySelected} setCartButtonClicked={setCartButtonClicked} toggleCart={toggleCart} />
    </CartContext.Provider>
  );
}

export default Cart;