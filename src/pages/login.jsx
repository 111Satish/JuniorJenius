import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        alert('Login successful!');
        navigate('/dashboard')
      } else {
        setError(response.data.error || 'Failed to login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        {error && alert(error)}
      </div>
    </div>
  );
};

export default Login;
