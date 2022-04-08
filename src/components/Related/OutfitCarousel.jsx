import React, { useState, useEffect, useRef } from 'react';
import './css/Related.css';
import axios from 'axios';
import API from '../../../config.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import CompareIcon from '@material-ui/icons/Compare';
import ClearIcon from '@material-ui/icons/Clear';

function OutfitCarousel({ unit }) {
  const [name      ,  setName      ] = useState('');
  const [photo     ,  setPhoto     ] = useState('');
  const [category  ,  setCategory  ] = useState('');
  const [price     ,  setPrice     ] = useState('');
  const [sale      ,  setSale      ] = useState('');
  const [def       ,  setDefault   ] = useState('');

  const start = useRef(0);
  const end = useRef(length > 3 ? 3 : length);
  const noImage = "https://yanktontrailers.com/wp-content/uploads/2020/02/noimage.png"

  useEffect(() => {
    getProductData(unit);
  }, []);

  function getProductData(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}`, {
      headers: { Authorization: API.TOKEN } })
    .then(res => {
      setName(res.data.name);
      setCategory(res.data.category);
      setPrice(res.data.default_price);
    })
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/${id}/styles`, {
      headers: {Authorization: API.TOKEN}
    })
    .then(res => {
      for (var x = 0; x < res.data.results.length; x++) {
        if (Object.values(res.data.results[x]).includes(true)) {
          setPhoto(res.data.results[x].photos[0].thumbnail_url)
        } else {
          setDefault(res.data.results[0].photos[0].thumbnail_url)
        }
      }
      setSale(res.data.results[0].sale_price)
    })
    .catch(err => console.log('Err 2nd GET: ', err))
  };

  function photoHandler() {
    return photo ? photo : def ? def : noImage;
  };

  function saleHandler() {
    return sale ?
    <div className="price-container">
      <div className="price">{price}</div>
      <div className="sale">{sale}</div>
    </div> :
    <div className="price-container">
      <div className="sale">{price}</div>
    </div>
  };

  return (
    <div className="card">
      <div className="card-inner" style={{backgroundImage: `url(${photoHandler()})`}}>
        <div className="stars">
          <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
        </div>
        <div className="action"><ClearIcon/></div>
      </div>
      <div className="bottom">
        <div className="product-name">{name}</div>
        <div>{category}</div>
        {saleHandler()}
      </div>
    </div>
  )
}


export default OutfitCarousel;