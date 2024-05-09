import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://juniorgeniusbackend.onrender.com/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(response.data)); 
        alert('Login successful!');
        navigate('/learning');
      } else {
        setError(response.data.error || 'Failed to login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app-container" style={{backgroundImage: "url('./junnior.gif')"}}>
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
          <p>
            Not a member? <Link to ='/signUp'>Register Now</Link>
          </p>
        </form>
        {error && alert(error)}
      </div>
    </div>
  );
};

export default Login;
