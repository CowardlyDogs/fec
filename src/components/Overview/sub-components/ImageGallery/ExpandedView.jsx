import React, { useState, useContext, useEffect, useRef } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import carousel from './carousel.js';

const ExpandedView = (props) => {
  const [photo, setPhoto] = useState(props.expandedPhoto);
  const [isZoom, setIsZoom] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const imageRef = useRef(null);

  const photos = props.photos;

  const handleMove = (e) => {
    console.log(imageRef.current.getBoundingClientRect());

  };

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
      <div className="img-wrapper" ref={imageRef}
        onMouseMove={(e) => handleMove(e)}>

        <img className={isZoom ? 'expanded-photo-zoom' : 'expanded-photo'} src={photo.url}
          onClick={() => setIsZoom(!isZoom)}
        />
      </div>
      <div className="expanded-view-icons">
        {
          photos.map((icon, i) =>
            <img className="expanded-view-icon" key={i} src={icon['thumbnail_url']} height={50} width={50}
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