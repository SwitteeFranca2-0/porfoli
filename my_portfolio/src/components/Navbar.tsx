'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            RG
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#experience" className="text-gray-600 hover:text-gray-900">
              Experience
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#education" className="text-gray-600 hover:text-gray-900">
              Education
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 