import React, { useState, useEffect } from 'react';
import './abc.css';

const Tamil = () => {
  const tamilAlphabet = [
    'அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ',
    'க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர',
    'ல', 'வ', 'ழ', 'ள', 'ற', 'ன'
  ];

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio(`path_to_tamil_audio_folder/${tamilAlphabet[currentLetterIndex]}.mp3`);
      audio.play();
    };

    playAudio();
  }, [currentLetterIndex, tamilAlphabet]);

  const handleNextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % tamilAlphabet.length);
  };

  const handlePrevLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex - 1 + tamilAlphabet.length) % tamilAlphabet.length);
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
      <h1>தமிழ் உயிரெழுத்து கற்க</h1>
      <div className="letter-display" style={getLetterStyle()}>
        <p>{tamilAlphabet[currentLetterIndex]}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevLetter}>முந்தையது</button>
        <button onClick={handleNextLetter}>அடுத்தது</button>
      </div>
    </div>
  );
};

export default Tamil;
