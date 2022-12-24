import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {

    const rLoc = useLocation();
    const rNav = useNavigate();

    function pathMatchRoute(route) {
       if (route === rLoc.pathname) {
          return true;
       }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img className='h-5 cursor-pointer'  src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo"  onClick={()=>rNav("/")}/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black  border-b-red-500"}`} onClick={()=>rNav("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && " text-black  border-b-red-500"}`} onClick={()=>rNav("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/sign-in") && " text-black  border-b-red-500"}`} onClick={()=>rNav("/sign-in")}>Sign In</li>
                </ul>
            </div>

        </header>
    </div>
  )
}
