import React, { useState, useContext, useRef, useEffect } from 'react';
import QandA from '../../QandA.jsx';
import Question from './Question.jsx';
import { QandAContext } from '../../QandA.jsx';
import '../../styles.css';


var QuesContainer = () => {
  const { product, questions, searchResults, answers, searchView, setSearchView, visibleQs, scrollToHeader } = useContext(QandAContext);

  const [   view, setView   ] = useState(0);
  const [    end, setEnd    ] = useState(1);
  const [ height, setHeight ] = useState(0);

  const content = useRef(null);

  let contentHeight;
  let toggleContainerSize;
  let questionList;
  let showMore;
  let prevQuestions;


  useEffect( () => {
    setHeight(content.current.scrollHeight);
  });


  const increment = () => {
    setEnd(prev => prev + 2);
    scrollToHeader();
  };


  const mapQuestions = (questions) => {
    return questions.map( (question, idx) => {
      return <Question key={idx} data={question} id={idx} setHeight={setHeight} />;
    });
  };


  const collapse = () => {
    setView(0);
    setEnd(1);
    toggleContainerSize = 'on-load-Q-content';
  };



  if ( view === 0 ) {
    toggleContainerSize = 'on-load-Q-content';

    if (visibleQs.length <= 1) {
      showMore = null;
      questionList = mapQuestions(visibleQs.slice(0, end));
      contentHeight = `${height}px`;

    } else {
      questionList = mapQuestions(visibleQs.slice(0, end));
      contentHeight = `${height}px`;
      showMore = <button onClick={()=> {
        increment();
        setView(1);
      }}>   More Answered Questions   </button>;
    }
  } else if ( view === 1 ) {
    questionList = mapQuestions(visibleQs.slice(0, end));

    toggleContainerSize = 'larger-container';
    contentHeight = '650px';

    if (end >= visibleQs.length) {
      showMore = null;
    } else {
      showMore = <button onClick={increment}>     More Answered Questions </button>;
    }
    prevQuestions = <button onClick={collapse}>   Collapse Questions      </button>;


    if (end === 1) {
      setView(0);
    }
  }



  return (
    <div ref={content} className={toggleContainerSize} style={{maxHeight: contentHeight}}>
      {questionList}
      {showMore}
      {prevQuestions}
    </div>
  );
};

export default QuesContainer;