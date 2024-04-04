import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(userLoggedIn === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">JuniorGenius</a>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><a href="/learning">Learning</a></li>
            <li><a href="/games">Games</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><span onClick={handleLogout}>Logout</span></li>
          </>
        ) : (
          <li><a href="/login">Login</a></li>
        )}
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
