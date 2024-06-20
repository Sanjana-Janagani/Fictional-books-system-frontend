import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';
import store from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../../redux/authAction';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('reader');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !password || !role) {
        return alert("Please provide all fields");
      }
      store.dispatch(userRegister({ name, email, password, role }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">
          <NavLink to="/">&times;</NavLink></span>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="regName">Username :</label><br />
          <input
            type="text"
            id="regName"
            name="regName"
            value={name}
            placeholder='Enter your User Name'
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="regEmail">Email :</label><br />
          <input
            type="email"
            id="regEmail"
            name="regEmail"
            value={email}
            placeholder='Enter your email address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="regPassword">Password :</label><br />
          <input
            type="password"
            id="regPassword"
            name="regPassword"
            value={password}
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <span className='roles'>
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
          <input type="submit" value="Submit" />
        </form>
        <p className='signin'>Already have an account? <button className="link" onClick={handleSignInClick}><u>Sign In</u></button></p>
      </div>
    </div>
  );
}

export default Register;
