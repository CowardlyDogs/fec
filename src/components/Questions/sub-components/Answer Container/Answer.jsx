import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';



function Answer () {
  const product = useContext(QandAContext);

  return (
    <div>
      Answer
    </div>
  );
}

export default Answer;