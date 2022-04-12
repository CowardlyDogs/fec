import React, { useState, useEffect } from 'react';
import './App.css';
import OutfitMain from './Related/OutfitMain.jsx';
import Overview from './Overview/Overview.jsx';
import QandA from './Questions/QandA.jsx';
import ReviewModule from './Reviews/ReviewModule.jsx';
import RelatedMain from './Related/RelatedMain.jsx';
import CompareMain from './Related/CompareMain.jsx';

const App = () => {
  const [productId, setProduct] = useState('65631');
  return (
    <div className="App">
      <Overview     productId={productId}/>
      <h1>Related Items</h1>
      <RelatedMain     productId={productId} setProduct={setProduct}/>
      <h1>Your Outfit</h1>
      <OutfitMain      productId={productId}/>
      <QandA        defaultId={productId}/>
      <ReviewModule productId={productId}/>
    </div>
  );
};

export default App;