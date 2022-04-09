import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
import '../../styles.css';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var AnswerContainer = ({question_body}) => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data} = useContext(QuestionContext);

  const [       view, setView       ] = useState(0);
  const [      start, setStart      ] = useState(0);
  const [        end, setEnd        ] = useState(2);
  const [ answerBool, setAnswerBool ] = useState(false);


  const seller = [];
  const anons = [];
  sortedAnswers.forEach( answer => {
    if (answer.answerer_name === 'Seller') {
      seller.push(answer);
    } else {
      anons.push(answer);
    }
  });

  const mapAnswers = (answers) => {
    return answers.map( (answer, idx) => {
      return <Answer key={idx} answerData={answer}/>;
    });
  };



  let answerList;
  let showMore;
  let prevAnswers;


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
      <div className='A'><strong>A:</strong></div>
      <div className='answerList'>   {answerList} </div>
      <div className='answer-buttons'>
        <AddAnswer />
        <div className='more-answers'> {showMore}   </div>
        <div className='less-answers'> {prevAnswers}</div>
      </div>
    </div>
  );
};

export default AnswerContainer;