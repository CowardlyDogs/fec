import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

import HelperFunction from './HelperFunction.js';
import QuesContainer from './sub-components/Question/QuesContainer.jsx';
import Question from './sub-components/Question/Question.jsx';
import Search from './sub-components/Search.jsx';
import AddQuestion from './sub-components/AddQuestion.jsx';


export const QandAContext = React.createContext(null);

var QandA = (props) => {

  const [ product,       setProduct ] =         useState(props.productID);
  const [ questions,     setQuestions ] =       useState(null);
  const [ searchVal,     setSearchVal ] =       useState('');
  const [ searchResults, setSearchQuestions ] = useState(null);
  const [ addQuestion,   setAddQuestion ] =     useState(false);
  const [ viewNum,       setViewNum ] =         useState(0);

  // Axios GET request to bring in data. Set state with data from API call. **Need to attach authorization headers
  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/40344/100/1', {
      headers: {Authorization: 'tokenhere'}
    })
      .then(response => {
        console.log(response);
        var sorted = HelperFunction.sortQuestions(response.data);
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
  var pageload;
  var search;
  var noQuestions;

  if (false) {
    pageload = <QuesContainer />;
    search = <Search />;
  } else {
    pageload = <span>No questions asked yet.</span>;
  }


  return (
    <QandAContext.Provider value={{product, questions, searchResults, searchVal, setSearchVal, searchQuestions}}>
      <div>
        {console.log(addQuestion)}
        <h2>Questions and Answers</h2>
        <div>{search}</div>
        <div>{pageload}</div>
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