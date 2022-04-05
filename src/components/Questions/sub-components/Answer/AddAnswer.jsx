import React, { useContext, useState } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';


var AddAnswer = () => {
  const { setAddAnswer, addAnswer, product } = useContext(QandAContext);

  const [ answerVal, setAnswerVal ] = useState('');

  const backgroundChange = addAnswer ? "modal-background" : "hide";
  const showHideAddAnswer = addAnswer ? "modal-body" : "hide";


  return (
    <div>
      <div className={backgroundChange} onClick={()=>setAddAnswer(prev=>!prev)}>
        <form className={showHideAddAnswer}>

          <input placeholder='NickName' value=''/>
          <input placeholder='Answer body' value={answerVal} onChange={e=>setQuestionVal(e.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <button onClick={()=>setAddAnswer(prev=>!prev)}>Add Answer</button>
    </div>

  );
};

export default AddAnswer;