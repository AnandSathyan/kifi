import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import {
  IoBagHandleOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";

function HeaderSearch() {
  return (
    <div>
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
    </div>
  );
}

export default HeaderSearch;
