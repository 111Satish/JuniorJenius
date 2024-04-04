import React, { useState, useEffect } from 'react';
import './abc.css';

const Gujrati = () => {
  const [currentLetter, setCurrentLetter] = useState('A');

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

  const getLetterStyle = () => {
    return {
      color: 'white',
      backgroundColor: 'blue',
      border: '2px solid black',
      borderRadius: '10px',
      padding: '10px',
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '100px', 
      height: '100px', 
    };
  };

  return (
    <div className="alphabet-learning-container">
      <h1>Learn Gujrati Alphabet</h1>
      <div className="letter-display" style={getLetterStyle()}>
        <p>{currentLetter}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevLetter}>Previous</button>
        <button onClick={handleNextLetter}>Next</button>
      </div>
    </div>
  );
};

export default Gujrati;
