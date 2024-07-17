import React from "react";
import './Navbar.CSS';  // Ensure the CSS file name is correctly c
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="header">
      <nav style={{ display: 'flex', gap: '10px' }}>
        <h1 style={{ marginRight: '20px' }}>TODO LIST APP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <div id="header">
        <Link className="nav-link active" aria-current="page" to="/" style={{fontSize:'25px',color: 'white'}}>
          Home&nbsp; &nbsp; 
        </Link>
        <Link className="nav-link active" aria-current="page" to="/about" style={{fontSize:'25px',color: 'white'}}>
          About Us  &nbsp; &nbsp; 
        </Link>
        <Link className="nav-link active" aria-current="page" to="/signup" style={{fontSize:'25px',color: 'white'}}>
          Signup  &nbsp; &nbsp; 
        </Link>
        <Link className="nav-link active" aria-current="page" to="/login" style={{fontSize:'25px',color: 'white'}}>
          Login  &nbsp; &nbsp; 
        </Link>
        <Link className="nav-link active" aria-current="page" to="/" style={{fontSize:'25px',color: 'white'}}>
          Log Out &nbsp; &nbsp;  
        </Link>
        
          <img
            className="img-fluid user-png"
            style={{
              width: '50px',
              height: '50px',
              marginTop:'20px'
            }}
            src="https://png.pngitem.com/pimgs/s/24-248235_user-profile-avatar-login-account-fa-user-circle.png"
            alt="user profile"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
