import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/" exact component={About}/>
        {/*!!!!! ADD MORE ROUTES HERE !!!!!*/}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
