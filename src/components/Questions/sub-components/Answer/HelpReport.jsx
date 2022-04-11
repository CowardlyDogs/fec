import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import APIHelpers from '../../../APIHelpers.js';

const HelpReport = ({id, helpfulness}) => {
  const {       product, url           } = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  const [  helpful, setHelpful  ] = useState(false);
  const [ reported, setReported ] = useState(false);



  const reportAnswer = () => {
    APIHelpers.reportAnswer(id, (err, res) => {
      if (err) {
        console.log(err, 'Answer not reported');
      } else {
        console.log(res, `Answer ${id} reported`);
        setReported(true);
      }
    });
  };



  const helpfulAnswer = () => {
    APIHelpers.helpfulAnswer(id, (err, res) => {
      if (err) {
        console.log('Answer HELPFUL request failed');
      } else {
        console.log('Answer marked helpful');
        setHelpful(true);
      }
    });
  };




  let helpfulDiv;
  let reportDiv;

  if (helpful) {
    helpfulDiv =
    <div>
      <span>Helpful?</span>
      <a>Yes({helpfulness += 1})</a>
    </div>;
  } else {
    helpfulDiv =
    <div>
      <span>Helpful?</span>
      <a onClick={helpfulAnswer}>Yes({helpfulness})</a>
    </div>;
  }

  if (reported) {
    reportDiv =
    <div>
      <a>Reported</a>
    </div>;
  } else {
    reportDiv =
    <div>
      <a onClick={reportAnswer}>Report</a>
    </div>;
  }



  return (
    <div>
      {reportDiv}
      {helpfulDiv}
    </div>
  );
};

export default HelpReport;