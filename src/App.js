import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const About = () => <div>About Page</div>;

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" exact component={About}/>
        {/*!!!!! ADD MORE ROUTES HERE !!!!!*/}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
