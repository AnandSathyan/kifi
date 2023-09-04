import React from 'react'
import './OrderTracking.scss'
function OrderTracking() {
  return (
 
    <section className="root">
    <figure/>
      <img src="https://images.melorra.com/image/upload/h_350,w_350,f_auto,fl_progressive/v1571040732/live-melorra/dev/catalogue/images/TG/OPT/580/W19WTG16F_C_580.jpg" alt=""/>
      <figcaption>
        <h4>Some Jewellery Name</h4>
        <h6>Category</h6>
        <h2>₹ 23,456</h2>
      </figcaption>

    <div className="order-track">
      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-actived-status-dot "><span className='w-full flex justify-center h-full items-center order-track-actived-status-dot-tick-color'>&#10003;</span></span>
          <span className="order-track-actived-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat">Order Received</p>
          <span className="order-track-text-sub">21st November, 2019</span>
        </div>
      </div>

      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-actived-status-dot"><span className='w-full flex justify-center h-full items-center order-track-actived-status-dot-tick-color'>&#10003;</span></span>
          <span className="order-track-actived-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat">Order Processed</p>
          <span className="order-track-text-sub">21st November, 2019</span>
        </div>
      </div>
      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-actived-status-dot"><span className='w-full flex justify-center h-full items-center order-track-actived-status-dot-tick-color'>&#10003;</span></span>
          <span className="order-track-actived-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat">Manufracturing In Progress</p>
          <span className="order-track-text-sub">21st November, 2019</span>
        </div>
      </div>

      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-status-dot"></span>
          <span className="order-track-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat">Order Dispatched</p>
          <span className="order-track-text-sub">21st November, 2019</span>
        </div>
      </div>

      <div className="order-track-step">
        <div className="order-track-status">
          <span className="order-track-status-dot"></span>
          <span className="order-track-status-line"></span>
        </div>
        <div className="order-track-text">
          <p className="order-track-text-stat">Order Deliverd</p>
          <span className="order-track-text-sub">21st November, 2019</span>
        </div>
      </div>

    </div>
  </section>
  )
}

export default OrderTracking