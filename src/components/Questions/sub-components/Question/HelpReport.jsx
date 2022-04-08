import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';
import authorization from '../../../../../config.js';
import APIHelpers from '../../../APIHelpers.js';


const HelpReport = ({ helpfulness }) => {
  const { url, product } = useContext(QandAContext);
  const { question_id } = useContext(QuestionContext);

  const [  helpful, setHelpful  ] = useState(false);
  const [ reported, setReported ] = useState(false);



  const reportQuestion = () => {
    APIHelpers.reportQuestion(question_id, (err, res) => {
      if (err) {
        console.log(err, 'Question not reported');
      } else {
        console.log('Question Reported');
        setReported(true);
      }
    });
  };


  const helpfulQuestion = () => {
    APIHelpers.helpfulQuestion(question_id, (err, res) => {
      if (err) {
        console.log(err);
        console.log('Question NOT marked helpful');
      } else {
        setHelpful(true);
        console.log('Question marked helpful');
      }
    })
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
      <a onClick={helpfulQuestion}>Yes({helpfulness})</a>
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
      <a onClick={reportQuestion}>Report</a>
    </div>;
  }



  return (
    <div>
      <br/>
      {reportDiv}
      {helpfulDiv}
    </div>
  );
};

export default HelpReport;