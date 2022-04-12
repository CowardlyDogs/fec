import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';
import '../../styles.css';

const QuestionBody = ({body}) => {
  const  product = useContext(QandAContext);
  const { data } = useContext(QuestionContext);

  return (
    <div className='question-body'> <strong>Q:</strong> {body}</div>
  );
};

export default QuestionBody;