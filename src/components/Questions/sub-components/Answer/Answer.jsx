import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import AnswerBody from './AnswerBody.jsx';
import HelpReport from './HelpReport.jsx';
import NameAndDate from './NameAndDate.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';



var Answer = ({answerData}) => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);
  const { answerer_name, body, date, helpfulness, id, photos } = answerData;


  return (
    <div>
      <NameAndDate name={answerer_name} date={date}/>
      <AnswerBody body={body}/>
      <HelpReport />
    </div>
  );
};

export default Answer;