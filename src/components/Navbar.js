import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      //   <nav>
      //   <div className="nav-wrapper">
      //     <a href="#" className="brand-logo right">Michael's Portfolio</a>
      //     <ul id="nav-mobile" className="left hide-on-med-and-down">
      //       <li><Link to="/about"></Link>About</li>
      //       <li><Link to="/portfolio">Portfolio</Link></li>
      //       <li><Link to="collapsible.html">JavaScript</Link></li>
      //     </ul>
      //   </div>
      // </nav>

      <nav className="nav-wrapper blue lighten-2">
      <div className="nav-wrapper">
          <a href="index.html" className="brand-logo center">Michael Fearnley</a>
          <button href="#" data-target="menu-dropdown" className="sidenav-trigger"><i className="material-icons">menu</i></button>
          <ul className="left hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            {/* <li><Link to="collapsible.html">JavaScript</Link></li> */}
          </ul>
      </div>
  <ul className="sidenav" id="menu-dropdown">
      <li><a href="index.html">About</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
  </ul>
  </nav>
    )
  }
}


export default Navbar;