import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import NavBar from "./navBar";

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
    imageUrl: "./public/smallCap.jpg",
    path: "/learning/hindi",
  },

  {
    id: 3,
    name: "Learn Tamil Alphabet",
    imageUrl: "./public/cap.jpg",
    path: "/learning/tamil",
  },
  {
    id: 4,
    name: "Learn Telgu Alphabet",
    imageUrl: "./public/smallCap.jpg",
    path: "/learning/telgu",
  },
  {
    id: 5,
    name: "Learn Bangla Alphabet",
    imageUrl: "./public/cap.jpg",
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
      <NavBar />
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
