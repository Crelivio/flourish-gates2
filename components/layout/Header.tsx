"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <Image 
              src="/logo.svg" 
              alt="Flourish Gates Construction Limited" 
              width={119} 
              height={61}
              className="h-8 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-white font-medium relative ${pathname === '/' ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-orange-500" : "hover:text-orange-500 transition-colors"}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-white font-medium relative ${pathname === '/about' ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-orange-500" : "hover:text-orange-500 transition-colors"}`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`text-white font-medium relative ${pathname === '/services' ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-orange-500" : "hover:text-orange-500 transition-colors"}`}
            >
              Services
            </Link>
          </nav>

          <a
            href="https://wa.link/mwou19"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition-all"
          >
            Get In Touch
          </a>

          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-md pt-20 pb-6 px-6">
            <nav className="flex flex-col gap-6">
              <Link 
                href="/" 
                className={`text-white font-medium text-lg ${pathname === '/' ? "text-orange-500" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-white font-medium text-lg ${pathname === '/about' ? "text-orange-500" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className={`text-white font-medium text-lg ${pathname === '/services' ? "text-orange-500" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <a
                href="https://wa.link/mwou19"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
