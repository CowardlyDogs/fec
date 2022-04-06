import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import authorization from '../../../../../config.js';

var HelpReport = ({id, helpfulness}) => {
  const { product, url } = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  const [ helpful, setHelpful ] = useState(false);
  const [ reported, setReported ] = useState(false);


  var reportAnswer = () => {

    const options = {
      url: `${url}answers/${id}/report`,
      method: 'put',
      headers: { authorization: authorization.TOKEN }
    };

    axios(options)
      .then(response => {
        console.log(response, `Answer ${id} reported`);
        setReported(true);
      })
      .catch(error => {
        console.log(error, 'Answer not reported');
        setReported(true);
      });
  };

  var helpfulAnswer = () => {

    const options = {
      url: `${url}answers/${id}/helpful`,
      method: 'put',
      headers: { authorization: authorization.TOKEN }
    };

    axios(options)
      .then(response => {
        console.log('Answer marked helpful');
        setHelpful(true);
      })
      .catch(error => {
        console.log('Helpful PUT request failed');
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
      <a onClick={helpfulAnswer}>Yes({helpfulness})</a>
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
      <a onClick={reportAnswer}>Report</a>
    </div>;
  }



  return (
    <div>
      {report}
      {help}
    </div>
  );
};

export default HelpReport;