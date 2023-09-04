import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { fetchKifiCart } from "../../views/desktop/kifi/Cart/Cart.slice";
import { fetchKifiCartUpdate } from "../../views/desktop/kifi/Cart/UpdateCart.slice";
import { fetchKifiCartClear } from "../../views/desktop/kifi/Cart/ClearCart.slice";
import { fetchKifiCartDelete } from "../../views/desktop/kifi/Cart/DeleteCart.slice";
import Loader from "../Loader/Loader";

function Cart() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const CartStore = useSelector((state: any) => state.GetCart);

  const data = sessionStorage.getItem("AuthToken");

  // const quantity = CartStore?.data?.data?.carts.map(
  //   (data: any) => data?.product?.price_list?.sale_price
  // );

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchKifiCart(data));
    if(!data){
      Navigate("/Login")
    }

  }, []);
console.log("data-123",data);

  const handleCartDelete = async (data: any) => {
    const val = {
      data: {
        qty: data?.qty,
      },
      id: data?.id,
      token: data,
    };
    //@ts-ignore
    await dispatch(fetchKifiCartDelete(val));
    //@ts-ignore
    await dispatch(fetchKifiCart(data));
  };
  const handleClearCart = async (data: any) => {
    //@ts-ignore
    await dispatch(fetchKifiCartClear());
    //@ts-ignore
    await dispatch(fetchKifiCart(data));
  };
  // console.log("AuthToken data", data);

  const handleCartAdd = async (data: any) => {
    // console.log("cart data",data);
    
    const val = {
      data: {
        qty: data?.qty + 1,
      },
      id: data?.id,
      token: data,
    };
    //@ts-ignore
    await dispatch(fetchKifiCartUpdate(val));

    //@ts-ignore
    await dispatch(fetchKifiCart(data));
  };
  const handleCartDecr = async (data: any) => {
    console.log("data?.qty", data?.qty);
    const val = {
      data: {
        qty: data?.qty - 1,
      },
      id: data?.id,
      token: data,
    };
    if (data?.qty == 1) {
      //@ts-ignore
      await dispatch(fetchKifiCartDelete(val));
    } else {
      //@ts-ignore
      await dispatch(fetchKifiCartUpdate(val));
    }

    //@ts-ignore
    await dispatch(fetchKifiCart(data));
  };
  const location = useLocation();
  return (
    <div>
      {/* <Loader/> */}
      <div className="container mx-auto mt-10 LoadBackground">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              {/* <h2 className="font-semibold text-2xl">{CartStore?.data?.data?.carts?.map((data:any)=>data?.qty)} Items</h2> */}
            </div>

            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Total
              </h3>
            </div>
            {CartStore?.data?.data?.carts.map((data: any) => {
              return (
                <>
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-2/5">
                      {/* <!-- product --> */}
                      <div className="w-20">
                        <img
                          className="h-24"
                          src={data?.product?.thumbnail_url}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">
                          {data?.product?.name}
                        </span>
                        <span className="text-red-500 text-xs">
                          {data?.product?.description}
                        </span>
                        <a
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                          onClick={() => handleCartDelete(data)}
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        className="btn-cart fill-current text-[#FF8F9C] w-3 "
                        viewBox="0 0 448 512"
                        onClick={() => handleCartDecr(data)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>

                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={data?.qty}
                      />

                      <svg
                        className="btn-cart fill-current text-[#FF8F9C] w-3 "
                        viewBox="0 0 448 512"
                        onClick={() => handleCartAdd(data)}
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>

                    <span className="text-center w-1/5 font-semibold text-sm">
                    &#8377;{parseFloat(data?.product.price_list?.sale_price).toFixed(
                        2
                      )}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                    &#8377;{data?.product.price_list?.sale_price * data?.qty}
                    </span>
                  </div>
                </>
              );
            })}
            <div className="flex justify-between">
              <a
                href="#"
                onClick={() => Navigate("/")}
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
              <a
                href="#"
                onClick={() => handleClearCart(data)}
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                Clear Cart
              </a>
            </div>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Free</option>
              </select>
            </div>
            <div className="py-10">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>&#8377;{CartStore?.data?.data?.subTotal}</span>
              </div>
              <button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                onClick={() => Navigate("/Login", { replace: true })}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
