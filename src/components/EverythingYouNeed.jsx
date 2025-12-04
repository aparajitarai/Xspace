import React from 'react'

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
  )
}

export default EverythingYouNeed
