import React/*, { useState }*/ from 'react';



function NewReview({visible, toggle, product, onSubmit}) {

  var rating = 0;
  // var changeRating = (stars) => {
  //   rating = stars;
  // }

  var summary = '';
  var changeSummary = (e) => {
    summary = e.target.value;
  }

  var review = '';
  var changeReview = (e) => {
    review = e.target.value;
  }

  var username = '';
  var changeUsername = (e) => {
    username = e.target.value;
  }

  var email = '';
  var changeEmail = (e) => {
    email = e.target.value;
  }

  var photos = [];
  // var changePhotos = (e) => {
  //   photos = e.target.value;
  // }

  var characteristics = {};
  // var changeCharacteristics = () => {
  //   characteristics = e.target.value;
  // }


  var handleSubmit = () => {
    onSubmit({
      product_id: product,
      rating: rating,
      summary: summary,
      body: review,
      name: username,
      email : email,
      photos: photos,
      characteristics: characteristics
     });
  }

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
      <button onClick={toggle} style={{display: (!visible ? "block" : "none")}}>Post a Review</button>
      <div className="review-modal" style={{display: (visible ? "flex" : "none")}}>
        <div className="modal-content">
          {/* TODO figure out star rating input */}
          <br/>
          <div className="modal-row">
            <input className='username-input' type='text' placeholder='username' onChange={changeUsername}/>
            <input className='email-input' type='text' placeholder='address@domain.com' onChange={changeEmail}/>
          </div>
          <br/>
          <div className="modal-row">
            <input className='title-input' type='text' placeholder='Review Title' onChange={changeSummary}/>
            <input className='review-input' type='text' placeholder='Review' onChange={changeReview}/>
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
}



export default NewReview;
