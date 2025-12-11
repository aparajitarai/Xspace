import React from 'react'
import { Link } from 'react-router-dom'
import StarIcon from './StarIcon'

const ContactFooter = () => {
  return (
    <div className="relative bg-[#0B1120] text-white">
      {/* CTA Section */}
      <div className="relative h-[600px] md:h-[500px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&w=1600&q=80" 
            className="w-full h-full object-cover opacity-40" 
            alt="Footer Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 w-full">
            <div className="space-y-6 max-w-lg pt-10 md:pt-0">
              <h2 className="text-4xl md:text-5xl serif-font leading-tight">Begin Your Design Journey Today</h2>
              <p className="text-slate-300 font-light text-lg">
                Explore designs, estimate costs, and connect with trusted professionals — all without leaving your home.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-md w-full ml-auto">
              <form className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-300 mb-1 block">Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-300 mb-1 block">Email</label>
                  <input type="email" placeholder="name@email.com" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="text-xs uppercase tracking-wider text-slate-300 mb-1 block">City</label>
                      <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 appearance-none">
                          <option>Bangalore</option>
                          <option>Mumbai</option>
                          <option>Delhi</option>
                      </select>
                  </div>
                   <div>
                      <label className="text-xs uppercase tracking-wider text-slate-300 mb-1 block">Project Type</label>
                      <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 appearance-none">
                          <option>2BHK</option>
                          <option>3BHK</option>
                          <option>Villa</option>
                      </select>
                  </div>
                </div>
                <button className="w-full bg-white text-[#0B1120] font-bold py-3 rounded-lg hover:bg-amber-50 transition-colors mt-2">
                  Get In Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-slate-800 bg-[#050914] py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
                 <StarIcon />
                 <span className="serif-font text-xl font-bold">XSpace</span>
            </div>

            <div className="flex gap-8 text-sm text-slate-400">
              <Link to="/explore" className="hover:text-white transition-colors">
                Explore Ideas
              </Link>
              <Link to="/find-professionals" className="hover:text-white transition-colors">
                Find Professionals
              </Link>
              <Link to="/ask-experts" className="hover:text-white transition-colors">
                Ask Experts
              </Link>
            </div>

            <div className="text-slate-500 text-xs">
              <p>120 Design Street, Creative City, Country</p>
              <p>+91-98765-43210 | hello@xspace.com</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-900 flex justify-between text-xs text-slate-600">
            <p>© 2025 XSpace. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
