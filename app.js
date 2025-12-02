const { useState } = React;

// --- Icon Set (Lucide-inspired minimal SVGs) ---
const IconBase = ({ children, className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
  >
    {children}
  </svg>
);

const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconBase>
);

const Search = (props) => (
  <IconBase {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </IconBase>
);

const Users = (props) => (
  <IconBase {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconBase>
);

const MessageSquare = (props) => (
  <IconBase {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </IconBase>
);

const Calculator = (props) => (
  <IconBase {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <rect x="8" y="7" width="8" height="3" />
    {[14, 17].map((y) =>
      [8, 12, 16].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.75" />)
    )}
  </IconBase>
);

const ChevronDown = (props) => (
  <IconBase {...props}>
    <path d="m6 9 6 6 6-6" />
  </IconBase>
);

const Menu = (props) => (
  <IconBase {...props}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </IconBase>
);

const X = (props) => (
  <IconBase {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);

const Phone = (props) => (
  <IconBase {...props}>
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 4 13.18 19.79 19.79 0 0 1 1 4.18 2 2 0 0 1 3 2h4.09a2 2 0 0 1 2 1.72c.08.66.23 1.31.45 1.94a2 2 0 0 1-.45 2L7.91 9.91a16 16 0 0 0 6.18 6.18l2.25-1.08a2 2 0 0 1 2 .45c.63.22 1.28.37 1.94.45A2 2 0 0 1 22 16.92Z" />
  </IconBase>
);

const Mail = (props) => (
  <IconBase {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </IconBase>
);

const MapPin = (props) => (
  <IconBase {...props}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

const Instagram = (props) => (
  <IconBase {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </IconBase>
);

const Twitter = (props) => (
  <IconBase {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3Z" />
  </IconBase>
);

const Linkedin = (props) => (
  <IconBase {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 11v5" />
    <path d="M8 8v.01" />
    <path d="M12 16v-5" />
    <path d="M16 16v-3a2 2 0 0 0-4 0" />
  </IconBase>
);

const Star = (props) => (
  <IconBase {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconBase>
);

const Sparkles = (props) => (
  <IconBase {...props}>
    <path d="M12 3v5" />
    <path d="M12 10a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 1-2 2" />
    <path d="M16 3v5" />
    <path d="M16 10a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2 2 2 0 0 0 2 2" />
    <path d="M8 9H6" />
    <path d="M6 5h2" />
    <path d="M18 5h2" />
    <path d="M16 9h2" />
  </IconBase>
);

/* XSpace Redesign 
  Style: Premium Interior Design, Deep Navy Backgrounds, Glassmorphism
*/

// --- Components ---

const GlassCard = ({ children, className = "" }) => (
  <div className={`backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-wide leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-light opacity-80">
        {subtitle}
      </p>
    )}
  </div>
);

const Button = ({ children, variant = 'primary', className = "", fullWidth = false }) => {
  const baseStyle = "px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 tracking-wide";
  const variants = {
    primary: "bg-white text-slate-950 hover:bg-slate-200 shadow-lg shadow-white/5",
    secondary: "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50",
    gold: "bg-amber-700 text-white hover:bg-amber-600 shadow-lg shadow-amber-900/20",
    dark: "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}>
      {children}
    </button>
  );
};

// --- Main App Component ---

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Data for the Journey Section
  const journeySteps = [
    {
      id: '01',
      title: 'Discover',
      desc: 'A guided journey from inspiration to move-in, built for modern families. Explore styles, spaces, and budgets that fit your needs.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: '02',
      title: 'Plan',
      desc: 'Visualize your space with our 3D tools and get accurate cost estimates instantly. Connect with architects who understand your vision.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: '03',
      title: 'Execute',
      desc: 'Watch your dream come to life. Manage the entire build process, payments, and timelines through our seamless project dashboard.',
      image: 'https://images.unsplash.com/photo-1581094794329-cd8119604f75?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-100 overflow-x-hidden selection:bg-amber-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020617]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Sparkles className="text-white w-5 h-5" />
            <span className="text-xl font-serif font-medium tracking-wide text-white">XSpace</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-sm font-light tracking-wide text-slate-300 hover:text-white transition-colors">Explore Ideas</a>
            <a href="#" className="text-sm font-light tracking-wide text-slate-300 hover:text-white transition-colors">Find Professionals</a>
            <a href="#" className="text-sm font-light tracking-wide text-slate-300 hover:text-white transition-colors">Ask Experts</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-white hover:text-slate-300 transition-colors">Sign In</button>
            <Button variant="primary" className="!py-2 !px-6 text-xs">Get Started</Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 animate-fade-in">
            <a href="#" className="text-slate-300">Explore Ideas</a>
            <a href="#" className="text-slate-300">Find Professionals</a>
            <a href="#" className="text-slate-300">Ask Experts</a>
            <hr className="border-slate-800 my-2" />
            <div className="flex flex-col gap-3">
              <button className="text-left text-white">Sign In</button>
              <Button variant="primary" fullWidth>Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center pt-24 pb-20 px-6">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/60 to-[#020617]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          
          {/* Left Card: Value Prop (Wider 7 cols) */}
          <GlassCard className="lg:col-span-7 p-10 md:p-14 flex flex-col justify-center animate-slide-up bg-white/5">
            {/* Top pill / toggle as in visual */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/15 text-[11px] uppercase tracking-[0.25em] text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              For Homeowners · Turn ideas into real spaces
            </div>

            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6 tracking-tight">
              From Vision <br />
              To Reality, <br />
              <span className="text-slate-300">Curated Designs For You</span>
            </h1>

            <p className="text-lg text-slate-300 mb-8 md:mb-10 max-w-lg font-light leading-relaxed">
              Explore curated design ideas, real-time cost estimates, and connect with trusted professionals. All in one seamless experience.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" className="!px-10">
                Explore Designs
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" className="!px-6">
                <Calculator className="w-4 h-4" />
                Get Cost Estimate
              </Button>
            </div>

            {/* Rating strip under CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300/90">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-500'
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium text-white">4.8/5</span>
              <span className="text-slate-400">
                Loved by 500+ modern Indian homeowners
              </span>
            </div>
          </GlassCard>

          {/* Right Card: Network/Community (Narrower 5 cols) */}
          <GlassCard className="lg:col-span-5 p-8 md:p-10 flex flex-col animate-slide-up bg-white/10 backdrop-blur-2xl" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.2em] text-slate-200">
                For Designers & Studios
              </div>

              <h3 className="text-2xl font-serif mb-3 leading-tight">
                Join a Network <br />Built for the Best
              </h3>
              <p className="text-slate-300 text-sm font-light mb-6 leading-relaxed">
                Showcase your work, connect with ready-to-build clients, and grow your brand with XSpace's curated network.
              </p>

              <Button variant="primary" className="!w-full !bg-white !text-slate-900">
                Start as a Professional
              </Button>
            </div>
            
            {/* Collage Visual: Mood Board / Sketches */}
            <div className="relative flex-1 mt-4 min-h-[200px] rounded-xl overflow-hidden bg-slate-800/50 p-3">
              {/* Simulating a pinned mood board */}
              <div className="absolute top-4 left-4 w-32 h-40 bg-slate-200 rotate-[-6deg] shadow-xl rounded-lg overflow-hidden border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&q=80&w=300"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute top-10 right-6 w-36 h-32 bg-slate-300 rotate-[3deg] shadow-xl rounded-lg overflow-hidden border-4 border-white z-10">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=300"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-10 w-40 h-28 bg-slate-400 rotate-[-2deg] shadow-xl rounded-lg overflow-hidden border-4 border-white z-20">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=300"
                  className="w-full h-full object-cover contrast-125"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </header>

      {/* Floating Action Tiles */}
      <section className="relative z-20 -mt-20 px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <Search className="w-5 h-5" />, label: 'Explore Ideas', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=400' },
            { icon: <Users className="w-5 h-5" />, label: 'Find Professionals', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400' },
            { icon: <MessageSquare className="w-5 h-5" />, label: 'Ask Experts', img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=400' },
          ].map((tile, idx) => (
            <div
              key={idx}
              className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
            >
              <div className="absolute inset-0">
                <img
                  src={tile.img}
                  alt={tile.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#020617]/40 group-hover:bg-[#020617]/20 transition-colors"></div>
                {/* Gradient fade at bottom for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-white border border-white/30">
                  {tile.icon}
                </div>
                <span className="text-white font-serif text-xl tracking-wide">
                  {tile.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose XSpace */}
      <section className="py-24 px-6 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            title="Why Choose XSpace" 
            subtitle="Explore curated designs, real-time cost estimates, and connect with trusted professionals. All in one seamless experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Real Designs, Real Costs", 
                desc: "Explore inspiring spaces with clear cost estimates—so you know what's possible before you begin.",
                img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600"
              },
              { 
                title: "Trusted Professionals", 
                desc: "Connect with vetted designers, contractors, and architects—all reviewed, rated, and matched to your vision.",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
              },
              { 
                title: "One Hub, Start to Finish", 
                desc: "From discovery to execution, manage your entire project in one place—with tools built for homeowners.",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10 opacity-60"></div>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 relative z-20 -mt-12">
                  <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything You Need (Bento Grid) */}
      <section className="py-24 px-6 bg-[#0B1121] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle 
            title="Everything You Need To Design Your Space" 
            subtitle="Whether you're styling a room or redoing your entire home, XSpace brings together inspiration, expertise, and execution."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[650px]">
            
            {/* Explore Designs - Large Block */}
            <div className="md:col-span-5 bg-slate-800/40 border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="relative z-10 mb-8">
                <h3 className="text-3xl font-serif mb-3">Explore Designs</h3>
                <p className="text-slate-400 font-light text-sm mb-6 max-w-xs">
                  Tired of scrolling through unrealistic inspiration? Get curated ideas that match your actual space.
                </p>
                <Button variant="primary" className="w-fit !py-2 !px-6 text-sm">
                  Explore
                </Button>
              </div>
               
              {/* 2x2 Image Grid */}
              <div className="grid grid-cols-2 gap-3 mt-auto transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=300"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=300"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1595524362625-b7692b2bd4ab?auto=format&fit=crop&q=80&w=300"
                  className="rounded-xl h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=300"
                  className="rounded-xl h-32 w-full object-cover"
                />
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="md:col-span-7 flex flex-col gap-6">
              
              {/* Find Professionals */}
              <div className="flex-1 bg-slate-800/40 border border-white/5 rounded-3xl p-8 flex items-center relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="w-1/2 relative z-10 pr-4">
                  <h3 className="text-2xl font-serif mb-2">Find Professionals</h3>
                  <p className="text-slate-400 text-sm font-light mb-6">
                    From discovery to execution, manage your entire project.
                  </p>
                  <Button variant="dark" className="w-fit !py-2 !px-6 text-sm">
                    Find
                  </Button>
                </div>
                <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1556912173-3db996e7c3ac?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Get Expert Advice */}
              <div className="flex-1 bg-slate-800/40 border border-white/5 rounded-3xl p-8 flex items-center relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="w-1/2 relative z-10 pr-4">
                  <h3 className="text-2xl font-serif mb-2">Get Expert Advice</h3>
                  <p className="text-slate-400 text-sm font-light mb-6">
                    Need expert guidance? Book a consultation with top designers.
                  </p>
                  <Button variant="dark" className="w-fit !py-2 !px-6 text-sm">
                    Ask
                  </Button>
                </div>
                <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Journey - Light Section */}
      <section className="py-24 px-6 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
              From Idea to Execution
            </h2>
            <p className="text-slate-600">
              A guided journey from inspiration to move-in, built for modern Indian families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Steps Accordion */}
            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`border-b border-slate-200 pb-6 cursor-pointer transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-12 h-12 rounded-full border flex items-center justify-center font-serif text-lg transition-colors duration-300 ${
                          activeStep === index
                            ? 'border-slate-900 text-slate-900 bg-transparent'
                            : 'border-slate-200 text-slate-400'
                        }`}
                      >
                        {step.id}
                      </div>
                      <h3
                        className={`text-2xl font-serif ${
                          activeStep === index ? 'text-slate-900' : 'text-slate-400'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        activeStep === index ? 'rotate-180 text-slate-900' : 'text-slate-300'
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeStep === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-600 pl-[4.5rem] leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Image Display */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {journeySteps.map((step, index) => (
                <img 
                  key={index}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    activeStep === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#0B1121]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl">
            {/* Form Side */}
            <div className="lg:col-span-5 bg-slate-900/50 p-10 md:p-14 flex flex-col justify-center border border-white/5 backdrop-blur-sm">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Begin Your Design Journey Today
              </h2>
              <p className="text-slate-400 mb-10 font-light">
                Explore ideas, estimate costs, and connect with the right professionals—all in one place.
              </p>
              
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20 transition-colors text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20 transition-colors text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Tell us what you're looking for"
                    className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/20 transition-colors text-sm"
                  />
                </div>
                
                <Button
                  variant="primary"
                  fullWidth
                  className="!bg-slate-100 !text-slate-900 !py-4 mt-2"
                >
                  Get In Touch
                </Button>
              </form>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-7 relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="flex items-center gap-2 mb-8 md:mb-0">
              <Sparkles className="text-white w-6 h-6" />
              <span className="text-2xl font-serif font-medium tracking-wide text-white">XSpace</span>
            </div>
            
            <div className="flex flex-wrap gap-8 text-sm font-light text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Explore Ideas
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Find Professionals
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Ask Experts
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 text-slate-500 text-sm gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center gap-3">
                <MapPin size={14} /> 120 Design Street, Creative City, Country
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} /> +123-456-7890
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} /> hello@xspace.com
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <Instagram
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
              <Twitter
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
              <Linkedin
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between text-xs text-slate-600 mt-4">
            <p>© 2025 XSpace Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-400">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-slate-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
