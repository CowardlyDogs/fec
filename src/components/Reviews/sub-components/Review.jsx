import React/*, { useState }*/ from 'react';
import moment from 'moment';
import './Reviews.css';


function Review({review}) {

  return (
    // <h1>Ratings and Reviews Will Go Here</h1>
    /*
    ***TODO***
    *
    *
    * List item element  review information in format
    *
    *
    */
    <div>
      <h3>{review.summary}</h3>
      <div className="userDate">
        <div className='username'><p>{review.reviewer_name}</p></div>
        <div className='timestamp' float='right'><p>{moment(review.date).fromNow()}</p></div>
      </div>
      <div>{/*star rating here and reccomended*/}</div>
      <div>
        <p>{review.body}</p>
      </div>
      <div className="helpfulness">
        <div className="helpfulCircle">
          <p>{review.helpfulness}</p>
        </div>
        <div>
          <p>people found this helpful</p>
        </div>

      </div>
      {/* All review information */}
   </div>
  );
}

export default Review;
