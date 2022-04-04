import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';


var HelpReport = () => {
  const { url, product } = useContext(QandAContext);
  const { question_id } = useContext(QuestionContext);

  var reportQuestion = () => {
    axios.put(`${url}questions/${question_id}/report`, {
      headers: { authorization: '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' }
    })
      .then(response => {
        console.log(response, `Question ${id} reported`);
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
      })
      .catch(error => {
        console.log('Helpful Question PUT request failed');
      });
  };

  return (
    <div>
      {console.log(question_id)}
      <a onClick={reportQuestion}>Report Question</a>
      <a onClick={helpfulQuestion}>Question Helpful?</a>
    </div>
  );
};

export default HelpReport;