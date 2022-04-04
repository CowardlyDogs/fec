import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';

var HelpReport = ({id}) => {
  const { product, url } = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  var reportAnswer = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${id}/report`, {
      headers: { authorization: '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' }
    })
      .then(response => {
        console.log(response, `Answer ${id} reported`);
      })
      .catch(error => {
        console.log(error, 'Answer not reported');
      });
  };

  var helpfulAnswer = () => {
    axios.put(`${url}answers/${id}/helpful`, {
      headers: { Authorization: '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' }
    })
      .then(response => {
        console.log('Answer marked helpful');
      })
      .catch(error => {
        console.log('Helpful PUT request failed');
      });
  };

  return (
    <div>
      <a onClick={reportAnswer}>Report Answer</a>
      <a onClick={helpfulAnswer}>Answer Helpful?</a>
    </div>
  );
};

export default HelpReport;