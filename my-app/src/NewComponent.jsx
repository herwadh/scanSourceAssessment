import React, { useState } from 'react';
import OldComponent from './OldComponent';


const NewComponent = () => {
  const [displayText, setDisplayText] = useState('');
  const [updateText, setUpdateText] = useState('');

  const handleOldButtonClick = () => {
    setUpdateText('Updated from NewComponent');
  };

  return (
    <div className="content">
       <div>
      <button onClick={handleOldButtonClick}>Update From Old Component</button>
     
      <div>{displayText}</div>
      </div>
      <OldComponent handleButtonClick={setDisplayText} updateText={updateText} />
      
     
     
    </div>
  );
};
export default NewComponent;