import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
import '../../styles.css';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var AnswerContainer = () => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  const [ view, setView ] = useState(0);
  const [ start, setStart ] = useState(0);
  const [ end, setEnd ] = useState(1);
  const [ answerBool, setAnswerBool ] = useState(false);

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


  // Boolean switch for addAnswer Modal
  var answerButton = <button onClick={()=>setAnswerBool(prev => !prev)}>Add an answer</button>;
  var addAnswer = !answerBool ? answerButton : <AddAnswer />;





  if (sortedAnswers.length === 0) {
    answerList = <span>No answers yet.</span>;
  } else {
    if (view === 0) {
      answerList = mapAnswers(sortedAnswers.slice(start, end));
      showMore = <button onClick={()=> {
        setEnd(prev => prev + 3);
        setView(1);
      }}>Show More Answers</button>;
    } else if (view === 1) {
      // Accordion view of answers
      answerList = mapAnswers(sortedAnswers.slice(start, end));
      showMore = <button onClick={increment}>Show more Answers</button>;
      prevAnswers = <button onClick={decrement}>Previous Answers</button>;

      if (start < 0 || start > answerList.length) {
        setView(0);
        setStart(0);
        setEnd(1);
      }
    }
  }


  return (
    <div className='Acontainer'>
      {answerList}
      {showMore}
      {prevAnswers}
      {addAnswer}
    </div>
  );
};

export default AnswerContainer;