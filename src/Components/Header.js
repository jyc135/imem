import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#board">Board</a></li>
            <li><a className="smoothscroll" href="#portfolio">Photos</a></li>
            <li><a className="smoothscroll" href="#volunteer">Volunteer</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Initiative for Music Education and Mentorship</h1>
            <br></br>
            <br></br>
            <br></br>
            <h3>Play an instrument?</h3>
            <h3>Want to teach students in local San Diego schools?</h3>
            <h3>Scroll down to learn more about who we are and what we do!</h3>
            <hr />
            {/*<ul className="social">
            //    {networks}
            // </ul> */}
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
