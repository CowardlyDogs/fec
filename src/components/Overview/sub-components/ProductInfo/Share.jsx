import React, { useState, useContext } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Share = () => {

  return (
    <div className="share-icons">
      <FacebookIcon fontSize="small"/>
      <TwitterIcon />
      <PinterestIcon />
    </div>
  );
};

export default Share;