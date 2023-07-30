import React from "react";
import ProductFeatured from "./ProductFeatured/ProductFeatured";
import ProductGrid from "./ProductGrid/ProductGrid";
import ProductMinimal from "./ProductMinimal/ProductMinimal";
import ProductSidebar from "./ProductSidebar/ProductSidebar";

function Products() {
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
            <ProductMinimal />
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
