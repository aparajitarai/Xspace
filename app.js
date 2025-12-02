const { useState, useEffect } = React;

// Inline Styles for Fonts and Glassmorphism
const GlobalStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc;
      }
      h1, h2, h3, h4, .serif-font {
        font-family: 'Playfair Display', serif;
      }
      .glass-panel {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .glass-card-dark {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0B1120;
      }
      ::-webkit-scrollbar-thumb {
        background: #334155;
        border-radius: 4px;
      }
    `}
  </style>
);

// Icons
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1120]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-2 font-bold text-xl tracking-wider">
          <StarIcon />
          <span className="serif-font">XSpace</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-90">
          <a href="#" className="hover:text-amber-200 transition-colors">Explore Ideas</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Find Professionals</a>
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
  );
};

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
              From Vision To Reality, <br/>
              <span className="font-semibold text-amber-100/90">Curated Designs For You</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-lg">
              Explore curated design ideas, real-time cost estimates, and connect with trusted professionals. All in one seamless experience.
            </p>
            <button className="bg-[#0B1120] hover:bg-[#1a2542] text-white px-8 py-4 rounded-full text-base font-medium transition-all transform hover:scale-105 border border-slate-700">
              Explore Designs
            </button>
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
  );
};

const WhyChoose = () => {
  const features = [
    {
      title: "Real Designs, Real Costs",
      desc: "Explore inspiring spaces with clear cost estimates—so you know what's possible before you begin.",
      img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Trusted Professionals",
      desc: "Connect with vetted designers, contractors, and architects—all reviewed, rated, and matched to your vision.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "One Hub, Start to Finish",
      desc: "From discovery to execution, manage your entire project in one place—with tools built for homeowners.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="bg-[#0B1120] py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl serif-font mb-4">Why Choose XSpace</h2>
          <p className="text-slate-400 font-light">Explore curated designs, real-time cost estimates, and connect with trusted professionals. All in one seamless experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-64 overflow-hidden rounded-2xl mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="serif-font text-2xl mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EverythingYouNeed = () => {
  return (
    <section className="bg-[#EAE8E4] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl serif-font text-slate-800 mb-4">Everything You Need To Design Your Space</h2>
          <p className="text-slate-600">Whether you're styling a room or redoing your entire home, XSpace brings together inspiration, expertise, and execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
          {/* Large Left Card - Explore Designs */}
          <div className="md:col-span-5 bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="serif-font text-2xl mb-2">Explore Designs</h3>
              <p className="text-sm text-slate-500 mb-6">Tired of scrolling through unrealistic inspiration? Get curated ideas that match your actual space and budget.</p>
              <button className="bg-[#0B1120] text-white px-6 py-2 rounded-full text-xs font-medium">Explore</button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=300&q=80" className="rounded-lg h-32 w-full object-cover" alt="Design 1" />
              <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=300&q=80" className="rounded-lg h-32 w-full object-cover translate-y-4" alt="Design 2" />
              <img src="https://images.unsplash.com/photo-1616594039964-40891a909d99?auto=format&fit=crop&w=300&q=80" className="rounded-lg h-32 w-full object-cover -translate-y-2" alt="Design 3" />
              <img src="https://images.unsplash.com/photo-1616486029423-aaa478965c97?auto=format&fit=crop&w=300&q=80" className="rounded-lg h-32 w-full object-cover translate-y-2" alt="Design 4" />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 flex flex-col gap-6">
            {/* Top Right - Find Professionals */}
            <div className="bg-[#3D3A36] text-white rounded-3xl p-6 shadow-sm flex-1 flex flex-row items-center gap-6 overflow-hidden">
              <div className="flex-1 z-10">
                <h3 className="serif-font text-2xl mb-2">Find Professionals</h3>
                <p className="text-sm text-slate-300 mb-6">From discovery to execution, manage your entire project in one place—with tools built for homeowners.</p>
                <button className="bg-white text-slate-900 px-6 py-2 rounded-full text-xs font-medium">Find</button>
              </div>
              <div className="flex-1 h-full relative">
                 <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80" className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-80" alt="Professional" />
              </div>
            </div>

            {/* Bottom Right - Expert Advice */}
            <div className="bg-white rounded-3xl p-6 shadow-sm flex-1 flex flex-row items-center gap-6 overflow-hidden">
              <div className="flex-1">
                <h3 className="serif-font text-2xl mb-2">Get Expert Advice</h3>
                <p className="text-sm text-slate-500 mb-6">Need expert guidance? Book a consultation with top designers.</p>
                <button className="bg-[#0B1120] text-white px-6 py-2 rounded-full text-xs font-medium">Ask</button>
              </div>
              <div className="flex-1 h-full">
                 <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=500&q=80" className="h-full w-full object-cover rounded-xl" alt="Expert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Discover",
      desc: "A guided journey from inspiration to move-in, built for modern Indian families. Explore styles, spaces, and budgets that fit your needs.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Plan",
      desc: "Finalise layouts, materials, and timelines with your chosen professionals while tracking everything in one place.",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Execute",
      desc: "Monitor execution, approvals, and milestones with transparent updates until handover.",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl serif-font text-[#0B1120] mb-2">From Idea to Execution</h2>
          <p className="text-slate-500">A guided journey from inspiration to move-in.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Navigation */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border-l-4 ${activeStep === idx ? 'bg-white shadow-xl border-[#0B1120]' : 'border-transparent hover:bg-slate-50'}`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className={`text-2xl font-serif ${activeStep === idx ? 'text-[#0B1120]' : 'text-slate-400'}`}>
                    <span className="text-sm font-sans mr-4 opacity-50">0{idx + 1}</span>
                    {step.title}
                  </h3>
                  <span className={`transform transition-transform ${activeStep === idx ? 'rotate-180' : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor">
                      <path d="M1 1.5L6 6.5L11 1.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${activeStep === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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
              <a href="#" className="hover:text-white transition-colors">Explore Ideas</a>
              <a href="#" className="hover:text-white transition-colors">Find Professionals</a>
              <a href="#" className="hover:text-white transition-colors">Ask Experts</a>
            </div>

            <div className="text-slate-500 text-xs text-center md:text-right">
              <p>120 Design Street, Creative City, Country</p>
              <p>+91-98765-43210 | hello@xspace.com</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between text-xs text-slate-600 gap-4 md:gap-0 text-center md:text-left">
            <p>© 2025 XSpace. All rights reserved.</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen">
      <GlobalStyles />
      <Navbar />
      <Hero />
      <WhyChoose />
      <EverythingYouNeed />
      <ProcessSection />
      <ContactFooter />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
