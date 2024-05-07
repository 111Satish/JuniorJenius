import React from "react";
import { Link } from "react-router-dom";
import "./learning.css";

const learning = [
  {
    id: 1,
    name: "Learn English Alphabet",
    imageUrl: "./public/cap.jpg",
    path: "/learning/abc",
  },
  {
    id: 2,
    name: "Learn Hindi Alphabet",
    imageUrl: "./public/hindi_image.jpg",
    path: "/learning/hindi",
  },

  {
    id: 3,
    name: "Learn Tamil Alphabet",
    imageUrl: "./public/tamil_image.jpg",
    path: "/learning/tamil",
  },
  {
    id: 4,
    name: "Learn Telugu Alphabet",
    imageUrl: "./public/telugu_image.jpg",
    path: "/learning/telugu",
  },
  {
    id: 5,
    name: "Learn Bangla Alphabet",
    imageUrl: "./public/bangla_image.png",
    path: "/learning/bangla",
  },
  {
    id: 6,
    name: "Learn Gujrati Alphabet",
    imageUrl: "./public/smallCap.jpg",
    path: "/learning/gujrati",
  },
];

const phonics = [
  {
    id: 1,
    name: "English Phonics",
    imageUrl: "./public/cap.jpg",
    path: "/learning/englishphonics",
  },
  {
    id: 2,
    name: "Hindi Phonics",
    imageUrl: "./public/hindi_image.jpg",
    path: "/learning/hindi",
  },

  {
    id: 3,
    name: "Tamil Phonics",
    imageUrl: "./public/tamil_image.jpg",
    path: "/learning/tamil",
  },
  {
    id: 4,
    name: "Telugu Phonics",
    imageUrl: "./public/telugu_image.jpg",
    path: "/learning/telugu",
  },
  {
    id: 5,
    name: "Bangla Phonics",
    imageUrl: "./public/bangla_image.png",
    path: "/learning/bangla",
  },
  {
    id: 6,
    name: "Gujrati Phonics",
    imageUrl: "./public/smallCap.jpg",
    path: "/learning/gujrati",
  },
];

const Learning = () => {
  return (
    <div>
      <div className="dashboard-container">
        <h1>Learning Multiple Languages Alphabet</h1>
        <div className="game-list">
          {learning.map((learn) => (
            <Link to={learn.path} key={learn.id} className="game-box">
              <img src={learn.imageUrl} alt={`Learn ${learn.name}`} />
              <p>{learn.name}</p>
            </Link>
          ))}
        </div>
        <h1>Multiple Language Phonics</h1>
        <div className="game-list">
          {phonics.map((learn) => (
            <Link to={learn.path} key={learn.id} className="game-box">
              <img src={learn.imageUrl} alt={`Learn ${learn.name}`} />
              <p>{learn.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
