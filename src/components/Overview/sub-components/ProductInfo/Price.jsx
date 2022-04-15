import React, { useState, useContext } from 'react';
import { ProductInfo, ProductContext } from './ProductInfo.jsx';

const Price = () => {
  const currentStyle = useContext(ProductContext).currentStyle;
  const [onSale, setOnSale] = useState(null);



  return (
    <div>

      {/* if there is a sale on the current style, then strikethrough the original price and list the sale price next to it */}
      {currentStyle['sale_price'] ?
        <div className="sale">
          <div className="struckthrough-price" >{'$' + currentStyle['original_price']}</div>
          <div className="sale-price" >{'$' + currentStyle['sale_price']}</div>
        </div>

        // otherwise, just display the default price
        : <div className="default-price">
          {'$' + currentStyle['original_price']}
        </div>

      }

    </div>
  );
};

export default Price;