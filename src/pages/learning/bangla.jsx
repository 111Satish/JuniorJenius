import React, { useState, useEffect } from 'react';
import './abc.css';

const Bangla = () => {
  const [currentLetter, setCurrentLetter] = useState('A');

  const alphabetImagePath = (letter) => `/letters/${letter.toLowerCase()}.jpg`; 

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio(`path_to_audio_folder/${currentLetter}.mp3`); 
      audio.play();
    };

    playAudio();
  }, [currentLetter]);

  const handleNextLetter = () => {
    if (currentLetter === 'Z') {
      setCurrentLetter('A');
    } else {
      setCurrentLetter(String.fromCharCode(currentLetter.charCodeAt(0) + 1));
    }
  };

  const handlePrevLetter = () => {
    if (currentLetter === 'A') {
      setCurrentLetter('Z');
    } else {
      setCurrentLetter(String.fromCharCode(currentLetter.charCodeAt(0) - 1));
    }
  };

  return (
    <div className="alphabet-learning-container">
      <h1>Learn Bangla Alphabet</h1>
      <div className="letter-display">
        <img src={alphabetImagePath(currentLetter)} alt={`Image for letter ${currentLetter}`} />
        {/* <p>{currentLetter}</p> */}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevLetter}>Previous</button>
        <button onClick={handleNextLetter}>Next</button>
      </div>
    </div>
  );
};

export default Bangla;
