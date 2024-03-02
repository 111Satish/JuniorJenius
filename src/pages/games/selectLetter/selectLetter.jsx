// src/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './selectLetter.css';

const SelectLetter = () => {
  return (
    <div className="dashboard-container">
      <div className="nav-bar">
        <Link to="/levels/level1">Level 1</Link>
        <Link to="/level2">Level 2</Link>
        <Link to="/level3">Level 3</Link>
        <Link to="/level4">Level 4</Link>
        {/* <Link to="/level5">Level 5</Link>
        <Link to="/level6">Level 6</Link>
        <Link to="/level7">Level 7</Link>
        <Link to="/level8">Level 8</Link>
        <Link to="/level9">Level 9</Link>
        <Link to="/level10">Level 10</Link> */}
      </div>
      <div className="content">
        <h1>Dashboard Content</h1>
      </div>
    </div>
  );
};

export default SelectLetter;
