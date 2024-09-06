"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from './loading';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [loading, setLoading] = useState(true);

    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // useEffect(() => {
    //     // Simulasi loading selama 2 detik
    //     const timer = setTimeout(() => setLoading(false), 1000);
    //     return () => clearTimeout(timer);
    //   }, []);

    // if (loading) {
    //     return <Loading />;
    // }
    
    return (
        <nav className="flex items-center justify-between px-20 md:px-60 py-4 bg-white shadow relative z-50">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center md:w-1/3">
                <img src="/Logo-Pelsis.png" alt="Logo" className="h-20 md:h-20" />
            </div>

            {/* Navbar Links (Desktop) */}
            <div className="hidden md:flex flex-grow items-center text-center justify-center space-x-40">
                <Link href="/" className="text-gray-500 font-semibold hover:text-pink-700 text-2xl md:text-xl">Beranda</Link>
                <Link href="/Sejarah" className="text-gray-500 font-semibold hover:text-pink-700 text-2xl md:text-xl">Sejarah</Link>
                <Link href="/Events" className="text-gray-500 font-semibold hover:text-pink-700 text-2xl md:text-xl">Events</Link>
            </div>

            {/* Login (Desktop) */}
            <div className="hidden md:flex items-center space-x-4 md:w-1/3 justify-end">
                <span className="text-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 18.364A3.513 3.513 0 016 19h12a3.5 3.5 0 003.5-3.5V7.5A3.5 3.5 0 0018 4h-2a3.5 3.5 0 00-6 0H6A3.5 3.5 0 002.5 7.5v8a3.5 3.5 0 002.621 3.364z" />
                    </svg>
                </span>
                <Link href="#" className="text-black font-semibold text-lg md:text-xl">Login</Link>
            </div>

            {/* Hamburger Menu and PELSIS text for Mobile */}
            <div className="md:hidden flex justify-between items-center w-full relative">
                <div className="flex-1 flex justify-center">
                    <span className="text-black font-bold text-xl text-pink-500">PELSIS</span>
                </div>
                <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 z-50">
                        <Link href="/" className="text-gray-500 font-semibold hover:text-pink-500 text-2xl">Beranda</Link>
                        <Link href="/Sejarah" className="text-gray-500 font-semibold hover:text-pink-500 text-2xl">Sejarah</Link>
                        <Link href="/Events" className="text-gray-500 font-semibold hover:text-pink-500 text-2xl">Events</Link>
                        <Link href="#" className="text-gray-500 font-semibold hover:text-pink-500 text-2xl">Login</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
