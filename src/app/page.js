
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className="relative">
      {/* Background Image */}
      <div className="h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.H__9-YnhFyoutTOcTVxryAHaEK?rs=1&pid=ImgDetMain')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>


        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-16 py-4 bg-black/70 backdrop-blur-md text-white">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold">Code Rower</span>
            <span className="text-sm text-gray-300">Software Company</span>
          </div>

         {/* Desktop Menu */}
<ul className="hidden lg:flex space-x-8 text-sm items-center">
  <li className="hover:text-yellow-400 cursor-pointer">Home</li>
  <li className="hover:text-yellow-400 cursor-pointer"><Link href='/about'>About us</Link></li>
  <li className="hover:text-yellow-400 cursor-pointer"><Link href='/product'>Products</Link></li>
  <li className="hover:text-yellow-400 cursor-pointer"><Link href='/fetchdata'>FetchData</Link></li>
  <li className="hover:text-yellow-400 cursor-pointer">Customer Support</li>
  <li className="hover:text-yellow-400 cursor-pointer"><Link href='/contact'>Contact Us</Link></li>
 
  {/* Auth buttons */}
  <li>
    <Link href="/signup" className="bg-yellow-500 text-black px-3 py-1 rounded-full hover:bg-yellow-400">Sign Up</Link>
  </li>
  <li>
    <Link href="/signin" className="border border-yellow-500 text-yellow-500 px-3 py-1 rounded-full hover:bg-yellow-500 hover:text-black">Sign In</Link>
  </li>
</ul>


          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-yellow-400">
              Search
            </button>
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
{isOpen && (
  <div className="lg:hidden fixed top-16 left-0 right-0 bg-black/90 text-white p-4 z-50 space-y-4 text-center">
    <div className="hover:text-yellow-400">Home</div>
    <div className="hover:text-yellow-400"><Link href='/about'>About us</Link></div>
    <div className="hover:text-yellow-400"><Link href='/product'>Products</Link></div>
    <div className="hover:text-yellow-400"><Link href='/fetchdata'>FetchData</Link></div>
    <div className="hover:text-yellow-400">Customer Support</div>
    <div className="hover:text-yellow-400"><Link href='/contact'>Contact Us</Link></div>
    <div className="hover:text-yellow-400">More</div>

    {/* Auth buttons */}
    <div>
      <Link href="/signup" className="block bg-yellow-500 text-black px-4 py-2 rounded-full mb-2 hover:bg-yellow-400">Sign Up</Link>
      <Link href="/signin" className="block border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black">Sign In</Link>
    </div>
  </div>
)}


       
      </div>
    </header>
    <br/><br/>
<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, nisl vel aliquet cursus, turpis justo pulvinar nisi, non pulvinar neque eros ut erat. Phasellus a magna et leo rutrum euismod.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec diam nec magna malesuada convallis. Integer non justo nec nisl convallis dictum.

Curabitur auctor, metus sit amet feugiat luctus, justo orci luctus urna, at pretium ex erat nec arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.


</h1>
<br/><br/><br/>

{/* Footer */}
<footer className="bg-black/90 text-white px-4 mt-40 lg:px-16 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Column 1: About */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Code Rower</h3>
      <p className="text-sm text-gray-400">
        A modern software company delivering tailored solutions. Innovate, scale, and grow with us.
      </p>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
      <ul className="text-sm text-gray-300 space-y-2">
        <li className="hover:text-yellow-400 cursor-pointer"><Link href='/about'>About us</Link></li>
        <li className="hover:text-yellow-400 cursor-pointer"><Link href='/product'>Products</Link></li>
        <li className="hover:text-yellow-400 cursor-pointer">Customer Support</li>
        <li className="hover:text-yellow-400 cursor-pointer"><Link href='/contact'>Contact Us</Link></li>
      </ul>
    </div>

    {/* Column 3: Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
      <p className="text-sm text-gray-400">Email: support@coderower.com</p>
      <p className="text-sm text-gray-400">Phone: +1 234 567 8901</p>
      <p className="text-sm text-gray-400">Location: New York, USA</p>
    </div>
  </div>

  {/* Bottom line */}
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Code Rower. All rights reserved.
  </div>
</footer>

    </>
  );
}
