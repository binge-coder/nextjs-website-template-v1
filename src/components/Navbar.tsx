"use client"
import React, {useState} from 'react'
import { FaBars , FaTimes } from "react-icons/fa"
import Link from 'next/link';

const navlinks = [
    {
        title: "Home",
        href: "https://www.google.com/",
        newTab: true,
    },
    {
        title: "Locate",
        href: "/locate",
        newTab: true,
    },
    {
        title: "Credit Calculator",
        href: "/credit_calculator",
        newTab: true,
    },
    {
        title: "About",
        href: "/about",
        newTab: true,
    },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };
  return (
    <div className='bg-gray-800 sticky top-0 left-0'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <Link href="/" className='text-white'>
                        Logo
                    </Link>
                </div>
                {/* navlinks on desktop*/}
                <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                        {navlinks.map((myLink,index) => (
                            <Link key={index} className={`text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium `} href={myLink.href} target={myLink.newTab? '_blank' : '_self'}>{myLink.title}</Link>
                        )
                        )}
                    </div>
                </div>
                {/* hamburger button */}
                <div className='-mr-2 flex md:hidden'>
                    <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                        <span className='sr-only'>Open main menu</span>
                        {open == true ? <FaTimes className='w-8 h-8'/> : <FaBars className='w-8 h-8'/>}
                    </button>
                </div>
            </div>
        </div>
        {/* mobile menu */}
        {open ? (
            <div className='md:hidden'>
                <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navlinks.map((myLink,index) => (
                            // <a key={index} className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium' href={myLink.href}>{myLink.title}</a>
                            <Link key={index} className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium' href={myLink.href} target={myLink.newTab? '_blank' : '_self'}>{myLink.title}</Link>
                        )
                        )}
                </div>
            </div>
        ) : null }
    </div>
  )
}

export default Navbar