import React, { useState, createContext, useContext, useRef } from 'react';
import { QandAContext } from '../../QandA.jsx';
import { sortAnswers } from '../../HelperFunction.js';
import QandA from '../../QandA.jsx';
import QuestionBody from './QuestionBody.jsx';
import HelpReport from './HelpReport.jsx';
import QNameAndDate from './QNameAndDate.jsx';
import AnswerContainer from '../Answer/AnswerContainer.jsx';

export const QuestionContext = React.createContext(null);

const Question = ({data, setHeight, contentHeight}) => {
  const product = useContext(QandAContext);
  const { question_body, question_date, answers, asker_name, question_id, question_helpfulness } = data;

  const [ viewNum, setViewNum ] = useState(0);

  let sortedAnswers = sortAnswers(answers);


  return (
    <QuestionContext.Provider value={{sortedAnswers, data, viewNum, question_id, question_body}}>
      <div className='question' >
        <QNameAndDate     name={asker_name} date={question_date}/>
        <QuestionBody     body={question_body}/>
        <AnswerContainer  question_body={question_body} setHeight={setHeight}/>
        <HelpReport       helpfulness={question_helpfulness}/>
      </div>
    </QuestionContext.Provider>
  );
};

export default Question;