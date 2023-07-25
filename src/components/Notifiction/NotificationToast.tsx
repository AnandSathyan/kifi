import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
function NotificationToast() {
  const [openToast, setOpenToast] = useState(true);
  const ToastClose = () => {
    setOpenToast(false);
  };
  return (
    <div>
      {openToast ? (
        <div className="notification-toast" data-toast>
          <button
            onClick={ToastClose}
            className="toast-close-btn"
            data-toast-close
          >
            {/* <ion-icon name="close-outline"></ion-icon> */}
            {/* <FaMapMarkerAlt /> */}
            <IoMdClose />
          </button>

          <div className="toast-banner">
            <img
              src="./assets/images/icons/notification-image.png"
              alt="Rose Gold Earrings"
              width="80"
              height="70"
            />
          </div>

          <div className="toast-detail">
            <p className="toast-message">Someone in new just bought</p>

            <p className="toast-title">Fresh Fish</p>

            <p className="toast-meta">
              <time dateTime="PT2M">2 Minutes</time> ago
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NotificationToast;
