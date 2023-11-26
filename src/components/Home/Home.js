import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="left-background"></div>
            <div className="ribbon">
                <h1>WELCOME TO THE APP</h1>
                <p>Promotional text........</p>
            </div>
            <div className="right-background"></div>
        </div>
    )
};

export default Home;