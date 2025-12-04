import React, { useMemo, useState } from "react";

const navLinks = [
  { label: "Explore Ideas", href: "#" },
  { label: "Find Professionals", href: "#", active: true },
  { label: "Ask Experts", href: "#" },
];

const professionalsData = [
  {
    id: 1,
    name: "Trusted Builders Ltd",
    startingPrice: "₹5L",
    description:
      "We craft bespoke residential and commercial spaces with meticulous attention to detail and a passion for timeless design.",
    category: "Construction",
    services: ["Environment", "Furniture and people", "Texturing & lighting", "Custom cabinetry"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.8,
    reviews: 24,
    email: "info@trustedbuilders.com",
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Calm Interiors Studio",
    startingPrice: "₹5L",
    description:
      "Minimal, serene interiors tailored for modern living. We merge comfort, texture, and lighting to create relaxing sanctuaries.",
    category: "Interior Design",
    services: ["Environment", "Texturing & lighting", "Material sourcing", "Styling"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.9,
    reviews: 18,
    email: "hello@calminteriors.com",
    phone: "+91 98765 43211",
  },
  {
    id: 3,
    name: "North Star Construction",
    startingPrice: "₹8L",
    description:
      "Full-service construction and interior build-outs for upscale residences, blending craftsmanship with reliable delivery.",
    category: "Construction",
    services: ["Construction", "Project management", "Custom cabinetry", "Material sourcing"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.7,
    reviews: 31,
    email: "contact@northstar.com",
    phone: "+91 98765 43212",
  },
  {
    id: 4,
    name: "Atelier & Co. Designs",
    startingPrice: "₹6L",
    description:
      "Boutique design house creating luxurious spaces with curated materials, bespoke furnishings, and personalized styling.",
    category: "Interior Design",
    services: ["Bespoke furniture", "Lighting plans", "Styling", "Material sourcing"],
    imageUrls: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.9,
    reviews: 22,
    email: "atelier@atelierco.com",
    phone: "+91 98765 43213",
  },
  {
    id: 5,
    name: "Urban Spaces Co.",
    startingPrice: "₹4L",
    description:
      "Modern minimalist designs with focus on functionality and sustainability. Perfect for urban apartments and small spaces.",
    category: "Interior Design",
    services: ["Space planning", "Lighting design", "Sustainability", "3D visualization"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.6,
    reviews: 15,
    email: "hello@urbanspaces.com",
    phone: "+91 98765 43214",
  },
  {
    id: 6,
    name: "Heritage Renovations",
    startingPrice: "₹12L",
    description:
      "Expert in restoring and renovating heritage properties while maintaining architectural integrity and historical value.",
    category: "Construction",
    services: ["Heritage restoration", "Structural work", "Material research", "Documentation"],
    imageUrls: [
      "https://images.unsplash.com/photo-1505692069463-3b454af1c602?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.8,
    reviews: 9,
    email: "info@heritage.com",
    phone: "+91 98765 43215",
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

const AvatarPlaceholder = ({ name = "XP" }) => (
  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-semibold">
    <span className="text-sm">{name}</span>
  </div>
);

const FooterSocial = ({ label }) => (
  <span className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center text-sm font-semibold tracking-wide hover:bg-white/10 transition">
    {label}
  </span>
);

const ProfessionalCard = ({ professional, index, activeIndex, onPrev, onNext, isFavorite, onToggleFavorite, onContact }) => {
  const currentImage = useMemo(
    () => professional.imageUrls[activeIndex[index]],
    [activeIndex, index, professional.imageUrls]
  );

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      <span className="text-xs text-slate-600 ml-1">({professional.reviews})</span>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow">
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
        <button
          type="button"
          onClick={() => onToggleFavorite(professional.id)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition"
        >
          <svg
            className={`w-6 h-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400'}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-grow">
        <div>
          <div className="text-sm font-semibold text-slate-800">Starting from {professional.startingPrice}</div>
          <div className="text-xs text-slate-500 mt-1">{professional.category}</div>
        </div>

        <div className="flex items-center gap-3">
          <AvatarPlaceholder name={professional.name.slice(0, 2)} />
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-slate-900 font-serif">{professional.name}</h3>
            <StarRating rating={professional.rating} />
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed text-sm">
          {professional.description}
        </p>

        <div>
          <div className="text-sm font-semibold text-slate-800 mb-3">Services offered</div>
          <div className="flex flex-wrap gap-2">
            {professional.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-full bg-[#d39a8c] text-white text-xs font-semibold tracking-wide"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto pt-4">
          <button
            onClick={() => onContact(professional)}
            className="flex-1 px-4 py-2 bg-[#d39a8c] text-white rounded-lg font-semibold hover:bg-[#c17f77] transition text-sm"
          >
            Contact
          </button>
          <button className="flex-1 px-4 py-2 border border-[#d39a8c] text-[#d39a8c] rounded-lg font-semibold hover:bg-[#d39a8c]/10 transition text-sm">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default function FindProfessionalsPage() {
  const [activeIndex, setActiveIndex] = useState(
    () => professionalsData.map(() => 0)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState(new Set());
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const categories = ["All", "Interior Design", "Construction"];

  const filteredAndSortedProfessionals = useMemo(() => {
    let result = [...professionalsData];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => parseInt(a.startingPrice) - parseInt(b.startingPrice));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => parseInt(b.startingPrice) - parseInt(a.startingPrice));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

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

  const toggleFavorite = (professionalId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(professionalId)) {
      newFavorites.delete(professionalId);
    } else {
      newFavorites.add(professionalId);
    }
    setFavorites(newFavorites);
  };

  const handleContactClick = (professional) => {
    setSelectedProfessional(professional);
    setShowContactModal(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert(`Message sent to ${selectedProfessional.name}!\n\nName: ${contactForm.name}\nEmail: ${contactForm.email}\nMessage: ${contactForm.message}`);
    setContactForm({ name: "", email: "", message: "" });
    setShowContactModal(false);
  };

  return (
    <div id="professionals" className="min-h-screen bg-gradient-to-b from-[#ffe8de] to-[#ffd3cf] text-slate-800">
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
            <span className="text-sm text-slate-500">Found {filteredAndSortedProfessionals.length} professionals</span>
          </div>

          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-3 shadow-sm">
            <MagnifierIcon className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-sm text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full bg-[#d39a8c] text-white text-sm font-semibold shadow-sm border-none outline-none cursor-pointer"
            >
              <option value="popular">Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    selectedCategory === cat
                      ? "bg-[#d39a8c] text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredAndSortedProfessionals.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">No professionals found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {filteredAndSortedProfessionals.map((professional, index) => (
                  <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                    index={professionalsData.findIndex(p => p.id === professional.id)}
                    activeIndex={activeIndex}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    isFavorite={favorites.has(professional.id)}
                    onToggleFavorite={toggleFavorite}
                    onContact={handleContactClick}
                  />
                ))}
              </div>

              {filteredAndSortedProfessionals.length > 4 && (
                <div className="text-center pt-4">
                  <button className="px-6 py-2 text-[#d39a8c] font-semibold rounded-full hover:bg-[#d39a8c]/10 transition">
                    See more professionals
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {/* Contact Modal */}
        {showContactModal && selectedProfessional && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif text-[#050b2a]">Contact {selectedProfessional.name}</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="text-slate-500 hover:text-slate-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-[#d39a8c]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-[#d39a8c]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg outline-none focus:border-[#d39a8c] resize-none"
                    placeholder="Tell them about your project..."
                    rows="4"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactModal(false)}
                    className="flex-1 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-[#d39a8c] text-white rounded-lg font-semibold hover:bg-[#c17f77] transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-2"><strong>Direct Contact:</strong></p>
                <p className="text-sm text-slate-700">📧 {selectedProfessional.email}</p>
                <p className="text-sm text-slate-700">📱 {selectedProfessional.phone}</p>
              </div>
            </div>
          </div>
        )}
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
