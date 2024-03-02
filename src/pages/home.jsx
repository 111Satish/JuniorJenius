// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to use React Router for navigation
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Junior Genius</h1>
        <p>Where Learning Meets Fun!</p>
      </header>
      <div className="image-container">
        <img src="https://img.freepik.com/premium-vector/children-class-reading-back-school-concept-cute-characters_113065-673.jpg?w=740" alt="Impressive Organization Image" />
      </div>
      <div className="organization-details">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
      </div>
      <div className="cta-buttons">
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/signup" className="signup-button">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
