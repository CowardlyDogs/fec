import React/*, { useState }*/ from 'react';
import NewReview from './NewReview.jsx';
import ReviewList from './ReviewList.jsx';

function ReviewModule() {
  return (
    // <h1>Ratings and Reviews Will Go Here</h1>
    /*
    ***TODO***
    *
    * Create styled Div's
    * Place NewReview tag
    * Place ReviewedList taga
    *
    */
    <div>
      <NewReview/>
      <ReviewList/>
   </div>
  );
}

export default ReviewModule;
