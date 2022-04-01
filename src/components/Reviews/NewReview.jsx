import React/*, { useState }*/ from 'react';



function NewReview() {
  return (
    // <h1>Ratings and Reviews Will Go Here</h1>
    /*
    ***TODO***
    *
    * Form to accept review Information
    * Post Request the new review
    *
    *
    */
    <div>
      {/* TODO New Form HTML Code */}
      <div className="review-modal" display={this.props.show ? "block" : "none"}>
        <div>
          {/* TODO figure out star rating input */}
          <input className='username-input' type='text' placeholder='username'>  </input>
          <input className='email-input' type='text' placeholder='address@domain.com'>  </input>
          <input className='title-input' type='text' placeholder='Review Title'>  </input>
          <input className='review-input' type='text' placeholder='Review'>  </input>

          <button className='modal-close' onClick={}>Submit</button>
        </div>
      </div>
    </div>
  );
}



export default NewReview;
