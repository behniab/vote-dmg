'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#about',     label: 'About' },
  { href: '#issues',    label: 'Issues' },
  { href: '#community', label: 'Community' },
  { href: '#volunteer', label: 'Get Involved' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-[#f5b731] flex items-center justify-center text-[#f5b731] font-bold text-lg font-serif">
            D
          </div>
          <div className="leading-tight">
            <p className="font-bold text-white text-sm tracking-wide">DANIEL MICHAEL GABRIEL</p>
            <p className="text-[#f5b731] text-xs tracking-widest font-medium">DISTRICT 46 · REPUBLICAN</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-gray-300 hover:text-white font-medium tracking-wide transition">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Donate CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#donate"
            className="bg-[#c8102e] hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg tracking-wide transition shadow-lg shadow-red-900/30">
            DONATE
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-1">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d1426] border-t border-white/10 px-6 py-6 space-y-4">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-gray-200 font-medium py-2 border-b border-white/5 hover:text-[#f5b731] transition">
              {l.label}
            </a>
          ))}
          <a href="#donate" onClick={() => setOpen(false)}
            className="block w-full text-center bg-[#c8102e] hover:bg-red-700 text-white font-bold py-3 rounded-lg tracking-wide transition mt-4">
            DONATE NOW
          </a>
        </div>
      )}
    </header>
  )
}
