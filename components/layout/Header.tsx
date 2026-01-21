import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Flourish Gates Construction Limited" 
              width={119} 
              height={61}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-white font-medium relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-orange-500"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white font-medium hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-white font-medium hover:text-orange-500 transition-colors"
            >
              Services
            </Link>
          </nav>

          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
