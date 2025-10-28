'use client';

import {Link} from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const translations = useTranslations('footer');

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/TensorLogo.png"
                alt="Tensor"
                width={120}
                height={40}
                className="dark:invert dark:sepia dark:saturate-200 dark:hue-rotate-180 transition-all duration-300"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              {translations('description')}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>{translations('contact')}: hello@tensor.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{translations('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {translations('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {translations('programs')}
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {translations('joinWaitlist')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{translations('connect')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/linkedin"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link 
                  href="/twitter"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} {translations('copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              {translations('privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              {translations('termsOfService')}
            </Link>
          </div>
        </div>
      </div> 
    </footer>
  );
}
