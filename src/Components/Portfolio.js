import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

class Portfolio extends Component {
  render() {

    const IMAGES =
    [
    {
            src: "images/portfolio/challenger.jpg",
            thumbnail: "images/portfolio/challenger.jpg",
            caption: "Isaac and Jin with Ted Foster, the music teacher at Challenger Middle School, 12/5/18",
            thumbnailWidth: undefined,
            thumbnailHeight: undefined
    },
    {
            src: "images/portfolio/ronaldmcd.jpg",
            thumbnail: "images/portfolio/ronaldmcd.jpg",
            caption: "Group picture at the Ronald McDonald house, 5/20/18. From left to right: Anh, Allison, Eddy, Jason, Isaac, Della, Julianne",
            thumbnailWidth: undefined,
            thumbnailHeight: undefined
    },
    {
            src: "images/portfolio/challenger2.jpg",
            thumbnail: "images/portfolio/challenger2.jpg",
            caption: "Isaac, Jin, Justin, and Carl with Ted Foster, the music teacher at Challenger Middle School, 5/30/18",
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
