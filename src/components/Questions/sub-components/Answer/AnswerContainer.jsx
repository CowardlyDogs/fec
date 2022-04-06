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
  const [ end, setEnd ] = useState(2);
  const [ answerBool, setAnswerBool ] = useState(false);


  // Need to sort answers - bring seller responses to top
  var seller = [];
  var anons = [];
  sortedAnswers.forEach( answer => {
    if (answer.answerer_name === 'Seller') {
      seller.push(answer);
    } else {
      anons.push(answer);
    }
  });

  // Function to map over answers
  var mapAnswers = (answers) => {
    return answers.map( (answer, idx) => {
      return <Answer key={idx} answerData={answer}/>;
    });
  };



  var answerList;
  var showMore;
  var prevAnswers;


  if (sortedAnswers.length === 0) {
    answerList = <span>No answers yet.</span>;

  } else if (sortedAnswers.length <= 2) {
    answerList = mapAnswers([...seller, ...anons]);
    showMore = null;
  } else {
    if (view === 0) {
      answerList = mapAnswers([...seller, ...anons].slice(0, 2));
      showMore = <button onClick={()=> {
        setView(1);
      }}>See More Answers</button>;

    } else if (view === 1) {
      // Accordion view of answers
      answerList = mapAnswers([...seller, ...anons]);
      prevAnswers = <button onClick={()=>setView(0)}>Collapse answers</button>;
    }
  }


  return (
    <div className='Acontainer'>
      <strong>A:</strong> {answerList}
      {showMore}
      {prevAnswers}
      <AddAnswer />
    </div>
  );
};

export default AnswerContainer;