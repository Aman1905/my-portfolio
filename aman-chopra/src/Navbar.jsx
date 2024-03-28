import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/work"><li>Work</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/blogs"><li>Blogs</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar