import Link from 'next/link';
import Image from 'next/image';

import { SITE_CONFIG } from '@/lib/constants';
import { NAVIGATION_LINKS } from '@/lib/constants';


export default function Header() {
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
            
            {/* Navigation */}
            <div className="hidden md:flex space-x-8">
                {NAVIGATION_LINKS.map((link) => (
                <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                {link.label}
                </Link>
            ))}
            </div>
            
            {/* CTA Button */}
            <Link
              href="/waitlist" 
              className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </nav>
      </header>
    );
  }

