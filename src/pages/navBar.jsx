import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li><Link to="/learning">Learning</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
