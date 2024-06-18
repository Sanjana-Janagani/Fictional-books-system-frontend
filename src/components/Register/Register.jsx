import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('reader');
  const navigate = useNavigate();


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch('/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ username, email, password, role })
  //   });
  //   const result = await response.json();
  //   setMessage(result.message);
  // };

  // const handleRegister = async (userData) => {
  //   try {
  //     const response = await axios.post('http://localhost:3000/register', userData);
  //     console.log(response.data.message);
  //     closeRegisterModal();
  //   } catch (error) {
  //     console.error('Error registering:', error);
  //   }
  // };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">
        <NavLink to ="/">&times;</NavLink></span>
        <h2>Register</h2>
        <form>
          <label htmlFor="regUsername">Username :</label><br />
          <input
            type="text"
            id="regUsername"
            name="regUsername"
            value={username}
            placeholder='Enter your User Name'
            onChange={(e) => setUsername(e.target.value)}
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
         <input type="submit" value="Submit" onSubmit={handleRegister}/>
        </form>
        <p className='signin'>Already have an account? <button className="link" onClick={handleSignInClick}><u>Sign In</u></button></p>
      </div>
    </div>
  );
}

export default Register;
