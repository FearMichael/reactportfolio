import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/about" component={About}></Route>
      <Route path="/portfolio" component={Portfolio}></Route>
    </Router>
  );
}

export default App;
