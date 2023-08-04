import React from "react";
import { IoIosAdd, IoIosHeartEmpty, IoIosRemove } from "react-icons/io";
import {
  IoBagHandleOutline,
  IoClose,
  IoGridOutline,
  IoHome,
  IoMenu,
} from "react-icons/io5";

function HeaderOptional() {
  return (
    <div>
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
      </nav>
    </div>
  );
}

export default HeaderOptional;
