import React, { useState, useContext, useRef } from 'react';
import QandA from '../../QandA.jsx';
import Question from './Question.jsx';
import { QandAContext } from '../../QandA.jsx';
import '../../styles.css';


var QuesContainer = () => {
  const { product, questions, searchResults, answers, searchView, setSearchView, visibleQs, scrollToHeader } = useContext(QandAContext);

  const [ view, setView ] = useState(0);
  const [  end, setEnd  ] = useState(2);

  const increment = () => {
    setEnd(prev => prev + 2);
    scrollToHeader();
  };

  const mapQuestions = (questions) => {
    return questions.map( (question, idx) => {
      return <Question key={idx} data={question}/>;
    });
  };



  let toggleContainerSize;
  let questionList;
  let showMore;
  let prevQuestions;


  if ( view === 0 ) {
    toggleContainerSize = 'Qcontainer';

    if (visibleQs.length <= 2) {
      showMore = null;
      questionList = mapQuestions(visibleQs.slice(0, end));
    } else {
      questionList = mapQuestions(visibleQs.slice(0, end));
      showMore = <button onClick={()=> {
        increment();
        setView(1);
      }}>   More Answered Questions   </button>;
    }


  } else if ( view === 1 ) {
    // Accordion view of questions
    questionList = mapQuestions(visibleQs.slice(0, end));

    toggleContainerSize = 'larger-container';



    showMore = <button onClick={increment}>       More Answered Questions </button>;
    prevQuestions = <button onClick={()=>setEnd(2)}>   Collapse Questions      </button>;

    if (questionList.length <= 2) {
      showMore = null;
    }
    if (end === 2) {
      setView(0);
      setEnd(2);
    }
  }


  // toggle state?
  // setHieght - max height of each question
  // useRef to get element we want to expand - scroll hieght measures content while 'overflow hidden'
  //


  // on click of MORE ANSWERED QUESTIONS
  //    header to get positioned at top of page
  //    expand question container to full height
  //        show two more photos
  //        make question container scroll



  return (
    <div className={toggleContainerSize}>
      {questionList}
      {showMore}
      {prevQuestions}
    </div>
  );
};

export default QuesContainer;