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
  const showHideAddQuestion = addQuestion ? 'modal-body addQ' : 'hide';
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
    // setQuestionVal('');
    // setNicknameVal('');
    // setEmailVal('');
  };

  // const set = () => {
  //   setWarningBool(false);
  //   setEmailBool(false);
  //   setWarningVals([]);
  // };




  return (


    <div>
      <div className={backgroundChange} onClick={warningBool ? setAndClear : null}>

        <form className={showHideAddQuestion}>
          <header>
            <span className='formPrompt'>Ask Your Question</span>
            <h1 className='formTitle'>About the {productName}</h1>
          </header>

          <div className='formInputs'>
            <span className='quesTitle'>Your Question</span>
            <textarea required className='quesBody'  placeholder='Question'  rows='14' cols='10' wrap='soft' maxLength='1000' value={questionVal} onChange={e=>setQuestionVal(e.target.value)}/>

            <span className='quesTitle'>What is your nickname?</span>
            <input required className='formInput'  placeholder='Example: jackson11!'      type='text'  maxLength='60'   value={nicknameVal} onChange={e=>setNicknameVal(e.target.value)}/>
            <span className='sub-title'>For privacy reasons, do not use your full name or email address</span>

            <span className='quesTitle'>Your email</span>
            <input required className='formInput' placeholder='Example: jack@email.com'  type='email' maxLength='60'   value={emailVal}    onChange={e=>setEmailVal(e.target.value)}/>
            <span className='sub-title'>For authentication reasons, you will not be emailed</span>
          </div>

          <div className='form-buttons'>
            <button type='submit' className='submit' onClick={warningBool ? setAndClear : handleSubmit}>  Submit</button>
            <button className='exit' onClick={hideModal}><svg viewbox='15 10 25 20' height="40"  width="50"><title>Close "X" Icon</title><path aria-hidden="true" d="M19.414 18l4.243 4.243a1 1 0 0 1-1.414 1.414L18 19.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L16.586 18l-4.243-4.243a1 1 0 0 1 1.414-1.414L18 16.586l4.243-4.243a1 1 0 0 1 1.414 1.414L19.414 18z" fill-rule="evenodd"></path></svg></button>
          </div>



        </form>
      </div>

      <span className={emptyInputs}  onClick={setAndClear}>You must enter the following: {warningVals.join(', ')}**</span>
      <span className={emailWarning} onClick={setAndClear}>{invalidEmail}</span>




      <button onClick={()=>setAddQuestion(prev=>!prev)}>Ask Question</button>
    </div>

  );
};

export default AddQuestion;