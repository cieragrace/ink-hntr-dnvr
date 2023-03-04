import React from "react";
import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
  return(
      <div className="header-logo-container">
        <Link to='/' className="header-logo"></Link>
        <Link to='/' className='home-btn'>Back To Home</Link>
      </div>
  )
}

export default Header