import React, { useContext, useState } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';
import authorization from '../../../../../config.js';


var AddAnswer = () => {
  const { product, productName } = useContext(QandAContext);
  const { question_id, question_body } = useContext(QuestionContext);

  const [ addAnswer,    setAddAnswer    ] = useState(false)
  const [ answerVal,    setAnswerVal    ] = useState('');
  const [ nicknameVal,  setNicknameVal  ] = useState('');
  const [ emailVal,     setEmailVal     ] = useState('');
  const [ warningBool,  setWarningBool  ] = useState(false);
  const [ warningVals,  setWarningVals  ] = useState([])
  const [ invalidEmail, setInvalidEmail ] = useState('')
  const [ emailBool,    setEmailBool    ] = useState(false)

  const backgroundChange    = addAnswer   ? "modal-background" : "hide";
  const showHideAddAnswer   = addAnswer   ? "modal-body" : "hide";
  const emptyInputs         = warningBool ? "warning" : "hide";
  const emailWarning        = emailBool   ? "invalid-email" : "hide";


  var hideModal = (e) => {
    e.preventDefault();
    setAddAnswer(prev=>!prev);
  };

  var answer = {
    "body": answerVal,
    "name": nicknameVal,
    "email": emailVal,
    "photos": ["none"]
    }

  var postAnswer = () => {

    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`, answer, {headers: { 'Authorization': authorization.TOKEN }})
      .then(response => {
        console.log(`Question ${question_id} posted`, response)
        setAnswerVal('');
        setNicknameVal('');
        setEmailVal('');
        setAddAnswer(prev=>!prev)
      })
      .catch(error => {
        console.log('Error', error)
        setEmailBool(true)
        setInvalidEmail('Question not posted, please provide valid email address')
      })
  }




  var handleSubmit = (e) => {
    e.preventDefault();
    var warning = false;


    if (nicknameVal.length === 0) {
      setWarningBool(true)
      setWarningVals(prev=>[...prev, 'NickName'])
      warning = true;
    }
    if (answerVal.length === 0) {
      setWarningBool(true)
      setWarningVals(prev=> [...prev, 'Answer Body'])
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
      postAnswer();
    }
  }

  var setAndClear = () => {
    setAnswerVal('');
    setNicknameVal('');
    setEmailVal('');
    setWarningBool(false);
    setEmailBool(false);
    setWarningVals([]);
  }





  return (

    <div>
      <div className={backgroundChange} onClick={warningBool ? setAndClear : null}>

        <form className={showHideAddAnswer}>
          <h4>Submit Your Answer</h4>
          <h6>{productName}: {question_body}</h6>

          <label>Your Answer</label>
          <input required className='answerBody'  placeholder='Answer here'                 type='text'  maxLength='1000' value={answerVal} onChange={e=>setAnswerVal(e.target.value)}/>

          <label>What is your nickname?</label>
          <input required className='answerName'  placeholder='Example: jack543!'           type='text'  maxLength='60'   value={nicknameVal} onChange={e=>setNicknameVal(e.target.value)}/>
          <span>For privacy reasons, do not use your full name or email address</span>

          <label>Your email</label>
          <input required className='answerEmail' placeholder='Example: jack@email.com'     type='email' maxLength='60'   value={emailVal}    onChange={e=>setEmailVal(e.target.value)}/>
          <span>For authentication reasons, you will not be emailed</span>


          <button type='submit' onClick={warningBool ? setAndClear : handleSubmit}>  Submit</button>
          <button type='submit' onClick={hideModal}>Close</button>
        </form>
      </div>

      <span className={emptyInputs}  onClick={setAndClear}>**You must enter the following: {warningVals.join(', ')}**</span>
      <span className={emailWarning} onClick={setAndClear}>{invalidEmail}</span>


      <button onClick={()=>setAddAnswer(prev=>!prev)}>Add Answer</button>
    </div>

  );
};

export default AddAnswer;