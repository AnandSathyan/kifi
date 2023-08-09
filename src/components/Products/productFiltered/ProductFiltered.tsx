import React from "react";
import ProductFeatured from "../ProductFeatured/ProductFeatured";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductMinimal from "../ProductMinimal/ProductMinimal";
import ProductSidebar from "../ProductSidebar/ProductSidebar";

function ProductFiltered() {
  return (
    <div className="flex">
      <ProductSidebar />
      <ProductGrid />

      {/* <ProductFeatured /> */}
    </div>
  );
}

export default ProductFiltered;
