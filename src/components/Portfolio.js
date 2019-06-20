import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
        <div>
          <div className="container">
    <h2>Portfolio</h2>
</div>
<hr className="line-blue"></hr>
<div className="blue row nomargin pl portfolio-info">
    <div className="container col l4 offset-l2 s12">
        <img className="portfolio-img" src="images/benchstrength.png" alt="bench strength"/>
    </div> 
 <div className="container col l4 s12 pl white-text ">
     <h3>Bench Strength</h3>
     <p>The app that provides Team Leaders the ability to assess employee skills and interests to build smarter, more invested teams.</p>
     <ul>Tools Used:
         <li>Angular 7</li>
         <li>Typescript</li>
         <li>Bootstrap</li>
         <li>Sequelize</li>
         <li>Auth0</li>
         <li>AWS</li>
     </ul>
     <a href="http://ec2-3-80-218-219.compute-1.amazonaws.com:3000" target="_blank" rel='noreferrer noopener'><button className="btn btn-lg blue white whitebutton-text">Check it out</button></a>
 </div>
</div>
<div className="row pl portfolio-info reverse">
        <div className="container marg col l4 s12 offset-l2 pl">
            <h3>DailyDash</h3>
            <p>Ever been annoyed at needing to go several different apps/websites to get some basic info? DailyDash consolidates all of that information into a personalized experience for you. </p>
            <ul>Tools Used:
                <li>Sequelize</li>
                <li>Heroku</li>
                <li>Materialize</li>
                <li>Node.js</li>
                <li>Passportjs</li>
            </ul>
            <a href="http://dailydashboardproject2.herokuapp.com" target="_blank" rel='noreferrer noopener'><button className="btn btn-lg blue lighten-2">Check it out</button></a>
        </div>
            <div className="container col l4 s12">
                <img className="portfolio-img" src="images/dailydash.png" alt="daily dash"/>
            </div> 
        </div>
 <div className="blue row nomargin pl portfolio-info">
    <div className="container col l4 offset-l2 s12">
        <img className="portfolio-img" src="images/aNightIn.jpg" alt="a night in" />
    </div> 
 <div className="container col l4 s12 pl white-text ">
     <h3>A Night In App</h3>
     <p>This app is designed to provide an easy user experience for finding a movie to watch and food to eat for entertainment.</p>
     <ul>Tools Used:
         <li>Movie and Food API's</li>
         <li>Github Version Control</li>
         <li>Materialize</li>
         <li>Firebase</li>
     </ul>
     <a href="https://anightout-1548896687179.firebaseapp.com/" target="_blank"><button className="btn btn-lg blue white whitebutton-text">Check it out</button></a>
 </div>
</div>
<div className="row pl portfolio-info reverse">
    <div className="container marg col l4 s12 offset-l2 pl">
        <h3>Giftastic</h3>
        <p>This fun web app will provide the user with 10 gifs as well as creating a button for easy re-use. </p>
        <ul>Tools Used:
            <li>Giphy API</li>
            <li>Github Version Control</li>
            <li>Materialize</li>
            <li>jQuery</li>
        </ul>
        <a href="https://fearmichael.github.io/giftastic/" target="_blank" rel='noreferrer noopener'><button className="btn btn-lg blue lighten-2">Check it out</button></a>
    </div>
        <div className="container col l4 s12">
            <img className="portfolio-img" src="images/gifTastic.png" alt="giftastic" />
        </div> 
    </div>
<div className="blue row nomargin pl">
    <div className="container col l4 offset-l2 s12">
        <img className="portfolio-img" src="images/trainTracker.png" alt="train tracker" />
    </div> 
 <div className="container col l4 s12 pl white-text portfolio-info">
     <h3>Train Tracker</h3>
     <p>This is a prototype for tracking train schedules. This utilizes a NoSQL database (Firebase) along with authentication.</p>
     <ul>Tools Used:
         <li>Firebase</li>
         <li>Moment JS</li>
         <li>Materialize</li>
         <li>User input validation</li>
     </ul>
     <a href="https://traintracker-e3faf.firebaseapp.com/" target="_blank"><button className="btn btn-lg blue white whitebutton-text">Check it out</button></a>
 </div>
</div>
<div className="row pl portfolio-info reverse">
    <div className="container marg col l4 s12 offset-l2 pl">
        <h3>Word Guess Game</h3>
        <p>A fun photography themed word guess game.</p>
        <ul>Tools Used:
            <li>Input validation</li>
            <li>Github Version Control</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
        </ul>
        <a href="https://fearmichael.github.io/word-guess-game/" target="_blank" rel='noreferrer noopener'><button className="btn btn-lg blue lighten-2">Check it out</button></a>
    </div>
        <div className="container col l4 s12">
            <img className="portfolio-img" src="images/wordGuess.png"/>
        </div> 
    </div>
    <div className="blue row nomargin pl">
        <div className="container col l4 offset-l2 s12">
            <img className="portfolio-img" src="images/rotatingbackgrounds.png"/>
        </div> 
     <div className="container col l4 s12 pl white-text portfolio-info">
         <h3>Rotating Backgrounds</h3>
         <p>As someone who is into photography, new and interesting pictures are enjoyed. This is a protype for an auto-rotating randomized background that can be run for fun.</p>
         <ul>Tools Used:
             <li>jQuery</li>
             <li>Bootstrap</li>
             <li>Unsplash API</li>
         </ul>
         <a href="https://fearmichael.github.io/rotatingbackground/" target="_blank"><button className="btn btn-lg blue white whitebutton-text">Check it out</button></a>
     </div>
    </div>
<div className="row pl portfolio-info reverse">
    <div className="container marg col l4 s12 offset-l2 pl">
        <h3>Star Wars Game</h3>
        <p>This is a simple game to battle some of your favorite Star Wars characters against each other. </p>
        <ul>Tools Used:
            <li>jQuery</li>
            <li>Github Version Control</li>
            <li>Bootstrap</li>
        </ul>
        <a href="https://fearmichael.github.io/starwars" target="_blank" rel='noreferrer noopener'><button className="btn btn-lg blue lighten-2">Check it out</button></a>
    </div>
        <div className="container col l4 s12">
            <img className="portfolio-img" src="images/starwars.png"/>
        </div> 
    </div>
    <hr className="line-blue"></hr>
    <div className="row valign-wrapper nopadding">
        <div className="col l12 s12 m12 center-align valign-center">
            <a href="mailto:mtfear@hotmail.com"><button className="btn btn-large blue lighten-2"><i className="material-icons icon-left">email</i><span>Email Me</span></button></a>
        </div>
    </div>
        </div>
    )
  }
}


export default Portfolio;