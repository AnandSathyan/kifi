import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import Cart from "../components/Cart/Cart";
import ProductSummary from "../components/Products/productView/ProductSummary";
import ProductView from "../components/Products/productView/ProductView";
import Services from "../components/Services/Services";
import SignUp from "../components/SignUp/SignUp";
import Blog from "../components/Blog/Blog";
import ProductFiltered from "../components/Products/productFiltered/ProductFiltered";
import MyProfile from "../components/Profile/MyProfile";
import WishList from "../components/WishList/WishList";
import DemoPage from "../components/DemoPage";
import EditProfile from "../components/Profile/EditProfile";
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
              <Blog />
            </>
          }
        />
        <Route
          path="/ProductView"
          element={
            <>
              <HeaderSearch />
              <ProductView />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <HeaderSearch />
              <Cart />
            </>
          }
        />
        <Route
          path="/WishList"
          element={
            <>
              <HeaderSearch />
              <WishList />
              
            </>
          }
        />
        <Route path="/Alternate" element={<ProductSummary />} />
        <Route
          path="/Payment"
          element={
            <>
              {/* <HeaderSearch /> */}
              <Payment />
            </>
          }
        />
        
        <Route
          path="/Login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/Register"
          element={
            <>
              <SignUp />
            </>
          }
        />
         <Route
          path="/Profile"
          element={
            <>
              <MyProfile />
            </>
          }
        />
         <Route
          path="/EditProfile"
          element={
            <>
              <EditProfile />
            </>
          }
        />
        {/* <Route
          path="/Blog"
          element={
            <>
              <Blog />
            </>
          }
        /> */}
        <Route
          path="/ProductFiltered"
          element={
            <>
              <HeaderSearch />
              <ProductFiltered />
            </>
          }
        />

        <Route path="*" element={<h3>404 Page Not Found</h3>} />
      </Routes>
    </div>
  );
};
export default Routers;
