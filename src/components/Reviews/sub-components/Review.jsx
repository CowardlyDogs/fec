import React from 'react';
import moment from 'moment';
import axios from 'axios';
import authorization from '../../../../config.js';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import StarRating from '../../StarRatingDisplay.jsx';



var Review = ({review, helpful, report}) => {

  var handleHelp = () => {
    helpful(review.review_id);
  };
  var handleReport = () => {
    report(review.review_id);
  };

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
      <div>{/*star rating here and reccomended*/}
        <StarRating rating={review.rating}/>
      </div>
      <hr/>
      <div className="review-body">
        <p>{review.body}</p>
      </div>
      <div className="ReviewImages">
        {review.photos.map((image => (
          <img className="ReviewImage" key={image.id} src={image.url}/>
        )))}
        <img></img>
      </div>
      <div className="help-report">
        <div className="helpfulness">
          <div className="helpful-circle">
            {review.helpfulness}
          </div>
          <div>
            people found this helpful
          </div>

        </div>
        <div className="report">
          <button onClick={handleHelp}> This was Helpful </button>
          <button onClick={handleReport}> Report </button>
        </div>
      </div>
      {/* All review information */}
    </div>
  );
};

export default Review;
