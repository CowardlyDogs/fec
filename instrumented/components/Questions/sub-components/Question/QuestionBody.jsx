import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';

const QuestionBody = ({body}) => {
  const  {theme, product } = useContext(QandAContext);
  const { data } = useContext(QuestionContext);

  return (
    <div id={theme} className='darkBody' style={{marginTop: '10px'}}>
      <div className='Q'>Q:</div>
      <div className='question-body'>{body}</div>
    </div>
  );
};

export default QuestionBody;