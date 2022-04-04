import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';


var HelpReport = () => {
  const product = useContext(QandAContext);
  const { data } = useContext(QuestionContext);

  return (
    <div>
      Question Helpful? Report Question
    </div>
  );
};

export default HelpReport;