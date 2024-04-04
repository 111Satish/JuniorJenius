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

const Learning = () => {
  return (
    <div>
      <div className="dashboard-container">
        <h1>Learning Dashboard</h1>
        <div className="game-list">
          {learning.map((learn) => (
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
