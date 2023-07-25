import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Modal() {
  const [modal, setModal] = useState(true);

  const ModalClose = () => {
    setModal(false);
  };
  return (
    <div>
      {modal ? (
        <div className="modal" data-modal>
          <div className="modal-close-overlay" data-modal-overlay></div>

          <div className="modal-content">
            <button
              onClick={ModalClose}
              className="modal-close-btn"
              data-modal-close
            >
              {/* <ion-icon name="close-outline"></ion-icon> */}
              <IoClose />
            </button>

            <div className="newsletter-img">
              <img
                src="./assets/images/newsletter.png"
                alt="subscribe newsletter"
                width="400"
                height="400"
              />
            </div>

            <div className="newsletter">
              <form action="#">
                <div className="newsletter-header">
                  <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                  <p className="newsletter-desc">
                    Subscribe the <b>Kifi</b> to get latest products and
                    discount update.
                  </p>
                </div>

                <input
                  type="email"
                  name="email"
                  className="email-field"
                  placeholder="Email Address"
                  required
                />

                <button type="submit" className="btn-newsletter">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
