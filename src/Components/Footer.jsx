import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between">
          {/* Logo/Brand Name */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
            >
              ASTUALUMNILINK
            </Link>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-6">
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ASTUALUMNILINK. All Rights Reserved.
          </p>
        </div>

        {/* Social Links (Optional) */}
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0-5-2.24-5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.38-.5-2.25-1.75-2.25s-2 1-2 2.25v5.5h-3v-11h3v1.5c.38-.58 1.12-1.5 2.75-1.5 2 0 3.5 1.38 3.5 4.25v6.75z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.84 3.44 8.87 8 9.8v-6.9h-2.41v-2.9h2.41v-2.22c0-2.38 1.43-3.68 3.52-3.68 1 0 1.85.08 2.1.12v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69l-.35 2.9h-2.34v6.9c4.56-.93 8-4.96 8-9.8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;