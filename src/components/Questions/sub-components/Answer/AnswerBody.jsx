import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';

function AnswerBody () {
  const product = useContext(QandAContext);

  return (
    <div>
      AnswerBody
    </div>
  );
}

export default AnswerBody;