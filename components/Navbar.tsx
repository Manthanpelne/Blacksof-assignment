'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full px-10 max-w-(--size-container) h-(--spacing-nav-height) flex items-center justify-between "
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/Frame 427321533.png" 
          alt="DeJoule Logo" 
          width={120} 
          height={40} 
          priority 
          className="object-contain"
        />
      </Link>

      {/* Tabs / Navigation Links */}
      <div className="hidden md:flex  items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors duration-200 relative group"
          >
            {link.name}
          </Link>
        ))}
        

      </div>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        <button className="p-2 text-zinc-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </motion.nav>
  );
}