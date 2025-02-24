"use client"

import { useState } from "react"
import { Link } from "react-scroll" // ใช้ react-scroll
import { MenuIcon, XIcon } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-purple-200 hover:text-white cursor-pointer transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-900/90 absolute top-full left-0 w-full p-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white block text-center py-2"
                  onClick={() => setMenuOpen(false)} // กดแล้วปิดเมนู
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

