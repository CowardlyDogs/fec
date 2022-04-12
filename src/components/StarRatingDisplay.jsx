import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';



var StarRating = ({rating, special}) => {

  var fullClass = 'rating ' + ((special) ? special : '');
  return (
    <input
      className={fullClass}
      max="5"
      readOnly
      type="range"
      value={rating}>
    </input>
  );
};

export default StarRating;