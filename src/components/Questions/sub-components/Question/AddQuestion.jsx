import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';
import authorization from '../../../../../config.js';
import APIHelpers from '../../../APIHelpers.js';


var AddQuestion = ({defaultId, productName}) => {
  const { setAddQuestion, addQuestion, product, visibleQs, setVisibleQs } = useContext(QandAContext);

  const [ questionVal,  setQuestionVal  ] = useState('');
  const [ nicknameVal,  setNicknameVal  ] = useState('');
  const [ emailVal,     setEmailVal     ] = useState('');
  const [ warningBool,  setWarningBool  ] = useState(false);
  const [ warningVals,  setWarningVals  ] = useState([]);
  const [ invalidEmail, setInvalidEmail ] = useState('');
  const [ emailBool,    setEmailBool    ] = useState(false);

  const backgroundChange    = addQuestion ? 'modal-background' : 'hide';
  const showHideAddQuestion = addQuestion ? 'modal-body' : 'hide';
  const emptyInputs         = warningBool ? 'warning' : 'hide';
  const emailWarning        = emailBool   ? 'invalid-email' : 'hide';


  const hideModal = (e) => {
    e.preventDefault();
    setAddQuestion(prev=>!prev);
  };


  let question = {
    "body": questionVal,
    "name": nicknameVal,
    "email": emailVal,
    'product_id': Number(defaultId)
  };



  const postQuestion = () => {
    APIHelpers.postQuestion(question, (err, res) => {
      if (err) {
        console.log(err, 'failed', question);
        setEmailBool(true);
        setInvalidEmail('Question not posted, please provide valid email address');
      } else {
        console.log(res, 'Question posted');
        setQuestionVal('');
        setNicknameVal('');
        setEmailVal('');
        setAddQuestion(prev=>!prev);
      }
    });

    // setVisibleQs([question, ...visibleQs]);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    let warning = false;


    if (nicknameVal.length === 0) {
      setWarningBool(true);
      setWarningVals(prev=>[...prev, 'NickName']);
      warning = true;
    }
    if (questionVal.length === 0) {
      setWarningBool(true);
      setWarningVals(prev=> [...prev, 'Question Body']);
      warning = true;
    }
    if (emailVal.length === 0) {
      setWarningBool(true);
      setWarningVals(prev=> [...prev, 'Email']);
      warning = true;
    } else if (!emailVal.includes('@') && !emailVal.includes('.com')) {
      setWarningBool(true);
      setWarningVals(prev=>[...prev, 'Email in correct format']);
      warning = true;
    }
    if (!warning) {
      postQuestion();
    }
  };



  const setAndClear = () => {
    setWarningBool(false);
    setEmailBool(false);
    setWarningVals([]);
    setQuestionVal('');
    setNicknameVal('');
    setEmailVal('');
  };




  return (


    <div>
      <div className={backgroundChange} onClick={warningBool ? setAndClear : null}>

        <form className={showHideAddQuestion}>
          <h4>Ask Your Question</h4>
          <h6>About the {productName}</h6>

          <label>Your Question</label>
          <input required className='quesBody'  placeholder='Question'                 type='text'  maxLength='1000' value={questionVal} onChange={e=>setQuestionVal(e.target.value)}/>

          <label>What is your nickname?</label>
          <input required className='quesName'  placeholder='Example: jackson11!'      type='text'  maxLength='60'   value={nicknameVal} onChange={e=>setNicknameVal(e.target.value)}/>
          <span>For privacy reasons, do not use your full name or email address</span>

          <label>Your email</label>
          <input required className='quesEmail' placeholder='Example: jack@email.com'  type='email' maxLength='60'   value={emailVal}    onChange={e=>setEmailVal(e.target.value)}/>
          <span>For authentication reasons, you will not be emailed</span>


          <button type='submit' onClick={warningBool ? setAndClear : handleSubmit}>  Submit</button>
          <button type='submit' onClick={hideModal}>Close</button>
        </form>
      </div>

      <span className={emptyInputs}  onClick={setAndClear}>**You must enter the following: {warningVals.join(', ')}**</span>
      <span className={emailWarning} onClick={setAndClear}>{invalidEmail}</span>


      <button onClick={()=>setAddQuestion(prev=>!prev)}>Ask Question</button>
    </div>

  );
};

export default AddQuestion;