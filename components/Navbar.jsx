"use client";
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      

      <header className="bg-white shadow-md">
  <div className="container max-w-[88vw] mx-auto flex items-center justify-between py-4 px-6 font-[Montserrat] text-[14px]">
    <div className="flex items-center space-x-4">
      <img src="/asset-14x-1@2x.png" alt="Logo" className="h-12 w-19" />
      
    </div>
    <nav className={`flex space-x-6 ${isOpen ? "flex-col items-start" : "hidden md:flex"}`}>
      <Link href="/" className="text-gray-800 hover:text-red-400" prefetch={false}>
        Home
      </Link>
      <Link href="/About" className="text-gray-800 hover:text-red-400" prefetch={false}>
        About Us
      </Link>
      <Link href="/What-We-Do" className="text-gray-800 hover:text-red-400" prefetch={false}>
        What We Do
      </Link>
      <Link href="/portfolio" className="text-gray-800 hover:text-red-400" prefetch={false}>
        Portfolio
      </Link>
      <Link href="/blog" className="text-gray-800 hover:text-red-400" prefetch={false}>
        Blog
      </Link>
      <Link href="/career" className="text-gray-800 hover:text-red-400" prefetch={false}>
        Career
      </Link>
    </nav>
    <div className="hidden md:flex h-[43px]">
      <Link href="/contact-us" className="bg-red-600 text-white px-4 py-2 rounded-md flex justify-center items-center" prefetch={false}>
        Contact Us
      </Link>
    </div>
    <div className="md:hidden">
      <button className="text-gray-800 hover:text-gray-600" onClick={() => setIsOpen(!isOpen)}>
        <img src='/list_12713145.png' className="h-6 w-6" />
      </button>
    </div>
  </div>
</header>





    </div>
  )
}

export default Navbar
