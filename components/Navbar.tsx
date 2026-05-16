'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-dark/80 backdrop-blur-md border-b border-dark-lighter sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo Image */}
          <div className="w-12 h-12 relative">
            <img 
              src="/logo.png" 
              alt="ZabethLab" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold text-light">ZabethLab</span>
        </Link>
        
        <div className="hidden lg:flex gap-8">
          <Link href="/academy" className="text-sm font-semibold text-light hover:text-primary">Learn</Link>
          <Link href="/scanner" className="text-sm font-semibold text-light hover:text-primary">Analyze</Link>
          <Link href="/build" className="text-sm font-semibold text-light hover:text-primary">Build</Link>
          <Link href="/connect" className="text-sm font-semibold text-light hover:text-primary">Connect</Link>
        </div>

        <div className="hidden lg:flex gap-4">
          <Link href="/login" className="text-sm font-semibold text-light hover:text-primary">Log in</Link>
          <Link href="/signup" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-light">
            Get Started
          </Link>
        </div>

        <button 
          className="lg:hidden text-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-light p-6">
          <Link href="/academy" className="block py-2 text-light hover:text-primary">Learn</Link>
          <Link href="/scanner" className="block py-2 text-light hover:text-primary">Analyze</Link>
          <Link href="/build" className="block py-2 text-light hover:text-primary">Build</Link>
          <Link href="/connect" className="block py-2 text-light hover:text-primary">Connect</Link>
        </div>
      )}
    </header>
  )
}