import React, { useState, useEffect, useRef } from 'react';
import './css/Related.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ClearIcon from '@material-ui/icons/Clear';
import Helpers from '../APIHelpers.js';
import StarRating from '../Reviews/sub-components/StarRating.jsx';

const OutfitCarousel = ({ unit, removeOutfit }) => {
  const [name,     setName      ] = useState('');
  const [photo,    setPhoto     ] = useState('');
  const [category, setCategory  ] = useState('');
  const [price,    setPrice     ] = useState('');
  const [sale,     setSale      ] = useState('');
  const [def,      setDefault   ] = useState('');
  const [ratings,  setRatings   ] = useState([]);
  const [avg,      setAvg       ] = useState(0);

  const start = useRef(0);
  const end = useRef(length > 3 ? 3 : length);
  const noImage = 'https://yanktontrailers.com/wp-content/uploads/2020/02/noimage.png';

  useEffect(() => {
    Helpers.getProduct(unit, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setName(res.name);
        setCategory(res.category);
        setPrice(res.default_price);
      }
    });
    Helpers.getStyles(unit, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        for (var x = 0; x < res.results.length; x++) {
          if (Object.values(res.results[x]).includes(true)) {
            setPhoto(res.results[x].photos[0].thumbnail_url);
          } else {
            setDefault(res.results[0].photos[0].thumbnail_url);
          }
        }
        setSale(res.results[0].sale_price);
      }
    });
    Helpers.getRatingsMeta(unit, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        setRatings(res.ratings);
      }
    });
  }, [unit]);

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
      </div>;
  };

  const ratingHandler = () => {
    const tempRating = ratings;
    let sum = 0;
    let totalReviews = 0;
    let leng = Object.keys(tempRating).length;
    for (var key in tempRating) {
      let tempKeyTimesValue = (Number(key) * Number(tempRating[key]));
      sum += tempKeyTimesValue;
      totalReviews += Number(tempRating[key]);
    }
    let average = sum / totalReviews;
    setAvg(average);
  };

  useEffect(() => {
    ratingHandler();
  }, [ratings]);

  return (
    unit ? (
      <div className="card">
        <div className="card-inner" style={{backgroundImage: `url(${photoHandler()})`}}>
          <div className="stars">
            {avg > 0 &&
              <StarRating rating={avg} />}
          </div>
          <div className="action-remove" onClick={() => removeOutfit(unit)}><ClearIcon/></div>
        </div>
        <div className="bottom">
          <div className="product-name">{name}</div>
          <div>{category}</div>
          {saleHandler()}
        </div>
      </div>
    ) : null );
};


export default OutfitCarousel;