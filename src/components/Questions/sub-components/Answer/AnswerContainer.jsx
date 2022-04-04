import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Answer from './Answer.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var AnswerContainer = () => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  // Function to map over answers
  var mapAnswers = (answers) => {
    return answers.map( (answer, idx) => {
      return <Answer key={idx} answerData={answer}/>;
    });
  };

  var answerList = mapAnswers(sortedAnswers);

  return (
    <div>
      <strong>Answers for question : {data.question_id}</strong>
      {answerList}
    </div>
  );
};

export default AnswerContainer;