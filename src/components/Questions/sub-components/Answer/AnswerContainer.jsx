import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Answer from './Answer.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var AnswerContainer = () => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  const [ view, setView ] = useState(0);
  const [ start, setStart ] = useState(0);
  const [ end, setEnd ] = useState(1);

  // Function to map over answers
  var mapAnswers = (answers) => {
    return answers.map( (answer, idx) => {
      return <Answer key={idx} answerData={answer}/>;
    });
  };

  var increment = () => {
    setEnd(prev => prev + 4);
    setStart(prev => prev + 4);
  };

  var decrement = () => {
    setEnd(prev => prev - 4);
    setStart(prev => prev - 4);
  };

  var answerList;
  var showMore;
  var prevAnswers;

  if (view === 0) {
    answerList = mapAnswers(sortedAnswers.slice(start, end));
    showMore = <button onClick={()=> {
      setEnd(prev => prev + 3);
      setView(1);
    }}>Show More Answers</button>;
  } else if (view === 1) {
    answerList = mapAnswers(sortedAnswers.slice(start, end));
    showMore = <button onClick={increment}>Show more Answers</button>;
    prevAnswers = <button onClick={decrement}>Previous Answers</button>;

    if (start < 0) {
      setView(0);
      setStart(0);
      setEnd(1);
    }
  }

  return (
    <div>
      <strong>Answers for question : {data.question_id}</strong>
      {answerList}
      {showMore}
      {prevAnswers}
    </div>
  );
};

export default AnswerContainer;