import React from 'react';
import Related from './Related/Related.jsx';
import Outfit from './Related/Outfit.jsx';
import './App.css';

const App = () => {
  return (
  <div className="App">
    <h1>Hello World</h1>
    <div>
      <Related/>
    </div>
    <div>
      <Outfit/>
    </div>
  </div>
  )
}

export default App;