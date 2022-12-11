import React, {useState} from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='mainNavigationBar flex flex-col bg-slate-800'>
            <div className='p-4 flex flex-row'>
                <div className='basis-1/2 text-white font-bold'>Finance Tracker</div>
                <div className='basis-1/2 text-end sm:hidden'><a onClick={() => {setShowMenu(!showMenu)}} href='#'><i className="ri-menu-line"></i></a></div>
                <div className='nav-links basis-1/2 justify-center hidden sm:block'>
                    <ul className='flex flex-row justify-end text-gray-400'>
                        <li><a className='p-4 hover:text-white' href="#">Home</a></li>
                        <li><a className='p-4 hover:text-white' href="#">About</a></li>
                        <li><a className='p-4 hover:text-white' href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className={showMenu == true? 'sm:hidden p-1 flex flex-col text-center bg-slate-700' : "hidden"} >
                <ul>
                    <li className='p-1 hover:font-bold hover:text-white'><a href="#">Home</a></li>
                    <li className='p-1 hover:font-bold hover:text-white'><a href="#">About</a></li>
                    <li className='p-1 hover:font-bold hover:text-white'><a href="#">Contact</a></li>

                </ul>
            </div>
        </div>

    )
}

export default Navbar

