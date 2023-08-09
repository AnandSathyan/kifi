import React from "react";
import {
  IoIosAdd,
  IoIosHeartEmpty,
  IoIosRemove,
  IoIosRepeat,
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import { IoBagAddOutline, IoEyeOutline, IoRepeat } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ProductGrid() {
  const Navigate = useNavigate();
  return (
    <div>
      <div id="Product-Main" className="product-main">
        <h2 className="title">New Products</h2>

        <div className="product-grid" onClick={() => Navigate("/ProductView")}>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Best_seller1.png"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img default"
              />
              <img
                src="./assets/images/products/produt-after1.png"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img hover"
              />

              <p className="showcase-badge">15%</p>

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Other Fish
              </a>

              <a href="#">
                <h3 className="showcase-title">
                  Gold Fish Cubes (380g to 400g Pack)
                </h3>
              </a>

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

              <div className="price-box">
                <p className="price">&#8377;48.00</p>
                <del>&#8377;75.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after1.png"
                alt="Pure Garment Dyed Cotton Shirt"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after2.png"
                alt="Pure Garment Dyed Cotton Shirt"
                className="product-img hover"
                width="300"
              />

              <p className="showcase-badge angle black">sale</p>

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Farmed Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Tuna ( ചൂര ) Cubes (380g to 400g Pack)
                </a>
              </h3>

              <div className="showcase-rating">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                <IoIosStarOutline />

                {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon> */}
              </div>

              <div className="price-box">
                <p className="price">&#8377;45.00</p>
                <del>&#8377;56.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after3.png"
                alt="MEN Yarn Fleece Full-Zip Jacket"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after4.png"
                alt="MEN Yarn Fleece Full-Zip Jacket"
                className="product-img hover"
                width="300"
              />

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Marine Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Pearl Spot ( കരിമീൻ ) Whole
                </a>
              </h3>

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

              <div className="price-box">
                <p className="price">&#8377;58.00</p>
                <del>&#8377;65.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after5.png"
                alt="Black Floral Wrap Midi Skirt"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after6.png"
                alt="Black Floral Wrap Midi Skirt"
                className="product-img hover"
                width="300"
              />

              <p className="showcase-badge angle pink">new</p>

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Farmed Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Pearl Spot ( കരിമീൻ ) Whole cleaned
                </a>
              </h3>

              <div className="showcase-rating">
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />

                {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon> */}
              </div>

              <div className="price-box">
                <p className="price">&#8377;25.00</p>
                <del>&#8377;35.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after7.png"
                alt="Casual Men's Brown shoes"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after8.png"
                alt="Casual Men's Brown shoes"
                className="product-img hover"
                width="300"
              />

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Marine Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Mackerel ( അയല ) Curry Cut
                </a>
              </h3>

              <div className="showcase-rating">
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />

                {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon> */}
              </div>

              <div className="price-box">
                <p className="price">&#8377;99.00</p>
                <del>&#8377;105.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after9.png"
                alt="Pocket Watch Leather Pouch"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after10.png"
                alt="Pocket Watch Leather Pouch"
                className="product-img hover"
                width="300"
              />

              <p className="showcase-badge angle black">sale</p>

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Marine Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Mackerel ( അയല ) Boneless Fillet
                </a>
              </h3>

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

              <div className="price-box">
                <p className="price">&#8377;150.00</p>
                <del>&#8377;170.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after11.png"
                alt="Smart watche Vital Plus"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after12.png"
                alt="Smart watche Vital Plus"
                className="product-img hover"
                width="300"
              />

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Farmed Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Cutla ( കട്ല ) Whole cleaned
                </a>
              </h3>

              <div className="showcase-rating">
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />

                {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon> */}
              </div>

              <div className="price-box">
                <p className="price">&#8377;100.00</p>
                <del>&#8377;120.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after13.png"
                alt="Womens Party Wear Shoes"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after14.png"
                alt="Womens Party Wear Shoes"
                className="product-img hover"
                width="300"
              />

              <p className="showcase-badge angle black">sale</p>

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Farmed Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Cutla ( കട്ല ) Bengali cut
                </a>
              </h3>

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

              <div className="price-box">
                <p className="price">&#8377;25.00</p>
                <del>&#8377;30.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Rohu1.png"
                alt="Mens Winter Leathers Jackets"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Rohu2.png"
                alt="Mens Winter Leathers Jackets"
                className="product-img hover"
                width="300"
              />

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Marine Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Boal ( ആറ്റുവാള ) Curry cut
                </a>
              </h3>

              <div className="showcase-rating">
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />

                {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon> */}
              </div>

              <div className="price-box">
                <p className="price">&#8377;32.00</p>
                <del>&#8377;45.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after15.png"
                alt="Trekking & Running Shoes - black"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after16.png"
                alt="Trekking & Running Shoes - black"
                className="product-img hover"
                width="300"
              />

              <p className="showcase-badge angle black">sale</p>

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Farmed Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Tuna ( ചൂര ) Cubes (380g to 400g Pack)
                </a>
              </h3>

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

              <div className="price-box">
                <p className="price">&#8377;58.00</p>
                <del>&#8377;64.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after17.png"
                alt="Men's Leather Formal Wear shoes"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after18.png"
                alt="Men's Leather Formal Wear shoes"
                className="product-img hover"
                width="300"
              />

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Marine Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Trevally / വറ്റ
                </a>
              </h3>

              <div className="showcase-rating">
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />

                {/* <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon> */}
              </div>

              <div className="price-box">
                <p className="price">&#8377;50.00</p>
                <del>&#8377;65.00</del>
              </div>
            </div>
          </div>

          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/Product-after19.png"
                alt="Better Basics French Terry Sweatshorts"
                className="product-img default"
                width="300"
              />
              <img
                src="./assets/images/products/Product-after20.png"
                alt="Better Basics French Terry Sweatshorts"
                className="product-img hover"
                width="300"
              />

              <p className="showcase-badge angle black">sale</p>

              <div className="showcase-actions">
                <button className="btn-action">
                  <IoIosHeartEmpty />
                  {/* <ion-icon name="heart-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoEyeOutline />
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoIosRepeat />
                  {/* <ion-icon name="repeat-outline"></ion-icon> */}
                </button>

                <button className="btn-action">
                  <IoBagAddOutline />
                  {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                </button>
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                Marine Fish
              </a>

              <h3>
                <a href="#" className="showcase-title">
                  Mackerel ( അയല ) Boneless Fillet
                </a>
              </h3>

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

              <div className="price-box">
                <p className="price">&#8377;78.00</p>
                <del>&#8377;85.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
