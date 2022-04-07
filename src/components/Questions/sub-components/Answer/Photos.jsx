import React, { useState, useContext } from 'react';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';


var Photos = ({photos}) => {


  return (
    <div>
      { photos.map( (photo, idx) => {
          console.log(photo)
          return <img key={idx} src={photo}></img>
      })}



    </div>
  );
};

export default Photos;