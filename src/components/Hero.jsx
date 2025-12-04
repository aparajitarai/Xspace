import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B1120]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0B1120]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col h-full justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
          {/* Left Content */}
          <div className="space-y-8 text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl leading-tight font-light serif-font">
              Welcome to Your <br/>
              <span className="font-semibold text-amber-100/90">Design HomePage</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-lg">
              Explore curated design ideas, real-time cost estimates, and connect with trusted professionals. All in one seamless experience.
            </p>
            <Link to="/explore" className="inline-block bg-[#0B1120] hover:bg-[#1a2542] text-white px-8 py-4 rounded-full text-base font-medium transition-all transform hover:scale-105 border border-slate-700">
              Explore Designs
            </Link>
          </div>

          {/* Right Content - Professional Card */}
          <div className="hidden lg:flex justify-end">
            <div className="glass-panel p-8 rounded-2xl max-w-sm text-white transform rotate-2 hover:rotate-0 transition-all duration-500">
              <h3 className="serif-font text-2xl mb-2">Join a Network Built for the Best</h3>
              <p className="text-sm text-slate-200 mb-6 opacity-80">
                Showcase your work, connect with dreaming clients, and grow your brand with XSpace's curated network.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=200&q=80" className="rounded-lg h-24 w-full object-cover opacity-80" alt="Work sample 1" />
                <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80" className="rounded-lg h-24 w-full object-cover opacity-80" alt="Work sample 2" />
              </div>
              <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
                Join as Professional
              </button>
            </div>
          </div>
        </div>

        {/* Floating Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-20 lg:mt-32">
          {[
            { title: "Explore Ideas", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=400&q=80", subtitle: "Browse curated inspiration" },
            { title: "Find Professionals", img: "https://images.unsplash.com/photo-1581094794329-cd1096a7a750?auto=format&fit=crop&w=400&q=80", subtitle: "Connect with experts" },
            { title: "Ask Experts", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=400&q=80", subtitle: "Get personalized advice" }
          ].map((item, idx) => (
            <div key={idx} className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="serif-font text-xl">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
