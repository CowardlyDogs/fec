import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';



var Rating = ({rating}) => {

  return (
    <div className="Star-Ratings">
      {(rating >= 1) ? <StarIcon className='StarIcon'/> : <StarBorderOutlinedIcon className='StarIconEmpty'/> }
      {(rating >= 2) ? <StarIcon className='StarIcon'/> : <StarBorderOutlinedIcon className='StarIconEmpty'/> }
      {(rating >= 3) ? <StarIcon className='StarIcon'/> : <StarBorderOutlinedIcon className='StarIconEmpty'/> }
      {(rating >= 4) ? <StarIcon className='StarIcon'/> : <StarBorderOutlinedIcon className='StarIconEmpty'/> }
      {(rating >= 5) ? <StarIcon className='StarIcon'/> : <StarBorderOutlinedIcon className='StarIconEmpty'/> }
    </div>
  );
};

export default Rating;