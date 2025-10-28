'use client';

import {Link} from '@/i18n/routing';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';


import { SITE_CONFIG } from '@/lib/constants';
import { NAVIGATION_LINKS } from '@/lib/constants';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const translations = useTranslations('header');

    return (
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image 
                    src="/TensorLogo.png"
                    alt={SITE_CONFIG.name}
                    width={120}
                    height={40}
                    className="dark:invert"
                />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {NAVIGATION_LINKS.map((link) => (
                <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                {translations(link.label)}
                </Link>
            ))}
            </div>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/network" 
                className="bg-gray-600 dark:bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors"
              >
                {translations('network')}
              </Link>
              <Link
                href="/waitlist" 
                className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
              >
                {translations('programWaitlist')}
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-4 py-2 space-y-1">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 space-y-2">
                  <Link
                    href="/network"
                    className="block bg-gray-600 dark:bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Network
                  </Link>
                  <Link
                    href="/waitlist"
                    className="block bg-blue-600 dark:bg-blue-700 text-white px-3 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Program Waitlist
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }

