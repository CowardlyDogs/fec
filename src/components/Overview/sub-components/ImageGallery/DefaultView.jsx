import React, { useState, useContext, useEffect } from 'react';
import { Overview, OverviewContext } from '../../Overview.jsx';


function DefaultView(props) {
  const currentStyle = props.currentStyle;
  const [currentPhoto, setCurrentPhoto] = useState(currentStyle.photos[0]);

  useEffect(() => {
    setCurrentPhoto(currentStyle.photos[0])
  }, [currentStyle.photos[0]])

  return (
    <div className="image-gallery-default">
      {/* TODO: Delete Image Gallery Title */}
      <h1>Image Gallery</h1>
      <img className="default-image" src={currentPhoto.url} width={500} height={500} />
      {
        currentStyle.photos.map((photo, i) =>

        <div key={i} className="thumbnail">
          <img className="photos-thumbnail" src={photo.thumbnail_url} width={50} height={50}
          onClick={() => setCurrentPhoto(photo)}/>
        </div>
      )
      }
    </div>
  )
}

export default DefaultView;