import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';
import authorization from '../../../../../config.js';


var HelpReport = ({ helpfulness }) => {
  const { url, product } = useContext(QandAContext);
  const { question_id } = useContext(QuestionContext);

  const [ helpful, setHelpful ] = useState(false);
  const [ reported, setReported ] = useState(false);



  var reportQuestion = () => {

    const options = {
      url: `${url}questions/${question_id}/report`,
      method: 'put',
      headers: { authorization: authorization.TOKEN }
    };

    axios(options)
      .then(response => {
        console.log(response, `Question ${id} reported`);
        setReported(true);
      })
      .catch(error => {
        console.log(error, 'Question {} not reported');
        setReported(true);
      });
  };



  var helpfulQuestion = () => {

    const options = {
      url: `${url}questions/${question_id}/helpful`,
      method: 'put',
      headers: { authorization: authorization.TOKEN }
    };


    axios(options)
      .then(response => {
        console.log('Question marked helpful');
        setHelpful(true);
      })
      .catch(error => {
        console.log('Helpful Question PUT request failed');
        setHelpful(true);
      });
  };




  var help;
  var report;

  if (helpful) {
    help =
    <div>
      <span>Helpful?</span>
      <a>Yes({helpfulness += 1})</a>
    </div>;
  } else {
    help =
    <div>
      <span>Helpful?</span>
      <a onClick={helpfulQuestion}>Yes({helpfulness})</a>
    </div>;
  }

  if (reported) {
    report =
    <div>
      <a>Reported</a>
    </div>;
  } else {
    report =
    <div>
      <a onClick={reportQuestion}>Report</a>
    </div>;
  }



  return (
    <div>
      <br/>
      {report}
      {help}
    </div>
  );
};

export default HelpReport;