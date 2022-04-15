import React, { useState, useEffect, useRef } from 'react';
import CompareIcon from '@material-ui/icons/Compare';
import Helpers from '../APIHelpers.js';
import StarRatingDisplay from '../StarRatingDisplay.jsx';
import CompareMain from './CompareMain.jsx';
import '../App.css';

const RelatedCarousel = ({ theme, unit, length, productId, setProduct, relatedIds }) => {
  const [name,     setName      ] = useState('');
  const [photo,    setPhoto     ] = useState('');
  const [category, setCategory  ] = useState('');
  const [price,    setPrice     ] = useState('');
  const [sale,     setSale      ] = useState('');
  const [def,      setDefault   ] = useState('');
  const [ratings,  setRatings   ] = useState([]);
  const [avg,      setAvg       ] = useState(0);
  const [compare,  setCompare   ] = useState(false);

  const start = useRef(0);
  const end = useRef(length > 3 ? 3 : length);
  const noImage = 'https://yanktontrailers.com/wp-content/uploads/2020/02/noimage.png';

  useEffect(() => {
    setPhoto('');
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
  }, [relatedIds, unit]);


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

  const compareHandler = (e) => {
    setCompare(!compare);
  };

  const updateProduct = (e) => {
    setProduct(unit);
  };

  return (
    unit ? (
      <div className="card">
        <div className="card-inner" onClick={ (e) => { updateProduct(e); } } style={{backgroundImage: `url(${photoHandler()})`}}>
          <div className="stars" onClick={ (e) => { updateProduct(e); } }>
            {avg > 0 &&
              <StarRatingDisplay special='rel-stars' rating={avg}/>}
          </div>
          <div className="action-compare" onClick={(e) => compareHandler(e)}><CompareIcon/><CompareMain compare={compare} setCompare={setCompare} productId={productId} currentId={unit}/></div>
        </div>
        <div className="bottom" id={theme}>
          <div className="product-name">{name}</div>
          <div>{category}</div>
          {saleHandler()}
        </div>
      </div>
    ) : null );
};


export default RelatedCarousel;