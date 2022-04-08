import axios from 'axios';
import Authorization from '../../config.js';

const APIHelpers = {

  getRelated: (productId, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productId}/related`, {
      headers: { Authorization: Authorization.TOKEN } })
      .then((res) => { callback(null, res.data) })
      .catch((err) => { callback(err) });
  },

  getProduct: (id, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
      headers: { Authorization: Authorization.TOKEN } })
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
  },

  getStyles: (id, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`, {
      headers: {Authorization: Authorization.TOKEN} })
    .then(res => callback(null, res.data))
    .catch(err => callback(err));
  },


  // QandA AXIOS calls
  getQuestions: (id, callback) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/', {
      headers: { Authorization: Authorization.TOKEN },
      params: { product_id: id, page: 1, count: 200}})
      .then(res => callback(null, res.data))
      .catch(err => callback(err))
  },

  getProductName: (id, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
      headers: {Authorization: Authorization.TOKEN} })
      .then(res =>  callback(null, res.data))
      .catch(err => callback(err))
  },

  postQuestion: (question, callback) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/', question,
    {headers: { Authorization: Authorization.TOKEN }})
      .then(res => callback(null, res))
      .catch(err => callback(err))
  },

  reportQuestion: (questionID, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${questionID}/report`, {
      headers: { Authorization: Authorization.TOKEN }
    })
      .then(res => callback(null, res))
      .catch(err => callback(err))
  },

  helpfulQuestion: (questionID, callback) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/qa/questions/${questionID}/helpful`, {
      headers: { Authorization: Authorization.TOKEN }
    })
    .then(res => callback(null, res))
    .catch(err => callback(err))
  }

};


export default APIHelpers;