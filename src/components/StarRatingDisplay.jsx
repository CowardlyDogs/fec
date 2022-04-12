import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';



var StarRating = ({rating}) => {

  return (
    <input
      className="rating rating--nojs"
      max="5"
      readOnly
      step="0.25"
      type="range"
      value={rating}>
    </input>

  );
};

export default StarRating;