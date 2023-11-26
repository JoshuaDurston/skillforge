import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <p>&copy; 2023 Skill Forge. All rights reserved</p>
                <nav>
                    <ul className="footMenu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;