import React, { Component } from 'react';

class Contact extends Component {
  render() {
    var message = "Feel free to contact us if you have any questions"

    var buttonStyle = {
      "outline": "none",
        "margin-left": "0"
    }

    var divStyle = {
      "text-align": "center"
    }

    var secStyle = {
      "padding-top": "30px",
      "padding-bottom": "30px"
    }

    return (
      <section id="contact" style = {secStyle}>

         <div className="row"  style={divStyle}>
            <div className="twelve columns">

                  <div>
                  <a href="mailto:imem@ucsd.edu">
                      <button className="submit" style={buttonStyle}>
                        <span class="button--inner">Contact Us</span>
                      </button>
                    </a>
                </div>
           </div>
      </div>
      <div className="row" style={divStyle}>
         <div className="twelve columns">

               <div>
               <a href="https://bit.ly/winterimem">
                   <button className="submit" style={buttonStyle}>
                     <span class="button--inner">Join Us</span>
                   </button>
                 </a>
             </div>
        </div>
   </div>
   </section>
    );
  }
}

export default Contact;
