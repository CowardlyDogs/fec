import React, {useState} from 'react';
import './App.css';
import OutfitMain from './Related/OutfitMain.jsx';
import Overview from './Overview/Overview.jsx';
import QandA from './Questions/QandA.jsx';
import ReviewModule from './Reviews/ReviewModule.jsx';
import RelatedMain from './Related/RelatedMain.jsx';

const App = () => {
  const [productId, setProduct] = useState('65631');
  return (
    <div className="App">
      {/* <Overview/> */}
      <h1>Related Items</h1>
      <RelatedMain mainId={productId}/>
      <h1>Your Outfit</h1>
      <OutfitMain mainId={productId}/>
      {/* <QandA/> */}
      <ReviewModule productId={productId}/>
    </div>
  );
};

export default App;