import React, { Component } from 'react';
import M from "materialize-css";


class Navigation extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <nav id="Home" className="scrollspy">
          <div className="nav-wrapper blue lighten-2">
          <a href="#Home" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <a href="#Home" className="brand-logo center">Michael Fearnley</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="#About">About</a></li>
              <li><a href="#Portfolio">Portfolio</a></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="#About" className="sidenav-close white-text">About</a></li>
          <li><a href="#Portfolio" className="sidenav-close white-text">Portfolio</a></li>
        </ul>
      </>
    )
  }
}


export default Navigation;