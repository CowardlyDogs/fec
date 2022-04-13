import React, { useState, useContext } from 'react';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';

const Photo = ({photo}) => {

  const [ viewPhoto, setViewPhoto ] = useState(false);
  const togglePhotoSize = viewPhoto ? 'lg-answer-photo' : 'sm-answer-photo';
  const toggleBackground = viewPhoto ? 'modal-background' :  'answer-photos';

  return (
    <div className={toggleBackground}>
      <img className={togglePhotoSize} src={photo} onClick={(e)=>setViewPhoto(prev=>!prev)}></img>
    </div>
  );
};

export default Photo;