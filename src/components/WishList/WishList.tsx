import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchKifiDeleteWishList } from "../../views/desktop/kifi/WishList/DeleteWishList.sliice";
import { fetchKifiWishList } from "../../views/desktop/kifi/WishList/WishList.slice";
import ReactPaginate from 'react-paginate';

function WishList() {
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const data = sessionStorage.getItem("AuthToken");

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchKifiWishList());
    if(!data){
      Navigate("/Login")
    }
  }, []);
  const WishListStore = useSelector((state: any) => state.GetWishList);
  console.log("WishListStore", WishListStore?.data?.data?.length);
  const handleDeleteWishList = async(data:any,e:any) =>{
    const val = {
        data: 
          {
            id : data?.id,
        }}
      e. stopPropagation()
      //@ts-ignore
      await dispatch(fetchKifiDeleteWishList(val))
       //@ts-ignore
    await dispatch(fetchKifiWishList());
  }
const handleProductView = (data:any) =>{
  console.log("handleProductView data",data);
  
    Navigate('/ProductView',{state:data})
}
  return (
    <div className="w-screen">
      <span className="font-semibold text-2xl flex justify-center">
        {" "}
        My WishList
      </span>
      {WishListStore?.data?.data?.map((data: any) => {
        return (
          <div className="w-full flex justify-center items-center hover:bg-gray-100 -mx-8 px-6 py-5" onClick={()=>handleProductView(data)}>
            <div className="flex w-2/4">
              {/* <!-- product --> */}
              <div className="object-contain">
                <img
                  className="h-24 w-full object-cover"
                  src={data?.product?.thumbnail_url}
                  alt=""
                  style={{
                    minWidth: "150px",
                    height: "100%",
                    maxWidth: "150px",
                    maxHeight: "150px",
                  }}
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{data?.product?.name}</span>
                <span className="text-red-500 max-h-20 overflow-hidden text-ellipsis text-xs">
                  {data?.product?.description}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                &#8377; {parseFloat(data?.product.price_list?.sale_price).toFixed(2)}
                </span>
                {/* <a
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        //   onClick={() => handleCartDelete(data)}
                        >
                          Remove
                        </a> */}
              </div>
            </div>
            {/* <div className="flex justify-center w-1/5">
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                        // onClick={() => handleCartDecr(data)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>

                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        // value={data?.qty}
                      />

                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                        // onClick={() => handleCartAdd(data)}
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div> */}

            <span className="text-center w-1/5 font-semibold text-sm"></span>
            <span className="text-center w-1/5 font-semibold text-sm" 
            onClick={(e)=>handleDeleteWishList(data,e)}>
              <FaTrashAlt />
            </span>
          </div>
        );
      })}
      <div className="flex justify-between">
              <a
                href="#"
                onClick={() => Navigate("/")}
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4 p-10"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
              {/* <a
                href="#"
                // onClick={() => handleClearCart(data)}
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                Clear WishList
              </a> */}
            </div>
    </div>
  );
}

export default WishList;
