// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Services", href: "#services" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ]

//   return (
//     <nav className="fixed top-0 w-full z-50 glass border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold gradient-text">
//             MC
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-sm font-medium hover:text-primary transition-colors duration-200"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <a
//               href="#contact"
//               className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
//             >
//               Contact Us
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden pb-4 space-y-2">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="block px-4 py-2 text-sm hover:text-primary transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold text-center"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact Us
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }









"use client"

import { useState, useEffect } from "react"
import { Menu, X, Code2 } from "lucide-react"

import Image from "next/image"

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
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 glass border-b ${
        scrolled ? 'shadow-lg shadow-purple-950/20 bg-background/90 backdrop-blur-md' : 'bg-background/70 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with animation */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group py-2"
            aria-label="Mithunkumar.C Portfolio Logo"
          >
            <div className="relative flex items-center">
              <Image 
                src="/logo.png"
                alt="Mithunkumar.C Logo"
                width={160}
                height={50}
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(147,51,234,0.3)]"
                priority
              />
            </div>
          </a>

          {/* Desktop Menu with animations */}
          <div className="hidden md:flex gap-1 lg:gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium hover:text-primary transition-all duration-300 group"
                style={{
                  animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button with animation */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button with animation */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:bg-gray-100 rounded-lg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="animate-spin-once" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
                style={{
                  animation: isOpen ? `slideInRight 0.3s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold text-center hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
              style={{
                animation: isOpen ? `slideInRight 0.3s ease-out ${navItems.length * 0.05}s both` : 'none'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-once {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(90deg);
          }
        }

        .animate-spin-once {
          animation: spin-once 0.3s ease-out;
        }
      `}</style>
    </nav>
  )
}