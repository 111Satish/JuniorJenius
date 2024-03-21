import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const games = [
  {
    id: 1,
    name: 'Select Letter',
    imageUrl: './public/cap.jpg',
    path: '/selectLetter',
  },
  {
    id: 2,
    name: 'Match Letters',
    imageUrl: './public/smallCap.jpg',
    path: '/matchLetters',
  },

  {
    id: 3,
    name: 'Select Letter',
    imageUrl: './public/cap.jpg',
    path: '/selectLetter',
  },
  {
    id: 4,
    name: 'Match Letters',
    imageUrl: './public/smallCap.jpg',
    path: '/matchLetters',
  },
  {
    id: 5,
    name: 'Select Letter',
    imageUrl: './public/cap.jpg',
    path: '/selectLetter',
  },
  {
    id: 6,
    name: 'Match Letters',
    imageUrl: './public/smallCap.jpg',
    path: '/matchLetters',
  },

  
];

const Dashboard = () => {
  return (
    <div>
      <nav className="top-nav">
        <ul>
          <li><Link to="/learning">Learning</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
      <div className="dashboard-container">
        <h1>Game Dashboard</h1>
        <div className="game-list">
          {games.map((game) => (
            <Link to={game.path} key={game.id} className="game-box">
              <img src={game.imageUrl} alt={`Game ${game.name}`} />
              <p>{game.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

