import React, { useState, useContext, useEffect } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import carousel from './carousel.js';


const DefaultView = (props) => {
  const currentStyle = props.currentStyle;
  const [currentPhoto, setCurrentPhoto] = useState(currentStyle.photos[0]);
  const [displayedStyles, setDisplayedStyles] = useState(currentStyle.photos.slice(0, 7));


  useEffect(() => {
    setCurrentPhoto(currentStyle.photos[0]);
    setDisplayedStyles(currentStyle.photos.slice(0, 7));
  }, [currentStyle]);




  return (
    <div className="image-gallery-default">

      {/* current image being displayed */}
      <img className="default-photo" src={currentPhoto.url} width={600} height={600}
        onClick={() => {
          props.setIsDefault(false);
          props.setExpandedPhoto(currentPhoto);
        }} />

      <div className="thumbnails">
        {/* if the user scrolled the carousel to the left, this button will be available */}
        {
          displayedStyles[0] !== currentStyle.photos[0]
            ? <div className="previous"
              onClick={() => carousel.shiftThumbnailsRight(displayedStyles, currentStyle, setDisplayedStyles)} >
              <ArrowBackIosIcon />
            </div>
            : null
        }

        {/* iterate through the thumbnails to render them to the page. max of 7 at a time */}
        {
          displayedStyles.map((photo, i) =>

            <img className="thumbnail" src={photo.thumbnail_url} width={80} height={80}
              onClick={() => {
                setCurrentPhoto(photo);
                setDisplayedStyles(displayedStyles);
              }} />

          )
        }

        {/* if the user scrolled the carousel to the right, this button will be available */}
        {
          displayedStyles[displayedStyles.length - 1] !== currentStyle.photos[currentStyle.photos.length - 1]
            ? <div className="next"
              onClick={() => carousel.shiftThumbnailsLeft(displayedStyles, currentStyle, setDisplayedStyles)} >
              <ArrowForwardIosIcon />
            </div>
            : null
        }
      </div>

    </div>
  );
};

export default DefaultView;