import React, { useState, useContext } from 'react';
import QandA from '../QandA.jsx';
import { QandAContext } from '../QandA.jsx';

var Search = () => {
  const { product, setSearchVal, searchVal, searchQuestions, setVisibleQs, questions } = useContext(QandAContext);

  // var handleClick = (e) => {
  //   e.preventDefault();
  //   searchQuestions(searchVal);
  // };

  var handleChange = (e) => {
    setSearchVal(e.target.value);

    if (e.target.value.length > 2) {
      searchQuestions(e.target.value);
    } else if (e.target.value.length < 3) {
      setVisibleQs(questions);
    }
  };

  return (
    <form>
      <input className='search'
                    id='searchVal'
           placeholder='Have a question? Search for answers...'
                 value={searchVal}
              onChange={handleChange}/>
    </form>
  );
};

export default Search;