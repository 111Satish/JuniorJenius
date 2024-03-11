import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import NavBar from './navBar';

const LearningDashboard = () => {
  return (
    <div>
      <NavBar/>
      <div className="dashboard-container">
        <h1>Learning Dashboard</h1>
      </div>
    </div>
  );
};

export default LearningDashboard;
