// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Signup.css';

// function Signup() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate username and password
//     if (!username || !password || !confirmPassword) {
//       setError('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // Store the registered username and password securely (for demonstration using local storage)
//     localStorage.setItem('registeredUsername', username);
//     localStorage.setItem('registeredPassword', password);

//     // Redirect the user to the login page after successful registration
//     alert('Registration successful! Please login.');
//     // Example redirection using react-router-dom (you need to have routing set up in your application)
//     // history.push('/login');
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit} className="register-form">
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//       <p>
//         Already have an account? <Link to="/shopkeeperlogin">Login</Link>
//       </p>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username and password
    if (!username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Store the registered username and password securely (for demonstration using local storage)
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);
    
    console.log('Registration successful! Username:', username, 'Password:', password);

    // Redirect the user to the login page after successful registration
    alert('Registration successful! Please login.');
    // Example redirection using react-router-dom (you need to have routing set up in your application)
    // history.push('/login');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>
        Already have an account? <Link to="/shopkeeperlogin">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
