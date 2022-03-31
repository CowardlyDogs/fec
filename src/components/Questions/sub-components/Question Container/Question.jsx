import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';


function Question () {
  const product = useContext(QandAContext);

  return (
    <div>
      Question Modal
    </div>
  );
}

export default Question;