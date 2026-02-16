import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";

const Navbar = () => {
    const { setShowSearch } = useContext(ShopContext);


    const[visible, setVisible] = React.useState(false)
    



  return (
    <div className="flex items-center justify-between py-4 sm:py-5 font-medium">
      <Link to="/"><img src={assets.logo.png} className="w-28 sm:w-36" alt="" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer text-gray-700 hidden sm:block"
          onClick={() => setShowSearch(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        {/* Profile Icon (you can still use image or SVG) */}
        <div className="relative group">
          {/* Profile Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 cursor-pointer text-gray-700 hidden sm:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 15 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.5-1.632Z"
            />
          </svg>

          {/* Dropdown Menu */}
          <div className="hidden group-hover:block absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>

              <p className="cursor-pointer hover:text-black">Orders</p>

              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          className="w-5 h-5 cursor-pointer text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.633.633-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            3
          </p>
        </Link>
        <svg onClick={()=>setVisible(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

        {/* Mobile Menu */}
        {visible && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10">
            <div className="absolute top-0 right-0 w-64 h-full bg-white p-4">
              <button
                onClick={() => setVisible(false)}
                className="absolute top-4 right-4 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col gap-4 mt-8">
                <li>
                  <NavLink to="/home" className="text-gray-700 hover:text-black">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/collection" className="text-gray-700 hover:text-black">
                    COLLECTION
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-gray-700 hover:text-black">
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="text-gray-700 hover:text-black">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}

    </div>
  );
};

export default Navbar;
