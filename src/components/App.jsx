import React from 'react';
import './App.css';
import Outfit from './Related/Outfit.jsx';
import Carousel from './Related/Carousel.jsx';
import items from './Related/sampledata.jsx';

const App = () => {
  return (
  <div className="App">
    <Carousel items={items}/>
    <Outfit/>
  </div>
  )
}

export default App;