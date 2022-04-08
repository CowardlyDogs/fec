import React, { useState, useEffect, useRef } from 'react';
import './css/Related.css';
import StarIcon from '@material-ui/icons/Star';
import CompareIcon from '@material-ui/icons/Compare';
import Helpers from '../APIHelpers.js';

//TODO:
//figure out how to access default data
//fix css
//stars
//light box

function RelatedCarousel({ unit, length }) {
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
    Helpers.getProduct(unit, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setName(res.name);
        setCategory(res.category);
        setPrice(res.default_price);
      }
    })
    Helpers.getStyles(unit, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        for (var x = 0; x < res.results.length; x++) {
          if (Object.values(res.results[x]).includes(true)) {
            setPhoto(res.results[x].photos[0].thumbnail_url)
          } else {
            setDefault(res.results[0].photos[0].thumbnail_url)
          }
        }
        setSale(res.results[0].sale_price)
      }
    })
  }, []);

  const photoHandler = () => {
    return photo ? photo : def ? def : noImage;
  };

  const saleHandler = () => {
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
      <div className="card-inner"  style={{backgroundImage: `url(${photoHandler()})`}}>
        <div className="stars">
          <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
        </div>
        <div className="action"><CompareIcon/></div>
      </div>
      <div className="bottom">
        <div className="product-name">{name}</div>
        <div>{category}</div>
        {saleHandler()}
      </div>
    </div>
  )
}


export default RelatedCarousel;