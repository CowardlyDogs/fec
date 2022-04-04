import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';


var HelpReport = () => {
  const { url, product } = useContext(QandAContext);
  const { question_id } = useContext(QuestionContext);

  const [ helpful, setHelpful ] = useState(false);
  const [ reported, setReported ] = useState(false);



  var reportQuestion = () => {
    axios.put(`${url}questions/${question_id}/report`, {
      headers: { authorization: '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' }
    })
      .then(response => {
        console.log(response, `Question ${id} reported`);
        setReported(true);
      })
      .catch(error => {
        console.log(error, 'Question {} not reported');
      });
  };



  var helpfulQuestion = () => {
    axios.put(`${url}questions/${question_id}/helpful`, {
      headers: { Authorization: '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' }
    })
      .then(response => {
        console.log('Question marked helpful');
        setHelpful(true);
      })
      .catch(error => {
        console.log('Helpful Question PUT request failed');
      });
  };





  var help;
  var report;

  if (helpful) {
    help = <span>'Thanks for the feedback!'</span>;
  } else {
    help = <a onClick={helpfulQuestion}>Was this helpful?</a>;
  }

  if (reported) {
    report = <span>Question reported</span>;
  } else {
    report = <a onClick={reportQuestion}>Reported</a>;
  }



  return (
    <div>
      {report}
      {help}
    </div>
  );
};

export default HelpReport;