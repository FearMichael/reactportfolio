import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
// import M from "materialize-css";

// M.AutoInit();


function App() {
  return (
    <Router>
      <Navigation />
      {/* <Route exact path="/" component={About}></Route> */}
      {/* <Route path="/about" component={About}></Route> */}
      {/* <Route path="/portfolio" component={Portfolio}></Route> */}
      <About />
      <Portfolio />
      <Footer />
    </Router>
  );
}

export default App;
