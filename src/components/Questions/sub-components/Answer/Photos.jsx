import React, { useState, useContext } from 'react';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


const Photos = ({photos}) => {

  return (
    <div>
      { photos.map( (photo, idx) => {
        return <img key={idx} width={50} height={50} src={photo}></img>;
      })}
    </div>
  );
};

export default Photos;