import React from "react";

function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                src="./assets/images/banner-fish.jpeg"
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content ">
                <p className="banner-subtitle">Trending item</p>

                <h2 className="uppercase banner-title">
                  Fresh Fish and Sea Foods
                </h2>

                <p className="banner-text">
                  starting at &#x20B9;<b>200</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./assets/images/banner-fish1.avif"
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Mega Discount</p>

                <h2 className="banner-title">Discount mela</h2>

                <p className="banner-text">
                  starting at &#x20B9;<b>150</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./assets/images/banner-fish5.jpeg"
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">Marine fishes 1kg</h2>

                <p className="banner-text">
                  starting at &#x20B9;<b>290</b>.99
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
