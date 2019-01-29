import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }



    return (
      <section id="board">

      <BoardMember position = "Program Director" name="Samuel Shing" major = "Biology and Music Performance" year = "Fourth" img = "images/sam.jpg"
      description = "Sam is a responsible leader who always completes workshops, submits blurbs, and goes to meetings on time."/>
      <BoardMember position = "Secretary" name="Julianne Chen" major = "Cognitive Science and Music Performance" year = "Third" img = "images/julianne.jpg"
      description = "Having been exposed to the arts at a young age, Julianne is very passionate about the arts. She was classically trained in piano and cello from a young age, and she also loves photography and brush calligraphy. In her spare time, Julianne enjoys crafting, traveling, listening to new music, and snacking! In addition to IMEM, Julianne is Vice President of Daughters of Triton, the premier all-female a cappella group at UCSD, and she is an intern at ArtPower, a student life department that presents various performing and media arts concerts and events."/>
      <BoardMember position = "Mentor Chair" name="Della Syau" major = "Biochemistry and Cell Biology" year = "Fourth" img = "images/della.jpg"
      description = "Della is a fourth year Biochemistry and Cell Biology major in Muir college. As an Executive Board Member, she helps organize IMEM performances and administrative work. She played piano for five years and the Chinese zither for ten years, but you can catch her teaching flute at IMEM outings. When Della isn't fermenting in lab, she enjoys cooking, baking, and jogging."/>
      <BoardMember position = "Outreach Chair" name="Allison Tung" major = "Human Biology" year = "Fourth" img = "images/allison.jpg"
      description = "At the age of 4, Allison started piano, and a year later, she started violin. Now, at the age of 21, her passion for music has grown immensely through her involvements as a violinist in UCSD's Chamber Orchestra as well as the La Jolla Symphony. Allison will be eternally grateful for the musicians in these ensembles who have shared their love of music with her. Her time dedicated to these ensembles, however does not outweigh the time spent listening to music. Aside from the musical side of the art world, Allison also enjoys capturing her travels with her passion for photography as well as talking about her love of movies/film."/>
      <BoardMember position = "Outreach Chair" name="Justin Chen" major = "Computer Science" year = "Second" img = "images/justin.jpg"
      description = "Justin started learning piano in first grade, and picked up the violin a couple years after. In the past, he has played for Muir Musical, a student-run theatre organization in UCSD and the California Philharmonic Youth Orchestra. He enjoys playing/watching basketball, learning new board games, and trying out different food in his free time."/>
      <BoardMember position = "Treasurer" name="Gianni Chiribao" major = "Biochemistry and Cell Biology" year = "Second" img = "images/gianni.jpg"
      description = "Gianni is a sophomore at UCSD studying Biochemistry & Cell Biology. He has played the clarinet and the tenor saxophone since elementary school, and had a stint with the contra-alto clarinet in high school. He has been tutoring youth musicians since middle school, and has experience with wind ensembles, honor bands, as well as marching band – having served as the Drum Major of his high school’s. In his free time, Gianni enjoys hiking, kayaking, cooking, embroidering, and volunteering at local dental clinics. He seeks to become an orthodontist in the near future."/>

   </section>
    );
  }
}

class BoardMember extends Component{

  render(){
    var imgStyle = {
      'borderRadius':'100%',
        'paddingTop':'5px',
      'aspectRatio': 1,
    };

    var infoStyle = {
      paddingTop: "10px"
    };

    return <div className="row board">
       <div className="three columns header-col">
          <h1><span>{this.props.position}</span></h1>
         <div className="eleven columns">
            <img className="board-pics" src={this.props.img} style={imgStyle}></img>
         </div>
       </div>
       <div className="nine columns main-col">
          <div className="row item">
             <div className="twelve columns" style={infoStyle}>
               <div><h3>{this.props.name}</h3>
               <p className="info">{this.props.year + " year"} <span>&bull;</span><em className="date">{this.props.major + " major"}</em></p>
               <p>{this.props.description}</p></div>
             </div>
          </div>
       </div>
    </div>


  }
}

export default Resume;
