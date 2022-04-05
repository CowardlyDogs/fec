import React/*, { useState }*/ from 'react';



function NewReview({visible, toggle, product, onSubmit}) {

  var username = '';
  var changeUsername = (e) => {
    username = e.target.value;
  }
  var title = '';
  var changeTitle = (e) => {
    title = e.target.value;
  }
  var email = '';
  var changeEmail = (e) => {
    email = e.target.value;
  }
  var review = '';
  var changeReview = (e) => {
    review = e.target.value;
  }

  var handleSubmit = () => {
    onSubmit({username, title, email, review});
  }

  return (
    // <h1>Ratings and Reviews Will Go Here</h1>
    /*
    ***TODO***
    *
    *Adjust to css to lightbox
    *
    *
    */
    <div>
      <h1>Reviews</h1>
      {/* TODO New Form HTML Code */}
      <button onClick={toggle} style={{display: (!visible ? "block" : "none")}}>New Review</button>
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
            <input className='title-input' type='text' placeholder='Review Title' onChange={changeTitle}/>
            <input className='review-input' type='text' placeholder='Review' onChange={changeReview}/>
          </div>
          <br/>
          <div className="modal-row">
            <button className='modal-close' onClick={handleSubmit}>Submit</button>
            <button className='modal-close' onClick={toggle}> Cancel </button>
          </div>


          <br/>

          <br/>

        </div>
      </div>
    </div>
  );
}



export default NewReview;
