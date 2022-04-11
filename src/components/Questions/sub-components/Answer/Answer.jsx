import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import AnswerBody from './AnswerBody.jsx';
import HelpReport from './HelpReport.jsx';
import NameAndDate from './NameAndDate.jsx';
import Photos from './Photos.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';



const Answer = ({answerData}) => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);
  const { answerer_name, body, date, helpfulness, id, photos } = answerData;

  const photoDiv = photos.length > 0 ? <Photos photos={photos}/> : null;


  return (
    <div>
      <AnswerBody  body={body}/>
      <NameAndDate name={answerer_name} date={date}/>
      {photoDiv}
      <HelpReport  helpfulness={helpfulness} id={id}/>
    </div>
  );
};

export default Answer;