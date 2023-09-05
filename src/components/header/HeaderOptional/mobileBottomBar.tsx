import React, { useEffect, useState } from 'react'
import { IoIosHeartEmpty } from 'react-icons/io';
import {
    IoBagHandleOutline,
    IoClose,
    IoGridOutline,
    IoHome,
    IoMenu,
    IoPersonOutline,
  } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchKifiCart } from "../../../views/desktop/kifi/Cart/Cart.slice";
import { fetchKifiWishList } from "../../../views/desktop/kifi/WishList/WishList.slice";
import HeaderOptional from './HeaderOptional';

function MobileBottomBar() {
    const dispatch = useDispatch()
const Navigate = useNavigate()
const WishListStore = useSelector((state: any) => state.GetWishList);
  const CartStore = useSelector((state: any) => state.GetCart);
const isLogin = sessionStorage.getItem("AuthToken")
const [flag,setFlag] = useState(false)

  useEffect(()=>{
    //@ts-ignore
    dispatch(fetchKifiCart())
      //@ts-ignore
    dispatch(fetchKifiWishList())
  
  },[])

  const handleLogin = ()=>{
    if(isLogin){
      Navigate('/Profile')
    }
    else{
      Navigate("/Login")
  
    }
  }
  const handleLeftModal = () =>{
    setFlag(!flag)
  }
  const handleClose = () =>{
    setFlag(false)
  }
  const handleOpen = () =>{
   
  }
  return (
    <div>
        <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn onClick={()=>handleLeftModal()}>
          <IoMenu />
          {/* <ion-icon name="menu-outline"></ion-icon> */}
        </button>

        <button className="action-btn"
        onClick={() => Navigate("/Cart")}>
          <IoBagHandleOutline />
          {/* <ion-icon name="bag-handle-outline"></ion-icon> */}

          <span className="count">{CartStore?.data?.data?.carts?.length?CartStore?.data?.data?.carts?.length:0}</span>
        </button>

        <button className="action-btn"  onClick={()=> Navigate('/')}>
          <IoHome />
          {/* <ion-icon name="home-outline"></ion-icon> */}
        </button>

        <button className="action-btn" onClick={()=> Navigate('/WishList')}>
          <IoIosHeartEmpty />
          {/* <ion-icon name="heart-outline"></ion-icon> */}

          <span className="count"> {WishListStore?.data?.data?.length?WishListStore?.data?.data?.length:0}</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn
        onClick={() => handleLogin()}>
          {/* <IoGridOutline /> */}
          <IoPersonOutline />
          {/* <ion-icon name="grid-outline"></ion-icon> */}
        </button>
      </div>
      {flag?<HeaderOptional handleClose={handleClose}/>:null}

      </div>
  )
}

export default MobileBottomBar