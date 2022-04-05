import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';

var AnswerBody = ({body}) => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);


  // POST request

  return (
    <div>
      {body}
    </div>
  );
};

export default AnswerBody;