import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './matchLetters.css';

const MatchLetters = ({ onNextLevel }) => {
  const [letterPairs, setLetterPairs] = useState([]);
  const [selectedEffect, setSelectedEffect] = useState('');

  const playAudioCorrect = () => {
    const audio = new Audio(`/audio/correctAns.mp3`); 
    audio.play();
  };
  const playAudioWrong = () => {
    const audio = new Audio(`/audio/wrongAns.mp3`); 
    audio.play();
  };

  const generateLetterPairs = () => {
    const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const pairs = [];

    const fixedIndex = Math.floor(Math.random() * availableLetters.length);
    const fixedCapital = availableLetters[fixedIndex];

    pairs.push({ capital: fixedCapital, lowercase: fixedCapital });

    availableLetters.splice(fixedIndex, 1);

    for (let i = 0; i < 3; i++) {
      const capitalIndex = Math.floor(Math.random() * availableLetters.length);
      const capitalLetter = availableLetters[capitalIndex];
      availableLetters.splice(capitalIndex, 1);

      const lowerCaseIndex = Math.floor(Math.random() * availableLetters.length);
      const lowerCaseLetter = availableLetters[lowerCaseIndex];
      availableLetters.splice(lowerCaseIndex, 1);

      pairs.push({ capital: capitalLetter, lowercase: lowerCaseLetter });
    }

    const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
    setLetterPairs(shuffledPairs);
  };

  const checkPair =()=>{
    for(let i=0; i<4; i++){
      if(letterPairs[i].capital === letterPairs[i].lowercase)
        return i;
    }
    return -1;
  };

  const handleBoxClick = async(clickedPair) => {
    const idx = await checkPair();
    const correctPair = letterPairs[idx];
    if (clickedPair === correctPair) {
      playAudioCorrect();
      toast.success('Correct Match!');
      setSelectedEffect('correct-effect');
      setTimeout(() => {
        setSelectedEffect('');
        generateLetterPairs();
      }, 500);
    } else {
      playAudioWrong();
      toast.error('Incorrect Match!');
      setSelectedEffect('incorrect-effect');
      setTimeout(() => {
        setSelectedEffect('');
      }, 500);
    }
  };

  useEffect(() => {
    generateLetterPairs();
  }, []); 

  return (
    <div className="match-letters-game-container">
      <h1>Match Letters Game</h1>
      <div className="letter-boxes">
        {letterPairs.map((pair, index) => (
          <div key={index} className={`letter-box ${selectedEffect}`} onClick={() => handleBoxClick(pair)}>
            <div className='letter'>{pair.capital}</div>
            <div className='letter'>{pair.lowercase.toLowerCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchLetters;
