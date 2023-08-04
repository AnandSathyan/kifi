// import React from "react";

import React from "react";
import ReactDOM from "react-dom";

// function ProductView() {
//   return (
//     <div>
//       <link
//         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
//         rel="stylesheet"
//         id="bootstrap-css"
//       />
//       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//       {/* <!------ Include the above in your HEAD tag ----------> */}

//       <link
//         href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap"
//         rel="stylesheet"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
//       />
//       <div className="pd-wrap">
//         <div className="container">
//           <div className="heading-section">
//             <h2>Product Details</h2>
//           </div>
//           <div className="row">
//             <div className="col-md-6">
//               <div id="slider" className="owl-carousel product-slider">
//                 <div className="item">
//                   <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
//                 </div>
//                 <div className="item">
//                   <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
//                 </div>
//                 <div className="item">
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
//                 </div>
//                 <div className="item">
//                   <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
//                 </div>
//                 <div className="item">
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
//                 </div>
//                 <div className="item">
//                   <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
//                 </div>
//                 <div className="item">
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
//                 </div>
//               </div>
//               <div id="thumb" className="owl-carousel product-thumb">
//                 <div className="item">
//                   <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
//                 </div>
//                 <div className="item">
//                   <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
//                 </div>
//                 <div className="item">
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
//                 </div>
//                 <div className="item">
//                   <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
//                 </div>
//                 <div className="item">
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
//                 </div>
//                 <div className="item">
//                   <img src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
//                 </div>
//                 <div className="item">
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="product-dtl">
//                 <div className="product-info">
//                   <div className="product-name">Variable Product</div>
//                   <div className="reviews-counter">
//                     <div className="rate">
//                       <input
//                         type="radio"
//                         id="star5"
//                         name="rate"
//                         value="5"
//                         checked
//                       />
//                       <label htmlFor="star5" title="text">
//                         5 stars
//                       </label>
//                       <input
//                         type="radio"
//                         id="star4"
//                         name="rate"
//                         value="4"
//                         checked
//                       />
//                       <label htmlFor="star4" title="text">
//                         4 stars
//                       </label>
//                       <input
//                         type="radio"
//                         id="star3"
//                         name="rate"
//                         value="3"
//                         checked
//                       />
//                       <label htmlFor="star3" title="text">
//                         3 stars
//                       </label>
//                       <input type="radio" id="star2" name="rate" value="2" />
//                       <label htmlFor="star2" title="text">
//                         2 stars
//                       </label>
//                       <input type="radio" id="star1" name="rate" value="1" />
//                       <label htmlFor="star1" title="text">
//                         1 star
//                       </label>
//                     </div>
//                     <span>3 Reviews</span>
//                   </div>
//                   <div className="product-price-discount">
//                     <span>$39.00</span>
//                     <span className="line-through">$29.00</span>
//                   </div>
//                 </div>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                   laboris nisi ut aliquip ex ea commodo consequat.
//                 </p>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <label htmlFor="size">Size</label>
//                     <select id="size" name="size" className="form-control">
//                       <option>S</option>
//                       <option>M</option>
//                       <option>L</option>
//                       <option>XL</option>
//                     </select>
//                   </div>
//                   <div className="col-md-6">
//                     <label htmlFor="color">Color</label>
//                     <select id="color" name="color" className="form-control">
//                       <option>Blue</option>
//                       <option>Green</option>
//                       <option>Red</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="product-count">
//                   <label htmlFor="size">Quantity</label>
//                   <form action="#" className="display-flex">
//                     <div className="qtyminus">-</div>
//                     <input
//                       type="text"
//                       name="quantity"
//                       value="1"
//                       className="qty"
//                     />
//                     <div className="qtyplus">+</div>
//                   </form>
//                   <a href="#" className="round-black-btn">
//                     Add to Cart
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="product-info-tabs">
//             <ul className="nav nav-tabs" id="myTab" role="tablist">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   id="description-tab"
//                   data-toggle="tab"
//                   href="#description"
//                   role="tab"
//                   aria-controls="description"
//                   aria-selected="true"
//                 >
//                   Description
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link"
//                   id="review-tab"
//                   data-toggle="tab"
//                   href="#review"
//                   role="tab"
//                   aria-controls="review"
//                   aria-selected="false"
//                 >
//                   Reviews (0)
//                 </a>
//               </li>
//             </ul>
//             <div className="tab-content" id="myTabContent">
//               <div
//                 className="tab-pane fade show active"
//                 id="description"
//                 role="tabpanel"
//                 aria-labelledby="description-tab"
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//                 sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam.
//               </div>
//               <div
//                 className="tab-pane fade"
//                 id="review"
//                 role="tabpanel"
//                 aria-labelledby="review-tab"
//               >
//                 <div className="review-heading">REVIEWS</div>
//                 <p className="mb-20">There are no reviews yet.</p>
//                 <form className="review-form">
//                   <div className="form-group">
//                     <label>Your rating</label>
//                     <div className="reviews-counter">
//                       <div className="rate">
//                         <input type="radio" id="star5" name="rate" value="5" />
//                         <label htmlFor="star5" title="text">
//                           5 stars
//                         </label>
//                         <input type="radio" id="star4" name="rate" value="4" />
//                         <label htmlFor="star4" title="text">
//                           4 stars
//                         </label>
//                         <input type="radio" id="star3" name="rate" value="3" />
//                         <label htmlFor="star3" title="text">
//                           3 stars
//                         </label>
//                         <input type="radio" id="star2" name="rate" value="2" />
//                         <label htmlFor="star2" title="text">
//                           2 stars
//                         </label>
//                         <input type="radio" id="star1" name="rate" value="1" />
//                         <label htmlFor="star1" title="text">
//                           1 star
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <label>Your message</label>
//                     <textarea className="form-control" rows={10}></textarea>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           name=""
//                           className="form-control"
//                           placeholder="Name*"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           name=""
//                           className="form-control"
//                           placeholder="Email Id*"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <button className="round-black-btn">Submit Review</button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div
//             style={{
//               textAlign: "center",
//               fontSize: "14px",
//               paddingBottom: "20px",
//             }}
//           >
//             Get free icon packs for your next project at{" "}
//             <a
//               href="http://iiicons.in/"
//               target="_blank"
//               style={{ color: "#ff5e63", fontWeight: "bold" }}
//             >
//               www.iiicons.in
//             </a>
//           </div>
//         </div>
//       </div>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
//       <script
//         src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
//         integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
//         crossOrigin="anonymous"
//       ></script>
//       <script
//         src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
//         integrity="	sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
//         crossOrigin="anonymous"
//       ></script>
//     </div>
//   );
// }

// export default ProductView;
// const ProductView = () => {
function Header({ itemCount }: any) {
  return (
    <header className="container">
      <h1>Shopping Cart</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>

      <span className="count">{itemCount} items in the bag</span>
    </header>
  );
}

function ProductDeetail({
  products,
  onChangeProductQuantity,
  onRemoveProduct,
}: any) {
  return (
    <section className="container">
      <ul className="products">
        {products?.map((product: any, index: any) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={product.image} alt={product.name} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">{product.name}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">{formatCurrency(product.price)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                    onChange={(event) => onChangeProductQuantity(index, event)}
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode,
}: any) {
  const total = subTotal - discount + tax;

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" onChange={onEnterPromoCode} />
        <button type="button" onClick={checkPromoCode} />
      </div>

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}

const PRODUCTS = [
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    price: 5.99,
    quantity: 2,
  },
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 1",
    price: 9.99,
    quantity: 1,
  },
];
const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%",
  },
  {
    code: "AUTUMN",
    discount: "40%",
  },
  {
    code: "WINTER",
    discount: "30%",
  },
];
const TAX = 5;

function Page() {
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
  const [products, setProducts] = React.useState(CLONE_PRODUCTS);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);

  const itemCount = products.reduce((quantity: any, product: any) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total: any, product: any) => {
    return total + product.price * +product.quantity;
  }, 0);
  const discount = (subTotal * discountPercent) / 100;

  const onChangeProductQuantity = (index: any, event: any) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }

    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i: any) => {
    const filteredProduct = products.filter((product: any, index: any) => {
      return index != i;
    });

    setProducts(filteredProduct);
  };

  const onEnterPromoCode = (event: any) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));

        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };

  return (
    <div>
      <Header itemCount={itemCount} />

      {products.length > 0 ? (
        <div>
          <ProductDeetail
            products={products}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />

          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button onClick={() => setProducts(PRODUCTS)}>Shopping now</button>
        </div>
      )}
    </div>
  );
}
// };
// export default ProductView;
ReactDOM.render(<Page />, document.getElementById("product"));

function formatCurrency(value: any) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
