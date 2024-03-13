// import React, { useState } from 'react';
// import './Shopkeeperlogin.css';
// import { Link } from 'react-router-dom';

// function Shopkeeperlogin() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

  
//   const handleLogin = () => {
//     // Retrieve registered username and password from local storage
//     const registeredUsername = localStorage.getItem('registeredUsername');
//     const registeredPassword = localStorage.getItem('registeredPassword');

//     // Check if the entered username and password match the stored credentials
//     if (username.trim() === registeredUsername && password.trim() === registeredPassword) {
//       console.log('Logged in successfully');
//       // Redirect the user to the desired page upon successful login
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };


//   return (
//     <div className="login-container">
//       <h2>Shopkeeper Login</h2>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <div className="form-group">
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <Link to="shopage" className='loginbutton' onClick={handleLogin}>Login</Link>
//       <p>Don't have an account? <Link to="/signup">Register</Link></p>
//     </div>
//   );
// }

// export default Shopkeeperlogin;


import React, { useState } from 'react';
import './Shopkeeperlogin.css';
import { Link } from 'react-router-dom';

function Shopkeeperlogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Fetch registered username and password from local storage
    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter credentials');
    } else if (username === registeredUsername && password === registeredPassword) {

      console.log('Logged in successfully');
      setErrorMessage('');
      
      window.location.href = '/shopkeeperlogin/shopage'; 
    } else {
      
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Shopkeeper Login</h2>
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
      <button className="loginbutton" onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/signup">Register</Link></p>
    </div>
  );
}

export default Shopkeeperlogin;
