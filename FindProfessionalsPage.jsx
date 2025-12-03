import React, { useEffect, useMemo, useState } from "react";

const navLinks = [
  { label: "Explore Ideas", href: "#" },
  { label: "Find Professionals", href: "#", active: true },
  { label: "Ask Experts", href: "#" },
];

const professionalsData = [
  {
    id: 1,
    name: "Trusted Builders Ltd",
    startingPrice: "Projects starting from ₹5L",
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior d...",
    services: ["Environment", "Furniture and people", "Texturing & lighting", "+ 2"],
    logo: "https://randomuser.me/api/portraits/men/32.jpg",
    imageUrls: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
    ],
  },
  {
    id: 2,
    name: "Bengaluru Private Interiors Pvt Ltd",
    startingPrice: "Projects starting from ₹5L",
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior d...",
    services: ["Environment", "Furniture and people"],
    logo: "https://randomuser.me/api/portraits/men/45.jpg",
    imageUrls: [
      "https://images.unsplash.com/photo-1600596542815-2a4d04774c13?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
    ],
  },
  {
    id: 3,
    name: "Sample Company Pvt Ltd",
    startingPrice: "Projects starting from ₹5L",
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior d...",
    services: ["Furniture and people", "Texturing & lighting"],
    logo: "https://randomuser.me/api/portraits/men/22.jpg",
    imageUrls: [
      "https://images.unsplash.com/photo-1617159268737-a791a9fd4994?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",
    ],
  },
  {
    id: 4,
    name: "Envato Prime Designs",
    startingPrice: "Projects starting from ₹5L",
    description:
      "If you're frustrated with generic designs lacking a human touch, experience the difference with Alvadespro. We bring your vision to life with high-quality 3D interior d...",
    services: ["Environment"],
    logo: "https://randomuser.me/api/portraits/men/64.jpg",
    imageUrls: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=600",
    ],
  },
  {
    id: 5,
    name: "Modern Living Spaces",
    startingPrice: "Projects starting from ₹7L",
    description:
      "Specializing in minimalist modern designs that maximize space and light. Our team ensures a seamless execution from concept to reality.",
    services: ["Interior Design", "Furniture"],
    logo: "https://randomuser.me/api/portraits/women/44.jpg",
    imageUrls: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
    ],
  },
  {
    id: 6,
    name: "Urban Chic Studios",
    startingPrice: "Projects starting from ₹4.5L",
    description:
      "Bringing urban chic to your doorstep. We focus on sustainable materials and contemporary aesthetics suitable for city living.",
    services: ["Environment", "Texturing"],
    logo: "https://randomuser.me/api/portraits/women/65.jpg",
    imageUrls: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1600596542815-2a4d04774c13?auto=format&fit=crop&q=80&w=600",
    ],
  },
];

const ArrowIcon = ({ direction = "left", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {direction === "left" ? (
      <path d="m15 18-6-6 6-6" />
    ) : (
      <path d="m9 6 6 6-6 6" />
    )}
  </svg>
);

const MagnifierIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const Avatar = ({ src, name }) => (
  <div className="w-11 h-11 rounded-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-semibold">
    {src ? (
      <img src={src} alt={`${name} logo`} className="w-full h-full object-cover" />
    ) : (
      <span className="text-sm">XP</span>
    )}
  </div>
);

const FooterSocial = ({ label }) => (
  <span className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center text-sm font-semibold tracking-wide hover:bg-white/10 transition">
    {label}
  </span>
);

const ProfessionalCard = ({ professional, activeIndex, onPrev, onNext }) => {
  const currentImage = useMemo(
    () => professional.imageUrls[activeIndex[professional.id] ?? 0],
    [activeIndex, professional.id, professional.imageUrls]
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={currentImage}
          alt={`${professional.name} project`}
          className="w-full h-64 object-cover"
        />
        <button
          type="button"
          onClick={() => onPrev(professional.id)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900/90 transition"
        >
          <ArrowIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => onNext(professional.id)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900/90 transition"
        >
          <ArrowIcon direction="right" className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="text-sm font-semibold text-slate-800">{professional.startingPrice}</div>

        <div className="flex items-center gap-3">
          <Avatar src={professional.logo} name={professional.name} />
          <div>
            <h3 className="text-lg font-semibold text-slate-900 font-serif">{professional.name}</h3>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed text-sm">
          {professional.description} <a className="text-[#c88a76] font-semibold" href="#">See more</a>
        </p>

        <div>
          <div className="text-sm font-semibold text-slate-800 mb-3">Services offered</div>
          <div className="flex flex-wrap gap-2">
            {professional.services.map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-full bg-[#DFAEA1] text-white text-xs font-semibold tracking-wide"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FindProfessionalsPage() {
  const [activeIndex, setActiveIndex] = useState(() =>
    Object.fromEntries(professionalsData.map((pro) => [pro.id, 0]))
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProfessionals = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return professionalsData;

    return professionalsData.filter((pro) => {
      const matchesName = pro.name.toLowerCase().includes(term);
      const matchesDescription = pro.description.toLowerCase().includes(term);
      const matchesServices = pro.services.some((service) =>
        service.toLowerCase().includes(term)
      );

      return matchesName || matchesDescription || matchesServices;
    });
  }, [searchTerm]);

  useEffect(() => {
    if (filteredProfessionals.length === 0) {
      setVisibleCount(0);
      return;
    }

    setVisibleCount((prev) =>
      Math.min(Math.max(prev || 4, 4), filteredProfessionals.length)
    );
  }, [filteredProfessionals.length]);

  const handlePrev = (cardId) => {
    setActiveIndex((prev) => {
      const images =
        professionalsData.find((pro) => pro.id === cardId)?.imageUrls || [];
      if (images.length === 0) return prev;
      const current = prev[cardId] ?? 0;
      return {
        ...prev,
        [cardId]: (current - 1 + images.length) % images.length,
      };
    });
  };

  const handleNext = (cardId) => {
    setActiveIndex((prev) => {
      const images =
        professionalsData.find((pro) => pro.id === cardId)?.imageUrls || [];
      if (images.length === 0) return prev;
      const current = prev[cardId] ?? 0;
      return {
        ...prev,
        [cardId]: (current + 1) % images.length,
      };
    });
  };

  const visibleProfessionals = filteredProfessionals.slice(0, visibleCount);

  const canLoadMore = visibleCount < filteredProfessionals.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-100/60 to-orange-100/30 text-slate-800 font-sans">
      <header className="sticky top-0 z-20 bg-[#050b2a] text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 font-semibold tracking-wide">
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#c88a76] font-serif text-lg">✦</span>
            <span className="text-lg">XSpace</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition hover:text-[#c88a76] ${
                  link.active ? "border-b-2 border-[#c88a76] pb-1" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3 text-sm font-medium">
            <button className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition">
              Sign Up
            </button>
            <button className="px-4 py-2 rounded-full bg-white text-[#050b2a] font-semibold shadow-md hover:bg-slate-100 transition">
              Log In
            </button>
          </div>
          <button className="md:hidden px-3 py-2 rounded-md border border-white/20 text-sm">Menu</button>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <section className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif text-[#050b2a] mb-4 tracking-wide">
            Find Professionals
          </h1>
          <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Bringing your dream space to life starts with the right professional.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 rounded-full bg-white text-slate-800 shadow-lg border border-slate-200 hover:-translate-y-0.5 transition transform">
              Select Your Location
            </button>
          </div>
        </section>

        <section className="bg-white rounded-[28px] shadow-2xl p-6 md:p-10 space-y-8 border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl lg:text-3xl font-serif text-[#050b2a] tracking-wide">
              Discover Trusted Professionals
            </h2>
            <span className="text-sm text-slate-500">
              Found {filteredProfessionals.length} professionals
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-3 shadow-sm">
            <MagnifierIcon className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="flex-1 outline-none text-sm text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="px-4 py-2 rounded-full bg-[#c88a76] text-white text-sm font-semibold shadow-sm">
              Popular
            </button>
            <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition">
              Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-h-[200px]">
            {visibleProfessionals.length === 0 ? (
              <div className="col-span-1 md:col-span-2 text-center text-slate-500 py-10">
                No professionals found matching your search.
              </div>
            ) : (
              visibleProfessionals.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  professional={professional}
                  activeIndex={activeIndex}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              ))
            )}
          </div>

          {canLoadMore && (
            <div className="text-center">
            <button
                type="button"
                className="px-5 py-2 text-[#c88a76] font-semibold rounded-full hover:bg-[#c88a76]/10 transition"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + 2, filteredProfessionals.length)
                  )
                }
              >
                See more
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-[#050b2a] text-white mt-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-semibold tracking-wide">
                <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#c88a76] font-serif text-lg">✦</span>
                <span className="text-lg">XSpace</span>
              </div>
              <div className="space-y-2 text-sm text-white/80 leading-relaxed">
                <p>123 Dream Avenue, Suite 456</p>
                <p>+91 98765 43210</p>
                <p>hello@xspace.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm space-y-2">
                <a className="block hover:text-[#c88a76] transition" href="#">
                  Explore Ideas
                </a>
                <a className="block hover:text-[#c88a76] transition" href="#">
                  Find Professionals
                </a>
                <a className="block hover:text-[#c88a76] transition" href="#">
                  Ask Experts
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FooterSocial label="IG" />
                <FooterSocial label="X" />
                <FooterSocial label="In" />
              </div>
            </div>

            <div className="flex md:items-end">
              <div className="flex flex-col gap-2 text-xs text-white/70">
                <a className="hover:text-[#c88a76] transition" href="#">
                  Terms & Condition
                </a>
                <a className="hover:text-[#c88a76] transition" href="#">
                  Privacy & Policy
                </a>
                <a className="hover:text-[#c88a76] transition" href="#">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
