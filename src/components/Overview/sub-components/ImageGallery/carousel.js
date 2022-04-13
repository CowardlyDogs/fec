module.exports = {

  shiftThumbnailsLeft: (displayedStyles, currentStyle, setDisplayedStyles) => {
    for (let i = 0; i < displayedStyles.length; i++) {
      if (i === displayedStyles.length - 1) {
        displayedStyles[i] = currentStyle.photos[currentStyle.photos.indexOf(displayedStyles[i]) + 1];
        break;
      }
      displayedStyles[i] = displayedStyles[i + 1];
    }

    setDisplayedStyles([...displayedStyles]);
  },

  shiftThumbnailsRight: (displayedStyles, currentStyle, setDisplayedStyles) => {
    for (let i = displayedStyles.length - 1; i >= 0; i--) {
      if (i === 0) {
        displayedStyles[i] = currentStyle.photos[currentStyle.photos.indexOf(displayedStyles[i]) - 1];
        break;
      }
      displayedStyles[i] = displayedStyles[i - 1];
    }

    setDisplayedStyles([...displayedStyles]);
  },

  nextPhoto: (photo, photos, setPhoto) => {

    setPhoto(photos[photos.indexOf(photo) + 1]);
  },

  previousPhoto: (photo, photos, setPhoto) => {
    setPhoto(photos[photos.indexOf(photo) - 1]);
  }

};