import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='mainNavigationBar flex flex-col bg-green-600'>
      <div className='flex  p-4 flex-row'>
      <img className='w-22 h-16' src={logo} />
        <div className='basis-1/2 text-white text-xl font-bold pl-4 md:font-bold' >Mero Paisa<p className='font-normal md:font-normal'>
          Personal Finance Assistant
        </p>
        </div>
        <div className='basis-1/2 text-end sm:hidden'>
          <a onClick={handleToggleMenu} href='#'>
            <i className='ri-menu-line'></i>
          </a>
        </div>
        <div className='nav-links basis-1/3 justify-center hidden sm:block'>
          <ul className='flex flex-row justify-end text-white'>
            <li>
              <a className='p-4 hover:text-black' href='login'>
                Home
              </a>
            </li>
            <li>
              <a className='p-4 hover:text-black' href='dashboard'>
                About
              </a>
            </li>
            <li>
              <a className='p-4 hover:text-black' href='signup'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={showMenu == true ? 'sm:hidden p-1 flex flex-col text-center bg-gray-100' : 'hidden'}
      >
        <ul>
          <li className='p-1 hover:font-bold hover:text-black'>
            <a href='#'>Home</a>
          </li>
          <li className='p-1 hover:font-bold hover:text-black'>
            <a href='#'>About</a>
          </li>
          <li className='p-1 hover:font-bold hover:text-black'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;