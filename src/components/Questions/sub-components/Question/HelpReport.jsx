import React, { useState, useContext } from 'react';
import axios from 'axios';
import QandA from '../../QandA.jsx';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';
import authorization from '../../../../../config.js';
import APIHelpers from '../../../APIHelpers.js';


var HelpReport = ({ helpfulness }) => {
  const { url, product } = useContext(QandAContext);
  const { question_id } = useContext(QuestionContext);

  const [  helpful, setHelpful  ] = useState(false);
  const [ reported, setReported ] = useState(false);



  var reportQuestion = () => {
    APIHelpers.reportQuestion(question_id, (err, res) => {
      if (err) {
        console.log(err, 'Question not reported')
      } else {
        console.log('Question Reported')
        setReported(true);
      }
    });
  };


  var helpfulQuestion = () => {

    axios.put(`${url}questions/${question_id}/helpful`, {
      headers: { authorization: authorization.TOKEN }
    })
      .then(response => {
        console.log('Question marked helpful');
        setHelpful(true);
      })
      .catch(error => {
        console.log('Helpful Question PUT request failed', authorization.TOKEN);
      });
  };




  var help;
  var report;

  if (helpful) {
    help = <div>
             <span>Helpful?</span>
             <a>Yes({helpfulness += 1})</a>
           </div>;
  } else {
    help = <div>
             <span>Helpful?</span>
             <a onClick={helpfulQuestion}>Yes({helpfulness})</a>
           </div>;
  }

  if (reported) {
    report = <div>
               <a>Reported</a>
             </div>;
  } else {
    report = <div>
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