import React, { useState } from 'react'

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0)

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
  ]

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
  )
}

export default ProcessSection
