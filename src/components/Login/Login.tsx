import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
function Login() {
  const Navigate = useNavigate();
  return (
    <div className="LoginContainer min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center">
          <img
            // src="https://source.unsplash.com/random/200x200"
            src="https://img.freepik.com/premium-vector/businessman-icon-color-vector-illustration_755164-2088.jpg"
            alt="Unsplash Photo"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="mt-4">
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
          />
          <p id="password-strength" className="text-gray-600 mt-2"></p>
        </div>
        <div className="mt-6">
          <button
            id="login-btn"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => Navigate("/Payment ")}
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
