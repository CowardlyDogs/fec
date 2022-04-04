import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';

var HelpReport = () => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  return (
    <div>
      Answer Helpful? Report Answer
    </div>
  );
};

export default HelpReport;