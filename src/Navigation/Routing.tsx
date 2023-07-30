import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "../components/Category/Category";
import ImageSlider from "../components/imageslider/ImageSlider";
import Products from "../components/Products/Products";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ImageSlider />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Category />} />
      </Routes>
      {/* <Products /> */}
    </div>
  );
};
export default Routers;
