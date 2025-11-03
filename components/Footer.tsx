import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <circle cx="50" cy="50" r="45" className="fill-blue-900"/>
                  <circle cx="50" cy="50" r="40" className="fill-white"/>
                  <polygon points="50,25 65,45 35,45" className="fill-blue-900"/>
                  <polygon points="50,75 35,55 65,55" className="fill-gray-500"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Verden</span>
                <span className="text-xs text-gray-400 block leading-tight">
                  Engineering
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Multi-domain engineering solutions delivering excellence across
              diverse industries and sectors.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Infrastructure
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Energy Solutions
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Industrial
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Consultancy
              </li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">
                Project Management
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Engineering Plaza, Business District
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@verdenengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Verden Engineering (Private) Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
