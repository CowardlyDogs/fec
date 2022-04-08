import React, { useState, useContext } from 'react';
import { ProductInfo, ProductContext } from './ProductInfo.jsx';

function Price() {
  const currentStyle = useContext(ProductContext).currentStyle;
  const [onSale, setOnSale] = useState(null);



  return (
    <div>

      {/* if there is a sale on the current style, then strikethrough the original price and list the sale price next to it */}
      {currentStyle['sale_price'] ?
        <div>
          <span style={{ textDecorationLine: 'line-through'}}>{'$' + currentStyle['original_price']}</span>
          <span style={{ color: 'red' }}>{'$' + currentStyle['sale_price']}</span>
        </div>

        // otherwise, just display the default price
        : <span>
          {'$' + currentStyle['original_price']}
        </span>

      }

    </div>
  )
}

export default Price;