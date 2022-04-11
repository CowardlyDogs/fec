import axios from 'axios';
import Authorization from '../../config.js';
axios.defaults.headers.common['Authorization'] = Authorization.TOKEN;

const APIHelpers = {

  //Related and Outfit Helpers

  getRelated: (id, callback) => {
    id &&
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/related`)
      .then((res) => { callback(null, res.data); })
      .catch((err) => { callback(err); });
  },

  getProduct: (id, callback) => {
    id &&
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },

  getStyles: (id, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`, {
      headers: {Authorization: Authorization.TOKEN} })
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },

  getQuestions: (id, callback) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/', {
      headers: { Authorization: Authorization.TOKEN },
      params: { product_id: id, page: 1, count: 200}})
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },

  getProductName: (id, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
      headers: {Authorization: Authorization.TOKEN} })
      .then(res =>  callback(null, res.data))
      .catch(err => callback(err));
  },

  postQuestion: (question, callback) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/', question,
      {headers: { Authorization: Authorization.TOKEN }})
      .then(res => callback(null, res))
      .catch(err => callback(err));
  },

  reportQuestion: (questionID, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${questionID}/report`, {
      headers: { Authorization: Authorization.TOKEN }
    })
      .then(res => callback(null, res))
      .catch(err => callback(err));
  },

  helpfulQuestion: (questionID, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${questionID}/helpful`, {
      headers: { Authorization: Authorization.TOKEN }
    })
      .then(res => callback(null, res))
      .catch(err => callback(err));
  },

  postAnswer: (question_id, answer, callback) => {
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${question_id}/answers`, answer, {headers: { Authorization: Authorization.TOKEN }})
      .then(res => callback(null, res))
      .catch(err => callback(err));
  },

  reportAnswer: (question_id, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/answers/${question_id}/report`,
      {headers: { Authorization: Authorization.TOKEN }})
      .then(res => callback(null, res))
      .catch(err => callback(err));
  },

  helpfulAnswer: (question_id, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/answers/${question_id}/helpful`,
      {headers: { Authorization: Authorization.TOKEN }})
      .then(res => callback(null, res))
      .catch(err => callback(err));
  },
  getRatingsMeta: (id, callback) => {
    id &&
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/meta?product_id=${id}`)
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
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/?product_id=${reviewInfo.productId}&sort=helpful&count=1&page=1`)
        .then(res => callback(null, res.data))
        .catch(err => callback(err));
    } else {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/?product_id=${reviewInfo.productId}&sort=helpful&count=5&page=${reviewInfo.page}`)
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
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${reviewId}/helpful`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  },

  rateReport: (reviewId, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/${reviewId}/report`)
      .then(res => callback(null, res.data))
      .catch(err => callback(err));
  }

};


export default APIHelpers;