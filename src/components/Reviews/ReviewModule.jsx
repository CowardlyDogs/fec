import React, { useState, useEffect } from 'react';
import NewReview from './sub-components/NewReview.jsx';
import ReviewList from './sub-components/ReviewList.jsx';
import './sub-components/Reviews.css';
import Helpers from '../APIHelpers.js';

// import axios from 'axios';
// import authorization from '../../../config.js';

// axios.defaults.headers.common['Authorization'] = authorization.TOKEN;

var ReviewModule = ({productId}) => {
  var productId = productId || '40344';

  const   [   product,            setProduct            ]   =   useState(productID);
  const   [   reviews,            setReviews            ]   =   useState([]);
  const   [   newReviewVisible,   setNewReviewVisible   ]   =   useState(false);
  const   [   page,               setPage               ]   =   useState(0);
  const   [   update,             setUpdate             ]   =   useState(0);


  var toggleNewReview = () => {
    setNewReviewVisible(!newReviewVisible);
  };

  useEffect(() => {
    Helpers.getReviews({productId, page}, (err, data) => {
      if (err) {
        console.error('Unable to fetch Reviews');
      } else {
        setReviews(data.results);
      }
    });

  }, [page, update]);

  var submitNewReview = (review) => {
    /*
    **TODO** double check that review object is in correct format
    product_id
    rating
    summary
    body
    recommend
    name
    email
    photos
    characteristics
    */
    Helpers.postReview(review, (err) => {
      if (err) { console.error('Unable to Post'); }
    });
  };

  var helpful = (review_id) => {
    Helpers.rateHelpful(review_id, (err) => {
      if (err) { console.error('Unable to Rate Helpful'); }
    });
  };

  var report = (review_id) => {
    Helpers.rateReport(review_id,  (err) => {
      if (err) { console.error('Unable to Report'); }
    });
  };


  var turnPage = (option) => {
    if (option === 'inc') {
      setPage(page + 1);
    } else if (option === 'dec') {
      setPage(page - 1);
    }
  };



  return (
    <div className="reviews">
      <h1>Ratings and Reviews</h1>

      {/*****TODO***
      *
      * Create styled Div's
      * Place NewReview tag
      * Place ReviewedList taga
      *
      */}

      { <NewReview visible={newReviewVisible} toggle={toggleNewReview} product={product} onSubmit={submitNewReview} /> }
      <ReviewList page={page} turnPage={turnPage} product={product} reviews={reviews} helpful={helpful} report={report} />
    </div>
  );
};

export default ReviewModule;
