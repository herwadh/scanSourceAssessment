import React, { useEffect, useRef } from 'react';

const OldComponent = ({ handleButtonClick, updateText }) => {
  const infoRef = useRef(null);

  useEffect(() => {
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const link3 = document.getElementById('link3');

    const handleClick = (event) => {
      const text = event.target.textContent;
      handleButtonClick(text);
    };

    link1.addEventListener('click', handleClick);
    link2.addEventListener('click', handleClick);
    link3.addEventListener('click', handleClick);

    return () => {
      link1.removeEventListener('click', handleClick);
      link2.removeEventListener('click', handleClick);
      link3.removeEventListener('click', handleClick);
    };
  }, [handleButtonClick]);

  useEffect(() => {
    if (infoRef.current) {
      infoRef.current.textContent = updateText;
    }
  }, [updateText]);

  return (
    <div id="old-container" className="old">
      <button id="link1">One</button>
      <button id="link2">Two</button>
      <button id="link3">Three</button>
      <div ref={infoRef}></div>
    </div>
  );
};

export default OldComponent;