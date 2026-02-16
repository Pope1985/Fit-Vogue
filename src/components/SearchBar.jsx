import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const{search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location =useLocation();

    useEffect(() => {
      if (location.pathname.includes('collection')) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, [location]);




  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center gap-3 border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={handleSearchChange} className='flex-1 outline-none bg-inherit text-sm ' type="text" placeholder='search' />
        <img className='w-4' src={assets.search_icon} alt="" />
        <button type="button" onClick={() => setShowSearch(false)} className='p-1 text-gray-500 hover:text-gray-700'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    </div>
  ) : null
}

export default SearchBar
