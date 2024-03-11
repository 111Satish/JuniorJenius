import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; 

const MatchLetters = ({ level, onNextLevel }) => {
  const [initialLetters, setInitialLetters] = useState([]);

  const generateLetters = () => {
    const pairsCount = level + 1;
    const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const selectedLetters = [];

    for (let i = 0; i < pairsCount; i++) {
      const randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
      selectedLetters.push(randomLetter);
      selectedLetters.push(randomLetter.toLowerCase());
    }

    const shuffledLetters = selectedLetters.sort(() => Math.random() - 0.5);
    setInitialLetters(shuffledLetters);
  };

  const handleLetterClick = (clickedLetter) => {
    if (initialLetters.includes(clickedLetter)) {
      toast.success('Correct Match!', {
      });
    } else {
      toast.error('Incorrect Match!', {
      });
    }

    generateLetters(); 
  };

  useEffect(() => {
    generateLetters();
  }, [level]); 

  return (
    <div className="match-letters-game-container">
      <h1>Match Letters Game - Level {level}</h1>
      <div className="letter-options">
        {initialLetters.map((letter, index) => (
          <button key={index} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <button className="next-level-button" onClick={onNextLevel} // Assuming proper handling in onNextLevel
        /* Add any necessary asynchronous handling or state updates here */
      >
        Next Level
      </button>
    </div>
  );
};

export default MatchLetters;
