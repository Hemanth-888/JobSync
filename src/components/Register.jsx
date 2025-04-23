import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Back from "./Back";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/Login"); // Navigate to home after registration
  };

  return (
    <div>
    <div><Back/></div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-[450px] relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-4 shadow-md">
          <img
            src="./src/assets/Logo.png"
            alt="Naukri Logo"
            className="h-15"
          />
        </div>
        <form className="mt-12" onSubmit={handleRegister}>
          <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Register
          </button>
          
         
        </form>
        <br></br>
        Already have an account <Link to='/login' className="text-blue-800">Login </Link>Here
      </div>
    </div>
    </div>
  );
}
