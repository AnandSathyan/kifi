import React from "react";
import { useLocation } from "react-router-dom";
import ProductFeatured from "../ProductFeatured/ProductFeatured";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductMinimal from "../ProductMinimal/ProductMinimal";
import ProductSidebar from "../ProductSidebar/ProductSidebar";

function ProductFiltered() {
  const location = useLocation()
  console.log("locations",location?.state?.search);
  
  return (
    <div className="flex">
      <ProductSidebar />
      <ProductGrid search={location?.state?.search}/>

      {/* <ProductFeatured /> */}
    </div>
  );
}

export default ProductFiltered;
