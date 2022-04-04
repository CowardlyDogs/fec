import React, { useState } from 'react';
import NewReview from './sub-components/NewReview.jsx';
import ReviewList from './sub-components/ReviewList.jsx';
import axios from 'axios';

function ReviewModule(props) {

  var productID = props.productID ||'40344';
  // var initialReview = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productID}&sort=helpful&count=1&page=1`).results;

  var initialReview = [
    {
        "review_id": 1135759,
        "rating": 4,
        "summary": "Testing Boiiiii",
        "recommend": true,
        "response": null,
        "body": "This product was delivered and it existed! What a shocker!~",
        "date": "2022-02-21T00:00:00.000Z",
        "reviewer_name": "Temp username",
        "helpfulness": 10,
        "photos": [
            {
                "id": 2180106,
                "url": "fooobar"
            }
        ]
    }
]

  const   [   product,            setProduct            ]   =   useState(productID);
  const   [   reviews,            setReviews            ]   =   useState(initialReview);
  const   [   newReviewVisible,   setNewReviewVisible   ]   =   useState(false);
  const   [   page,               setPage               ]   =   useState(0);

  // useEffect(() => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=40344&sort=helpful&count=10&page=1')
  //     .then(response => {
  //       console.log(response);
  //       setReviews(response.results);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, []);

  var toggleNewReview = () => {
    setNewReviewVisible(!newReviewVisible);
  }

  var turnPage = (option) => {
    if (option === 'inc') {
      setPage(page + 1);
      setReviews = axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${product}&sort=helpful&count=4&page=${page}`).results;
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
