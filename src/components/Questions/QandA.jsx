import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import reactDOM from 'react-dom';
import './styles.css';
import authorization from '../../../config.js';
import { sortQuestions, sortAnswers } from './HelperFunction.js';
import QuesContainer from './sub-components/Question/QuesContainer.jsx';
import Question from './sub-components/Question/Question.jsx';
import Search from './sub-components/Search.jsx';
import AddQuestion from './sub-components/Question/AddQuestion.jsx';
import AddAnswer from './sub-components/Answer/AddAnswer.jsx';
import APIHelpers from '../APIHelpers.js';

export const QandAContext = React.createContext(null);

const QandA = ({defaultId}) => {

  // const [   defaultId, setdefaultId     ] = useState(defaultId);
  const [ productName, setProductName ] = useState('');
  const [   questions, setQuestions   ] = useState([]);
  const [   searchVal, setSearchVal   ] = useState('');
  const [  searchView, setSearchView  ] = useState(false);
  const [   visibleQs, setVisibleQs   ] = useState(questions);
  const [ addQuestion, setAddQuestion ] = useState(false);
  const [     viewNum, setViewNum     ] = useState(0);


  useEffect(() => {
    APIHelpers.getProductName(defaultId, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setProductName(res.name);
      }
    });

    APIHelpers.getQuestions(defaultId, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        var sorted = sortQuestions(res);
        setQuestions(sorted);
        setVisibleQs(sorted);
      }
    });
  }, []);



  const searchQuestions = (search) => {

    let filtered = questions.filter( question => {
      return question.question_body.includes(search);
    });
    setVisibleQs(filtered);
    setSearchView(true);
  };




  let questionList;
  let search;
  let noQuestions;

  if (questions.length > 0) {
    questionList = <QuesContainer />;
    search = <Search />;
  } else {
    questionList = <span>No questions asked yet.</span>;
  }




  return (
    <QandAContext.Provider value={{   defaultId,   productName,
      questions, searchVal, setSearchVal, visibleQs,   setVisibleQs,
      searchView,  setSearchView, addQuestion, setAddQuestion, searchQuestions   }}>

      <div className='QandA'>
        <h2 className='header'> Questions and Answers</h2>
        <div className='search-bar'>{search}</div>
        <div>{questionList}</div>
        <AddQuestion defaultId={defaultId} productName={productName}/>
      </div>
    </QandAContext.Provider>
  );
};

export default QandA;
