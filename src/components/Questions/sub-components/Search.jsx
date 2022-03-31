import React, { useState, useContext } from 'react';
import QandA from '../QandA.jsx';

function Search () {
  const product = useContext(QandAContext);

  return (
    <div>
      Search
    </div>
  );
}

export default Search;