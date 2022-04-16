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
    <div className="review">
      <h3>{review.summary}</h3>
      <div className="userDate">
        <div className='username'><p>{review.reviewer_name}</p></div>
        <div className='timestamp' float='right'><p>{moment(review.date).fromNow()}</p></div>
      </div>
      <div>
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
      </div>
      <div className="help-report">
        <div className="helpfulness">
          <div className="helpful-circle">
            <p>{review.helpfulness}</p>
          </div>
          <div>
            <p>&nbsp;&nbsp;people found this helpful</p>
          </div>
        </div>
        <div className="report-container">
          <button onClick={handleHelp}> This was Helpful </button>
          <button onClick={handleReport}> Report </button>
        </div>
      </div>
    </div>
  );
};
export default Review;
