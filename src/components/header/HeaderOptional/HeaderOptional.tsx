import React, { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoClose,
} from "react-icons/io5";
import MobileBottomBar from "./mobileBottomBar";

function HeaderOptional({handleClose}:any) {

 

  return (
    <div className="">
      {/* <MobileBottomBar/> */}

      <nav className="mobile-navigation-menu active has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          {/* <h2 className="menu-title">Menu</h2> */}
          <img
              // src="./assets/images/logo/logo.svg"
              src="http://kifi.zbeanztech.in/frondend/assets/imgs/theme/logo.png"
              alt="Kifi's logo"
              width="120"
              height="36"
              />

          <button className="menu-close-btn" data-mobile-menu-close-btn  onClick={handleClose}>
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
              <p className="menu-title">Categories</p>

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
                  
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Blogs
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  About
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Contact
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Products</p>

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
              <p className="menu-title">Blogs</p>

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
              <p className="menu-title">About</p>

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
              Contact
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

                {/* <ion-icon
                  name="caret-back-outline"
                  className="caret-back"
                ></ion-icon> */}
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">English</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Fren&ccedil;h</a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li>
              <a href="#" className="social-link">
              <IoLogoFacebook/>
                {/* <ion-icon name="logo-facebook"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IoLogoTwitter/>
                {/* <ion-icon name="logo-twitter"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IoLogoInstagram/>
                {/* <ion-icon name="logo-instagram"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IoLogoLinkedin/>
                {/* <ion-icon name="logo-linkedin"></ion-icon> */}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderOptional;
