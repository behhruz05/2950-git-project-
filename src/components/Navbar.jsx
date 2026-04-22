import React from 'react'
import logo from "../assets/logo.png";
const Navbar = () => {
    return (
        <div>
      <div className="bg-gray-50 border-b text-sm text-gray-500 px-6 py-1.5 flex justify-between items-center">
        <div className="flex gap-4">
          <a href="#">About Us</a>
          <a href="#">My Account</a>
          <a href="#">Wishlist</a>
          <a href="#">Order Tracking</a>
        </div>

        <span className="text-green-600 font-medium">
          100% Secure delivery without contacting the courier
        </span>

        <div className="flex gap-3 items-center">
          <span>Need help? Call Us: <strong>+1800900122</strong></span>
          <span>English ▾</span>
          <span>INR ▾</span>
        </div>
      </div>

      <div className="px-6 py-3 flex items-center gap-4">

        <div className="flex items-center gap-2 ">
          <img src={logo} alt="Logo" className="w-43 h-13 " />
        </div>

        <div className="flex flex-1 border border-green-600 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-4 py-2 text-sm outline-none"
          />
          <button className="bg-green-600 text-white px-5 py-2 text-sm font-medium">
            Search
          </button>
        </div>

        <button className="border border-green-600 text-green-600 px-4 py-2 rounded-md text-sm whitespace-nowrap hover:bg-green-50">
          Become Vendor →
        </button>

        <div className="flex gap-5 items-center">

          <div className="relative flex flex-col items-center cursor-pointer text-xs text-gray-500">
            <span className="text-lg">⇄</span>
            <span className="absolute -top-1.5 -right-2 bg-green-600 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">0</span>
            Compare
          </div>

          <div className="relative flex flex-col items-center cursor-pointer text-xs text-gray-500">
            <span className="text-lg">♡</span>
            <span className="absolute -top-1.5 -right-2 bg-green-600 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">0</span>
            Wishlist
          </div>

          <div className="relative flex flex-col items-center cursor-pointer text-xs text-gray-500">
            <span className="text-lg">🛒</span>
            <span className="absolute -top-1.5 -right-2 bg-green-600 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">0</span>
            Cart
          </div>

          <div className="flex flex-col items-center cursor-pointer text-xs text-gray-500">
            <span className="text-lg">👤</span>
            Account
          </div>

        </div>
      </div>
    </div>
    )
}

export default Navbar
