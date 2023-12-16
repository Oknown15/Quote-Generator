import React, { useState } from 'react';

const Randomquotes = () => {
  // State to manage the text content and index
  const [displayTextIndex, setDisplayTextIndex] = useState(2);
  const [texts, setTexts] = useState([
    'Initial text 1',
    'Initial text 2',
    'Initial text 3',
  ]);

  // Your San object (replace this with your actual data)
  const sanObject = {
    newTexts: ['New text 1', 'New text 2', 'New text 3', 'aassd', 'hdwelcome']
  };

  // Function to handle button click and update text
  const handleButtonClick = () => {
    const newIndex = (displayTextIndex + 2) % sanObject.newTexts.length;
    setDisplayTextIndex(newIndex);
    setTexts((prevTexts) => {
      const newUpdatedTexts = [...prevTexts];
      newUpdatedTexts[newIndex] = sanObject.newTexts[newIndex];
      return newUpdatedTexts;
    });
  };

  return (
    <div>
      {/* Display current text */}
      <p>{texts[displayTextIndex]}</p>

      {/* Button to change the text */}
      <button onClick={handleButtonClick}>Change Text</button>
    </div>
  );
};

export default Randomquotes ;


