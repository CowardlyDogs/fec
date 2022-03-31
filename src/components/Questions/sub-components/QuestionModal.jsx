import React, { useState, useContext } from 'react';
import QandA from '../QandA.jsx';


// One QuestionModal per question - resides in greater QandA component

function QuestionModal () {
  const product = useContext(QandAContext);

  return (
    <div>
      Question Modal
    </div>
  );
}

export default QuestionModal;