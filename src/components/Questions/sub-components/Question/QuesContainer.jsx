import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Question from './Question.jsx';
import { QandAContext } from '../../QandA.jsx';
import '../../styles.css';


var QuesContainer = () => {
  const { product, questions, searchResults, answers, searchView, setSearchView, visibleQs } = useContext(QandAContext);

  const [ view, setView ] = useState(0);
  const [ end, setEnd ] = useState(2);



  // Functions to change view count in state.
  var increment = () => {
    setEnd(prev => prev + 2);
  };

  var decrement = () => {
    setEnd(prev => prev - 2);
  };



  // Function to map over questions.
  var mapQuestions = (questions) => {
    return questions.map( (question, idx) => {
      return <Question key={idx} data={question}/>;
    });
  };





  var questionList;
  var showMore;
  var prevQuestions;

  // Conditional render
  if ( view === 0 ) {

    if (visibleQs.length <= 2) {
      showMore = null;
      questionList = mapQuestions(visibleQs.slice(0, end));
    } else {
      questionList = mapQuestions(visibleQs.slice(0, end));
      showMore = <button onClick={()=> {
        increment();
        setView(1);
      }}>More Answered Questions</button>;
    }
  } else if ( view === 1 ) {
    // Accordion view of questions
    questionList = mapQuestions(visibleQs.slice(0, end));
    showMore = <button onClick={increment}>More Answered Questions</button>;
    prevQuestions = <button onClick={()=>setEnd(2)}>Collapse Questions</button>;

    if (questionList.length <= 2) {
      showMore = null;
    }

    if (end === 2) {
      setView(0);
      setEnd(2);
    }
  }


  return (
    <div className='Qcontainer'>
      {questionList}
      {showMore}
      {prevQuestions}
    </div>
  );
};

export default QuesContainer;