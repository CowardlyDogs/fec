import React, { useContext, useState } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';


var AddAnswer = () => {
  const { setAddAnswer, addAnswer, product } = useContext(QandAContext);

  const [ answerVal, setAnswerVal ] = useState('');
  const [ nicknameVal, setNicknameVal ] = useState('');

  const backgroundChange = addAnswer ? "modal-background" : "hide";
  const showHideAddAnswer = addAnswer ? "modal-body" : "hide";


  var hideModal = (e) => {
    e.preventDefault();
    setAddAnswer(prev=>!prev);
  };


  return (
    <div>
      <div className={backgroundChange}>
        <form className={showHideAddAnswer}>

          <input placeholder='NickName' value=''onChange={e=>setNicknameVal(e.target.value)}/>
          <input placeholder='Answer body' value={answerVal} onChange={e=>setAnswerVal(e.target.value)}/>
          <button type='submit'>Submit</button>
          <button onClick={hideModal}>Close</button>
        </form>
      </div>

      <button onClick={()=>setAddAnswer(prev=>!prev)}>Add Answer</button>
    </div>

  );
};

export default AddAnswer;