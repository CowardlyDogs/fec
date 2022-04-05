import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import moment from 'moment';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


// One QuestionModal per question - resides in greater QandA component

var NameAndDate = ({name, date}) => {
  const product = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  var answererName = name;
  if (name === 'Seller') {
    answererName = <strong>{name}</strong>;
  }

  return (
    <div>
      {answererName} {moment(date).format("MMM Do YY")}
    </div>
  );
};

export default NameAndDate;