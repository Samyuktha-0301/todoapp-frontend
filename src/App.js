// src/App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './utilities/About';
import Login from './utilities/Login';
import Signup from './utilities/Signup';
import Navbar from './components/Navbar';
import Home from './utilities/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
          {/* Other components and content */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
