import React from 'react'

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
  )
}

export default WhyChoose
