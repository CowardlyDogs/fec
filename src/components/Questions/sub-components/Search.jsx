import React, { useState, useContext } from 'react';
import QandA from '../QandA.jsx';
import { QandAContext } from '../QandA.jsx';

var Search = () => {
  const { product, setSearchVal, searchVal, searchQuestions } = useContext(QandAContext);

  var handleClick = (e) => {
    e.preventDefault();
    searchQuestions(searchVal);
  };

  return (
    <form>
      {console.log(searchQuestions)}
      <input id='searchVal' value={searchVal} onChange={e => setSearchVal(e.target.value)}/>
      <button type='submit' onClick={handleClick}> Search </button>
    </form>
  );
};

export default Search;