import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';
import authorization from '../../../../../config.js';
import APIHelpers from '../../../APIHelpers.js';
import '../../styles.css';


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
    });
  };




  let helpfulDiv;
  let reportDiv;

  if (helpful) {
    helpfulDiv =
    <div className='helpful'>
      <span><strong>Helpful?</strong></span>
      <a>Yes({helpfulness += 1})</a>
    </div>;
  } else {
    helpfulDiv =
    <div className='helpful'>
      <a onClick={helpfulQuestion}> <span><strong>Helpful?</strong></span></a>
      <a onClick={helpfulQuestion}>  Yes ({helpfulness})</a>
    </div>;
  }

  if (reported) {
    reportDiv =
    <div className='report'>
      <a><strong>Reported</strong></a>
    </div>;
  } else {
    reportDiv =
    <div className='report'>
      <a onClick={reportQuestion}><strong>Report</strong></a>
    </div>;
  }



  return (
    <div className='help-report'>
      <div className='hr-flex'>
        {reportDiv} {helpfulDiv}
      </div>
    </div>
  );
};

export default HelpReport;