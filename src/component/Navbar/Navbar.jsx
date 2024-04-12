import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiMenu2Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsShoppingBagOpen(false);
  };

  const toggleShoppingBag = () => {
    setIsShoppingBagOpen(!isShoppingBagOpen);
  };
  const closeSidebarr = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className='flex justify-around items-center bg-white'>
        <div className='laptop:hidden tablet:block' onClick={toggleSidebar}>
          <span className='text-[18px]'><HiMenuAlt1 /></span>
        </div>
        <div>
          <img className='w-full max-w-[200px] tablet:w-[150px] laptop:w-40' src="https://fone-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1660639000" alt="" />
        </div>
        <div className='laptop:block tablet:hidden'>
          <div className='flex gap-10 text-[16px] font-medium py-7'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/featured">Featured</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </div>
        </div>
        <div className=' flex gap-4 text-[25px] text-center items-center'>
          <span><CiSearch /></span>
          <span className='laptop:block tablet:hidden text-[22px]'><IoPersonOutline /></span>
          <span className='laptop:block tablet:hidden text-[27px]'><CiHeart /></span>
          <span onClick={toggleShoppingBag}><LiaShoppingBagSolid /></span>
        </div>
      </div>

      {isShoppingBagOpen && (

        <div className="border sidebar fixed top-0 right-0 h-screen w-[300px] z-10 flex text-center">
          <p className='border h-[40px] w-[20%] text-[25px] flex justify-center ' onClick={closeSidebar}>x</p>
          <p className='border h-[40px] w-[75%] flex justify-center text-[25px] font-semibold'>Shopping Cart</p>
          <p className='border h-[40px] w-[20%] text-[22px] flex justify-center '>1</p>
        </div>

      )}

      {isSidebarOpen && (
        <div className="sidebar fixed top-0 left-0 h-screen w-[300px] z-10">
          <div className='flex h-14'>
            <button className='menubuton flex items-center bg-black text-white w-[150px] justify-center gap-3'><i className='text-[20px]'><RiMenu2Line /></i>  MENU </button>
            <button className='sidebar flex items-center bg-white w-[150px] justify-center gap-3 border border-transparent'><p className='text-[20px]'><i ><IoPersonOutline /></i></p> LOGIN </button>
          </div>
          <div className='sidebar flex flex-col'>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/">Home <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Shop">Shop <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Featured">Featured <span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Pages">Pages<span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
            <NavLink className='border flex items-center justify-between text-center text-[16px] font-medium pl-3' to="/Blogs">Blogs<span className='border h-14 flex items-center justify-center w-10 text-[13px]'><FaChevronRight /></span></NavLink>
          </div>
          <button onClick={closeSidebarr} className="absolute bottom-0 left-0 w-full py-2 bg-customGreen text-center buton">Close</button>
        </div>
      )}
    </>
  )
}

export default Navbar;
