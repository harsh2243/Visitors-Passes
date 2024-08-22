import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Image from "./images/sviet logo.jpg"

const Home = () => {
  return (
<div>
<header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                <div className="relative flex items-center">
                    <a href="/">
                        <img className="block h-12 w-auto" height="32" src={Image} alt="Logo" />
                    </a>
                </div>
              
                <div className="flex-grow"></div>
                <div className="hidden items-center justify-center gap-6 md:flex">
                    <a className="font-dm text-sm font-medium text-slate-700" ><Link to="/home">Login</Link></a>
                    <a
                        className="rounded-md bg-orange-500 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-black-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]" href="/signup">
                        Sign up
                    </a>
                </div>
                <div className="relative flex items-center justify-center md:hidden">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto text-slate-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
        <br></br>
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="flex justify-center gap-5">
          <NavLink to="/userlogin" className={({isActive}) => `text-2xl font-semibold ${isActive?'text-black' : 'text-gray-400'}`} >Login</NavLink>
          <NavLink to="/signup" className={({isActive}) => `text-2xl font-semibold ${isActive?'text-black' : 'text-gray-400'}`}>Sign Up</NavLink>
         <NavLink to="/adminlogin" className={({isActive}) => `text-2xl font-semibold ${isActive?'text-black' : 'text-gray-400'}`}>Admin</NavLink>
      </div>
        <Outlet />
      </div>
    </div>
    <footer className="flex flex-col space-y-10 justify-center m-10">

<nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a className="hover:text-gray-900 text-orange-400 text" href="http://localhost:3000/">Home</a>
    <a className="hover:text-gray-900 text-orange-400 text" href="https://sviet.ac.in/">Who we Are</a>
    <a className="hover:text-gray-900 text-orange-400 text" href="https://sviet.ac.in/who-we-are/">About</a>
    {/* <a className="hover:text-gray-900 text-orange-400 text" href="#">Services</a> */}
    {/* <a className="hover:text-gray-900 text-orange-400 text" href="#">Media</a> */}
    <a className="hover:text-gray-900 text-orange-400 text" href="https://sviet.ac.in/gallery-2/">Gallery</a>
    <a className="hover:text-gray-900 text-orange-400 text" href="https://sviet.ac.in/contact-us-2/">Contact</a>
</nav>

<div className="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="Linkedin" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="Messenger" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter" />
    </a>
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reserved.</p>
</footer>
</div>
  )
}

export default Home