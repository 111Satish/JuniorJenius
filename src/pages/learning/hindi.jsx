import React, { useState, useEffect } from 'react';
import './abc.css';

const Hindi = () => {
  const hindiAlphabet = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'क्ष', 'त्र', 'ज्ञ'];

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio(`path_to_hindi_audio_folder/${hindiAlphabet[currentLetterIndex]}.mp3`); 
      audio.play();
    };

    playAudio();
  }, [currentLetterIndex, hindiAlphabet]);

  const handleNextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % hindiAlphabet.length);
  };

  const handlePrevLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex - 1 + hindiAlphabet.length) % hindiAlphabet.length);
  };

  const getLetterStyle = () => {
    return {
      color: 'white',
      backgroundColor: 'blue',
      border: '2px solid black',
      borderRadius: '10px',
      padding: '10px',
      fontSize: '100px',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '300px', 
      height: '250px', 
    };
  };

  return (
    <div className="alphabet-learning-container">
      <h1>हिंदी वर्णमाला सीखें</h1>
      <div className="letter-display" style={getLetterStyle()}>
        <p>{hindiAlphabet[currentLetterIndex]}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevLetter}>पिछला</button>
        <button onClick={handleNextLetter}>अगला</button>
      </div>
    </div>
  );
};

export default Hindi;
