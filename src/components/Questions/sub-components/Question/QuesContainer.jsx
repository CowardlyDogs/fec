import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Question from './Question.jsx';
import {QandAContext} from '../../QandA.jsx';


function QuesContainer () {
  const product = useContext(QandAContext);
  const questions = useContext(QandAContext)
  const answers = useContext(QandAContext);

  // Keep state for:
  //    view changer
  //        0 = Single top rated answer displayed
  //        1 = Expanded to size of all answers

  var showmore;
  showMore = <button>Show more Questions</button>

  return (
    <div>
      QuesContainer
    </div>
  );
}

export default QuesContainer;