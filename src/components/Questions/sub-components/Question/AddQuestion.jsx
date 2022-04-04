import React, { useState, useContext } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';

// Pop-up module to add answer - toggles with button on QandA component.
// Click anywhere on screen outside of modal and should disappear.

var AddQuestion = () => {
  const product = useContext(QandAContext);

  return (
    <div>
      Add Question
    </div>
  );
};

export default AddQuestion;