import React, { useState, useContext } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';


var AddQuestion = () => {
  const { setAddQuestion, addQuestion, product } = useContext(QandAContext);

  const [ questionVal, setQuestionVal ] = useState('');
  const [ nicknameVal, setNicknameVal ] = useState('');

  const backgroundChange = addQuestion ? "modal-background" : "hide";
  const showHideAddQuestion = addQuestion ? "modal-body" : "hide";

  var hideModal = (e) => {
    e.preventDefault();
    setAddQuestion(prev=>!prev);
  };

  return (
    <div>
      <div className={backgroundChange} >

        <form className={showHideAddQuestion}>
          <input className='name' placeholder='NickName' value={nicknameVal} onChange={e=>setNicknameVal(e.target.value)}/>
          <input placeholder='Question body' value={questionVal} onChange={e=>setQuestionVal(e.target.value)}/>
          <button type='submit'>Submit</button>
          <button onClick={hideModal}>Close</button>
        </form>


      </div>

      <button onClick={()=>setAddQuestion(prev=>!prev)}>Ask Question</button>
    </div>

  );
};

export default AddQuestion;