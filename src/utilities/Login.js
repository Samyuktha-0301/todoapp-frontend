import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import TodoWrapper from '../components/TodoWrapper.jsx';

const baseUrl = 'http://localhost:5000/';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleOk = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}api/login`, { email, password });
      console.log(response);
      if (response.status === 200 && response.data.user) {
        setIsLoggedIn(true);
        setUserId(response.data.user._id);
        console.log("Logged in successfully");
      } else {
        console.error('Invalid login response:', response);
        setAlertMessage(response.data.message || 'Invalid credentials');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setAlertMessage('Error logging in');
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <div className="alert">
          <span>{alertMessage}</span>
          <button className="close-btn" onClick={handleAlertClose}>
            &#10006;
          </button>
        </div>
      )}
      <div id="login-form">
        {isLoggedIn ? (
          <TodoWrapper email={email} userId={userId} />
        ) : (
          <>
            <h1>Login</h1>
            <form onSubmit={handleOk}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default Login;
