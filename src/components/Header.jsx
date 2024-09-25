import React, {useState} from 'react'
import prime_logo from './../assets/logos/primenav.png'
import logo from './../assets/logos/Amazon_Prime_Video_logo.svg.png'
import profileicon from './../assets/icons/profile.png'

import { TbLayoutGridAdd, TbGridDots } from "react-icons/tb";
import { PiLineVerticalBold }  from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {

  const menuList = [
    { name: 'Home', href: '/'},
    { name: 'Movies', href: '/'},
    { name: 'TV Shows', href: '/'},
    { name: 'Live TV', href: '/'},
  ]

  const genreList = [
    {name: 'Action and Adventure', href: '/'},
    {name: 'Comedy', href: '/'},
    {name: 'Documentary', href: '/'},
    {name: 'Drama', href: '/'},
    {name: 'Fantasy', href: '/'},
    {name: 'Horror', href: '/'},
    {name: 'Kids', href: '/'},
    {name: 'Mystery and Thrillers', href: '/'},
    {name: 'Romance', href: '/'},
    {name: 'Science Fiction', href: '/'},

  ]

  const featuredCollectionList = [
    {name: 'Home Premiere', href: '/'},
    {name: 'New Releases',  href: '/'},
    {name: 'miniTV',  href: '/'},
    {name: 'Critically acclaimed', href: '/'},
    {name: 'Kids', href: '/'},
  ]

  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false)
  const toggleMenuDropdown = () => {
    setMenuDropdownOpen(!menuDropdownOpen);
  };

  const [dotGridDropdown, setDropdownOpen] = useState(false);
  const toggleDotGridDropdown = () => {
    setDropdownOpen(!dotGridDropdown);
  };

  return (
    <nav className='bg-black z-50 top-0 opacity-80 backdrop-blur-sm py-1 fixed w-full'>
      {/* Wide Screen Nav */}
        <div className='hidden md:flex justify-between items-center'>
            <div className='flex justify-start gap-6 px-5 py-2 items-center text-white text-base font-semibold text-nowrap'>
              <img src={logo} alt="" className='w-auto h-8'/>

              {menuList.map(( item, index) => (
                <a key={index} href={item.href} className="px-3 py-2 hover:bg-white hover:text-black hover:rounded-lg">{item.name} </a>
              ))}

              <PiLineVerticalBold className='text-3x text-gray-400' />
              <img src={prime_logo} alt="" className='h-10 w-auto py-1.5 px-3 hover:bg-[#0579FE] hover:text-black hover:rounded-lg bg-opacity-100'/>
              <a href="/" className='flex items-center px-3 py-2 hover:bg-white hover:text-black hover:rounded-lg gap-1.5'>
                <TbLayoutGridAdd className='text-2xl'/>
                <h1 className=''>Subscriptions</h1>
              </a>
            </div>
            <div className='flex items-center text-4xl gap-2 me-5'>
              <IoSearch className=' text-white hover:text-black p-2 rounded-full hover:bg-white cursor-pointer'/>

              <div className='' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)} onClick={toggleDotGridDropdown}>
                <TbGridDots className=' text-white hover:text-black p-2 rounded-full hover:bg-white cursor-pointer' />
                {dotGridDropdown && (
                <div className='absolute top-12 right-6 bg-black backdrop-blur-sm rounded-xl flex  p-3 pt-5'>
                  <div>
                    <h1 className='text-base text-gray-500 font-normal mx-5 cursor-default'>GENRES</h1>
                      <div className='grid grid-cols-2 p-3 gap-x-3 gap-y-2'>
                      {genreList.map((item, index) => (
                        <a href={item.href} key={index} className='text-sm text-white font-normal hover:bg-white hover:text-black rounded-lg p-2'>{item.name} </a>
                      ))}
                      </div>
                  </div>
                  <div>
                    <h1 className='text-base text-gray-500 font-normal mx-5 cursor-default'>FEATURED COLLECTIONS</h1>
                      <div className='flex flex-col p-3 gap-x-3 gap-y-2'>
                      {featuredCollectionList.map((item, index) => (
                        <a href={item.href} key={index} className='text-sm text-white font-normal hover:bg-white hover:text-black rounded-lg p-2'>{item.name} </a>
                      ))}
                      </div>
                  </div>
                </div>   
                )}
              </div>

              <FaRegBookmark className=' text-white hover:text-black p-2 rounded-full hover:bg-white cursor-pointer' />
              <img src={profileicon} alt="" className='w-12 h-12 p-1.5 rounded-full hover:bg-white cursor-pointer'/>
            </div>
        </div>

        {/* Mobile Screen Nav */}
        <div className='md:hidden flex justify-between items-center mx-2'>
          <div className='flex items-cente px-2 py-2 text-white hover:bg-white hover:text-black hover:rounded-lg gap-1.5 cursor-pointer' onClick={toggleMenuDropdown}>
            <h1 className='font-semibold'>Menu</h1>
            <MdOutlineKeyboardArrowDown className='text-2xl'/>
          </div>
          {menuDropdownOpen && (
            <div className='absolute top-14 bg-black  backdrop-blur-sm flex flex-col p-3 rounded-lg space-y-2'>
              {menuList.map((item, index) => (
                <a key={index} href={item.href} className='text-lg text-white px-3 py-2 hover:bg-white hover:text-black hover:rounded-lg'>{item.name} </a>
              ))}
              <img src={prime_logo} alt="" className='h-10 w-fit py-1.5 px-16 bg-[#0564fe] rounded-lg opacity-100'/>
              <a href="/" className='flex text-white text-lg items-center px-3 py-2 hover:bg-white hover:text-black hover:rounded-lg gap-1.5 bg-gray-800 rounded-lg'>
                <TbLayoutGridAdd className='text-2xl'/>
                <h1 className=''>Subscriptions</h1>
              </a>

            </div>
          )}
          

          <img src={logo} alt="" className='w-auto h-8'/>
          <div className='flex gap-2 items-center'>
            <IoSearch className='text-white text-4xl hover:text-black p-2 rounded-full hover:bg-white cursor-pointer' />
            <img src={profileicon} alt="" className='w-12 h-12 p-1.5 text-white rounded-full hover:bg-white cursor-pointer'/>
          </div>
        </div>
    </nav>
  );
}

export default Header
