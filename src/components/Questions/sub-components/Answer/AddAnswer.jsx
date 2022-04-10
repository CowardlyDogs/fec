import React, { useContext, useState } from 'react';
import axios from 'axios';
import { QandAContext } from '../../QandA.jsx';
import { QuestionContext } from '../Question/Question.jsx';
import '../../styles.css';
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
  const [ urls,          setUrls          ] = useState('');

  const backgroundChange    = addAnswer   ? "modal-background" : "hide";
  const showHideAddAnswer   = addAnswer   ? "modal-body" : "hide";
  const emptyInputs         = warningBool ? "warning" : "hide";
  const emailWarning        = emailBool   ? "invalid-email" : "hide";


  const hideModal = (e) => {
    e.preventDefault();
    setAddAnswer(prev=>!prev);
  };

  const answer = {
    "body":   answerVal,
    "name":   nicknameVal,
    "email":  emailVal,
    "photos": urls
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



  const onFileChange = (e) => {
    if (answerImages.length === 5) {
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



  // const onFileUpload = () => {

  //   Promise.all([]);


  //   answerImages.forEach( (photo, idx) => {
  //     const data = new FormData();

  //     data.append('file', photo);
  //     data.append('upload_preset', 'ungsadl0');
  //     data.append('cloud_name', 'cowardly-dog');

  //     fetch('https://api.cloudinary.com/v1_1/cowardly-dog/upload', {
  //       method: 'post',
  //       body: data
  //     })
  //       .then(resp => resp.json())
  //       .then(data => {
  //         setUrls(prev=>[data.url, ...prev]);
  //       })
  //       .catch(err => {
  //         console.log(err, 'ERROR in posting img');
  //       });
  //   });
  // };



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


          <div>
            <label>Add Photos:</label>
            <input type='file' name='image' onChange={(e)=>onFileChange(e)}/>
            {/* <button onClick={onFileUpload}>Upload Photos</button> */}
            {console.log(urls)}
          </div>

          <div>
            <img src={answerImages}/>
          </div>


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