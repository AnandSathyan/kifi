import React, { useEffect } from "react";
import {
  // IoIosAdd,
  IoIosHeartEmpty,
  // IoIosRemove,
  IoIosRepeat,
  IoIosStar,
  // IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import './ProductGrid.css'
import { IoBagAddOutline, IoEyeOutline, IoRepeat } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchKifiProductCategory } from "../../../views/desktop/kifi/kifi.slice";
import { fetchKifiProductListing,fetchKifiProductSearch } from "../../../views/desktop/kifi/productListing/Product.slice";
import { fetchKifiCartAdd } from "../../../views/desktop/kifi/Cart/AddToCart.slice";
import { fetchKifiAddToWishList } from "../../../views/desktop/kifi/WishList/AddToWishList.slice";
import Loader from "../../Loader/Loader";

function ProductGrid(props:any) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const KifiStore= useSelector((state: any) => state.ProductSearch);
  const Loaders= useSelector((state: any) => state.Product.ApiStatus);
//  let loaingStatus = Loaders.ApiStatus='loading' + "" 
console.log("ProductStoreProductStore",props);

  useEffect(() => {
 
    //@ts-ignore
    dispatch(fetchKifiProductListing())

    
  }, [!props?.search]);
  // console.log(
  //   "KifiStore from product",KifiStore?.data?.data
   
  // );
  const handleAddToWishList = async(data:any,e:any) =>{
    const val = {
      data: 
        {
          "product_id" : data?.id,
      }}
    e. stopPropagation()
    //@ts-ignore
    await dispatch(fetchKifiAddToWishList(val))
    Navigate('/WishList')
  }
  const handleAddToCart = (data:any,e:any) =>{
    
    e. stopPropagation()
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
  const handleProductView = (category:any) =>{
    console.log("qwertgh",category);

    Navigate("/ProductView", {
          state: {
            name: category.name,
            image: category.thumbnail_url,
            id:category.id,
            description:category.description,
            price:category.price_list.mrp
          },
        })
      }
  
useEffect(()=>{
const params = {
      search: props?.search,
      category: "ALL",
    }
    // @ts-ignore
    dispatch(fetchKifiProductSearch(params))
},[props])
  return (
    <div>
      <div className="absolute">
   {/* {Loaders == "loading"?<Loader/>:null} */}
   </div>
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
                onClick={()=>handleProductView(category)}
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
                    <button className="btn-action"
                    onClick={(e:any)=>handleAddToWishList(category,e)}
                    >

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

