import React from 'react';
import './App.css';
import Outfit from './Related/Outfit.jsx';
import Carousel from './Related/Carousel.jsx';
import items from './Related/sampledata.jsx';
import RelatedItems from './Related/RelatedItems.jsx';

const App = () => {
  return (
  <div className="App">
    <Carousel items={items}/>
    <Outfit/>
    <RelatedItems/>
  </div>
  )
}

export default App;