import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/about" component={About}></Route>
      <Route path="/portfolio" component={Portfolio}></Route>
      <Footer />
    </Router>
  );
}

export default App;
