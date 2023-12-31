import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchKifiLogin } from "../../views/desktop/kifi/Login/Login.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.scss";
function Login() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    email: email,
    password: password,
  };
  const kifLogin = useSelector((state: any) => state.Login);
  const handleLogin = () => {
    sessionStorage.setItem("AuthToken", kifLogin?.data?.errormessage?.token);
  // console.log("kifLoginkifLogin", kifLogin?.data?.errormessage?.token);

    //@ts-ignore
    
    dispatch(fetchKifiLogin(params));
    // Navigate("/Payment ")
    if (kifLogin?.data?.errorcode == 0) {
      toast.success(kifLogin?.data?.data);
      setTimeout(() => {
        Navigate("/");
      }, 2000);
    }
    else if(kifLogin?.data?.errorcode == 10)
    {
    toast.error(kifLogin?.data?.errormessage);
    }
  };
  // const LoginUser = sessionStorage.getItem("AuthToken")

  // useEffect(()=>{
  //   LoginUser
  // },[])
  const data = window.sessionStorage.getItem("AuthToken");

  return (
    <div className="LoginContainer min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center">
          <img
            // src="https://source.unsplash.com/random/200x200"
            src="https://img.freepik.com/premium-vector/businessman-icon-color-vector-illustration_755164-2088.jpg"
            alt="Unsplash Photo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="mt-4" onChange={(e: any) => setEmail(e.target.value)}>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <p id="password-strength" className="text-gray-600 mt-2"></p>
        </div>
        <div className="mt-6">
          <button
            id="login-btn"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <span
            className="p-4 w-full text-center"
            onClick={() => Navigate("/Register")}
          >
            New to kifi? Create an Account
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
