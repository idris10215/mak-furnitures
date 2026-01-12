'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    // If we are on the homepage, scroll smoothly
    if (pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false); // Close mobile menu if open
    }
    // If NOT on homepage, let the Link handle navigation to /#targetId
    // Standard Link behavior works fine here mostly, but we close menu.
    else {
        setIsMobileMenuOpen(false);
    }
  };

  const headerClasses = `sticky top-0 z-50 w-full transition-all duration-300 bg-(--color-brown-900)/90 md:bg-(--color-brown-900) backdrop-blur-md shadow-lg py-2 md:py-4`;

  return (
    <header className={headerClasses}>
      {/* Main container defines the flex context */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
        
        {/* --- COLUMN 1: LEFT (Logo) --- */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className=" font-(--font-cinzel) font-bold text-(--color-cream-50) shrink-0 text-lg md:text-2xl transition-all z-10 tracking-widest">
            MAK Enterprises
          </Link>
        </div>

        {/* --- COLUMN 2: CENTER (Desktop Nav) --- */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8  font-medium text-(--color-cream-200)">
          <Link 
            href="/#process" 
            onClick={(e) => handleNavClick(e, 'process')}
            className="hover:scale-125 transition-transform duration-300 font-old"
          >
            Customization
          </Link>
          <Link 
            href="/#categories" 
            onClick={(e) => handleNavClick(e, 'categories')}
            className="hover:scale-125 transition-transform duration-300 font-old"
          >
            Products
          </Link>
          <Link 
            href="/#portfolio" 
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="hover:scale-125 transition-transform duration-300 font-old"
          >
            Portfolio
          </Link>
          <Link 
             href="/#why-choose-us" 
             onClick={(e) => handleNavClick(e, 'why-choose-us')}
             className="hover:scale-125 transition-transform duration-300 font-old"
          >
            Why Us
          </Link>
        </nav>

        {/* --- COLUMN 3: RIGHT (Buttons) --- */}
        <div className="flex-1 flex justify-end items-center">
          
          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <a 
                href="https://wa.me/919845603386?text=Hello%20I%20am%20interested%20in%20your%20furniture" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-(--color-cognac-default) text-white rounded-full hover:bg-(--color-cognac-light) transition-colors shadow-md font-bold"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-(--color-cream-50) p-1 z-50 relative cursor-pointer focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* --- MOBILE MENU DROPDOWN (Unchanged) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-(--color-brown-900)/60 backdrop-blur-md border-t border-(--color-brown-800) shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col items-center py-4 gap-4 font-(--font-inter) text-base text-(--color-cream-50)">
            <Link 
                href="/#process" 
                onClick={(e) => handleNavClick(e, 'process')} 
                className="hover:text-(--color-cognac-default) transition-colors"
            >
              Customization
            </Link>
            <Link 
                href="/#categories" 
                onClick={(e) => handleNavClick(e, 'categories')} 
                className="hover:text-(--color-cognac-default) transition-colors"
            >
              Products
            </Link>
            <Link 
                href="/#portfolio" 
                onClick={(e) => handleNavClick(e, 'portfolio')} 
                className="hover:text-(--color-cognac-default) transition-colors"
            >
              Portfolio
            </Link>
             <Link 
                href="/#why-choose-us" 
                onClick={(e) => handleNavClick(e, 'why-choose-us')} 
                className="hover:text-(--color-cognac-default) transition-colors"
            >
              Why Us
            </Link>
            <a 
              href="https://wa.me/919845603386?text=Hello%20I%20am%20interested%20in%20your%20furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-(--color-cognac-default) text-white rounded-full hover:bg-(--color-cognac-light) transition-colors shadow-md font-medium"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}