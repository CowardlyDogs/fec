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


export const QandAContext = React.createContext(null);


var QandA = ({product_id, productName}) => {

  const [ product,       setProduct ] =         useState(product_id);
  const [ questions,     setQuestions ] =       useState([]);
  const [ searchVal,     setSearchVal ] =       useState('');
  const [ searchView,    setSearchView ] =      useState(false);
  const [ addQuestion,   setAddQuestion ] =     useState(false);
  // const [ addAnswer,     setAddAnswer ] =       useState(false);
  const [ viewNum,       setViewNum ] =         useState(0);
  const [ visibleQs,     setVisibleQs ] =       useState(questions);

  var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/';


  var product_id = 40344
  var productName = 'Camo Onesie'

  useEffect(() => {
    axios.get(`${url}questions/`, {
      headers: { Authorization: authorization.TOKEN },
      params: { product_id: 40344, page: 1, count: 200}
    })
      .then(response => {
        var sorted = sortQuestions(response.data);
        setQuestions(sorted);
        setVisibleQs(sorted);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);





  var searchQuestions = (search) => {

    var filtered = questions.filter( question => {
      return question.question_body.includes(search);
    });
    setVisibleQs(filtered);
    setSearchView(true);
  };




  var questionList;
  var search;
  var noQuestions;

  if (questions.length > 0) {
    questionList = <QuesContainer />;
    search = <Search />;
  } else {
    questionList = <span>No questions asked yet.</span>;
  }




  return (
    <QandAContext.Provider value={{product, productName, questions, searchVal, setSearchVal, searchQuestions, url, visibleQs, searchView, setSearchView, setVisibleQs, setAddQuestion, addQuestion}}>
      <div className='QandA'>
        <h2>Questions and Answers</h2>
        <div>{search}</div>
        <div>{questionList}</div>
        <AddQuestion product_id={product_id} productName={productName}/>
      </div>
    </QandAContext.Provider>
  );
};

export default QandA;




// For testing before future import to App.js
// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <QandA />
//     </div>
//   )
// }