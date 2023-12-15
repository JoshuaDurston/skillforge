import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

//const About = () => <div>About Page</div>;   <-- sample temp const route 

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*<Route path="/" exact component={About}/>   <-- Used for temp const routes*/}
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/*!!!!! ADD MORE ROUTES HERE !!!!!*/}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
