import React from 'react'
import Logo from '../Resource/logo.png'
import { Link } from 'react-scroll';

function Footer() {
  return (
   
<footer className="p-4 bg-[#000000] rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
<div className="sm:flex sm:items-center sm:justify-between">
    <a href="https://codezola.com/" className="flex items-center mb-4 sm:mb-0">
        <img src={Logo} className="mr-3 h-8" alt="CodeZola Logo"/>
        <span className="block text-sm text-orange-500 sm:text-center dark:text-orange-400">CodeZola</span>
    </a>
    <ul className="flex flex-wrap items-center mb-6 text-sm text-orange-500 sm:mb-0 dark:text-orange-400">
        <li>
        <Link to='about' smooth={true} duration={500}>
        About
      </Link>
        </li>
       
        
        <li>
        <Link to='skills' smooth={true} duration={500}>
        Skills
      </Link>
        </li>
    </ul>
</div>
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://codezola.com/" className="hover:underline">CodeZola™</a>
</span>
</footer>

  )
}

export default Footer