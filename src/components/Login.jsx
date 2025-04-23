import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Forgot from "./Forgot";
import Back from "./Back";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/"); 
  };

  return (
    <div>
    <div><Back/></div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-[400px] relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-md">
          <img
            src="./src/assets/Logo.png"
            alt="Naukri Logo"
            className="h-15"
          />
        </div>
        <form className="mt-12" onSubmit={handleLogin}>
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Login
          </button>
          <Link to='/forgot'>Forgot Password?</Link>
          
        </form>
        <br></br>
        <Link to='/register' className="text-blue-900">Register </Link>Here
      </div>
    </div>
    </div>
  );
}
