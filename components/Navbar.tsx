'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
  }, []);

  const handleLogout = () => {
    supabase.auth.signOut().then(() => window.location.reload());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#228B22] font-bold text-xl">ZabethLab</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/academy" className="text-gray-300 hover:text-white text-sm">Academy</Link>
            <Link href="/scanner" className="text-gray-300 hover:text-white text-sm">Scanner</Link>
            <Link href="/build" className="text-gray-300 hover:text-white text-sm">Studio</Link>
            <Link href="/connect" className="text-gray-300 hover:text-white text-sm">Connect</Link>
            
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm hidden lg:block">{user.email}</span>
                <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-white">
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="bg-[#228B22] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a6b1a]">
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/academy" className="block text-gray-300 hover:text-white">Academy</Link>
            <Link href="/scanner" className="block text-gray-300 hover:text-white">Scanner</Link>
            <Link href="/build" className="block text-gray-300 hover:text-white">Studio</Link>
            <Link href="/connect" className="block text-gray-300 hover:text-white">Connect</Link>
            {user ? (
              <button onClick={handleLogout} className="text-gray-400">Logout</button>
            ) : (
              <Link href="/login" className="block text-[#228B22]">Get Started</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}