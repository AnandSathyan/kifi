import React from "react";
import "./ProductSummary.scss";
function ProductSummary() {
  const HandleKeyDown = () => {
    return false;
  };
  return (
    <div>
      {/* <!-- about --> */}
      <div className="about">
        <a
          className="bg_links social portfolio"
          href="https://www.rafaelalucas.com/dailyui"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a
          className="bg_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
        >
          <span className="icon"></span>
        </a>
        <a className="bg_links logo"></a>
      </div>
      {/* <!-- end about --> */}

      <div className="wrapper">
        <nav>
          <div className="mainLogo">Logo</div>
          <div className="menu">
            <div className="menuLinks">
              <a href="" className="menuLink">
                About
              </a>
              <a href="" className="menuLink">
                Store
              </a>
              <a href="" className="menuLink">
                Contacts
              </a>
            </div>

            <div className="shoppingCart">
              <div className="shoppingIcon">
                <img
                  src="https://rafaelalucas.com/dailyui/12/assets/shopping-cart.svg"
                  alt=""
                />
                <span className="itemNumber">0</span>
              </div>
              <div className="shoppingMenu">
                <p className="shoppingTitle">Your Shopping Cart</p>
                <div className="productResume">
                  <img
                    src="https://rafaelalucas.com/dailyui/12/assets/img01.png"
                    alt=""
                    className="shoppingThumb"
                  />
                  <article>
                    <p className="shoppingProduct">Nike Air Max 200</p>
                    <p className="shoppingQuantity">0</p>
                    <p className="shoppingTotal"></p>
                  </article>
                </div>
                <div className="shoppingBtn">
                  <a className="link emptyCart">
                    {" "}
                    <img
                      src="https://rafaelalucas.com/dailyui/12/assets/trash.svg"
                      alt=""
                    />{" "}
                    Empty Shopping Cart
                  </a>
                  <button className="btn">Finish Shopping</button>
                </div>
              </div>
            </div>

            <i className="iconMenu">
              <img
                src="https://rafaelalucas.com/dailyui/12/assets/menu.svg"
                alt=""
              />
            </i>
          </div>
        </nav>

        <div className="content">
          <section className="left">
            <div className="swiper-container galleryMain ">
              <div className="swiper-wrapper"></div>
            </div>
            {/* <!-- Add Arrows --> */}
            <div className="sliderNavigation">
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
            </div>
          </section>

          <section className="right">
            <div className="rightContent">
              <div className="model">
                <p className="modelTitle">Nike Air Max 200</p>
                <p className="modelDesc">AQ2568-005</p>
              </div>

              <div className="price">
                <p className="priceFinal"></p>
                <p className="priceOriginal"></p>
              </div>

              <div className="specs">
                <div className="size">
                  <h3 className="subtitle">Size</h3>
                  <div className="dropdown">
                    <div className="form dropContent">
                      <p className="sizeNumber">40</p>
                      <i className="icon arrowDrop">
                        <img
                          src="https://rafaelalucas.com/dailyui/12/assets/arrow-down.svg"
                          alt=""
                        />
                      </i>
                    </div>
                    <div className="dropOpen">
                      <ul className="dropItems">
                        <li className="dropItem">38</li>
                        <li className="dropItem">39</li>
                        <li className="dropItem">40</li>
                        <li className="dropItem">41</li>
                        <li className="dropItem">42</li>
                        <li className="dropItem">43</li>
                        <li className="dropItem">44</li>
                        <li className="dropItem">45</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="quantity">
                  <h3 className="subtitle">Quantity</h3>
                  <div className="form quantityCounter">
                    <input
                      className="inputQuantity"
                      onKeyDown={() => HandleKeyDown()}
                      type="number"
                      value="1"
                    />

                    <i className="icon btnQuantity minus">
                      <img
                        src="https://rafaelalucas.com/dailyui/12/assets/minus.svg"
                        alt=""
                      />
                    </i>
                    <i className="icon btnQuantity plus">
                      <img
                        src="https://rafaelalucas.com/dailyui/12/assets/plus.svg"
                        alt=""
                      />
                    </i>
                  </div>

                  <p className="error">We only have 5 items in stock.</p>
                </div>
              </div>
              <div className="swiper-container galleryThumbs">
                <div className="swiper-wrapper"></div>
              </div>
              <div className="btnContainer">
                <button className="btn add">
                  <img
                    src="https://rafaelalucas.com/dailyui/12/assets/shopping-cart-w.svg"
                    alt=""
                  />
                  add to cart
                </button>
              </div>
            </div>
          </section>
          {/* <!-- Swiper --> */}
        </div>
      </div>
    </div>
  );
}

export default ProductSummary;
