import React, { useEffect } from "react";
import {
  IoIosAdd,
  IoIosHeartEmpty,
  IoIosRemove,
  IoIosRepeat,
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchKifiAsync } from "../../../views/desktop/kifi/kifi.slice";
function ProductFeatured() {
  const Navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const kifiStore = useAppSelector((state) => state.kifi);
  // useEffect(() => {
  //   dispatch(fetchKifiAsync());
  // }, []);
  // console.log(
  //   kifiStore.data?.result.result.map((data: any) => {
  //     return data.image_url;
  //   }),
  //   "redux"
  // );
  return (
    <div>
      <div className="product-featured">
        <h2 className="title">Deal of the day</h2>

        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src="./assets/images/products/DealOfTheDay.png"
                  alt="shampoo, conditioner & facewash packs"
                  className="showcase-img"
                />
              </div>

              <div className="showcase-content">
                <div className="showcase-rating">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarOutline />
                  <IoIosStarOutline />

                  {/* <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon> */}
                </div>

                <a href="#">
                  <h3 className="showcase-title">
                    Catla (Theppu/Kendai) Medium - Bengali Cut, No Head
                  </h3>
                </a>

                <p className="showcase-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet consectetur Lorem ipsum dolor
                </p>

                <div className="price-box">
                  <p className="price">&#8377;150.00</p>

                  <del>&#8377;200.00</del>
                </div>

                <button
                  className="add-cart-btn"
                  onClick={() => Navigate("/ProductView")}
                >
                  add to cart
                </button>

                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      already sold: <b>20</b>
                    </p>

                    <p>
                      available: <b>40</b>
                    </p>
                  </div>

                  <div className="showcase-status-bar"></div>
                </div>

                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">360</p>

                      <p className="display-text">Days</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">24</p>
                      <p className="display-text">Hours</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">59</p>
                      <p className="display-text">Min</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">00</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src="./assets/images/products/banner-product.png"
                  alt="Rose Gold diamonds Earring"
                  className="showcase-img"
                />
              </div>

              <div className="showcase-content">
                <div className="showcase-rating">
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />

                  {/* <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon> */}
                </div>

                <h3 className="showcase-title">
                  <a href="#" className="showcase-title">
                    Boal ( ആറ്റുവാള ) Curry cut
                  </a>
                </h3>

                <p className="showcase-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet consectetur Lorem ipsum dolor
                </p>

                <div className="price-box">
                  <p className="price">&#8377;1990.00</p>
                  <del>&#8377;2000.00</del>
                </div>

                <button className="add-cart-btn">add to cart</button>

                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      already sold: <b>15</b>
                    </p>

                    <p>
                      available: <b>40</b>
                    </p>
                  </div>

                  <div className="showcase-status-bar"></div>
                </div>

                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">360</p>
                      <p className="display-text">Days</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">24</p>
                      <p className="display-text">Hours</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">59</p>
                      <p className="display-text">Min</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">00</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeatured;
