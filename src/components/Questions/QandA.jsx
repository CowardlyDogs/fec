import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import reactDOM from 'react-dom';
import './styles.css';

import { sortQuestions, sortAnswers } from './HelperFunction.js';
import QuesContainer from './sub-components/Question/QuesContainer.jsx';
import Question from './sub-components/Question/Question.jsx';
import Search from './sub-components/Search.jsx';
import AddQuestion from './sub-components/AddQuestion.jsx';


export const QandAContext = React.createContext(null);


var QandA = ({product_id}) => {

  const [ product,       setProduct ] =         useState(product_id);
  const [ questions,     setQuestions ] =       useState([]);
  const [ searchVal,     setSearchVal ] =       useState('');
  const [ searchResults, setSearchQuestions ] = useState(null);
  const [ addQuestion,   setAddQuestion ] =     useState(false);
  const [ viewNum,       setViewNum ] =         useState(0);

  var product_id = 40344;
  // ?product_id=${product_id}&page1&count=200

  // Axios GET request to bring in data. Set state with data from API call. **Need to attach authorization headers
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/`, {
      headers: { Authorization: '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' },
      params: { product_id: 40344, page: 1, count: 200}
    })
      .then(response => {
        var sorted = sortQuestions(response.data);
        setQuestions(sorted);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  // After search, set searchQuestions to filtered results
  var searchQuestions = (search) => {
    // Filter questions
    // var filtered = questions.map( question => {
    //   if (question.body.includes(search)) {
    //     return question;
    //   }
    // })
    // // Sort questions
    // var sortedSearch = HelperFunction.sortQuestions(filtered);
    // // Set them to state
    // setSearchQuestions(sortedSearch);
  };





  // Boolean switch for addQuestion Modal
  var questionButton = <button onClick={()=>setAddQuestion(prev => !prev)}>Have a question?</button>;
  var addQuestionModal = !addQuestion ? questionButton : <AddQuestion />;



  // Conditional rendering
  //  If length of questions is 0, load a 'No questions asked yet'
  var questionList;
  var search;
  var noQuestions;

  if (true) {
    questionList = <QuesContainer />;
    search = <Search />;
  } else {
    pageload = <span>No questions asked yet.</span>;
  }


  return (
    <QandAContext.Provider value={{product, questions, searchResults, searchVal, setSearchVal, searchQuestions}}>
      <div>
        <h2>Questions and Answers</h2>
        <div>{search}</div>
        <div>{questionList}</div>
        <div>{addQuestionModal}</div>
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