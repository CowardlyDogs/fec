import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';


// One QuestionModal per question - resides in greater QandA component

function NameAndDate () {
  const product = useContext(QandAContext);

  return (
    <div>
      NameAndDate
    </div>
  );
}

export default NameAndDate;