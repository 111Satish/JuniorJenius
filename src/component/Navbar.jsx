import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const navigate = useNavigate();
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
        <Link to='/'>JuniorGenius</Link>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/learning">Learning</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><span onClick={handleLogout}>Logout</span></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
