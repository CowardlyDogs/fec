import React, { useState, useContext, useEffect } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import carosel from './carosel.js';


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
      {/* TODO: Delete Image Gallery Title */}
      <h1>Image Gallery</h1>

      {/* current image being displayed */}
      <img className="default-photo" src={currentPhoto.url} width={500} height={500}
        onClick={() => {
          props.setIsDefault(false);
          props.setExpandedPhoto(currentPhoto);
        }} />

      {/* if the user scrolled the carosel to the left, this button will be available */}
      {
        displayedStyles[0] !== currentStyle.photos[0]
          ? <button className="previous"
            onClick={() => carosel.shiftThumbnailsRight(displayedStyles, currentStyle, setDisplayedStyles)} >
            Previous
          </button>
          : null
      }

      {/* iterate through the thumbnails to render them to the page. max of 7 at a time */}
      {
        displayedStyles.map((photo, i) =>

          <div key={i} className="thumbnail">
            <img className="photos-thumbnail" src={photo.thumbnail_url} width={50} height={50}
              onClick={() => {
                setCurrentPhoto(photo);
                setDisplayedStyles(displayedStyles);
              }} />
          </div>
        )
      }

      {/* if the user scrolled the carosel to the right, this button will be available */}
      {
        displayedStyles[displayedStyles.length - 1] !== currentStyle.photos[currentStyle.photos.length - 1]
          ? <button className="next"
            onClick={() => carosel.shiftThumbnailsLeft(displayedStyles, currentStyle, setDisplayedStyles)} >
            Next
          </button>
          : null
      }
    </div>
  );
};

export default DefaultView;