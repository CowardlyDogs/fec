import axios from 'axios';
import Authorization from '../../config.js';
axios.defaults.headers.common['Authorization'] = Authorization.TOKEN;

const APIHelpers = {

  //Related and Outfit Helpers

  getRelated: (productId, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productId}/related`)
      .then((res) => { callback(null, res.data); })
      .catch((err) => { callback(err); });
  },

  getProduct: (id, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },
  getStyles: (id, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },


  //Ratings and Reviews Helpers

  getReviews: (reviewInfo, callback) => {
    /*
    reviewInfo = {
      page = *,
      productId = ******
    }
    */
    if (reviewInfo.page === 0) {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productID}&sort=helpful&count=1&page=1`)
        .then(res => callback(null, res.data))
        .catch(err => callback(err));
    } else {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${productID}&sort=helpful&count=5&page=${page}`)
        .then(res => callback(null, res.data))
        .catch(err => callback(err));
    }
  },

  postReview: (reviewInfo, callback) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/', reviewInfo)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },

  rateHelpful: (reviewId, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/helpful`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },

  rateReport: (reviewId, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/report`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  }
};


export default APIHelpers;