import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchKifiCart } from "../../../views/desktop/kifi/Cart/Cart.slice";

function Cart() {
  const Navigate = useNavigate();
  const dispatch = useDispatch()
  // const history = useNavigate();
  // useEffect(() => {
  //   Navigate("/Cart");
  // }, []);
  // useEffect(()=>{

  // })
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchKifiCart("?location_id=2&Authorization=Bearer{eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWQ3ZGYzZGE2MGJmMjQ0NTY1MGRkZGI0ZDRhZWY0ZDAxZGEyNzNkODM4YWU1YmRhMjhiZjAxMmFjOWFlNTYyMTg0ZDVkNDM4Nzc2MTliZTEiLCJpYXQiOjE2OTIxODgwOTAuMjk5OTYyOTk3NDM2NTIzNDM3NSwibmJmIjoxNjkyMTg4MDkwLjI5OTk2NzA1MDU1MjM2ODE2NDA2MjUsImV4cCI6MTcyMzgxMDQ5MC4yOTc5NTE5MzY3MjE4MDE3NTc4MTI1LCJzdWIiOiI1NSIsInNjb3BlcyI6W119.uFTG5IwgfKSrwa6TYyOQ9iY0MbS7xSPzUngCJenNoLFPkCC2hxtF8yJaPd4oXCznBvn7qmLuXugdgdcchDlyVb-KVfwDV0apieKR7fo5DhLl0Jcxk5wjWwX4mO56R-o4VCr5I9gzn_57lqC6xjbimXueiqNalnzNQJ3uXPEdD_gzY9_h4_jWhOMAK95zji-lIt40l658Cv4mcGY6ICTqO_uzATKAyrndNdXk31svkd2u6PWH-1coKOoGke7HYpkBQ7NSXDqaP_DOdKVP3-ijjr8Y2lPpBcor0vDofLSB-YRIUAmIr5KqRTuybfR7f_z7k9LEiPD7j5a1g74hxJUZkAK4jwwBcLGGDbXO4m5oM9oZMj5iTLmtn0dcOhyRorf40_IdHu-KjqCKYAN_2gDekNFpQKj1702xytGSJOfy7otSKTdKvxcGRoLdZ6oVA1Da7YZzWtk9ZjUMvCJniikixJZosLlpZfHymDJrHLxGZGWtcuKFcg73COR44H9VYTc0o3xWKZP7cGAu-vsT1GdGnu-8XRA370Cpqn-x3pLh9OmcBgzqS5hFPEBQvbqJ6fS0K804lDHCF-0YaZbkQDPS01wVHAEmSNwTfqN9l_rqAuUQLehWKFv2AAQrNPh_VvQbEv_nGSSYPIXj6Fq5FtSr1k1xlMoWZ1nMAZOVDx2K1F8}"));

  }, []);

  
  const location = useLocation();

  console.log("cart details", location?.state?.name);
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">1 Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                {/* <!-- product --> */}
                <div className="w-20">
                  <img className="h-24" src={location?.state?.image} alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">
                    {location?.state?.name}
                  </span>
                  <span className="text-red-500 text-xs">Marine Fish</span>
                  <a className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                    Remove
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />

                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                $400.00
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                $400.00
              </span>
            </div>

            

           

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
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
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
                <span>$600</span>
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
