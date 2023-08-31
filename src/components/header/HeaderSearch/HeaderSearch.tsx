import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import {
  IoBagHandleOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchKifiProductSearch } from "../../../views/desktop/kifi/ProductSearch/ProductSearch.slice";

function HeaderSearch() {
  const Navigate = useNavigate();
  const dispatch = useDispatch()
  const [search,setSearch] = useState()

  const WishListStore = useSelector((state: any) => state.GetWishList);
  const CartStore = useSelector((state: any) => state.GetCart);

  console.log("WishListStoreheader", CartStore?.data?.data?.carts?.length);

  const handleSearch = (data:any) =>{
    // console.log("value from search",search)
    // const params = {
    //   search: search,
    //   category: "ALL",
    // }
    Navigate('/ProductFiltered',{
      state: {
       search:search
      }})

    //@ts-ignore
    // dispatch(fetchKifiProductSearch(params))
    // setSearch('')
  }
  
const isLogin = sessionStorage.getItem("AuthToken")

const handleLogin = ()=>{
  if(isLogin){
    Navigate('/Profile')
  }
  else{
    Navigate("/Login")

  }
}
  return (
    <div>
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo" onClick={() => Navigate("/")}>
            <img
              // src="./assets/images/logo/logo.svg"
              src="http://kifi.zbeanztech.in/frondend/assets/imgs/theme/logo.png"
              alt="Kifi's logo"
              width="120"
              height="36"
            />
          </a>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
              onChange={(e:any)=>setSearch(e.target.value)}
            />

            <button className="search-btn"
            onClick={(e:any)=>handleSearch(e.target.value)} >
              <IoSearchOutline />
              {/* <ion-icon name="search-outline"></ion-icon> */}
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn" onClick={() => handleLogin()}>
              <IoPersonOutline />
              {/* <ion-icon name="person-outline"></ion-icon> */}
            </button>

            <button className="action-btn" onClick={()=> Navigate('/WishList')}>
              <IoIosHeartEmpty />
              {/* <ion-icon name="heart-outline"></ion-icon> */}
              <span className="count">
                {WishListStore?.data?.data?.length}
              </span>
            </button>

            <button className="action-btn" onClick={() => Navigate("/Cart")}>
              <IoBagHandleOutline />
              {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
              <span className="count">{CartStore?.data?.data?.carts?.length}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
