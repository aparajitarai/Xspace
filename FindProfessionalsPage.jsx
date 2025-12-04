import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  Twitter,
} from 'lucide-react';
import Chart from 'chart.js/auto';

const Navbar = () => (
  <nav className="bg-[#0f172a] text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
      <span className="font-serif text-xl tracking-wide">XSpace</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-light text-slate-300">
      <a href="#" className="hover:text-white transition-colors">
        Explore Ideas
      </a>
      <a href="#" className="text-white font-medium">
        Find Professionals
      </a>
      <a href="#" className="hover:text-white transition-colors">
        Ask Experts
      </a>
    </div>
    <div className="flex gap-4">
      <button className="px-5 py-1.5 rounded-full border border-slate-600 text-sm hover:bg-white/10 transition-colors">
        Sign Up
      </button>
      <button className="px-5 py-1.5 rounded-full bg-white text-[#0f172a] text-sm font-medium hover:bg-slate-200 transition-colors">
        Log In
      </button>
    </div>
  </nav>
);

const SocialIcon = ({ icon }) => (
  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 cursor-pointer transition-colors text-white">
    {icon}
  </div>
);

const Footer = () => (
  <footer className="bg-[#0f172a] text-slate-400 py-12 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div>
        <div className="flex items-center gap-2 text-white mb-6">
          <span className="font-serif text-2xl tracking-wide">XSpace</span>
        </div>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-3">
            <MapPin className="w-4 h-4" /> 123 Design Street, Creativity City, Country
          </p>
          <p className="flex items-center gap-3">
            <Phone className="w-4 h-4" /> +123-456-7890
          </p>
          <p className="flex items-center gap-3">
            <Mail className="w-4 h-4" /> hello@xspace.com
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white">
            Explore Ideas
          </a>
          <a href="#" className="hover:text-white">
            Find Professionals
          </a>
          <a href="#" className="hover:text-white">
            Ask Experts
          </a>
        </div>
        <div className="flex gap-4">
          <SocialIcon icon={<Instagram className="w-4 h-4" />} />
          <SocialIcon icon={<Twitter className="w-4 h-4" />} />
          <SocialIcon icon={<Linkedin className="w-4 h-4" />} />
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between text-slate-600">
      <p>© 2025 XSpace Pvt Ltd. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#">Terms &amp; Condition</a>
        <a href="#">Privacy &amp; Policy</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
);

const StatCard = ({ value, label }) => (
  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
    <div className="text-2xl font-bold text-slate-900">{value}</div>
    <div className="text-[10px] text-slate-500 uppercase tracking-wide font-bold mt-1">{label}</div>
  </div>
);

const PortfolioPage = ({ professional, onBack }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return undefined;

    const chartInstance = new Chart(chartRef.current, {
      type: 'radar',
      data: {
        labels: ['Technical', 'Design', 'Comm', 'Lead', 'Strat', 'Speed'],
        datasets: [
          {
            label: 'Skill',
            data: [90, 85, 95, 80, 75, 92],
            fill: true,
            backgroundColor: 'rgba(216, 152, 152, 0.2)',
            borderColor: '#D89898',
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { r: { ticks: { display: false } } },
      },
    });

    return () => chartInstance.destroy();
  }, []);

  if (!professional) return null;

  return (
    <div className="bg-slate-50 min-h-screen pb-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> <span className="font-medium">Back to Results</span>
        </button>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <img
              src={professional.image}
              alt={professional.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 bg-slate-100"
            />
            <h1 className="text-3xl font-bold text-slate-900">{professional.name}</h1>
            <p className="text-lg text-[#D89898] font-medium">{professional.role}</p>
            <div className="flex gap-2 mt-4 flex-wrap justify-center lg:justify-start">
              {professional.tags.map((tag, i) => (
                <span key={tag} className="px-3 py-1 bg-[#D89898] text-white text-xs rounded-md font-bold uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <StatCard value={professional.stats.success} label="Job Success" />
            <StatCard value={professional.stats.projects} label="Projects" />
            <StatCard value={professional.stats.exp} label="Experience" />
            <StatCard value={professional.stats.rate} label="Hourly Rate" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-4">Competency Map</h3>
              <div className="h-64">
                <canvas ref={chartRef} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={`https://source.unsplash.com/random/400x300?interior,home&sig=${item}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Project"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-slate-800">Modern Residence {item}</h4>
                    <p className="text-slate-500 text-xs mt-1">Full interior renovation • 3 months</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FindProfessionalsPage = ({ onViewProfile }) => {
  const professionals = [
    {
      id: 1,
      name: 'Trusted Builders Ltd',
      role: 'Interior Design Firm',
      price: '₹5L',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trusted&backgroundColor=ffdfbf',
      projectImage:
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop',
      description:
        "If you're frustrated with generic designs lacking a human touch, experience the difference with us. We bring your vision to life with high-quality 3D interior d...",
      tags: ['Environment', 'Furniture and people', 'Texturing & lighting', '+ 2'],
      stats: { success: '98%', projects: 142, exp: '8.5yrs', rate: '$85' },
    },
    {
      id: 2,
      name: 'Bengaluru Private Interiors Pvt Ltd',
      role: 'Architecture Studio',
      price: '₹5L',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bengaluru&backgroundColor=c0aede',
      projectImage:
        'https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?q=80&w=1000&auto=format&fit=crop',
      description:
        "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior d...",
      tags: ['Environment', 'Furniture and people'],
      stats: { success: '95%', projects: 89, exp: '12yrs', rate: '$120' },
    },
    {
      id: 3,
      name: 'Sample Company Pvt Ltd',
      role: 'Design Consultancy',
      price: '₹5L',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sample&backgroundColor=b6e3f4',
      projectImage:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
      description:
        "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior d...",
      tags: ['Furniture and people', 'Texturing & lighting'],
      stats: { success: '92%', projects: 210, exp: '5yrs', rate: '$60' },
    },
    {
      id: 4,
      name: 'Envato Prime Designs',
      role: 'Luxury Interiors',
      price: '₹5L',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Envato&backgroundColor=e1eae4',
      projectImage:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop',
      description:
        "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior d...",
      tags: ['Environment'],
      stats: { success: '100%', projects: 45, exp: '3yrs', rate: '$95' },
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFF5F5] to-[#EAD6D6] min-h-screen pb-20">
      <div className="text-center pt-12 pb-8 px-4">
        <h1 className="text-4xl font-serif text-[#0f172a] mb-3">Find Professionals</h1>
        <p className="text-slate-600 mb-6">Bringing your dream space to life starts with the right professional.</p>

        <button className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-200 text-slate-700 hover:bg-white transition-colors inline-flex items-center gap-2 text-sm font-medium shadow-sm">
          Select Your Location <span className="text-xs">▼</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h2 className="text-2xl font-serif text-slate-900">Discover Trusted Professionals</h2>
          <span className="text-slate-500 text-sm">Found {professionals.length} professionals</span>
        </div>

        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#F3F4F6] border-none rounded-xl py-3 pl-12 pr-4 text-slate-700 focus:ring-2 focus:ring-slate-200 focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-1.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-600 flex items-center gap-2 hover:bg-slate-50">
              Popular <span className="text-xs">▼</span>
            </button>
            <button className="px-4 py-1.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-600 flex items-center gap-2 hover:bg-slate-50">
              Category <span className="text-xs">▼</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionals.map((pro) => (
            <div
              role="button"
              tabIndex={0}
              key={pro.id}
              onClick={() => onViewProfile(pro)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onViewProfile(pro);
                }
              }}
              className="group bg-transparent flex flex-col items-start text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D89898] focus:ring-offset-2 focus:ring-offset-white rounded-xl"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 shadow-sm">
                <img
                  src={pro.projectImage}
                  alt="Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="sr-only">View profile for {pro.name}</span>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronLeft className="w-4 h-4" />
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">Projects starting from {pro.price}</h3>

              <div className="flex items-center gap-3 mb-2">
                <img src={pro.image} alt={pro.name} className="w-8 h-8 rounded-full bg-slate-200" />
                <span className="font-bold text-slate-800 text-sm">{pro.name}</span>
              </div>

              <p className="text-slate-500 text-xs leading-relaxed mb-1">{pro.description}</p>
              <span className="text-xs font-bold text-slate-900 mb-4">See more</span>

              <div className="mt-auto w-full">
                <h4 className="text-xs font-bold text-slate-900 mb-2">Services offered</h4>
                <div className="flex flex-wrap gap-2">
                  {pro.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#D89898] text-white text-[10px] uppercase font-bold rounded-md tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-slate-800 font-semibold hover:text-slate-600 transition-colors">See more</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedPro, setSelectedPro] = useState(null);

  const handleViewProfile = (pro) => {
    setSelectedPro(pro);
    setCurrentView('portfolio');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedPro(null);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <Navbar />

      {currentView === 'list' ? (
        <FindProfessionalsPage onViewProfile={handleViewProfile} />
      ) : (
        <PortfolioPage professional={selectedPro} onBack={handleBack} />
      )}

      <Footer />
    </div>
  );
};

export default App;
