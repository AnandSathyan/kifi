import React from "react";
import {
  IoArrowUndoOutline,
  IoBoatOutline,
  IoCallOutline,
  IoRocketOutline,
  IoTicketOutline,
} from "react-icons/io5";

function Services() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="testimonials-box">
            {/* <!--
            - TESTIMONIALS
          --> */}

            <div className="testimonial">
              <h2 className="title">testimonial</h2>

              <div className="testimonial-card">
                <img
                  src="https://img.freepik.com/premium-vector/businessman-icon-color-vector-illustration_755164-2088.jpg"
                  alt="alan doe"
                  className="testimonial-banner"
                  width="80"
                  height="80"
                />

                <p className="testimonial-name">John Doe</p>

                <p className="testimonial-title">CEO & Founder </p>

                <img
                  src="./assets/images/icons/quotes.svg"
                  alt="quotation"
                  className="quotation-img"
                  width="26"
                />

                <p className="testimonial-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet.
                </p>
              </div>
            </div>

            {/* <!--
            - CTA
          --> */}

            <div className="cta-container">
              <img
                src="https://thumbs.dreamstime.com/b/dried-fishes-flat-lay-template-banner-craft-paper-background-empty-space-text-vertical-salted-roach-cover-backdrop-197942178.jpg"
                alt="summer collection"
                className="cta-banner"
              />

              <a href="#" className="cta-content">
                <p className="discount">25% Discount</p>

                <h2 className="cta-title">
                  Stay home & get your daily needs from our shop
                </h2>

                <p className="cta-text">Start You'r Daily Shopping with Kifi</p>

                <button className="cta-btn">Shop now</button>
              </a>
            </div>

            {/* <!--
            - SERVICE
          --> */}

            <div className="service">
              <h2 className="title">Our Services</h2>

              <div className="service-container">
                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IoBoatOutline />
                    {/* <ion-icon name="boat-outline"></ion-icon> */}
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Order Over &#8377;1000</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IoRocketOutline />
                    {/* <ion-icon name="rocket-outline"></ion-icon> */}
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Next Day delivery</h3>
                    <p className="service-desc">Kerala Orders Only</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IoCallOutline />
                    {/* <ion-icon name="call-outline"></ion-icon> */}
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IoArrowUndoOutline />
                    {/* <ion-icon name="arrow-undo-outline"></ion-icon> */}
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy & Free Return</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IoTicketOutline />
                    {/* <ion-icon name="ticket-outline"></ion-icon> */}
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">30% money back</h3>
                    <p className="service-desc">For Order Over &#8377;500</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
