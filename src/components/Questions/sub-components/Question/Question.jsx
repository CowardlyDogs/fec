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
  const { question_body, question_date, answers, asker_name } = data;

  const [ viewNum, setViewNum ] = useState(0);
  // ViewNum 0 = shows top answer
  // ViewNum 1 = shows top 4 answers?
  // Increment viewNum shows next 4 answers
  // If AnswersLeftToShow = 0, viewNum = 0
  // BUTTONS to toggle viewNum - Previous Answers --- More Answers

  var sortedAnswers = sortAnswers(answers);

  return (
    <QuestionContext.Provider value={{sortedAnswers, data, viewNum}}>
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