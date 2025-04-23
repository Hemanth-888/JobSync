import React from "react";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
// import '../App.css';


export default function Navbar({ toggleTheme, isDark }) {
  return (
    <header className={`w-full shadow-md px-6 py-4 flex items-center justify-around ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="text-2xl font-bold text-blue-700"><Link to='/'>JobSync AI</Link></div>

<div className="hidden md:flex space-x-6 relative">
  <div className="group relative">
    <Link to="/" className="hover:underline">Home</Link>
  </div>

  {/* About Us Dropdown */}
  <div className="group relative">
    <span className="cursor-pointer">About Us</span>
    <div className="absolute top-full left-0 mt-3 w-56 bg-white text-black rounded-xl shadow-xl border border-gray-200 hidden group-hover:flex flex-col p-4 z-50">
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Achievemnts</p>
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Helpline contact</p>
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Careers</p>
    </div>
  </div>

  {/* Services Dropdown */}
  <div className="group relative">
    <span className="cursor-pointer">Services</span>
    <div className="absolute top-full left-0 mt-3 w-56 bg-white text-black rounded-xl shadow-xl border border-gray-200 hidden group-hover:flex flex-col p-4 z-50">
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Resume score checker</p>
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">AI Mock Interviews</p>
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Job Assistance</p>
    </div>
  </div>

  <div className="group relative">
    <span className="cursor-pointer">Companies</span>
    <div className="absolute top-full left-0 mt-3 w-56 bg-white text-black rounded-xl shadow-xl border border-gray-200 hidden group-hover:flex flex-col p-4 z-50">
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Top MNCs</p>
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Startups</p>
      <p className="hover:bg-gray-100 rounded-md px-3 py-2 cursor-pointer">Hiring Now</p>
    </div>
  </div>
</div>



      <label className="flex items-center cursor-pointer">
        <input type="checkbox" checked={isDark} onChange={toggleTheme} className="sr-only" />
        <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner relative">
          <div className={`dot absolute w-5 h-5 bg-white rounded-full transition ${isDark ? 'translate-x-5' : 'translate-x-0'}`}></div>
        </div>
      </label>



      <div className="flex space-x-4">
        <Button className=" bg-white border border-blue-600 text-blue-600 hover:bg-blue-50"><Link to='/Login'>Login</Link></Button>
        <Button className="bg-blue-600 text-white hover:bg-blue-700"><Link to='/Register' className="learn-more">Register</Link></Button>
      </div>
    </header>
  );
}
