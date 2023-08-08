import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/Category/Category";
import FeaturedCategory from "../components/FeaturedCategory/FeaturedCategory";
import HeaderOptional from "../components/header/HeaderOptional/HeaderOptional";
import HeaderSearch from "../components/header/HeaderSearch/HeaderSearch";
import HeaderSub from "../components/header/HeaderSub/HeaderSub";
import OriginalHeader from "../components/header/OriginalHeader";
import TopHeader from "../components/header/TopHeader/TopHeader";
import ImageSlider from "../components/imageslider/ImageSlider";
import Login from "../components/Login/Login";
import Payment from "../components/Payment/Payment";
import ProductFeatured from "../components/Products/ProductFeatured/ProductFeatured";
import Products from "../components/Products/Products";
import Cart from "../components/Products/productView/Cart";
import ProductSummary from "../components/Products/productView/ProductSummary";
import ProductView from "../components/Products/productView/ProductView";
import SignUp from "../components/SignUp/SignUp";
// import ProductView from "../components/Products/productView/ProductView";
// import ProductView from "../components/Products/productView/ProductView";
// import ProductView from "../components/Products/productView/ProductView";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <OriginalHeader />
              <ImageSlider />
              <Category />
              <Products />
            </>
          }
        />
        <Route
          path="/ProductView"
          element={
            <>
              <TopHeader />
              <HeaderSearch />
              <ProductView />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <TopHeader />
              <HeaderSearch />
              <Cart />
            </>
          }
        />
        <Route path="/Alternate" element={<ProductSummary />} />
        <Route
          path="/Payment"
          element={
            <>
              <TopHeader />
              {/* <HeaderSearch /> */}
              <Payment />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <TopHeader />
              <Login />
            </>
          }
        />
        <Route
          path="/Register"
          element={
            <>
              <TopHeader />
              <SignUp />
            </>
          }
        />

        <Route path="*" element={<h3>404 Page Not Found</h3>} />
      </Routes>
    </div>
  );
};
export default Routers;
