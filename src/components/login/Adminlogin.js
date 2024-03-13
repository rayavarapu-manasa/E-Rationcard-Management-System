import React, { useState } from 'react';
import './Adminlogin.css';


function Adminlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const adminUsername = 'admin'; // Predefined admin username
    const adminPassword = '1234'; // Predefined admin password

    // Check if entered username and password match the predefined admin credentials
    if (username === adminUsername && password === adminPassword) {
      // Set loggedIn state to true
      setLoggedIn(true);
      window.location.href='/adminlogin/adminpage'
    } else {
      // Display error message if entered credentials are incorrect
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="admin-container">
      {!loggedIn ? (
        <>
          <h2>Admin Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='login-btn' onClick={handleLogin}>Login</button>
        </>
      ) : (
        <div className="admin-dashboard">
          <h2>Welcome, Admin!</h2>
        </div>
      )}
    </div>
  );
}

export default Adminlogin;

