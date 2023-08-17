import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import {
  IoBagHandleOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchKifiProductSearch } from "../../../views/desktop/kifi/ProductSearch/ProductSearch.slice";

function HeaderSearch() {
  const Navigate = useNavigate();
  const dispatch = useDispatch()
  const [search,setSearch] = useState()
 
  const handleSearch = (data:any) =>{
    console.log("value from search",search)
    const params = {
      search: search,
      category: "ALL",
    }
    //@ts-ignore
    dispatch(fetchKifiProductSearch(params))
    // setSearch('')
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
            <button className="action-btn" onClick={() => Navigate("/Login")}>
              <IoPersonOutline />
              {/* <ion-icon name="person-outline"></ion-icon> */}
            </button>

            <button className="action-btn">
              <IoIosHeartEmpty />
              {/* <ion-icon name="heart-outline"></ion-icon> */}
              <span className="count">0</span>
            </button>

            <button className="action-btn" onClick={() => Navigate("/Cart")}>
              <IoBagHandleOutline />
              {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearch;
