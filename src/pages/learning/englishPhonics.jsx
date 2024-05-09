import React, { useState, useEffect } from "react";
import "./englishPhonics.css";

const EnglishPhonics = () => {
  const words = {A: "Apple", B: "Ball", C: "Cat", D: "Dog", E: "Elephant", F: "Fish", G:"Giraffe", H:"Home", I:"Ice Cream", J:"Jug", K:"Kite", L:"Lion", M:"Mango", N:"Nest", O:"Orange", P:"Parrot", Q:"Queen", R:"Rat", S:"Sun", T:"Tiger", U:"Umbrella", V:"Violin", W:"Watermelon", X:"X-Mas Tree",Y:"Yacht", Z:"Zebra"};
  const [currentLetter, setCurrentLetter] = useState("A");

  const alphabetImagePath = (letter) => `/phonicsImg/${letter.toLowerCase()}.png`;

  useEffect(() => {
    const playAudio = () => {
      const audio = new Audio(`/lettersAudio/${currentLetter}.mp3`);
      audio.play();
    };

    playAudio();
  }, [currentLetter]);

  const handleNextLetter = () => {
    if (currentLetter === "Z") {
      setCurrentLetter("A");
    } else {
      setCurrentLetter(String.fromCharCode(currentLetter.charCodeAt(0) + 1));
    }
  };

  const handlePrevLetter = () => {
    if (currentLetter === "A") {
      setCurrentLetter("Z");
    } else {
      setCurrentLetter(String.fromCharCode(currentLetter.charCodeAt(0) - 1));
    }
  };

  return (
    <div className="alphabet-learning-container">
      <h1>Phonics</h1>
      <div className="letter-display">
        <img
          src={alphabetImagePath(currentLetter)}
          alt={`Image for letter ${currentLetter}`}
        />
        <div className="letter-info">
         
          <p style={{fontSize:100, paddingLeft:30}}>{currentLetter}</p>
          <p>{words[currentLetter]}</p>
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevLetter}>Previous</button>
        <button onClick={handleNextLetter}>Next</button>
      </div>
    </div>
  );
};

export default EnglishPhonics;
