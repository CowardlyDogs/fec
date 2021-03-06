import React, { useState } from 'react';
import './App.css';
import OutfitMain from './Related/OutfitMain.jsx';
import Overview from './Overview/Overview.jsx';
import QandA from './Questions/QandA.jsx';
import ReviewModule from './Reviews/ReviewModule.jsx';
import RelatedMain from './Related/RelatedMain.jsx';
import CompareMain from './Related/CompareMain.jsx';
import NavBar from './NavBar.jsx';

const App = () => {
  const [productId, setProduct] = useState('65633');
  const [theme,     setTheme  ] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme => {
      if (theme === 'light') {
        return theme = 'dark';
      } else {
        return theme = 'light';
      }
    });
  };

  return (
    <div id={theme}>
      <NavBar theme={theme} toggleTheme={toggleTheme}/>
      <Overview     productId={productId}/>
      <h1 className="rel-title" id={theme}>Related Items</h1>
      <RelatedMain     productId={productId} setProduct={setProduct} theme={theme}/>
      <h1 className="rel-title" id={theme}>Your Outfit</h1>
      <OutfitMain      productId={productId}/>
      <QandA        theme={theme} defaultId={productId}/>
      <ReviewModule productId={productId} theme={theme}/>
    </div>
  );
};

export default App;