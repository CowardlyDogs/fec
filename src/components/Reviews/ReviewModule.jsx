import React, { useState, useEffect } from 'react';
import NewReview from './sub-components/NewReview.jsx';
import ReviewList from './sub-components/ReviewList.jsx';
import axios from 'axios';
import ReviewAPIKey from './config.js';
axios.defaults.headers.common['Authorization'] = ReviewAPIKey;

function ReviewModule(props) {
  var productID = props.productID ||'40344';

  const   [   product,            setProduct            ]   =   useState(productID);
  const   [   reviews,            setReviews            ]   =   useState([]);
  const   [   newReviewVisible,   setNewReviewVisible   ]   =   useState(false);
  const   [   page,               setPage               ]   =   useState(0);

  // useEffect(() => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344&sort=helpful&count=10&page=1')
  //     .then(response => {
  //       setReviews(response.results);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, []);

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
    }, [page])


  var toggleNewReview = () => {
    setNewReviewVisible(!newReviewVisible);
  }


  var turnPage = (option) => {
    if (option === 'inc') {
      setPage(page + 1);
    } else if (option === 'dec') {
      setPage(page - 1);
    }
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

      {/* <NewReview visible={newReviewVisible} toggle={toggleNewReview} product={product}/> */}
      <ReviewList page={page} turnPage={turnPage} product={product} reviews={reviews} />
   </div>
  );
}

export default ReviewModule;
