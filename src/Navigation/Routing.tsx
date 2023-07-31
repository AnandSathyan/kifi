import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/Category/Category";
import ImageSlider from "../components/imageslider/ImageSlider";
import Products from "../components/Products/Products";
const Routers = () => {
  return (
    <div>
      <ImageSlider />
      <Category />

      <Routes location={"/products"}>
        <Route path="/products" element={<Products />} />

        {/* <Route path="/" element={} /> */}
        <Route path="*" element={<h3>404 Page Not Found</h3>} />
      </Routes>

      {/* <Products /> */}
    </div>
  );
};
export default Routers;
