import React, { Component } from 'react';

class About extends Component {
  render() {
    var bio = "IMEM reaches out to young, aspiring musicians to promote musicianship through tutoring for music performance and theory. We hope to foster musical appreciation in those who want exposure and do not have ready access to music resources, as well as enrich music programs in underserved populations. IMEM volunteers will work with these young musicians and provide mentorship to these students. Ultimately, we wish to strengthen the musical community and inspire more students to develop a stronger passion for music.";

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <h2>About Us</h2>

            <p>{bio}</p>


         </div>
      </div>

   </section>
    );
  }
}

export default About;
