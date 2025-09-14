import Link from 'next/link';
import Image from 'next/image';

import { SITE_CONFIG } from '@/lib/constants';
import { NAVIGATION_LINKS } from '@/lib/constants';


export default function Header() {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image 
                    src="/TensorLogo.png"
                    alt={SITE_CONFIG.name}
                    width={120}
                    height={40}
                />
            </Link>
            
            {/* Navigation */}
            <div className="hidden md:flex space-x-8">
                {NAVIGATION_LINKS.map((link) => (
                <Link 
                key={link.href}
                href={link.href} 
                className="hover:text-blue-600 transition-colors"
                >
                {link.label}
                </Link>
            ))}
            </div>
            
            {/* CTA Button */}
            <Link
              href="/apply" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </header>
    );
  }

