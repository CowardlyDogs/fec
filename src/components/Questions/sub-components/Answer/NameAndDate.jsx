import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


// One QuestionModal per question - resides in greater QandA component

var NameAndDate = ({name, date}) => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  return (
    <div>
      Answer from: {name}
    </div>
  );
};

export default NameAndDate;