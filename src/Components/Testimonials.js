import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var volunteer = this.props.data.volunteer.map(function(volunteer){
        return  <li key={volunteer.user}>
            <blockquote>
               <p>{volunteer.text}</p>
               <cite>{volunteer.user}</cite>
            </blockquote>
         </li>
      })
    }

    var parStyle = {
      "color":"white"
    };

    var headerDivStyle = {
      "text-align":"center",
      "padding-bottom": "20px"
    };

    var headerStyle = {
        "color":"orange",
        "font-size": "24px"
    };

    return (
      <section id="volunteer">
      <div className="text-container">
      <div className="row">
         <div className="twelve columns flex-container" style = {headerDivStyle}>
               <h1 style = {headerStyle}> Volunteer Opportunities </h1>
            </div>

      </div>
         <div className="row">
            <div className="six columns flex-container">
                  <h1> Help Teach at Schools! </h1>
                  <p style = {parStyle}>Challenger Middle School: Wednesdays 2:30 - 3:30 PM</p>
                  <p style = {parStyle}>Curie Elementary School: Thursdays 8 - 10 AM </p>
                  <p style = {parStyle}>Challenger Middle School: Fridays 1 - 3 PM</p>
               </div>
               <div className="six columns flex-container">
                     <h1> Other Performance Opportunities </h1>
                     <p style = {parStyle}>Ronald McDonald House: Saturday, February 16, 5 - 7:30 PM, </p>
                     <p style = {parStyle}>Merill Gardens: Sunday, February 24, 12 - 2 PM </p>
                  </div>
            </div>
         </div>


   </section>
    );
  }
}

export default Testimonials;
