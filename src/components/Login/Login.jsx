import React, { useState } from 'react';
import './Login.css'
import { NavLink } from 'react-router-dom';

function Login({ closeModal }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = (e) => {
    e.preventDefault();
    // Handle login logic here
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">
          <NavLink to ="/">&times;</NavLink></span>
        <h2>Login</h2>
        <form onSubmit={handleLoginClick}>
          <label htmlFor="username">Email :</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder='Enter your email address'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password :</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <input type="submit" value="Login" />
        </form>
        <p className='forgot'>Forgot Password?</p>
        <p className='forgot signup'><b><u>Sign Up</u></b></p>
      </div>
    </div>
  );
}

export default Login;
