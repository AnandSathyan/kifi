import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { fetchKifiAsync } from "../../views/desktop/kifi/kifi.slice";
import ProductFeatured from "./ProductFeatured/ProductFeatured";
import ProductGrid from "./ProductGrid/ProductGrid";
import ProductMinimal from "./ProductMinimal/ProductMinimal";
import ProductSidebar from "./ProductSidebar/ProductSidebar";

function Products() {
  // const dispatch = useAppDispatch();
  // const kifiStore = useAppSelector((state) => state.kifi);
  // useEffect(() => {
  //   dispatch(fetchKifiAsync());
  // }, []);
  // console.log("kifiStorekifiStore", kifiStore);
  return (
    <div>
      <div className="product-container">
        <div className="container">
          {/* <!--
          - SIDEBAR
        --> */}
          {/* <ProductSidebar /> */}
          <div className="product-box">
            {/* <!--
            - PRODUCT MINIMAL
          --> */}
            {/* <ProductMinimal /> */}
            {/* 
            <!--
            - PRODUCT FEATURED
          --> */}

            <ProductFeatured />

            {/* <!--
            - PRODUCT GRID
          --> */}
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
