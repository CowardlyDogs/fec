import axios from 'axios';



let getData = axios.get('api/something')
  .then(res => console.log('Success with getData in ServerHelper: ', res))
  .catch(err => console.log('Error with getData in ServerHelper: ', err));


  module.export = {
    getData
  };