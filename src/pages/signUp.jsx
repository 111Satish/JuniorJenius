
import React, { useState } from 'react';
import axios from 'axios';
import './signUp.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgId, setOrgId] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        email: email,
        orgName: orgName,
        orgId: orgId,
        password: password,
      });

      if (response.status === 201) {
        alert('Signup successful!');
        
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to signup');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="app-container">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Organization Name:</label>
          <input
            type="text"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
          <br />
          <label>Organization ID:</label>
          <input
            type="text"
            value={orgId}
            onChange={(e) => setOrgId(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Re-enter Password:</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
