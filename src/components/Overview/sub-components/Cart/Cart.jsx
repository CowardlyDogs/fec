import React, { useState, useContext } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';
import { Overview, OverviewContext } from '../../Overview.jsx';

export const CartContext = React.createContext(null);


function Cart() {
  const product = useContext(OverviewContext);
  const [sku, setSku] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [qtySelected, setQtySelected] = useState(null);



  return (
    <CartContext.Provider value={product}>
      {/* TODO: Delete Cart Title */}
      <h1>Add to Cart</h1>
      <SizeSelector setSku={setSku} setSizeSelected={setSizeSelected} sizeSelected={sizeSelected}/>
      <QuantitySelector sku={sku}  setQtySelected={setQtySelected} qtySelected={qtySelected}/>
      <AddToCart />
    </CartContext.Provider>
  );
}

export default Cart;