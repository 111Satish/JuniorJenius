// src/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="nav-bar">
        <Link to="/level1">Level 1</Link>
        <Link to="/level2">Level 2</Link>
        <Link to="/level3">Level 3</Link>
      </div>
      <div className="content">
        <h1>Dashboard Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;
