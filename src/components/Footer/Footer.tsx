import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
function Footer() {
  return (
    <div>
      <footer>
        {/* <div className="footer-category">
          <div className="container">
            <h2 className="footer-category-title">Brand directory</h2>

            <div className="footer-category-box">
              <h3 className="category-box-title">Fashion :</h3>

              <a href="#" className="footer-category-link">
                T-shirt
              </a>
              <a href="#" className="footer-category-link">
                Shirts
              </a>
              <a href="#" className="footer-category-link">
                shorts & jeans
              </a>
              <a href="#" className="footer-category-link">
                jacket
              </a>
              <a href="#" className="footer-category-link">
                dress & frock
              </a>
              <a href="#" className="footer-category-link">
                innerwear
              </a>
              <a href="#" className="footer-category-link">
                hosiery
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">footwear :</h3>

              <a href="#" className="footer-category-link">
                sport
              </a>
              <a href="#" className="footer-category-link">
                formal
              </a>
              <a href="#" className="footer-category-link">
                Boots
              </a>
              <a href="#" className="footer-category-link">
                casual
              </a>
              <a href="#" className="footer-category-link">
                cowboy shoes
              </a>
              <a href="#" className="footer-category-link">
                safety shoes
              </a>
              <a href="#" className="footer-category-link">
                Party wear shoes
              </a>
              <a href="#" className="footer-category-link">
                Branded
              </a>
              <a href="#" className="footer-category-link">
                Firstcopy
              </a>
              <a href="#" className="footer-category-link">
                Long shoes
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">jewellery :</h3>

              <a href="#" className="footer-category-link">
                Necklace
              </a>
              <a href="#" className="footer-category-link">
                Earrings
              </a>
              <a href="#" className="footer-category-link">
                Couple rings
              </a>
              <a href="#" className="footer-category-link">
                Pendants
              </a>
              <a href="#" className="footer-category-link">
                Crystal
              </a>
              <a href="#" className="footer-category-link">
                Bangles
              </a>
              <a href="#" className="footer-category-link">
                bracelets
              </a>
              <a href="#" className="footer-category-link">
                nosepin
              </a>
              <a href="#" className="footer-category-link">
                chain
              </a>
              <a href="#" className="footer-category-link">
                Earrings
              </a>
              <a href="#" className="footer-category-link">
                Couple rings
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">cosmetics :</h3>

              <a href="#" className="footer-category-link">
                Shampoo
              </a>
              <a href="#" className="footer-category-link">
                Bodywash
              </a>
              <a href="#" className="footer-category-link">
                Facewash
              </a>
              <a href="#" className="footer-category-link">
                makeup kit
              </a>
              <a href="#" className="footer-category-link">
                liner
              </a>
              <a href="#" className="footer-category-link">
                lipstick
              </a>
              <a href="#" className="footer-category-link">
                prefume
              </a>
              <a href="#" className="footer-category-link">
                Body soap
              </a>
              <a href="#" className="footer-category-link">
                scrub
              </a>
              <a href="#" className="footer-category-link">
                hair gel
              </a>
              <a href="#" className="footer-category-link">
                hair colors
              </a>
              <a href="#" className="footer-category-link">
                hair dye
              </a>
              <a href="#" className="footer-category-link">
                sunscreen
              </a>
              <a href="#" className="footer-category-link">
                skin loson
              </a>
              <a href="#" className="footer-category-link">
                liner
              </a>
              <a href="#" className="footer-category-link">
                lipstick
              </a>
            </div>
          </div>
        </div> */}

        <div className="footer-nav">
          <div className="container">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Popular Categories</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Marine Fish
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Farmed Fish
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Shell Fish
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Other Fish
                </a>
              </li>

              {/* <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  
                </a>
              </li> */}
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Products</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  New products
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Our Company</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Delivery
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Legal Notice
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Terms and conditions
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  About us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Secure payment
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Services</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  New products
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Contact</h2>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  {/* <ion-icon name="location-outline"></ion-icon> */}
                  {/* <IoLocationSharp/> */}
                  {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
                  <IoLocationOutline />
                </div>

                <address className="content">
                  Address: Helofish Supply Chain LLP Corporate office: Door No:
                  15/809H, Panchami Complex, Perumpilavu, Karikkad P.O., 680519,
                  Thrissur District, Kerala, India
                </address>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  {/* <ion-icon name="call-outline"></ion-icon> */}
                  <IoCallOutline />
                </div>

                <a href="tel:+91 9740616161" className="footer-nav-link">
                  <span>+91 9740616161</span>
                </a>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}
                  <FiMail />
                </div>

                <a
                  href="mailto:info@kifionline.com"
                  className="footer-nav-link"
                >
                  info@kifionline.com
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul className="social-link">
                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      {/* <ion-icon name="logo-facebook"></ion-icon> */}
                      <FaFacebook />
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      {/* <ion-icon name="logo-twitter"></ion-icon> */}
                      <FaTwitter />
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                      <FaLinkedin />
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      {/* <ion-icon name="logo-instagram"></ion-icon> */}
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <img
              src="../assets/images/payment.png"
              alt="payment method"
              className="payment-img"
            />

            <p className="copyright">
              Copyright &copy; <a href="#">2023</a> all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
