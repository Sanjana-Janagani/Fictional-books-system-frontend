import React, { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import store from '../../redux/store';
import { userLogin } from '../../redux/authAction';

function Login({ closeModal, toggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('reader');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (!email || !password || !role) {
        return alert("Please provide all fields");
      }
      store.dispatch(userLogin({ email, password, role }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">
          <NavLink to="/">&times;</NavLink></span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email :</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder='Enter your email address'
            onChange={(e) => setEmail(e.target.value)}
          /><br />
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
            <label htmlFor="role">Role:</label><br />
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
