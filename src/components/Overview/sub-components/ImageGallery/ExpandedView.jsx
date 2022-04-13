import React, { useState, useContext, useEffect } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import carousel from './carousel.js';

const ExpandedView = (props) => {
  const [photo, setPhoto] = useState(props.expandedPhoto);
  const [isZoom, setIsZoom] = useState(false);

  const photos = props.photos;

  return (
    <div className="expanded-modal">
      <button className="close-expanded"
        onClick={() => props.setIsDefault(true)}
      >Close</button>
      {
        photo !== photos[0] ?
          <div className="expanded-previous"
            onClick={() => carousel.previousPhoto(photo, photos, setPhoto)} >
            <ArrowBackIosIcon />
          </div>
          : null
      }
      <img className="expanded-photo" src={photo.url} height={isZoom ? 2000 : 800} width={isZoom ? 2000 : 800}
        onClick={() => setIsZoom(!isZoom)} />
      <div className="expanded-view-icon">
        {
          photos.map((icon, i) =>
            <img key={i} src={icon['thumbnail_url']} height={50} width={50}
              onClick={() => setPhoto(icon)} />
          )
        }

      </div>
      {
        photo !== photos[photos.length - 1] ?
          <div className="expanded-next"
            onClick={() => carousel.nextPhoto(photo, photos, setPhoto)} >
            <ArrowForwardIosIcon />
          </div>
          : null
      }
    </div>
  );
};

export default ExpandedView;