import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';
import authorization from '../../../../../config.js';


var AddQuestion = ({product_id, productName}) => {
  const { setAddQuestion, addQuestion, product } = useContext(QandAContext);

  const [ questionVal,  setQuestionVal  ] = useState('');
  const [ nicknameVal,  setNicknameVal  ] = useState('');
  const [ emailVal,     setEmailVal     ] = useState('');
  const [ warningBool,  setWarningBool  ] = useState(false);
  const [ warningVals,  setWarningVals  ] = useState([])
  const [ invalidEmail, setInvalidEmail ] = useState('')
  const [ emailBool,    setEmailBool    ] = useState(false)

  const backgroundChange    = addQuestion ? "modal-background" : "hide";
  const showHideAddQuestion = addQuestion ? "modal-body" : "hide";
  const emptyInputs         = warningBool ? "warning" : "hide";
  const emailWarning        = emailBool   ? "invalid-email" : "hide";


  var hideModal = (e) => {
    e.preventDefault();
    setAddQuestion(prev=>!prev);
  };


  var question = {
         "body": questionVal,
         "name": nicknameVal,
        "email": emailVal,
   "product_id": product_id
   };



  var postQuestion = () => {

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/',
      question,
      {headers: { 'Authorization': authorization.TOKEN }})
      .then(response => {
        console.log(response, 'success')
      })
      .catch(error => {
        console.log(error, 'failed', question)
        setEmailBool(true)
        setInvalidEmail('Question not posted, please provide valid email address')
      })
  };



  var handleSubmit = (e) => {
    e.preventDefault();
    var warning = false;

    console.log(!emailVal.includes('.com'))

    if (nicknameVal.length === 0) {
      setWarningBool(true)
      setWarningVals(prev=>[...prev, 'NickName'])
      warning = true;
    }
    if (questionVal.length === 0) {
      setWarningBool(true)
      setWarningVals(prev=> [...prev, 'Question Body'])
      warning = true;
    }
    if (emailVal.length === 0) {
      setWarningBool(true)
      setWarningVals(prev=> [...prev, 'Email'])
      warning = true;
    } else if (!emailVal.includes('@') && !emailVal.includes('.com')) {
      setWarningBool(true)
      setWarningVals(prev=>[...prev, 'Email in correct format'])
      warning = true;
    }


    if (!warning) {
      postQuestion();
      setQuestionVal('');
      setNicknameVal('');
      setEmailVal('');
      setAddQuestion(prev=>!prev)
    }
  }

  var setAndClear = () => {
    setWarningBool(false);
    setEmailBool(false);
    setWarningVals([]);
  }




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