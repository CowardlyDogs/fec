import React, { useState, useContext, useEffect, useRef } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import carousel from './carousel.js';

const ExpandedView = (props) => {
  const [photo, setPhoto] = useState(props.expandedPhoto);
  const [isZoom, setIsZoom] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const imageRef = useRef(null);

  const photos = props.photos;



  const moveMouse = (e) => {
    const {
      top: offsetTop,
      left: offsetLeft
    } = e.target.getBoundingClientRect();

    const x = ((e.pageX - offsetLeft) / e.target.width) * 50;
    const y = ((e.pageY - offsetTop) / e.target.height) * 50;

    setMouseX(x);
    setMouseY(y);
  };

  return (
    <div className="expanded-modal">
      <div className="close-expanded"
        onClick={() => props.setIsDefault(true)} >
        <CloseIcon style={{ fontSize: '50px'}}/>
      </div>
      {
        photo !== photos[0] ?
          <div className="expanded-previous"
            onClick={() => carousel.previousPhoto(photo, photos, setPhoto)} >
            <ArrowBackIosIcon />
          </div>
          : null
      }

      <img className={isZoom ? 'expanded-photo-zoom' : 'expanded-photo'}
        src={photo.url}
        style={isZoom ? { transformOrigin: `${mouseX}% ${mouseY}%` } : null}
        onClick={() => setIsZoom(!isZoom)}
        onMouseMove={isZoom ?
          (e) => moveMouse(e)
          : null}
      />

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