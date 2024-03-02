import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './level1.css';

const Level2 = () => {
  const [currentLetter, setCurrentLetter] = useState('');
  const [score, setScore] = useState(0);

  const alphabetData = [
    { letter: 'A', imageUrl: 'https://i.pinimg.com/564x/5c/04/8b/5c048b75fa22b94e15bbb2760b86674d.jpg' },
    { letter: 'B', imageUrl: 'https://i.pinimg.com/564x/42/6b/30/426b30197ea598f4386a0466c42c378e.jpg' },
    { letter: 'C', imageUrl: 'https://i.pinimg.com/564x/29/10/22/291022e2ad018c8c17a5368b1c457c02.jpg' },
  ];

  const getRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * alphabetData.length);
    return alphabetData[randomIndex];
  };

  const handleLetterClick = (clickedLetter) => {
    if (clickedLetter === currentLetter) {
      setScore(score + 1);
      // Show pop-up effect for correct answer
      toast.success('Correct Answer!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Show pop-up effect for incorrect answer
      toast.error('Incorrect Answer!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    // Load a new random letter
    const newLetter = getRandomLetter();
    setCurrentLetter(newLetter.letter);
  };

  useEffect(() => {
    // Initial setup - load a random letter on component mount
    const initialLetter = getRandomLetter();
    setCurrentLetter(initialLetter.letter);
  }, []);

  return (
    <div className="alphabet-game-container">
      <h1>Alphabet Learning Game Level 2</h1>
      <div className="image-container">
        <img src={alphabetData.find((item) => item.letter === currentLetter)?.imageUrl} alt={`Image for letter ${currentLetter}`} />
      </div>
      <div className="letter-options">
        {alphabetData.map((item) => (
          <button key={item.letter} onClick={() => handleLetterClick(item.letter)}>
            {item.letter}
          </button>
        ))}
      </div>
      <div className="score">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Level2;

