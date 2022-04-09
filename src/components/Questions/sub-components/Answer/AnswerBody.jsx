import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';

const AnswerBody = ({body}) => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  return (
    <div className='answer-body'> {body} </div>
  );
};

export default AnswerBody;