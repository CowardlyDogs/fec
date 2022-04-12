import React/*, { useState }*/ from 'react';



var NewReview = ({visible, toggle, product, onSubmit}) => {

  var rating = 0;
  var changeRating = (e) => {
    rating = e.target.value;
  };

  var summary = '';
  var changeSummary = (e) => {
    summary = e.target.value;
  };

  var review = '';
  var changeReview = (e) => {
    review = e.target.value;
  };

  var username = '';
  var changeUsername = (e) => {
    username = e.target.value;
  };

  var email = '';
  var changeEmail = (e) => {
    email = e.target.value;
  };

  var photos = [];
  // var changePhotos = (e) => {
  //   photos = e.target.value;
  // }

  var characteristics = {};
  // var changeCharacteristics = () => {
  //   characteristics = e.target.value;
  // }


  var handleSubmit = () => {
    if (username !== '' && email !== '' && rating > 0) {
      onSubmit({
        product_id: product,
        rating: rating,
        summary: summary,
        body: review,
        name: username,
        email: email,
        photos: photos,
        characteristics: characteristics
      });
    } else if (rating < 1) {
      alert('You must provide a rating');
    }
    else {
      alert('Username and Email are required');
    }

  };

  return (

    <div>
      {/*

      **TODO**

      Add Star Rating System

      Idea -- 5 icons
              onhover, icon grows larger.
              On click set rating integer to the star number.
              If rating >= star number, color = gold, else white. (Use ternary)

      */}
      <button onClick={toggle} style={{display: (!visible ? 'block' : 'none')}}>Post a Review</button>
      <div className="review-modal" style={{display: (visible ? 'flex' : 'none')}}>
        <div className="modal-content">
          {/* TODO figure out star rating input */}
          <div className="modal-row">
            <input className="rating rating-new" max="5" type="range" onChange={changeRating}/>
          </div>
          <br/>
          <div className="modal-row">
            <input className='username-input' type='text' placeholder='username' onChange={changeUsername}/>
            <input className='email-input' type='text' placeholder='address@domain.com' onChange={changeEmail}/>
          </div>
          <br/>
          <div className="modal-row">
            <input className='title-input' type='text' placeholder='Review Title' onChange={changeSummary}/>
          </div>
          <div className="modal-row">
            <textarea className='review-input' cols='50' rows='5' placeholder='Review' onChange={changeReview}/>
          </div>
          <br/>
          <div className="modal-row">
            <button className='modal-close' onClick={handleSubmit}>Submit</button>
            <button className='modal-close' onClick={toggle}> Cancel </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default NewReview;
