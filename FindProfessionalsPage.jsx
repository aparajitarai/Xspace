import React, { useMemo, useState } from "react";

const navLinks = [
  { label: "Explore Ideas", href: "#" },
  { label: "Find Professionals", href: "#", active: true },
  { label: "Ask Experts", href: "#" },
];

const professionalsData = [
  {
    name: "Trusted Builders Ltd",
    startingPrice: "Projects starting from ₹5L",
    description:
      "We craft bespoke residential and commercial spaces with meticulous attention to detail and a passion for timeless design.",
    services: ["Environment", "Furniture and people", "Texturing & lighting", "+2"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    name: "Calm Interiors Studio",
    startingPrice: "Projects starting from ₹5L",
    description:
      "Minimal, serene interiors tailored for modern living. We merge comfort, texture, and lighting to create relaxing sanctuaries.",
    services: ["Environment", "Texturing & lighting", "Material sourcing", "+2"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    name: "North Star Construction",
    startingPrice: "Projects starting from ₹5L",
    description:
      "Full-service construction and interior build-outs for upscale residences, blending craftsmanship with reliable delivery.",
    services: ["Construction", "Project management", "Custom cabinetry", "+2"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    name: "Atelier & Co. Designs",
    startingPrice: "Projects starting from ₹5L",
    description:
      "Boutique design house creating luxurious spaces with curated materials, bespoke furnishings, and personalized styling.",
    services: ["Bespoke furniture", "Lighting plans", "Styling", "+2"],
    imageUrls: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
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

const AvatarPlaceholder = () => (
  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-semibold">
    <span className="text-sm">XP</span>
  </div>
);

const FooterSocial = ({ label }) => (
  <span className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center text-sm font-semibold tracking-wide hover:bg-white/10 transition">
    {label}
  </span>
);

const ProfessionalCard = ({ professional, index, activeIndex, onPrev, onNext }) => {
  const currentImage = useMemo(
    () => professional.imageUrls[activeIndex[index]],
    [activeIndex, index, professional.imageUrls]
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
          onClick={() => onPrev(index)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900/90 transition"
        >
          <ArrowIcon className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => onNext(index)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/70 text-white flex items-center justify-center hover:bg-slate-900/90 transition"
        >
          <ArrowIcon direction="right" className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="text-sm font-semibold text-slate-800">{professional.startingPrice}</div>

        <div className="flex items-center gap-3">
          <AvatarPlaceholder />
          <div>
            <h3 className="text-lg font-semibold text-slate-900 font-serif">{professional.name}</h3>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed text-sm">
          {professional.description} <a className="text-[#d39a8c] font-semibold" href="#">See more</a>
        </p>

        <div>
          <div className="text-sm font-semibold text-slate-800 mb-3">Services offered</div>
          <div className="flex flex-wrap gap-2">
            {professional.services.map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-full bg-[#d39a8c] text-white text-xs font-semibold tracking-wide"
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
  const [activeIndex, setActiveIndex] = useState(
    () => professionalsData.map(() => 0)
  );

  const handlePrev = (cardIndex) => {
    setActiveIndex((prev) =>
      prev.map((value, idx) => {
        if (idx !== cardIndex) return value;
        const images = professionalsData[idx].imageUrls;
        return (value - 1 + images.length) % images.length;
      })
    );
  };

  const handleNext = (cardIndex) => {
    setActiveIndex((prev) =>
      prev.map((value, idx) => {
        if (idx !== cardIndex) return value;
        const images = professionalsData[idx].imageUrls;
        return (value + 1) % images.length;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffe8de] to-[#ffd3cf] text-slate-800">
      <header className="sticky top-0 z-20 bg-[#050b2a] text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 font-semibold tracking-wide">
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#d39a8c] font-serif text-lg">✦</span>
            <span className="text-lg">XSpace</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition hover:text-[#d39a8c] ${
                  link.active ? "border-b-2 border-[#d39a8c] pb-1" : ""
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

        <section className="bg-white rounded-[28px] shadow-2xl p-6 md:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl lg:text-3xl font-serif text-[#050b2a] tracking-wide">
              Discover Trusted Professionals
            </h2>
            <span className="text-sm text-slate-500">Found 6 professionals</span>
          </div>

          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-3 shadow-sm">
            <MagnifierIcon className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none text-sm text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="px-4 py-2 rounded-full bg-[#d39a8c] text-white text-sm font-semibold shadow-sm">
              Popular
            </button>
            <button className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition">
              Category
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {professionalsData.slice(0, 4).map((professional, index) => (
              <ProfessionalCard
                key={professional.name}
                professional={professional}
                index={index}
                activeIndex={activeIndex}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="px-5 py-2 text-[#d39a8c] font-semibold rounded-full hover:bg-[#d39a8c]/10 transition">
              See more
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#050b2a] text-white mt-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-semibold tracking-wide">
                <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#d39a8c] font-serif text-lg">✦</span>
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
                <a className="block hover:text-[#d39a8c] transition" href="#">
                  Explore Ideas
                </a>
                <a className="block hover:text-[#d39a8c] transition" href="#">
                  Find Professionals
                </a>
                <a className="block hover:text-[#d39a8c] transition" href="#">
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
                <a className="hover:text-[#d39a8c] transition" href="#">
                  Terms & Condition
                </a>
                <a className="hover:text-[#d39a8c] transition" href="#">
                  Privacy & Policy
                </a>
                <a className="hover:text-[#d39a8c] transition" href="#">
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
