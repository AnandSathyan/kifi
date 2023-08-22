import React, { useEffect } from "react";
import {
  // IoIosAdd,
  IoIosHeartEmpty,
  // IoIosRemove,
  IoIosRepeat,
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import './ProductGrid.css'
import { IoBagAddOutline, IoEyeOutline, IoRepeat } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchKifiProductCategory } from "../../../views/desktop/kifi/kifi.slice";
import { fetchKifiProductListing,fetchKifiProductSearch } from "../../../views/desktop/kifi/productListing/Product.slice";
import { fetchKifiCartAdd } from "../../../views/desktop/kifi/Cart/AddToCart.slice";

function ProductGrid(props:any) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const KifiStore= useSelector((state: any) => state.Product);
  useEffect(() => {
 
    //@ts-ignore
    dispatch(fetchKifiProductListing())

    
  }, [!props?.search]);
  console.log(
    "KifiStore from product",KifiStore?.data?.data
   
  );

  const handleAddToCart = (data:any,e:any) =>{
    console.log("data cart add",data);
    
    e.preventDefault()
    const val = {
      data: 
        {
          "product_id" : data?.id,
          "quantity" : 1
      }
      ,
      id: data?.id,
      token: data,
    };
    //@ts-ignore
    dispatch(fetchKifiCartAdd(
      val
    ))
    Navigate('/Cart')
  }
useEffect(()=>{
const params = {
      search: props?.search,
      category: "ALL",
    }
    // @ts-ignore
    dispatch(fetchKifiProductSearch(params))
},[props?.search])
  return (
    <div>
      <div id="Product-Main" className="product-main">
        <h2 className="title">New Products</h2>

        <div className="product-grid">
          {KifiStore?.data?.data?.map((category: any) => {
            return (
              <div
                key={category.id}
                className="showcase"
                // onClick={() =>
                //   Navigate("/ProductView", {
                //     state: {
                //       name: category.name,
                //       image: category.thumbnail_url,
                //     },
                //   })
                // }
              >
                <div className="showcase-banner h-[200px]">
                  <img
                    // src="./assets/images/products/Best_seller1.png"
                    src={category?.thumbnail_url}
                    alt="Fish category images"
                    width="300"
                    className="product-img default"
                  />
                  <img
                    // src="./assets/images/products/produt-after1.png"
                    // alt="Mens Winter Leathers Jackets"
                    src={category?.thumbnail_url}
                    width="300"
                    className="product-img hover"
                  />

                  <p className="showcase-badge">15%</p>

                  <div className="showcase-actions">
                    <button className="btn-action">
                      <IoIosHeartEmpty />
                      {/* <ion-icon name="heart-outline"></ion-icon> */}
                    </button>

                    <button className="btn-action">
                      <IoEyeOutline />
                      {/* <ion-icon name="eye-outline"></ion-icon> */}
                    </button>

                    <button className="btn-action">
                      <IoIosRepeat />
                      {/* <ion-icon name="repeat-outline"></ion-icon> */}
                    </button>

                    <button className="btn-action"
                    onClick={(e:any)=>handleAddToCart(category,e)}
                    >
                      <IoBagAddOutline />
                      {/* <ion-icon name="bag-add-outline"></ion-icon> */}
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a className="showcase-category">{category?.name}</a>

                  <a>
                    <h3 className="showcase-title">{category?.description}</h3>
                  </a>

                  <div className="showcase-rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                  </div>

                  <div className="price-box">
                    <p className="price">&#8377;{category?.price_list?.mrp}</p>
                    <del className="cross">&#8377;{category?.price_list?.sale_price}</del>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
function apiProductListing(arg0: string) {
  throw new Error("Function not implemented.");
}

