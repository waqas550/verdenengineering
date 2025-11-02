import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Verden</span>
                <span className="text-sm text-gray-400 block leading-none">
                  Engineering
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Engineering a Sustainable Future through innovative solutions in
              green energy and construction.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
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
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Green Energy Solutions
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Construction Chemicals
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Fireproofing
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Engineering Consultancy
              </li>
              <li className="hover:text-green-500 transition-colors cursor-pointer">
                Turnkey Solutions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Engineering Plaza, Business District
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@verdenengineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Verden Engineering (Private) Limited. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
