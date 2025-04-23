"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Practice Areas",
      path: "/practice-areas",
      dropdown: [
        { name: "Corporate Law", path: "/practice-areas/corporate-law" },
        { name: "Litigation", path: "/practice-areas/litigation" },
        { name: "Family Law", path: "/practice-areas/family-law" },
      ],
    },
    { name: "Attorneys", path: "/attorneys" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? "text-gray-800" : "text-white"}`}>
              <span className="text-amber-500">Madini</span> legal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 font-medium ${
                        isScrolled ? "text-gray-800 hover:text-amber-500" : "text-white hover:text-amber-400"
                      } transition-colors`}
                      onClick={() => setIsPracticeDropdownOpen(!isPracticeDropdownOpen)}
                      onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                      onMouseLeave={() => setIsPracticeDropdownOpen(false)}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                        isPracticeDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setIsPracticeDropdownOpen(true)}
                      onMouseLeave={() => setIsPracticeDropdownOpen(false)}
                    >
                      <div className="py-1">
                        {link.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            href={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={`font-medium ${
                      pathname === link.path
                        ? "text-amber-500"
                        : isScrolled
                          ? "text-gray-800 hover:text-amber-500"
                          : "text-white hover:text-amber-400"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-md transition-all duration-300"
          >
            Free Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>
                <span className="text-amber-500">Justice</span> Law
              </Link>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-xl">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <div className="text-amber-500 font-medium">{link.name}</div>
                      <div className="pl-4 space-y-3">
                        {link.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            href={dropdownItem.path}
                            className="block text-white hover:text-amber-400 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={`font-medium ${
                        pathname === link.path ? "text-amber-500" : "text-white hover:text-amber-400"
                      } transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto">
              <Link
                href="/contact"
                className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-md text-center transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
