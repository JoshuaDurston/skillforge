import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="header">
            <ul className = "navMenu">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/login">Login</Link> </li>
                <li> <Link to="/register">Register</Link> </li>
                <div id="vertical"></div>
                <li> <Link to="/profile">Profile</Link> </li>
                <li> <Link to="/settings">Settings</Link> </li>
            </ul>
        </nav>
    )
};

export default Navbar;