import React, { useState, useContext } from 'react';
import QandA from '../QandA.jsx';

// Pop-up module to add answer - toggles with button on QandA component

function AddQuestion () {
  const product = useContext(QandAContext);

  return (
    <div>
      Add Question
    </div>
  );
}

export default AddQuestion;