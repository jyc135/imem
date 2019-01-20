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
      <section id="resume">

      <BoardMember position = "Program Director" name="Samuel Shing" major = "Biology and Music Performance" year = "Fourth" img = "images/sam.jpg"/>
      <BoardMember position = "Secretary" name="Julianne Chen" major = "Cognitive Science and Music Performance" year = "Third" img = "images/julianne.jpg"/>
      <BoardMember position = "Mentor Chair" name="Della Syau" major = "Biochemistry and Cell Biology" year = "Fourth" img = "images/della.jpg"/>
      <BoardMember position = "Outreach Chair" name="Allison Tung" major = "Human Biology" year = "Fourth" img = "images/allison.jpg"/>
      <BoardMember position = "Outreach Chair" name="Justin Chen" major = "Computer Science" year = "Second" img = "images/justin.jpg"/>
      <BoardMember position = "Treasurer" name="Gianni Chiribao" major = "Biochemistry and Cell Biology" year = "Second" img = "images/gianni.jpg"/>

   </section>
    );
  }
}

class BoardMember extends Component{

  render(){
    var imgStyle = {
      'border-radius':'100%',
        'padding-top':'5px',
      'aspectRatio': 1,
    };
    return <div className="row board">
       <div className="three columns header-col">
          <h1><span>{this.props.position}</span></h1>
         <div className="eleven columns">
            <img class="board-pics" src={this.props.img} style={imgStyle}></img>
         </div>
       </div>
       <div className="nine columns main-col">
          <div className="row item">
             <div className="twelve columns">
               <div><h3>{this.props.name}</h3>
               <p className="info">{this.props.year + " year"} <span>&bull;</span><em className="date">{this.props.major + " major"}</em></p>
               <p>Description</p></div>
             </div>
          </div>
       </div>
    </div>


  }
}

export default Resume;
