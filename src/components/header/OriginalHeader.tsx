import React from "react";
import { IoIosAdd, IoIosHeartEmpty, IoIosRemove } from "react-icons/io";
import {
  IoAdd,
  IoBagAddOutline,
  IoBagHandleOutline,
  IoCaretBackOutline,
  IoClose,
  IoGridOutline,
  IoHome,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMenu,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";

function OriginalHeader() {
  return (
    <div>
      {" "}
      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook />
                  {/* <ion-icon name="logo-facebook"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter />
                  {/* <ion-icon name="logo-twitter"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoInstagram />
                  {/* <ion-icon name="logo-instagram"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoLinkedin />
                  {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                </a>
              </li>
            </ul>

            <div className="header-alert-news">
              <p>
                <b>Free Shipping</b>
                This Week Order Over - &#x20B9;1000
              </p>
            </div>

            <div className="header-top-actions">
              <select name="currency">
                <option value="usd">INR &#x20B9;</option>
                <option value="eur">USD &#36;</option>
              </select>

              <select name="language">
                <option value="en-US">English</option>
                <option value="es-ES">
                  &#3374;&#3378;&#3375;&#3390;&#3379;&#3330;
                </option>
                {/* <option value="fr">Fran&ccedil;ais</option> */}
              </select>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <a href="#" className="header-logo">
              <img
                // src="./assets/images/logo/logo.svg"
                src="http://kifi.zbeanztech.in/frondend/assets/imgs/theme/logo.png"
                alt="Kifi's logo"
                width="120"
                height="36"
              />
            </a>

            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name..."
              />

              <button className="search-btn">
                <IoSearchOutline />
                {/* <ion-icon name="search-outline"></ion-icon> */}
              </button>
            </div>

            <div className="header-user-actions">
              <button className="action-btn">
                <IoPersonOutline />
                {/* <ion-icon name="person-outline"></ion-icon> */}
              </button>

              <button className="action-btn">
                <IoIosHeartEmpty />
                {/* <ion-icon name="heart-outline"></ion-icon> */}
                <span className="count">0</span>
              </button>

              <button className="action-btn">
                <IoBagHandleOutline />
                {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>

        <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="#" className="menu-title">
                  Home
                </a>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  Categories
                </a>

                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Farmed Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Tilapia</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Salmon</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Tuna</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Carp</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Catla</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img
                          src="./assets/images/Farmed-fish1 (2).jpeg"
                          alt="headphone collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Marine Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Oil sardine</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Indian mackerel</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Silver pomfret</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Seer fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Pink perch</a>
                    </li>

                    <li className="panel-list-item ">
                      <a href="#">
                        <img
                          src="./assets/images/Marine-fish1 (1).jpeg"
                          alt="women's fashion"
                          width="250"
                          // height="59"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Shell Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Mussels</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Scallops</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Clams</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Shrimp</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Crab</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img
                          src="./assets/images/shell-fish2 (1).jpeg"
                          alt="mouse collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Other Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Gold Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Betta Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Platy Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Tetra Fish</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Guppies</a>
                    </li>

                    <li className="panel-list-item ">
                      <a href="#">
                        <img
                          src="./assets/images/other-fish1 (1).jpeg"
                          alt="men's fashion"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  Products
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Marine Fish</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Farmed Fish</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Shell Fish</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Other Fish</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  Blog
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Blog</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Blog Details</a>
                  </li>

                  {/* <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Makeup Kit</a>
                  </li> */}
                </ul>
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  About
                </a>

                {/* <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Couple Rings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Bracelets</a>
                  </li>
                </ul> */}
              </li>

              <li className="menu-category">
                <a href="#" className="menu-title">
                  Contact
                </a>

                {/* <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Clothes Perfume</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Deodorant</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Flower Fragrance</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Air Freshener</a>
                  </li>
                </ul> */}
              </li>

              {/* <li className="menu-category">
                <a href="#" className="menu-title">
                  Blog
                </a>
              </li> */}

              <li className="menu-category">
                <a href="#" className="menu-title">
                  Hot Offers
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mobile-bottom-navigation">
          <button className="action-btn" data-mobile-menu-open-btn>
            <IoMenu />
            {/* <ion-icon name="menu-outline"></ion-icon> */}
          </button>

          <button className="action-btn">
            <IoBagHandleOutline />
            {/* <ion-icon name="bag-handle-outline"></ion-icon> */}

            <span className="count">0</span>
          </button>

          <button className="action-btn">
            <IoHome />
            {/* <ion-icon name="home-outline"></ion-icon> */}
          </button>

          <button className="action-btn">
            <IoIosHeartEmpty />
            {/* <ion-icon name="heart-outline"></ion-icon> */}

            <span className="count">0</span>
          </button>

          <button className="action-btn" data-mobile-menu-open-btn>
            <IoGridOutline />
            {/* <ion-icon name="grid-outline"></ion-icon> */}
          </button>
        </div>

        <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>

            <button className="menu-close-btn" data-mobile-menu-close-btn>
              <IoClose />
              {/* <ion-icon name="close-outline"></ion-icon> */}
            </button>
          </div>

          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Men's</p>

                <div>
                  <IoIosAdd />
                  <IoIosRemove />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon> */}
                  {/* <ion-icon name="remove-outline" className="remove-icon"></ion-icon> */}
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Shirt
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Shorts & Jeans
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Safety Shoes
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Wallet
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Women's</p>

                <div>
                  <IoIosAdd />
                  <IoIosRemove />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon>
              <ion-icon name="remove-outline" className="remove-icon"></ion-icon> */}
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Dress & Frock
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Earrings
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Necklace
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Makeup Kit
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Jewelry</p>

                <div>
                  <IoIosAdd />
                  <IoIosRemove />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon>
              <ion-icon name="remove-outline" className="remove-icon"></ion-icon> */}
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Earrings
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Couple Rings
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Necklace
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Bracelets
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Perfume</p>

                <div>
                  <IoIosAdd />
                  <IoIosRemove />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon>
              <ion-icon name="remove-outline" className="remove-icon"></ion-icon> */}
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Clothes Perfume
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Deodorant
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Flower Fragrance
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Air Freshener
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>

          <div className="menu-bottom">
            <ul className="menu-category-list">
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Language</p>
                  <IoCaretBackOutline />
                  {/* <ion-icon name="caret-back-outline" className="caret-back"></ion-icon> */}
                </button>

                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      English
                    </a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Espa&ntilde;ol
                    </a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Fren&ccedil;h
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Currency</p>
                  <IoCaretBackOutline />
                  {/* <ion-icon name="caret-back-outline" className="caret-back"></ion-icon> */}
                </button>

                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      USD &dollar;
                    </a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      EUR &euro;
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="menu-social-container">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook />
                  {/* <ion-icon name="logo-facebook"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter />
                  {/* <ion-icon name="logo-twitter"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoInstagram />
                  {/* <ion-icon name="logo-instagram"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoLinkedin />
                  {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default OriginalHeader;
