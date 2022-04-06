import React from 'react';
import './App.css';
import Outfit from './Related/Outfit.jsx';
import Carousel from './Related/Carousel.jsx';
import items from './Related/sampledata.jsx';
import Overview from './Overview/Overview.jsx';
import QandA from './Questions/QandA.jsx';

const App = () => {
  return (
  <div className="App">
    <Overview />
    <Carousel items={items}/>
    <Outfit/>
    <QandA />
  </div>
  )
}

export default App;