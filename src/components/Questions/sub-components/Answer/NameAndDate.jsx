import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import moment from 'moment';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var NameAndDate = ({name, date}) => {
  const { theme, product } = useContext(QandAContext);
  const { sortedAnswers, viewNum, data } = useContext(QuestionContext);

  let answererName = name;
  if (name === 'Seller') {
    answererName = <strong>{name}</strong>;
  }

  return (
    <div>
      <div className='Adate'> Response from {answererName} on {moment(date).format('MMM Do YY')}</div>
    </div>
  );
};

export default NameAndDate;