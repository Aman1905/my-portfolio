import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <p className="navbar-brand"><Link className='nav-link navbar__title' to="/">Aman Chopra</Link></p>
        <button className="navbar-toggler navbar__togglerButton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className='navbar-item'><Link className='nav-link navbar__element' to="/">Home</Link></li>  
            <li className='navbar-item'><Link className='nav-link navbar__element' to="/work">Work</Link></li>
            <li className='navbar-item'><Link className='nav-link navbar__element' to="/projects">Projects</Link></li>
            <li className='navbar-item'><Link className='nav-link navbar__element' to="/blogs">Blogs</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 