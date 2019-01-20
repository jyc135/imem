import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

class Portfolio extends Component {
  render() {

    const IMAGES =
    [{
            src: "images/portfolio/violin.jpg",
            thumbnail: "images/portfolio/violin.jpg",
            caption: "someone playing violin",
            thumbnailWidth: undefined,
            thumbnailHeight: undefined
    },
    {
            src: "images/portfolio/piano.jpg",
            thumbnail: "images/portfolio/piano.jpg",
            caption: "someone playing piano",
            thumbnailWidth: undefined,
            thumbnailHeight: undefined
    }
  ];
    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Photo Gallery</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <Gallery images={IMAGES} enableImageSelection={false}/>,
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
