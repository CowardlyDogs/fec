import React, { useState } from 'react';
import NewReview from './sub-components/NewReview.jsx';
import ReviewList from './sub-components/ReviewList.jsx';

var ReviewModule = (props) => {

  var productID = props.productID ||'40344';

  const   [   product,            setProduct            ]   =   useState(productID);
  //const [   reviews,            setReviews            ]   =   useState([]);
  const   [   newReviewVisible,   setNewReviewVisible   ]   =   useState(false);
  const   [   page,               setPage               ]   =   useState(0);

  var toggleNewReview = () => {
    setNewReviewVisible(!newReviewVisible);
  }


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

      <NewReview visible={newReviewVisible} toggle={toggleNewReview} product={product}/>
      <ReviewList page={page} setPage={setPage} product={product}/>
   </div>
  );
}

export default ReviewModule;
