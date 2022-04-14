import React, { useContext, useState } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import authorization from '../../../../../config.js';
import APIHelpers from '../../../APIHelpers.js';


var AddAnswer = () => {
  const {     product, productName   } = useContext(QandAContext);
  const { question_id, question_body } = useContext(QuestionContext);

  const [ addAnswer,    setAddAnswer    ] = useState(false);
  const [ answerVal,    setAnswerVal    ] = useState('');
  const [ nicknameVal,  setNicknameVal  ] = useState('');
  const [ emailVal,     setEmailVal     ] = useState('');
  const [ warningBool,  setWarningBool  ] = useState(false);
  const [ warningVals,  setWarningVals  ] = useState([]);
  const [ invalidEmail, setInvalidEmail ] = useState('');
  const [ emailBool,    setEmailBool    ] = useState(false);
  const [ answerImages, setAnswerImages ] = useState([]);
  const [ imageUploads, setImageUploads ] = useState([]);
  const [ urls,         setUrls         ] = useState([]);
  const [ hover,        setHover        ] = useState(false);

  const backgroundChange    = addAnswer   ? 'modal-background' : 'hide';
  const showHideAddAnswer   = addAnswer   ? 'modal-body addQ front' : 'hide';

  const warnModal           = warningBool ? 'warn-modal' : 'hide';
  const emptyInputs         = warningBool ? 'warning' : 'hide';

  const hideModal = (e) => {
    e.preventDefault();
    setAddAnswer(prev=>!prev);
  };

  const answer = {
    'body':   answerVal,
    'name':   nicknameVal,
    'email':  emailVal,
    'photos': urls
  };

  const postAnswer = () => {
    APIHelpers.postAnswer(question_id, answer, (err, res) => {
      if (err) {
        console.log('Error', err);
        setEmailBool(true);
        setInvalidEmail('Answer not posted, please provide valid email address');
      } else {
        console.log(`Answer posted`, res, answer);
        setAnswerVal('');
        setNicknameVal('');
        setEmailVal('');
        setAddAnswer(prev=>!prev);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var warning = false;


    if (nicknameVal.length === 0) {
      setWarningBool(true);
      setWarningVals(prev=>[...prev, 'NickName']);
      warning = true;
    }

    if (answerVal.length === 0) {
      setWarningBool(true);
      setWarningVals(prev=> [...prev, 'Answer Body']);
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
      postAnswer();
    }
  };

  const setAndClear = () => {
    setAnswerVal('');
    setNicknameVal('');
    setEmailVal('');
    setWarningBool(false);
    setEmailBool(false);
    setWarningVals([]);
  };

  const set = () => {
    setWarningBool(false);
    setEmailBool(false);
  };

  const onFileChange = (e) => {
    if ([...urls].length === 5) {
      alert('Only 5 images allowed');
    } else {
      const data = new FormData();
      data.append('file', e.target.files[0]);
      data.append('upload_preset', 'ungsadl0');
      data.append('cloud_name', 'cowardly-dog');
      fetch('https://api.cloudinary.com/v1_1/cowardly-dog/upload', {
        method: 'post',
        body: data
      })
        .then(resp => resp.json())
        .then(data => {
          setUrls(prev=>[data.url, ...prev]);
        })
        .catch(err => {
          console.log(err, 'ERROR in posting img');
        });
    }
  };

  const remove = (url) => {
    var filtered = [...urls].filter(img => {
      return img !== url;
    });
    setUrls(filtered);
  };

  return (

    <div>
      <div className={backgroundChange} onClick={warningBool ? setAndClear : null}>

        <form className={showHideAddAnswer}>
          <header>
            <span className='formPrompt'>Submit Your Answer</span>
            <br/>
            <h1 className='answer-title'>{productName}: {question_body}</h1>
          </header>

          <div className='formInputs'>
            <span className='quesTitle'>Your Answer</span>
            <textarea required className='quesBody' style={{height: '100px'}} placeholder='Answer here'  rows='14' cols='10' wrap='soft' maxLength='1000' value={answerVal} onChange={e=>setAnswerVal(e.target.value)}/>

            <span className='quesTitle'>What is your nickname?</span>
            <input required className='formInput'  placeholder='Example: jackson11!'      type='text'  maxLength='60'   value={nicknameVal} onChange={e=>setNicknameVal(e.target.value)}/>
            <span className='sub-title'>For privacy reasons, do not use your full name or email address</span>

            <span className='quesTitle'>Your email</span>
            <input required className='formInput' placeholder='Example: jack@email.com'     type='email' maxLength='60'   value={emailVal}    onChange={e=>setEmailVal(e.target.value)}/>
            <span className='sub-title'>For authentication reasons, you will not be emailed</span>


            <div>
              <span className='quesTitle'>Add photos:</span>
              <input type='file' name='image' onChange={(e)=>onFileChange(e)}/>

              {[...urls].map( url => {
                return <img key={url} width='75px' height='auto' src={url}  onClick={()=>remove(url)} onMouseEnter={()=>setHover(prev=>!prev)} onMouseLeave={()=>setHover(prev=>!prev)}/>;
              })}
            </div>
          </div>

          <div className='form-buttons'>
            <button type='submit' className='submit' onClick={warningBool ? setAndClear : handleSubmit}>  Submit</button>
            <button className='exit' onClick={hideModal}><svg viewBox='15 10 25 20' height='30'  width='50'><title>Close 'X' Icon</title><path aria-hidden='true' d='M19.414 18l4.243 4.243a1 1 0 0 1-1.414 1.414L18 19.414l-4.243 4.243a1 1 0 0 1-1.414-1.414L16.586 18l-4.243-4.243a1 1 0 0 1 1.414-1.414L18 16.586l4.243-4.243a1 1 0 0 1 1.414 1.414L19.414 18z' fillRule='evenodd'></path></svg></button>
          </div>

        </form>
      </div>
      <div className={warnModal}>
        <span className={emptyInputs}  onClick={set}>You must enter the following:<br/>{warningVals.join(', ')}</span>
      </div>


      <button className='addA' onClick={()=>setAddAnswer(prev=>!prev)}>Add Answer</button>
    </div>

  );
};

export default AddAnswer;