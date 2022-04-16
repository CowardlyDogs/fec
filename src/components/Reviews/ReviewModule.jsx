import React, { useState, useEffect } from 'react';
import NewReview from './sub-components/NewReview.jsx';
import ReviewList from './sub-components/ReviewList.jsx';
import Metareview from './sub-components/ReviewMeta.jsx';
import Helpers from '../APIHelpers.js';
let ReviewModule = ({productId, theme}) => {
  const   [   productMeta,        setProductMeta        ]   =   useState({});
  const   [   reviews,            setReviews            ]   =   useState([]);
  const   [   newReviewVisible,   setNewReviewVisible   ]   =   useState(false);
  const   [   page,               setPage               ]   =   useState(0);
  const   [   update,             setUpdate             ]   =   useState(0);
  let toggleNewReview = () => {
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
  useEffect(() => {
    Helpers.getReviewMeta(productId, (err, data) => {
      if (err) {
        console.error('Unable to fetch Product Metadata');
      } else {
        setProductMeta(data);
      }
    });
  }, [page, update, productId]);
  let submitNewReview = (review) => {
    Helpers.postReview(review, (err) => {
      if (err) { console.error('Unable to Post'); }
    });
  };
  let helpful = (review_id) => {
    Helpers.rateHelpful(review_id, (err) => {
      if (err) { console.error('Unable to Rate Helpful'); } else { setUpdate(update + 1); }
    });
  };
  let report = (review_id) => {
    Helpers.rateReport(review_id,  (err) => {
      if (err) { console.error('Unable to Report'); } else { setUpdate(update + 1); }
    });
  };
  let turnPage = (option) => {
    if (option === 'inc') {
      setPage(page + 1);
    } else if (option === 'dec') {
      setPage(page - 1);
    }
  };
  return (
    <div className="reviews" id={theme}>
      <div className="Rate-Review-Head">
        <h2 className="Review-Header">Ratings and Reviews</h2>
        <div className="New-Review-Button"> { <NewReview visible={newReviewVisible} toggle={toggleNewReview} product={productId} onSubmit={submitNewReview} /> } </div>
      </div>
      <div className='Rating-Review'>
        <Metareview product={productMeta}/>
        <ReviewList page={page} turnPage={turnPage} product={productId} reviews={reviews} helpful={helpful} report={report} theme={theme} />
      </div>
    </div>
  );
};
export default ReviewModule;
