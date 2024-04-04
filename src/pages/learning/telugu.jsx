import React, { useState, useEffect } from 'react';
import './abc.css';

const Telugu = () => {
  const teluguAlphabet = [
    'అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 
    'క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 
    'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ', 'శ', 
    'ష', 'స', 'హ', 'ళ', 'క్ష', 'ఱ'
  ];

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio(`path_to_telugu_audio_folder/${teluguAlphabet[currentLetterIndex]}.mp3`);
      audio.play();
    };

    playAudio();
  }, [currentLetterIndex, teluguAlphabet]);

  const handleNextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % teluguAlphabet.length);
  };

  const handlePrevLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex - 1 + teluguAlphabet.length) % teluguAlphabet.length);
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
      <h1>తెలుగు అక్షరాలను అభ్యసించండి</h1>
      <div className="letter-display" style={getLetterStyle()}>
        <p>{teluguAlphabet[currentLetterIndex]}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevLetter}>ముందుకు</button>
        <button onClick={handleNextLetter}>తరువాత</button>
      </div>
    </div>
  );
};

export default Telugu;
