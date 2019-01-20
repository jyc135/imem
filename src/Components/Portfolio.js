import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Photo Gallery</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                <ProjectImage  title = "Violin"
                  category="Someone playing violin"
                  image = "violin.jpg"
                  url = "https://drive.google.com/file/d/11AGDt9SEfSR_26k9RacQLuAXql5xgK2a/view?usp=sharing" />

                  <ProjectImage  title = "Piano"
                    category="Someone playing piano"
                    image = "piano.jpg"
                    url = "https://drive.google.com/file/d/1xh13B7tH8etB1bN7w3X6U-7pgq5Bau2a/view?usp=sharing" />
            </div>
          </div>
      </div>
   </section>
    );
  }
}

class ProjectImage extends Component{
  render(){
    var projectImage = 'images/portfolio/'+this.props.image;
    return <div key={this.props.title} className="columns portfolio-item">
       <div className="item-wrap">
        <a href={this.props.url} title={this.props.title}>
           <img alt={this.props.title} src={projectImage} />
           <div className="overlay">
              <div className="portfolio-item-meta">
             <h5>{this.props.title}</h5>
                 <p>{this.props.category}</p>
              </div>
            </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
        </a>
      </div>
    </div>

  }


}

export default Portfolio;
