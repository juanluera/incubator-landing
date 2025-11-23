'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';


import { SITE_CONFIG } from '@/config/constants';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const translations = useTranslations('header');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="bg-nav-footer-bg shadow-sm sticky top-0 z-50 transition-colors">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Inverted_Tensor_Logo.png"
                alt={SITE_CONFIG.name}
                width={120}
                height={40}
                className=" p-2 rounded-md"
              />
            </Link>

            {/* Desktop Navigation with Dropdown */}
            <div className="hidden md:flex items-center space-x-6">
              {/* About Us Button */}
              <Link
                href="/about"
                className="text-black hover:text-accent-blue transition-colors text-lg font-medium"
              >
                {translations('about')}
              </Link>

              {/* Network Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-black hover:text-accent-blue transition-colors text-lg font-medium"
                >
                  {translations('network')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-nav-footer-bg rounded-lg shadow-lg border border-border py-2">
                    <Link
                      href="/startups"
                      className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Startups Network
                    </Link>
                    <Link
                      href="/mentors"
                      className="block px-4 py-2 text-black hover:bg-gray-100 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Mentors
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="hidden md:block">
            <Link
              href="/apply"
              className="bg-accent-blue text-white px-6 py-2 rounded-lg hover:bg-accent-blue-hover transition-all shadow-md hover:shadow-lg font-semibold text-lg"
            >
              Apply
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-nav-footer-bg border-t border-border">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-black hover:text-accent-blue hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations('about')}
              </Link>
              <Link
                href="/startups"
                className="block px-3 py-2 text-black hover:text-accent-blue hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Startups Network
              </Link>
              <Link
                href="/mentors"
                className="block px-3 py-2 text-black hover:text-accent-blue hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Mentors
              </Link>
              <div className="mt-4">
                <Link
                  href="/apply"
                  className="block bg-accent-blue text-white px-3 py-2 rounded-lg hover:bg-accent-blue-hover transition-all shadow-md hover:shadow-lg text-center font-semibold text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

