import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import moment from 'moment';
import { QandAContext } from  '../../QandA.jsx';
import { QuestionContext } from './Question.jsx';

const QNameAndDate = ({name, date}) => {
  const  { theme, product } = useContext(QandAContext);
  const { data } = useContext(QuestionContext);

  return (
    <div id={theme} className='NameAndDate'>
      <div className='Qname'>  {name.toUpperCase()}</div>
      <div >  {moment(date).format('MMM Do YY')}</div>
    </div>
  );
};

export default QNameAndDate;