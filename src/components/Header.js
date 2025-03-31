import React from 'react'
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";
import "../App.css";

function Header () {
    return (
      <header className="header">
        <div><img src={logo} width="100px" height="100px" /></div>
  
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    );
  };

export default Header;