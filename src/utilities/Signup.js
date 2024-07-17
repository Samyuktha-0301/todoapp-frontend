import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import TodoWrapper from '../components/TodoWrapper';

const baseUrl = 'http://localhost:5000/';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState(''); // State to hold alert message
  const [showAlert, setShowAlert] = useState(false); // State to control visibility of alert
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOk = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post(`${baseUrl}api/register`, { email, username, password });
      console.log(response.data);
      if (response.data.message === "User already exists") {
        setAlertMessage('User already exists');
        setShowAlert(true); // Show alert if user already exists
      } else {
        setUserId(response.data.user._id);
        setIsLoggedIn(true);
        setAlertMessage(''); // Clear alert message if registration is successful
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false); // Close the alert message
  };

  return (
    <div>
      {showAlert && (
        <div className="alert">
          <span>{alertMessage}</span>
          <button
            style={{ borderColor: 'black', borderRadius: '60px' }}
            className="close-btn"
            onClick={handleAlertClose}
          >
            &#10006;
          </button>
        </div>
      )}
      <div id="login-form">
        {isLoggedIn ? (
          <TodoWrapper email={email} userId={userId} />
        ) : (
          <>
            <h1>Sign-Up</h1>
            <form onSubmit={handleOk}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="username">Username:</label>
              <input
                type="name"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="Submit" />
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
