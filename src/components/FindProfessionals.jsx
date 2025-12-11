import React, { useState, useRef } from 'react'
import GlobalStyles from './GlobalStyles'
import ContactFooter from './ContactFooter'
import {
  Search,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
} from './icons'

const PROFESSIONALS_DATA = [
  {
    id: 1,
    companyName: 'Trusted Builders Ltd',
    logo: 'https://randomuser.me/api/portraits/men/32.jpg',
    startingPrice: '₹5L',
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior design.",
    services: ['Environment', 'Furniture and people', 'Texturing & lighting', '+ 2'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600',
    ],
  },
  {
    id: 2,
    companyName: 'Bengaluru Private Interiors Pvt Ltd',
    logo: 'https://randomuser.me/api/portraits/men/45.jpg',
    startingPrice: '₹5L',
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior design.",
    services: ['Environment', 'Furniture and people'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-2a4d04774c13?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600',
    ],
  },
  {
    id: 3,
    companyName: 'Sample Company Pvt Ltd',
    logo: 'https://randomuser.me/api/portraits/men/22.jpg',
    startingPrice: '₹5L',
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior design.",
    services: ['Furniture and people', 'Texturing & lighting'],
    images: [
      'https://images.unsplash.com/photo-1617159268737-a791a9fd4994?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600',
    ],
  },
  {
    id: 4,
    companyName: 'Envato Prime Designs',
    logo: 'https://randomuser.me/api/portraits/men/64.jpg',
    startingPrice: '₹5L',
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior design.",
    services: ['Environment'],
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=600',
    ],
  },
  {
    id: 5,
    companyName: 'Modern Living Spaces',
    logo: 'https://randomuser.me/api/portraits/women/44.jpg',
    startingPrice: '₹7L',
    description:
      'Specializing in minimalist modern designs that maximize space and light. Our team ensures a seamless execution from concept to reality.',
    services: ['Interior Design', 'Furniture'],
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
    ],
  },
  {
    id: 6,
    companyName: 'Urban Chic Studios',
    logo: 'https://randomuser.me/api/portraits/women/65.jpg',
    startingPrice: '₹4.5L',
    description:
      'Bringing urban chic to your doorstep. We focus on sustainable materials and contemporary aesthetics suitable for city living.',
    services: ['Environment', 'Texturing'],
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1600596542815-2a4d04774c13?auto=format&fit=crop&q=80&w=600',
    ],
  },
]

const ImageCarousel = ({ images }) => {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 bg-gray-100 group">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory h-full w-full scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <img key={idx} src={img} className="flex-shrink-0 w-full h-full object-cover snap-start" alt="Project Preview" />
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          scroll('left')
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation()
          scroll('right')
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 z-10"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

const ProfessionalCard = ({ data }) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      <ImageCarousel images={data.images} />

      <div className="flex-grow">
        <h3 className="font-bold text-slate-800 text-lg mb-2 font-serif">Projects starting from {data.startingPrice}</h3>

        <div className="flex items-center gap-2 mb-3">
          <img src={data.logo} className="w-6 h-6 rounded-full object-cover border border-slate-200" alt="Logo" />
          <span className="text-xs font-bold text-slate-700">{data.companyName}</span>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">{data.description}</p>

        <button className="text-xs font-bold text-slate-800 mb-3 hover:underline">See more</button>

        <div className="mb-1 text-xs font-semibold text-slate-700">Services offered</div>
        <div className="flex flex-wrap gap-2">
          {data.services.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 rounded text-[10px] font-medium tracking-wide text-white"
              style={{ backgroundColor: '#DFAEA1' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#050B1B] text-gray-400 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Star className="text-white" size={20} />
              <span className="font-serif text-xl font-bold tracking-wide">XSpace</span>
            </div>

            <div className="space-y-3 text-xs font-light">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gray-500" />
                <span>123 Design Street, Creativity City, Country</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gray-500" />
                <span>+123-456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gray-500" />
                <span>hello@xspace.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm font-medium text-gray-300">
            <a href="/explore" className="hover:text-white transition-colors">
              Explore Ideas
            </a>
            <a href="/find-professionals" className="hover:text-white transition-colors">
              Find Professionals
            </a>
            <a href="/ask-experts" className="hover:text-white transition-colors">
              Ask Experts
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500">
          <p>&copy; 2025 XSpace Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms & Condition
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Cookies
            </a>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href="#"
              className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white"
            >
              <Instagram size={12} />
            </a>
            <a
              href="#"
              className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white"
            >
              <Twitter size={12} />
            </a>
            <a
              href="#"
              className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors text-white"
            >
              <Linkedin size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null

  return (
    <div className="md:hidden mt-4 pb-4 space-y-4 text-center border-t border-gray-800 pt-4 animate-fadeIn">
      <a href="/explore" className="block hover:text-white text-gray-300">
        Explore Ideas
      </a>
      <a href="/find-professionals" className="block text-white font-bold">
        Find Professionals
      </a>
      <a href="/ask-experts" className="block hover:text-white text-gray-300">
        Ask Experts
      </a>
      <div className="flex justify-center gap-4 pt-2">
        <button className="border border-gray-500 text-xs px-4 py-1.5 rounded-full">Sign Up</button>
        <button className="bg-white text-[#050B1B] text-xs font-semibold px-4 py-1.5 rounded-full">Log In</button>
      </div>
    </div>
  )
}

const StickyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#050B1B] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="relative">
            <span className="absolute -inset-1 rounded-full blur-[2px] bg-white/20"></span>
            <Star className="text-white relative z-10" size={20} />
          </div>
          <span className="font-serif text-xl font-bold tracking-wide">XSpace</span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-light tracking-wide text-gray-300">
          <a href="/explore" className="hover:text-white transition-colors">
            Explore Ideas
          </a>
          <a href="/find-professionals" className="text-white font-semibold">
            Find Professionals
          </a>
          <a href="/ask-experts" className="hover:text-white transition-colors">
            Ask Experts
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="border border-gray-500 hover:border-white text-xs px-5 py-1.5 rounded-full transition-colors">
            Sign Up
          </button>
          <button className="bg-white text-[#050B1B] text-xs font-semibold px-5 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
            Log In
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} />
    </nav>
  )
}

export default function FindProfessionals() {
  const [searchTerm, setSearchTerm] = useState('')
  const [displayedCount, setDisplayedCount] = useState(6)

  const filteredData = PROFESSIONALS_DATA.filter(
    (pro) =>
      pro.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.services.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-gradient-to-b from-[#FFF0F0] via-[#FDF2F2] to-[#E8DED8]">
      <GlobalStyles />
      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <StickyNavbar />

      <header className="text-center py-12 px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-[#050B1B] mb-3">Find Professionals</h1>
        <p className="text-slate-600 text-sm md:text-base font-light mb-8 max-w-lg mx-auto">
          Bringing your dream space to life starts with the right professional.
        </p>

        <button className="bg-white border border-slate-300 rounded-full px-6 py-2 text-sm text-slate-600 shadow-sm hover:shadow-md transition-shadow inline-flex items-center gap-2 group">
          <span>Select Your Location</span>
          <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </button>
      </header>

      <main className="flex-grow w-full px-4 mb-16">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-10 min-h-[600px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="font-serif text-2xl text-slate-800 mb-2 md:mb-0">Discover Trusted Professionals</h2>
            <span className="text-slate-400 text-sm">Found {filteredData.length} professionals</span>
          </div>

          <div className="relative mb-6 group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600" size={18} />
            <input
              type="text"
              placeholder="Search by name, service or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-100 border-none rounded-full py-3 pl-12 pr-4 text-slate-700 focus:ring-2 focus:ring-slate-200 outline-none transition-all placeholder-slate-400 text-sm"
            />
          </div>

          <div className="flex gap-3 mb-8">
            <button className="flex items-center gap-2 border border-slate-300 rounded px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronDown size={12} /> Popular
            </button>
            <button className="flex items-center gap-2 border border-slate-300 rounded px-4 py-1.5 text-xs text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronDown size={12} /> Category
            </button>
          </div>

          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {filteredData.slice(0, displayedCount).map((pro) => (
                <ProfessionalCard key={pro.id} data={pro} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              <Search size={48} className="mx-auto mb-4 text-slate-300" />
              <p>No professionals found matching "{searchTerm}"</p>
            </div>
          )}

          {filteredData.length > displayedCount && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayedCount((prev) => prev + 4)}
                className="text-slate-800 font-bold text-sm hover:underline transition-all"
              >
                See more
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <ContactFooter />
    </div>
  )
}
