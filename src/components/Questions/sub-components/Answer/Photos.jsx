import React, { useState, useContext } from 'react';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import Photo from './Photo.jsx';


const Photos = ({photos}) => {

  return (
    <div className='answer-photos'>
      { photos.map( (photo, idx) => {
        return <Photo photo={photo} key={idx}/>;
      })}
    </div>
  );
};

export default Photos;