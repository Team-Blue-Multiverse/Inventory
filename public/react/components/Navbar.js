import React, { useState } from "react"
import { Link } from 'react-router-dom'

export const Navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="flex items-center justify-between flex-wrap p-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <Link to='/'><p className="text-blue-500 font-bold text-2xl">Team Blue</p></Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-300 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-sm">
            <a href="/items" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 hover:text-blue-400 duration-500">
              Items
            </a>
            <a href="/sauces" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4 hover:text-blue-400 duration-500">
              Sauces
            </a>
          </div>
        </div>
      </nav>
    )
}