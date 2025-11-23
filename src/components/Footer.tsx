'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const translations = useTranslations('footer');

  return (
    <footer className="bg-nav-footer-bg border-t border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/Inverted_Tensor_Logo.png"
                alt="Tensor"
                width={120}
                height={40}
                className=" p-2 rounded-md transition-all duration-300"
              />
            </Link>
            <p className="text-gray-800 mb-4 max-w-md">
              {translations('description')}
            </p>
            <div className="text-sm text-gray-700">
              <p>{translations('contact')}: hello@tensor.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{translations('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-800 hover:text-primary transition-colors">
                  {translations('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-800 hover:text-primary transition-colors">
                  {translations('joinWaitlist')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{translations('connect')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/linkedin"
                  className="text-gray-800 hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter"
                  className="text-gray-800 hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} {translations('copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="text-gray-700 hover:text-gray-900 transition-colors">
              {translations('privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-gray-900 transition-colors">
              {translations('termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
