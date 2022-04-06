import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import QuestionBody from './QuestionBody.jsx';
import HelpReport from './HelpReport.jsx';
import NameAndDate from './NameAndDate.jsx';
import AnswerContainer from '../Answer/AnswerContainer.jsx';


function Question () {
  const product = useContext(QandAContext);

  return (
    <div>
      Question Modal
    </div>
  );
}

export default Question;