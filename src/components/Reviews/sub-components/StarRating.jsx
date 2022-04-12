import React from 'react';


var Rating = ({rating}) => {

  return (
    <div className="New-Star-Rating">
      <input
        className="rating rating-new"
        max="5"
        type="range"
        value={rating}>
      </input>
    </div>
  );
};

export default Rating;