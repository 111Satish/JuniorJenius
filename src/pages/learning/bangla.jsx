import React, { useState, useEffect } from 'react';
import './abc.css';

const Bangla = () => {
  const banglaAlphabet = [
    'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ', 'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ', 'ড়', 'ঢ়', 'য়', 'ৎ'
  ];

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio(`path_to_bangla_audio_folder/${banglaAlphabet[currentLetterIndex]}.mp3`);
      audio.play();
    };

    playAudio();
  }, [currentLetterIndex, banglaAlphabet]);

  const handleNextLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % banglaAlphabet.length);
  };

  const handlePrevLetter = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex - 1 + banglaAlphabet.length) % banglaAlphabet.length);
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
      <h1>বাংলা বর্ণমালা শিখুন</h1>
      <div className="letter-display" style={getLetterStyle()}>
        <p>{banglaAlphabet[currentLetterIndex]}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevLetter}>পূর্ববর্তী</button>
        <button onClick={handleNextLetter}>পরবর্তী</button>
      </div>
    </div>
  );
};

export default Bangla;
