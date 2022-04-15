import React, { useState, useContext, useRef, useEffect } from 'react';
import QandA from '../../QandA.jsx';
import Question from './Question.jsx';
import { QandAContext } from '../../QandA.jsx';


var QuesContainer = () => {
  const { product, questions, searchResults, answers, searchView, setSearchView, visibleQs, scrollToHeader, theme } = useContext(QandAContext);

  const [   view, setView   ] = useState(0);
  const [    end, setEnd    ] = useState(1);
  const [ height, setHeight ] = useState(0);

  const [ ansHeight, setAnsHeight ] = useState(0);

  const content = useRef(null);

  let contentHeight;
  let toggleContainerSize;
  let questionList;
  let showMore;
  let prevQuestions;


  useEffect( () => {
    setHeight(content.current.scrollHeight);
  }, [ ansHeight ]);

  const increment = () => {
    setEnd(prev => prev + 2);
    scrollToHeader();
  };


  const mapQuestions = (questions) => {
    return questions.map( (question, idx) => {
      return <Question key={idx} data={question} id={idx} setHeight={setHeight}  setAnsHeight={setAnsHeight}/>;
    });
  };


  const collapse = () => {
    setView(0);
    setEnd(1);
  };



  if ( view === 0 ) {
    contentHeight = `${height + ansHeight}px`;

    if (visibleQs.length <= 1) {
      showMore = null;
      questionList = mapQuestions(visibleQs.slice(0, end));
    } else {
      questionList = mapQuestions(visibleQs.slice(0, end));
      showMore = <button id={theme} className='moreQs' onClick={()=> {
        increment();
        setView(1);
      }}>   More Answered Questions   </button>;
    }
  } else if ( view === 1 ) {
    if (visibleQs.length === 0) {
      setView(0);
    }

    questionList = mapQuestions(visibleQs.slice(0, end));

    if (end >= visibleQs.length) {
      showMore = null;
    } else {
      showMore = <button id={theme} className='moreQs' onClick={increment}>     More Answered Questions </button>;
    }
    prevQuestions = <button id={theme} className='moreQs' onClick={collapse}>   Collapse Questions      </button>;


    if (end === 1) {
      setView(0);
    }
  }

  return (
    <div>
      <div ref={content} className='larger-container' style={{maxHeight: view === 0 ? contentHeight : '650px'}}>
        {questionList}
      </div>
      <div className='question-btns'>
        {showMore}
        {prevQuestions}
      </div>
    </div>
  );
};

export default QuesContainer;