import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';


function QuestionBody () {
  const product = useContext(QandAContext);

  return (
    <div>
      Question Body
    </div>
  );
}

export default QuestionBody;