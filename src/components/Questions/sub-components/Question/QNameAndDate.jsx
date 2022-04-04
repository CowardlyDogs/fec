import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';


var QNameAndDate = ({name, date}) => {
  const product = useContext(QandAContext);
  const { data } = useContext(QuestionContext);

  return (
    <div>
      <strong>Question from: {name} on {date}</strong>
    </div>
  );
};

export default QNameAndDate;