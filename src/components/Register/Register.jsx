import React, { useState } from 'react';

function Register({ closeModal }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="regUsername">Username:</label><br />
          <input
            type="text"
            id="regUsername"
            name="regUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <label htmlFor="regEmail">Email:</label><br />
          <input
            type="email"
            id="regEmail"
            name="regEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <label htmlFor="regPassword">Password:</label><br />
          <input
            type="password"
            id="regPassword"
            name="regPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Register;
