import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import APIHelpers from '../../../APIHelpers.js';
import '../../styles.css';

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
    if (localStorage.getItem(id)) {
      alert('Answer already marked helpful');
    } else {
      APIHelpers.helpfulAnswer(id, (err, res) => {
        if (err) {
          console.log('Answer HELPFUL request failed');
        } else {
          setHelpful(true);
          localStorage.setItem(id, id);
        }
      });
    }
  };


  let helpfulDiv;
  let reportDiv;

  if (helpful) {
    helpfulDiv =
    <div className='helpful'> Helpful? Yes({helpfulness += 1}) </div>;
  } else {
    helpfulDiv =
    <div className='helpful'> <a onClick={helpfulAnswer}> Helpful? Yes({helpfulness})</a> </div>;
  }

  if (reported) {
    reportDiv =
    <div className='report'>
      <a>Reported</a>
    </div>;
  } else {
    reportDiv =
    <div className='report'>
      <a onClick={reportAnswer}>Report</a>
    </div>;
  }

  return (
    <div className='help-report'>
      <div className='answer-hr-flex'>
        {reportDiv} {helpfulDiv}
      </div>
    </div>
  );
};

export default HelpReport;