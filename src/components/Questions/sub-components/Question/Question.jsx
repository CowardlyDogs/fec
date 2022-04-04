import React, { useState, createContext, useContext } from 'react';
import { QandAContext } from '../../QandA.jsx';
import { sortAnswers } from '../../HelperFunction.js';
import QandA from '../../QandA.jsx';
import QuestionBody from './QuestionBody.jsx';
import HelpReport from './HelpReport.jsx';
import QNameAndDate from './QNameAndDate.jsx';
import AnswerContainer from '../Answer/AnswerContainer.jsx';

export const QuestionContext = React.createContext(null);

var Question = ({data}) => {
  const product = useContext(QandAContext);
  const { question_body, question_date, answers, asker_name, question_id } = data;

  const [ viewNum, setViewNum ] = useState(0);

  var sortedAnswers = sortAnswers(answers);




  return (
    <QuestionContext.Provider value={{sortedAnswers, data, viewNum, question_id}}>
      <div>
        <QNameAndDate name={asker_name} date={question_date}/>
        <QuestionBody body={question_body}/>
        <HelpReport />
        <AnswerContainer />
      </div>
    </QuestionContext.Provider>
  );
};

export default Question;