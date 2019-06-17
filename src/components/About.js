import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return (
      <>
      <div className="black valign-wrapper">
      <div className="row nopadding nomargin">
          <div className="col l6 s12">
              <div className="center-align">
                 <img className="responsive-img" src="images/Fearnley-Headshot-Small-edited.jpg" alt="Picture of Michael Fearnley"/>
              </div>
          </div>
          <div className="col l6 s12 valign-wrapper titleButtons">
              <div className="center-align">
                  <h1 className="white-text title">Full Stack Web Developer</h1>
                  <a href="mailto:mtfear@hotmail.com"><button className="btn btn-large blue lighten-2"><i className="material-icons icon-left">email</i>Email Me</button></a>
                  <hr className="line"></hr>
                  <a href="https://www.linkedin.com/in/michael-fearnley/" target="_blank"><img className="logoimg" src="images/linkedin-logo.png"/></a>
                  <a href="https://github.com/FearMichael" target="_blank"><img className="logoimg" src="images/github-logo.png"/></a>
              </div>
          </div>
      </div>
  </div>
  <div>
  {/* Hobbies and interests section */}
      <div className="nopadding row nomargin">
           {/* Hobbies/Interests Column  */}
          <div className="col l6 m12 s12 nomargin nopadding">
                  <h2 className="blue lighten-2 pst center-align">Hobbies &amp; Interests</h2>
              <div className="container">
                  <h4 className="sectionContent">About me</h4>
                  <p className="sectionContent">A Full Stack Web Developer with significant experience working with teams to accomplish a common goal. A strong perseverance to solve problems and do everything with excellence. Always keeping up to date with the latest technologies in order to create modern and intuitive web applications.
                  </p>
                  <h4 className="sectionContent">How I like to spend my time</h4>
                      <ul className="sectionList">
                          <li>
                              Creating
                          </li>
                          <li>
                              Photography
                          </li>
                          <li>
                              Being with people
                          </li>
                          <li>
                              Video gaming with friends
                          </li>
                      </ul>
               </div>
          </div>
          <div className="col l6 m12 s12 nomargin nopadding">
              <div className="blue lighten-2">
                  <h2 className="blue lighten-2 pst center-align">Skills &amp; Attributes</h2>
              </div>
              <div className="row nopadding sectionContent">
                  <div className="col l6 s12 nopadding">
                      <div className="container">
                          <h4>Personal</h4>
                          <ul>
                              <li>Collaborative</li>
                              <li>Team Player</li>
                              <li>Organized</li>
                              <li>Communication</li>
                          </ul>
                      </div>
                  </div>
                  <div className="col l6 s12 nopadding">
                      <div className="container">
                          <h4>Professional</h4>
                          <ul>
                              <li>HTML &amp; CSS</li>
                              <li>Bootstrap</li>
                              <li>Materialize</li>
                              <li>Javascript</li>
                              <li>React</li>
                              <li>Angular 7</li>
                              <li>MySQL</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
  </>
    )
  }
}


export default Navbar;