import React from 'react';
import './App.css';
import OutfitMain from './Related/OutfitMain.jsx';
import Overview from './Overview/Overview.jsx';
import QandA from './Questions/QandA.jsx';
import ReviewModule from './Reviews/ReviewModule.jsx';
import RelatedMain from './Related/RelatedMain.jsx';

const App = () => {
  return (
  <div className="App">
    <Overview/>
    {/* <h1>Related Items</h1>
    <RelatedMain/>
    <h1>Your Outfit</h1>
    <OutfitMain/>
    <QandA/>
    <ReviewModule/> */}
  </div>
  )
}

export default App;