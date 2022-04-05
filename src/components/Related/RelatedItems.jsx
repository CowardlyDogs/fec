import React from 'react';
import items from './sampledata.jsx';
import Carousel from './Carousel.jsx';



function RelatedItems() {
  return (
    <div>
      <Carousel items={items}/>
    </div>
  )
}


export default RelatedItems;