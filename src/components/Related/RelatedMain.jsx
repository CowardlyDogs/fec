import React, { useState, useEffect, useRef } from 'react';
import RelatedCarousel from './RelatedCarousel.jsx';
import './css/Related.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Helpers from '../APIHelpers.js';


const RelatedMain = ({ productId, setProduct }) => {
  const [relatedIds,    setRelatedIds    ] = useState('');
  const [displayIds,    setDisplayIds    ] = useState([]);

  const start = useRef(0);
  const end = useRef(2);

  const addFit = 'https://i.pinimg.com/originals/76/30/ad/7630ad49bdc79b8482c8627c663a1373.png';

  useEffect(() => {
    let tempRel = new Set();
    Helpers.getRelated(productId, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        res.map(i => {
          tempRel.add(i);
        });
        let tempRelArr = [...tempRel];
        setRelatedIds(tempRelArr);
        setDisplayIds([res[0], res[1], res[2]]);
      }
    });
    end.current = relatedIds.length > 3 ? 2 : !relatedIds.length ? 2 : relatedIds.length;
  }, [productId]);

  useEffect(() => {
    relatedIds && (
      setDisplayIds([relatedIds[0], relatedIds[1], relatedIds[2]])
    );
  }, [relatedIds]);

  const left = () => {
    start.current = start.current - 1;
    end.current = end.current - 1;
    setDisplayIds(displayIds => {
      let tempLeft = [...displayIds];
      tempLeft.pop();
      tempLeft.unshift(relatedIds[start.current]);
      return tempLeft;
    });
  };

  const right = () => {
    start.current = start.current + 1;
    end.current = end.current + 1;
    setDisplayIds(displayIds => {
      let tempRight = [...displayIds];
      tempRight.push(relatedIds[end.current]);
      tempRight.shift();
      return tempRight;
    });
  };


  return (
    <div className="main">
      <div className="sub-main">
        {start.current > 0 &&
        <div className="left" onClick={left}> <ArrowBackIosIcon/> </div>}
        {displayIds.map((unit, index) => {
          console.log('unit ', unit)
          console.log('index', index)
          return (
            <li className="track" key={index}>
              <RelatedCarousel unit={unit} productId={productId} setProduct={setProduct}/>
            </li>
          );
        })}
        {end.current < relatedIds.length - 1 &&
        <div className="right" onClick={right}> <ArrowForwardIosIcon/> </div>}
      </div>
    </div>
  );
};


export default RelatedMain;