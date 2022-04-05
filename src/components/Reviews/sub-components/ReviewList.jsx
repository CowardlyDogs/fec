import React/*, { useState }*/ from 'react';
import Review from './Review.jsx';


function ReviewList({page, turnPage, product, reviews}) {

  var nextPage = () => {
    turnPage('inc');
  }

  return (
    // <h1>Ratings and Reviews Will Go Here</h1>
    /*
    ***TODO***
    *
    *
    * get request for reviews. If page = -1, just first review. If page = 0+, use as page number.
    * Check if there's more pages to allow next page button
    *
    */
    <div>
      <div>
        <h1> Reviews Go Here </h1>
        <ul>

            {reviews.map(review => (
              <Review review={review} key={review.review_id}/>
        ))}
        </ul>
      </div>
      <div className="review-nav">
        {(page === 0) ? (<button onClick={nextPage}>Show More</button>) : "<h1> page is not equal to zero <h1>"}
      </div>
   </div>
  );
}

export default ReviewList;
