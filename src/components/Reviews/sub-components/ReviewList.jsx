import React from 'react';
import Review from './Review.jsx';
var ReviewList = ({page, turnPage, product, reviews, helpful, report, theme}) => {
  var nextPage = () => { turnPage('inc'); }; var prevPage = () => { turnPage('dec'); };
  return (
    <div className="Review-Container-Over">
      <div className="Review-Container">
        <ul>
          {reviews.map(review => (
            <Review review={review} key={review.review_id} helpful={helpful} report={report}/>
          ))}
        </ul>
      </div>
      <div className="review-nav">
        {(page > 1) ? (<div><button className="Review-Button" onClick={prevPage}>Previous</button></div>) : ''}
        {(page === 0) ? (<div><button className="Review-Button" onClick={nextPage} >Show More</button></div>) : (<div><button className="Review-Button" onClick={nextPage}>Next Page</button></div>)}
      </div>
    </div>
  );
};
export default ReviewList;
