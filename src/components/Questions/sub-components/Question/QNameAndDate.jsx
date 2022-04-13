import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import moment from 'moment';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';

const QNameAndDate = ({name, date}) => {
  const  product = useContext(QandAContext);
  const { data } = useContext(QuestionContext);

  return (
    <div className='NameAndDate'>
      <div className='Qname'>  {name.toUpperCase()}</div>
      <div className='Qdate'>  {moment(date).format('MMM Do YY')}</div>
    </div>
  );
};

export default QNameAndDate;