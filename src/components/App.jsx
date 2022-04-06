import React from 'react';
<<<<<<< HEAD
import ReviewModule from './Reviews/ReviewModule.jsx'

const App = () => {
  return (
  <div>
    <h1>Hello World</h1>
    <ReviewModule/>
=======
import './App.css';
import Outfit from './Related/Outfit.jsx';
import Carousel from './Related/Carousel.jsx';
import items from './Related/sampledata.jsx';

const App = () => {
  return (
  <div className="App">
    <Carousel items={items}/>
    <Outfit/>
>>>>>>> main
  </div>
  )
}

export default App;