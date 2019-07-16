import React, { Component } from 'react';
import M from "materialize-css";


class About extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <>
                <div className="black valign-wrapper">
                    <div className="row nopadding nomargin">
                        <div className="col l6 s12">
                            <div className="center-align">
                                <img className="responsive-img" src="images/Fearnley-Headshot-Small-edited.jpg" alt="Michael Fearnley" />
                            </div>
                        </div>
                        <div className="col l6 s12 valign-wrapper titleButtons">
                            <div className="center-align">
                                <h1 className="white-text title">Full Stack Web Developer</h1>
                                <a href="mailto:mtfear@hotmail.com"><button className="btn btn-large blue lighten-2"><i className="material-icons icon-left">email</i>Email Me</button></a>
                                <hr className="line"></hr>
                                <a href="https://www.linkedin.com/in/michael-fearnley/" target="_blank" rel="noopener noreferrer"><img className="logoimg" src="images/linkedin-logo.png" alt="linked in logo" /></a>
                                <a href="https://github.com/FearMichael" target="_blank" rel="noopener noreferrer"><img className="logoimg" src="images/github-logo.png" alt="github logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 id="Portfolio" className="center-align">About<a href="#Home" className="center-align"><i className="small material-icons">arrow_upward</i></a></h2>
                </div>
                <hr className="line-blue"></hr>
                <div>
                    {/* Hobbies and interests section */}
                    <div className="nopadding row nomargin scrollspy" id="About">
                        {/* Hobbies/Interests Column  */}
                        <div className="col l6 m12 s12 nomargin nopadding">
                            <h2 className="blue lighten-2 pst center-align white-text">Hobbies &amp; Interests</h2>
                            <div className="container center-align">
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
                        <div className="col l6 m12 s12">
                            <div className="blue lighten-2">
                                <h2 className="blue lighten-2 pst center-align white-text">Skills &amp; Attributes</h2>
                            </div>
                            <div className="container skillsSection row center-align">
                                <div className="col l6 m6 s12">
                                        <h4>Personal</h4>
                                        <ul>
                                            <li>Collaborative</li>
                                            <li>Team Player</li>
                                            <li>Organized</li>
                                            <li>Communication</li>
                                        </ul>
                                </div>
                                <div className="col l6 m6 s12 center-align">
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
            </>
        )
    }
}


export default About;