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
import './ProductFeatured.css'
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchKifiProductListing } from "../../../views/desktop/kifi/productListing/Product.slice";
// import { fetchKifiAsync } from "../../../views/desktop/kifi/kifi.slice";
function ProductFeatured() {
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();
  const kifiStore = useAppSelector((state) => state.Product);
  useEffect(() => {
    dispatch(fetchKifiProductListing());
  }, []);
  // console.log(
  //   kifiStore.data?.data?.map((data: any) => {
  //     return data;
  //   }),
  //   "redux"
  // );
  return (
    <div>
      <div className="product-featured">
        <h2 className="title">Deal of the day</h2>

        <div className="showcase-wrapper has-scrollbar ">
          {kifiStore?.data?.data?.map((data: any) => {
            return (
              <div className="showcase-container">
                <div className="showcase">
                  <div className="showcase-banner">
                    <img
                      className="showcase-img p-0"
                      // src="./assets/images/products/DealOfTheDay.png"
                      src={data?.thumbnail_url}
                      // alt="shampoo, conditioner & facewash packs"
                    />
                  </div>
                  <div className="showcase-content">
                    <>
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
                        <h3 className="showcase-title">{data?.name}</h3>
                      </a>

                      <p className="showcase-desc">
                        {/* Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
    sit amet consectetur Lorem ipsum dolor */}
                        {data?.description}
                      </p>
                      {/* {console.log("qwertyui", data?.price_list?.mrp)} */}

                      {/* {data?.price_list?.map((price:any)=>{
                    return(
                 
        )})} */}
                      <div className="price-box">
                        <p className="price">&#8377;{data?.price_list?.mrp}</p>

                        <del className="cross">&#8377;{data?.price_list?.sale_price}</del>
                      </div>
                      <button
                        className="add-cart-btn"
                        onClick={() =>
                          Navigate("/Cart", {
                            state: {
                              name: data?.name,
                              image: data?.thumbnail_url,
                            },
                          })
                        }
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
                        <p className="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

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
                    </>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductFeatured;
