import React, { useState, useContext } from 'react';

import Search from './sub-components/Search.jsx';
import QuestionModal from './sub-components/QuestionModal.jsx';
import AddQuestion from './sub-components/AddQuestion.jsx';


const QandAContext = React.createContext(null);

var questionsModule = () => {

  // Boolean switches - Button OR AddQuestion pop-up
  var questionButton = <button onClick={toggleStateBOOLEAN}>Have a question?</button>
  var addQuestionModal = stateBOOLEAN ? questionButton : <AddQuestion />

  // Conditional rendering
  if (productQuestions.length > ) {
    pageload = <QuestionModal data={TopQuestion}/>;
    searchQuestions = <Search />
    showMore = <button>Show more Questions</button>
  }


  return (
    <div>
      <h2>Questions</h2>
           {searchQuestions}
           {pageLoad}
           {addQuestionModal}
    </div>
  );
}

export default questionsModule;