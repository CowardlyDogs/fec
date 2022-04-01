import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Answer from './Answer.jsx';
import AnswerBody from './AnswerBody.jsx';
import HelpReport from './HelpReport.jsx';
import NameAndDate from './NameAndDate.jsx';


function AnswerContainer () {
  const product = useContext(QandAContext);

  return (
    <div>
      AnswerContainer
    </div>
  );
}

export default AnswerContainer;