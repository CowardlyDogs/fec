import React, { useState, useContext } from 'react';
import QandA from '../../QandA.jsx';
import Question from './Question.jsx';
import { QandAContext } from '../../QandA.jsx';
import '../../styles.css';


var QuesContainer = () => {
  const { product, questions, searchResults, answers, searchView, setSearchView, visibleQs } = useContext(QandAContext);

  const [ view, setView ] = useState(0);
  const [ start, setStart ] = useState(0);
  const [ end, setEnd ] = useState(1);

  // Functions to change view count in state.
  var increment = () => {
    setEnd(prev => prev + 4);
    setStart(prev => prev + 4);
  };

  var decrement = () => {
    setEnd(prev => prev - 4);
    setStart(prev => prev - 4);
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

    if (visibleQs.length < 2) {
      showMore = null;
      questionList = mapQuestions(visibleQs.slice(start, end));
    } else {
      questionList = mapQuestions(visibleQs.slice(start, end));
      showMore = <button onClick={()=> {
        setEnd(prev => prev + 3);
        setView(1);
      }}>Show more Questions</button>;
    }

  } else if ( view === 1 ) {
    // Accordion view of questions
    questionList = mapQuestions(visibleQs.slice(start, end));
    showMore = <button onClick={increment}>Show more Questions</button>;
    prevQuestions = <button onClick={decrement}>Previous Questions</button>;

    if (questionList.length < 4) {
      showMore = null;
    }

    if (start < 0) {
      setView(0);
      setStart(0);
      setEnd(1);
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