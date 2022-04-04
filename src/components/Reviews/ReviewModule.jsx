import React, { useState } from 'react';
import NewReview from './sub-components/NewReview.jsx';
import ReviewList from './sub-components/ReviewList.jsx';

var ReviewModule = (props) => {

  const [ product,   setProduct]   = useState(props.productID);
  const [ reviews,   setReviews]   = useState([]);
  const [ addReview, setAddReview] = useState(false);
  const [ page,      addPage]      = useState(0);

  return (
    <div>
      <h1>Ratings and Reviews Will Go Here</h1>
      {/*****TODO***
      *
      * Create styled Div's
      * Place NewReview tag
      * Place ReviewedList taga
      *
      */}

      <NewReview/>
      <ReviewList/>
   </div>
  );
}

export default ReviewModule;
