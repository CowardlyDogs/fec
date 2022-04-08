import axios from 'axios';

const APIHelpers = {
  // getData(),

  getStyles: (productId, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productId}/styles`)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      })
  },

  getProductInfo: (productId, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${productId}`)
    .then((results) => {
      callback(null, results.data);
    })
    .catch((err) => {
      callback(err);
    })
  }
};

export default APIHelpers;