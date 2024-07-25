import React from 'react'
import Logo from './Logo'
import { GoSearch } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";   //userer logo from reactwebsite
import { FaShoppingCart } from "react-icons/fa";     // cart logo from reactwebsite
import { Link } from 'react-router-dom';
 
function Header() {
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}>
          <Logo h={50} w={90} />
          </Link>
        </div>

        {/* search bar */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search the iteam....' className='w-full outline-none'></input>
          
          {/* search icons */}
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GoSearch />
          </div>
        </div>

        {/* # user interface--------------------->> */}
        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer relative flex justify-center'>
            < FaRegCircleUser />
          </div>

          {/* cart------------- */}
          <div className='text-2xl relative'>
            <span><FaShoppingCart /></span>

            <div className='bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center rounded-full absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          {/* login----------------------------- */}
          <div className='' >
            <Link to={'/Login'} className='bg-blue-600 text-white rounded-full  px-3 py-1 hover:bg-red-700'>Login</Link>
          </div>
        </div>

      </div >
    </header>
  );
}


export default Header;