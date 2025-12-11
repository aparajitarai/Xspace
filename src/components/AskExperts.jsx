import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sun,
  Twitter,
  X,
} from './icons'

const AskExperts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedTags, setSelectedTags] = useState(['Full Home Design'])

  const dropdownRef = useRef(null)

  useEffect(() => {
    const link = document.createElement('link')
    link.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => document.head.removeChild(link)
  }, [])

  const tags = [
    'Full Home Design',
    'Layout Planning',
    'Design Ideas',
    'Material Advice',
    'Cost Guidance',
    'Furniture & Decor',
    'Modular Kitchen',
  ]

  const timeOptions = [
    'Morning to Afternoon (10 AM - 3 PM)',
    'Afternoon to Evening (3 PM - 8 PM)',
    'Anytime',
  ]

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      className="min-h-screen relative flex flex-col"
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
          alt="Modern Bedroom Wood Paneling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <nav className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-2 text-white">
              <Sun className="w-6 h-6 fill-white stroke-none" />
              <span
                className="text-2xl font-bold tracking-wide"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                XSpace
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
              <Link to="/explore" className="hover:text-white transition-colors">
                Explore Ideas
              </Link>
              <Link to="/find-professionals" className="hover:text-white transition-colors">
                Find Professionals
              </Link>
              <Link to="/ask-experts" className="text-white font-semibold">
                Ask Experts
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-white text-xs font-medium px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                Sign Up
              </button>
              <button className="bg-[#0f1225] text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-[#1a1f3d] transition-colors shadow-lg border border-white/10">
                Log In
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-grow pt-32 pb-20 px-4 flex flex-col items-center justify-center">
        <div className="text-center text-white mb-8 max-w-3xl mx-auto animate-fade-in-up">
          <h1
            className="text-5xl md:text-6xl mb-4 font-normal"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Ask the Experts
          </h1>
          <p className="text-lg font-light text-white/90 tracking-wide">
            From full makeovers to simple design advice, our experts are here to guide
            <br className="hidden md:block" /> you at every step.
          </p>
        </div>

        <div className="w-full max-w-xl relative">
          <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h2
                className="text-3xl text-white text-center mb-8 font-normal"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Your Vision, Our Expertise
              </h2>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-white/90 text-sm ml-1">Full name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-white/40 border border-white/20 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/60 transition-all text-sm backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/90 text-sm ml-1">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-white/40 border border-white/20 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/60 transition-all text-sm backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/90 text-sm ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-white/40 border border-white/20 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/60 transition-all text-sm backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-1 relative" ref={dropdownRef}>
                  <label className="text-white/90 text-sm ml-1">Preferred call time</label>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full bg-white/40 border border-white/20 rounded-lg px-4 py-3 text-slate-900 cursor-pointer flex justify-between items-center transition-all text-sm backdrop-blur-sm hover:bg-white/50 ${isDropdownOpen ? 'bg-white/60' : ''}`}
                  >
                    <span className={selectedTime ? 'text-slate-900' : 'text-slate-600'}>
                      {selectedTime || 'Select preferred call time'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-700 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white/90 backdrop-blur-xl border border-white/40 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                      {timeOptions.map((option, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleTimeSelect(option)}
                          className="px-4 py-3 hover:bg-slate-200/50 cursor-pointer text-slate-800 text-sm border-b border-slate-200/50 last:border-none transition-colors"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-white/90 text-sm ml-1">I am looking for</label>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                          selectedTags.includes(tag)
                            ? 'bg-white text-slate-900 border-white shadow-lg transform scale-105'
                            : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <label className="text-white/90 text-sm ml-1">Tell us what you're looking for</label>
                  <textarea
                    rows="3"
                    placeholder="Describe your project, budget, or any design challenges you're facing"
                    className="w-full bg-white/40 border border-white/20 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/60 transition-all text-sm backdrop-blur-sm resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-[#050b20] text-white font-medium py-3.5 rounded-xl shadow-xl hover:bg-[#0f172a] hover:scale-[1.01] transition-all duration-200 mt-4 border border-white/10">
                  Start Your Design Journey
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 bg-[#020420] text-white pt-16 pb-6 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white mb-4">
                <Sun className="w-6 h-6 fill-white stroke-none" />
                <span
                  className="text-2xl font-bold tracking-wide"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  XSpace
                </span>
              </div>

              <div className="space-y-4 text-sm text-slate-400 font-light">
                <div className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>123 Design Street, Creativity City, Country</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+123-456-7890</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>hello@xspace.com</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block"></div>

            <div className="lg:col-span-2 flex flex-col md:flex-row justify-end gap-16">
              <div className="flex flex-col gap-4 text-sm">
                <Link to="/explore" className="hover:text-white text-slate-400 transition-colors">
                  Explore Ideas
                </Link>
                <Link to="/find-professionals" className="hover:text-white text-slate-400 transition-colors">
                  Find Professionals
                </Link>
                <Link to="/ask-experts" className="hover:text-white text-slate-400 transition-colors">
                  Ask Experts
                </Link>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#020420] hover:border-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#020420] hover:border-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-white hover:text-[#020420] hover:border-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
            <p>© 2025 XSpace Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Terms & Condition
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy & Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AskExperts
