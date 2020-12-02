import React, { useEffect, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselC() {
  // const selectedCarousel = useRef(null);
  // useEffect(() => {
  //   console.log(selectedCarousel.current.children[0]);
  // })

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      {/* <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div 
        className="carousel-inner"
      >
        <div className="carousel-item active">
          <img src="https://i.imgur.com/FFKvF6r.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://i.imgur.com/wifhM9m.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://i.imgur.com/rJQxrC6.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
      </svg>
        <span className="sr-only">Previous</span>
      </a>
      
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>
        <span className="sr-only">Next</span>
      </a> */}

      <Carousel>
        <div>
            <img src="https://i.imgur.com/FFKvF6r.png" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://i.imgur.com/wifhM9m.png" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="https://i.imgur.com/rJQxrC6.png" />
            <p className="legend">Legend 3</p>
        </div>
      </Carousel>

    </div>
  )
}



export default CarouselC;
