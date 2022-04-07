import React, { useContext, useState } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';
import authorization from '../../../../../config.js';


var AddAnswer = () => {
  const { setAddAnswer, addAnswer, product } = useContext(QandAContext);
  const { question_id } = useContext(QuestionContext);

  const [ answerVal, setAnswerVal ] = useState('');
  const [ nicknameVal, setNicknameVal ] = useState('');
  const [ emailVal, setEmailVal ] = useState('');

  const backgroundChange = addAnswer ? "modal-background" : "hide";
  const showHideAddAnswer = addAnswer ? "modal-body" : "hide";


  var hideModal = (e) => {
    e.preventDefault();
    setAddAnswer(prev=>!prev);
  };

  var test = {

    "body": "this is answer to a test ugh22222",

    "name": "scrooge mcduck",

    "email": "donaldduck@gmail.com",

    "photos": ["hello"]
    }

  var postAnswer = () => {

    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`, test, {headers: { 'Authorization': authorization.TOKEN }})
      .then(response => {
        console.log(`Question ${question_id} posted`, response)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  var handleSubmit = (e) => {
    e.preventDefault();
    postAnswer();
    setAddAnswer(prev=>!prev);
  }


  return (
    <div>
      <div className={backgroundChange}>
        <form className={showHideAddAnswer}>

          <input placeholder='NickName'     value=''          onChange={e=>setNicknameVal(e.target.value)}/>
          <input placeholder='Answer body'  value={answerVal} onChange={e=>setAnswerVal(e.target.value)}/>
          <input placeholder='Email'        value=''          onChange={e=>setEmailVal(e.target.value)}/>/>

          <button type='submit' onClick={handleSubmit}>Submit</button>
          <button onClick={hideModal}>Close</button>

        </form>
      </div>

      <button onClick={()=>setAddAnswer(prev=>!prev)}>Add Answer</button>
    </div>

  );
};

export default AddAnswer;