import React/*, { useState }*/ from 'react';
import Review from './Review.jsx';


var ReviewList = ({page, turnPage, product, reviews, helpful, report}) => {

  var nextPage = () => {
    turnPage('inc');
  };
  var prevPage = () => {
    turnPage('dec');
  };

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
      <div className="Review-Container">
        <ul>

          {reviews.map(review => (
            <Review review={review} key={review.review_id} helpful={helpful} report={report}/>
          ))}
        </ul>
      </div>
      <div className="review-nav">
        {(page > 1) ? (<div><button onClick={prevPage}>Previous</button></div>) : ''}
        {(page === 0) ? (<div><button onClick={nextPage} >Show More</button></div>) : (<div><button onClick={nextPage}>Next Page</button></div>)}

      </div>
    </div>
  );
};

export default ReviewList;
