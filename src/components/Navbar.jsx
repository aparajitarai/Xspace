import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StarIcon from './StarIcon'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1120]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-wider hover:opacity-80 transition-opacity">
          <StarIcon />
          <span className="serif-font">XSpace</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-90">
          <Link to="/explore" className="hover:text-amber-200 transition-colors">Explore Ideas</Link>
          <a href="#" className="hover:text-amber-200 transition-colors">Ask Experts</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-amber-200 transition-colors">Sign In</button>
          <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-100 transition-colors">
            Log In
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
