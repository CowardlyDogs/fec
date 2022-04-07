import React, { useState, useEffect } from 'react';
import NewReview from './sub-components/NewReview.jsx';
import ReviewList from './sub-components/ReviewList.jsx';
import axios from 'axios';
import authorization from '../../../config.js';
import './sub-components/Reviews.css';
axios.defaults.headers.common['Authorization'] = authorization.TOKEN;

function ReviewModule(props) {
  var productID = props.productID ||'40344';

  const   [   product,            setProduct            ]   =   useState(productID);
  const   [   reviews,            setReviews            ]   =   useState([]);
  const   [   newReviewVisible,   setNewReviewVisible   ]   =   useState(false);
  const   [   page,               setPage               ]   =   useState(0);
  const   [   ,                   updateState           ]   =   React.useState();
  const   [   update,             setUpdate             ]   =   useState(0);


  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productID}&sort=helpful&count=1&page=1`)
    .then((response) => {
      if (response.data.results !== reviews && page === 0) {
        setReviews(response.data.results);
      } else {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productID}&sort=helpful&count=5&page=${page}`)
      .then((response) => {
        if (response.data.results !== reviews) {
          setReviews(response.data.results);
        }})
        .catch(error => {
          console.log(error);
        });
      }

      })
      .catch(error => {
        console.log(error);
      });
    }, [page, update]);


  var toggleNewReview = () => {
    setNewReviewVisible(!newReviewVisible);
  }

  var submitNewReview = (review) => {


    /*
    **TODO** setup review object in correct format


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
    console.log(review);
    review.product_id = product;
    review.rating = review.rating || 4; // **TODO** Make sure this is dynamic
    toggleNewReview();

    // axios.post(); **TODO** Post Request
  }


  var turnPage = (option) => {
    if (option === 'inc') {
      setPage(page + 1);
    } else if (option === 'dec') {
      setPage(page - 1);
    }
  }

  var helpful = (review_id) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/helpful`, {
        headers: {Authorization: authorization.TOKEN}
      })
        .then(() => {
        setUpdate(update + 1);
        });

  }

  var report = (review_id) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/report`, {
        headers: {Authorization: authorization.TOKEN}
      })
        .then(() => {
        setUpdate(update + 1);
        });
  }

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
}

export default ReviewModule;
