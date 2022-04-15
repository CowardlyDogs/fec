import React, { useState, useContext } from 'react';
import QandA from '../QandA.jsx';
import { QandAContext } from '../QandA.jsx';
const Search = () => {
  const { product, setSearchVal, searchVal, searchQuestions, setVisibleQs, questions, theme } = useContext(QandAContext);

  const handleChange = (e) => {
    setSearchVal(e.target.value);

    if (e.target.value.length > 2) {
      searchQuestions(e.target.value);
    } else if (e.target.value.length < 3) {
      setVisibleQs(questions);
    }
  };

  return (
    <form>
      <input id={theme} className='search'
        id='searchVal'
        placeholder='Have a question? Search for answers...'
        value={searchVal}
        onChange={handleChange} />
    </form>
  );
};

export default Search;