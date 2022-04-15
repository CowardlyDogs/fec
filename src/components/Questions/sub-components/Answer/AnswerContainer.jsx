import React, { useState, useContext, useRef, useEffect } from 'react';
import QandA from '../../QandA.jsx';
import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var AnswerContainer = ({question_body, setHeight, setAnsHeight}) => {
  const { theme, product } = useContext(QandAContext);
  const { sortedAnswers, viewNum, data} = useContext(QuestionContext);

  const [       view, setView       ] = useState(0);
  const [      start, setStart      ] = useState(0);
  const [        end, setEnd        ] = useState(2);
  const [ answerBool, setAnswerBool ] = useState(false);
  const [ listHeight, setListHeight ] = useState('');

  const answers = useRef(null);

  useEffect( () => {
    setListHeight(answers.current.scrollHeight);
    setAnsHeight(answers.current.scrollHeight);
  });

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
      return <Answer key={idx} answerData={answer} />;
    });
  };

  let answerList;
  let showMore;
  let prevAnswers;
  let toggleListSize = 'answerList Answer';
  let contentHeight;

  const moreQs = () => {
    setHeight(prev=> prev + listHeight);
    setView(1);
  };

  const collapse = () => {
    setView(0);
    contentHeight = `${listHeight}px`;
  };


  if (sortedAnswers.length === 0) {
    answerList = <span>No answers yet.</span>;
  } else if (sortedAnswers.length <= 2) {
    answerList = mapAnswers([...seller, ...anons]);
    contentHeight = `${listHeight}px`;
    showMore = null;
  } else {
    if (view === 0) {
      answerList = mapAnswers([...seller, ...anons].slice(0, 2));
      contentHeight = `${listHeight}px`;
      showMore = <button id={theme} className='addA' onClick={(moreQs)}>See More Answers</button>;

    } else if (view === 1) {

      toggleListSize = 'scroll-list Answer';
      answerList = mapAnswers([...seller, ...anons]);
      contentHeight = '400px';
      prevAnswers = <button id={theme} className='addA' onClick={collapse}>Collapse answers</button>;
    }
  }

  return (
    <div id={theme} className='Acontainer'>
      <div className='A'>A:</div>
      <div ref={answers} id={theme} className={toggleListSize} style={{maxHeight: contentHeight}}>  {answerList} </div>
      <div className='answer-buttons'>

        <AddAnswer />
        <div > {showMore}   </div>
        <div > {prevAnswers}</div>
      </div>
    </div>
  );
};

export default AnswerContainer;