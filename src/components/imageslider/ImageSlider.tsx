import React from "react";
import Carousel from "./Carousel";

function ImageSlider() {
  const slides: any = [
    {
      id: 1,
      url: "./assets/images/banner-fish.jpeg",
    },
    {
      id: 2,
      url: "./assets/images/banner-fish1.avif",
    },
    {
      id: 3,
      url: "./assets/images/banner-fish5.jpeg",
    },
  ];

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <div data-te-carousel-indicators></div>

            <div
              data-te-carousel-fade
              data-te-carousel-item
              data-te-carousel-active
            >
              <Carousel key={slides?.id} slides={slides} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
