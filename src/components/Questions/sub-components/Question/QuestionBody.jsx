import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';

var QuestionBody = ({body}) => {
  const product = useContext(QandAContext);
  const { data } = useContext(QuestionContext);

  return (
    <div>
      <br/>
      {body}
      <br/>
    </div>
  );
};

export default QuestionBody;