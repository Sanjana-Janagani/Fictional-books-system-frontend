import React, { useState } from 'react';
import './Login.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login({ closeModal, toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('reader');
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    // Handle login logic here
    closeModal();
  };

  const handleSignUpClick = () => {
    navigate('/register');
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
            id="email"
            name="email"
            value={email}
            placeholder='Enter your email address'
            onChange={(e) => setEmail(e.target.value)}
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
          <span className='role'>
          <label>Role :</label><br />
          <input
            type="radio"
            id="reader"
            name="role"
            value="reader"
            checked={role === 'reader'}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="reader">Reader</label><br />
          <input
            type="radio"
            id="author"
            name="role"
            value="author"
            checked={role === 'author'}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="author">Author</label><br /><br />
          </span>
          <input type="submit" value="Login" />
        </form>
        <p className='signup'>Don't have an account? <button className="link" onClick={handleSignUpClick}><u>Sign Up</u></button></p>
      </div>
    </div>
  );
}

export default Login;
