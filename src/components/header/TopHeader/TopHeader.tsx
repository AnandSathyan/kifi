import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

function TopHeader() {
  return (
    <div>
      <div className="header-top  bg-[#212121] sticky  ">
        <div className="container">
          <ul className="header-social-container ">
            <li className="facebook">
              <a href="#" className="social-link facebook">
                <IoLogoFacebook />
                {/* <ion-icon name="logo-facebook"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link twitter">
                <IoLogoTwitter />
                {/* <ion-icon name="logo-twitter"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link instagram">
                <IoLogoInstagram />
                {/* <ion-icon name="logo-instagram"></ion-icon> */}
              </a>
            </li>

            <li>
              <a href="#" className="social-link linkedIn">
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
            <select name="currency bg-[#d7edf1]!importnt">
              <option value="usd">INR &#x20B9;</option>
              <option value="eur">USD &#36;</option>
            </select>

            <select name="language bg-[#d7edf1]">
              <option value="en-US">English</option>
              <option value="es-ES">
                &#3374;&#3378;&#3375;&#3390;&#3379;&#3330;
              </option>
              {/* <option value="fr">Fran&ccedil;ais</option> */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
