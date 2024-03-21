import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import NavBar from './navBar';

const Profile = () => {
  return (
    <div>
      <NavBar/>
      <div className="dashboard-container">
        <h1>Profile</h1>
      </div>
    </div>
  );
};

export default Profile;
