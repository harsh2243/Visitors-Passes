import React from 'react';
import Image from "./images/sviet logo.jpg"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
            <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                <div className="relative flex items-center">
                    <a href="/">
                        <img className="block h-12 w-auto" height="32" src={Image} alt="Logo" />
                    </a>
                </div>
                {/* <ul className="hidden items-center justify-center gap-6 md:flex">
                    <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                        <a href="#">Pricing</a>
                    </li>
                    <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                        <a href="#">Blog</a>
                    </li>
                    <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
                        <a href="#">Docs</a>
                    </li>
                </ul> */}
                <div className="flex-grow"></div>
                <div className="hidden items-center justify-center gap-6 md:flex">
                    <a className="font-dm text-sm font-medium text-slate-700" ><Link to="/section2">Login</Link></a>
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
    );
}

export default Nav;
