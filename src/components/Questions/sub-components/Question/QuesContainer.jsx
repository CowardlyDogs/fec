import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Question from './Question.jsx';
import {QandAContext} from '../../QandA.jsx';



var styles = {
  container: {
    backgroundColor: 'red'
  },

};


var QuesContainer = () => {
  const { product, questions, searchResults, answers } = useContext(QandAContext);

  const [ view, setView ] = useState(0);

  // Handle Click
  var handleClick = (e) => {
    e.preventDefault();
    //  Set state-view - cause drop down accordion
    setView(1);
    // Functionality for showMore button TODO
    // Keep state for:
    //    view changer
    //        0 = Single top rated answer displayed
    //        1 = Expanded to size of all answers
  };


  // Function to map over questions
  var mapQuestions = (questions) => {
    return questions.map( question => {
      return <Question data={question}/>;
    });
  };


  var questionList;
  // Conditional render
  if ( view === 0 ) {
    questionList = mapQuestions(questions.slice(0, 1));

  } else if ( view === 1 ) {
    // Accordion view of questions
    // Need to dynamically go through q's
    questionList = mapQuestions(questions.slice(0, 4));
  } else if ( view === 2 ) {

  }




  var showmore;
  showMore = <button>Show more Questions</button>;

  return (
    <div>
      QuesContainer
      {questionList}
      {showMore}
    </div>
  );
};

export default QuesContainer;