import React/*, { useState }*/ from 'react';
import moment from 'moment';



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
    <div className="review">
      <h3>{review.summary}</h3>
      <div className="userDate">
        <div className='username'><p>{review.reviewer_name}</p></div>
        <div className='timestamp' float='right'><p>{moment(review.date).fromNow()}</p></div>
      </div>
      <div>{/*star rating here and reccomended*/}</div>
      <hr/>
      <div className="review-body">
        <p>{review.body}</p>
      </div>
      <div className="ReviewImages">
        {review.photos.map((image => (
          <img key={image.id} src={image.url}/>
        )))}
        <img></img>
      </div>
      <div className="helpfulness">
        <div className="helpful-circle">
          {review.helpfulness}
        </div>
        <div>
          people found this helpful
        </div>

      </div>
      {/* All review information */}
   </div>
  );
}

export default Review;
