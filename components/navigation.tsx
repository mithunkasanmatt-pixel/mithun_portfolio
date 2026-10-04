"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-200 ${
        scrolled ? 'shadow-md shadow-slate-200/50' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Target Navbar Slot for Docking MITHUNKUMAR Morphing Text */}
          <div id="navbar-logo-slot" className="h-10 flex items-center min-w-[140px] sm:min-w-[200px]" />

          {/* Desktop Menu - Black & White Theme */}
          <div className="hidden md:flex gap-1 lg:gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                id={item.label === "About" ? "nav-item-about" : undefined}
                href={item.href}
                className="relative px-4 py-2 text-sm lg:text-base font-bold text-black hover:text-slate-600 transition-all duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Black & White */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-black text-white rounded-full text-sm sm:text-base font-bold hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-sm inline-block"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-black hover:bg-slate-100 rounded-lg transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
            isOpen ? 'max-h-96 opacity-100 pb-4 border-t border-slate-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                id={item.label === "About" ? "nav-item-about-mobile" : undefined}
                href={item.href}
                className="block px-4 py-3 text-sm font-bold text-black hover:bg-slate-100 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-3 px-4 py-3 bg-black text-white rounded-full text-sm font-bold text-center hover:bg-slate-800 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}