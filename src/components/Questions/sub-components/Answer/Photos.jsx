import React, { useState, useContext } from 'react';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var Photos = ({photos}) => {

  return (
    <div>
      { photos.map( (photo, idx) => {
          return <img key={idx} src={photo}></img>
      })}
    </div>
  );
};

export default Photos;