'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `sticky top-0 z-50 w-full transition-all duration-300 ${
    isScrolled 
      ? 'bg-(--color-brown-900) shadow-lg py-4' 
      : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClasses}>
      {/* Main container defines the flex context */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
        
        {/* --- COLUMN 1: LEFT (Logo) --- */}
        {/* flex-1 makes it take available space. justify-start pushes content left. */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className=" font-bold text-(--color-cream-50) shrink-0 text-xl md:text-2xl transition-all z-10">
            MAK Furnitures
          </Link>
        </div>

        {/* --- COLUMN 2: CENTER (Desktop Nav) --- */}
        {/* flex-1 takes equal space. justify-center centers the links perfectly. */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8  font-medium text-(--color-cream-200)">
          <Link href="/products" className="hover:scale-125 transition-transform duration-300 font-old">
            Products
          </Link>
          <Link href="/customization" className="hover:scale-125 transition-transform duration-300 font-old">
            Customization
          </Link>
          <Link href="/portfolio" className="hover:scale-125 transition-transform duration-300 font-old">
            Portfolio
          </Link>
        </nav>

        {/* --- COLUMN 3: RIGHT (Buttons) --- */}
        {/* flex-1 takes equal space. justify-end pushes content right. */}
        <div className="flex-1 flex justify-end items-center">
          
          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="px-6 py-2 bg-(--color-cognac-default) text-white rounded-full hover:bg-(--color-cognac-light) transition-colors shadow-md font-bold">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-(--color-cream-50) p-2 z-50 relative cursor-pointer focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* --- MOBILE MENU DROPDOWN (Unchanged) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-(--color-brown-900) border-t border-(--color-brown-800) shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col items-center py-8 gap-6 font-(--font-inter) text-lg text-(--color-cream-50)">
            <Link href="/products" onClick={toggleMenu} className="hover:text-(--color-cognac-default) transition-colors">
              Products
            </Link>
            <Link href="/customization" onClick={toggleMenu} className="hover:text-(--color-cognac-default) transition-colors">
              Customization
            </Link>
            <Link href="/portfolio" onClick={toggleMenu} className="hover:text-(--color-cognac-default) transition-colors">
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              onClick={toggleMenu}
              className="mt-4 px-6 py-3 bg-(--color-cognac-default) text-white rounded-full hover:bg-(--color-cognac-light) transition-colors shadow-md font-medium"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}