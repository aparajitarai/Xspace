import React, { useState } from 'react'

const ExploreIdeas = () => {
  const [filter, setFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [likedItems, setLikedItems] = useState(new Set())
  const [displayCount, setDisplayCount] = useState(8)

  const items = [
    { id: 1, type: 'architecture', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80', user: 'Sarah J.', userImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64', title: 'Concrete Dreams' },
    { id: 2, type: 'design', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', user: 'Davide M.', userImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64', title: 'Abstract Flow' },
    { id: 3, type: 'technology', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', user: 'TechDaily', userImg: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64', title: 'Cyber Future' },
    { id: 4, type: 'photography', img: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&q=80', user: 'PhotoPro', userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64', title: 'Golden Hour' },
    { id: 5, type: 'design', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', user: 'Interiors', userImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64', title: 'Modern Chair' },
    { id: 6, type: 'typography', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', user: 'TypeFoundry', userImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64', title: 'Bold Serifs' },
    { id: 7, type: 'architecture', img: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80', user: 'ArchDigest', userImg: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64', title: 'Spiral Staircase' },
    { id: 8, type: 'design', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80', user: 'WebMaster', userImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64', title: 'UI Kit Dark' },
    { id: 9, type: 'photography', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', user: 'SnapArt', userImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64', title: 'Urban Landscape' },
    { id: 10, type: 'architecture', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80', user: 'BuildCo', userImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64', title: 'Modern Tower' },
    { id: 11, type: 'design', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', user: 'Creative Lab', userImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64', title: 'Color Study' },
    { id: 12, type: 'typography', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', user: 'FontMaster', userImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64', title: 'Typeface Showcase' },
  ]

  const filteredItems = filter === 'all' ? items : items.filter(item => item.type === filter)
  const displayedItems = filteredItems.slice(0, displayCount)
  const hasMore = displayCount < filteredItems.length

  const toggleLike = (itemId) => {
    const newLiked = new Set(likedItems)
    if (newLiked.has(itemId)) {
      newLiked.delete(itemId)
    } else {
      newLiked.add(itemId)
    }
    setLikedItems(newLiked)
  }

  const loadMore = () => {
    setDisplayCount(displayCount + 4)
  }

  const openLightbox = (item) => {
    setSelectedItem(item)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const filters = ['all', 'architecture', 'design', 'photography', 'typography']

  return (
    <div className="min-h-screen bg-[#FDFCF8]">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-40 bg-[#FDFCF8]/80 backdrop-blur-lg border-b border-[#F4F1EA] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-9 h-9 bg-[#C05621] rounded-full flex items-center justify-center text-white font-serif font-bold italic text-lg shadow-md">E</div>
              <span className="font-serif text-2xl font-bold tracking-tight text-gray-900">Explore.</span>
            </div>
            <div className="hidden md:flex space-x-1 items-center">
              <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-[#F4F1EA] rounded-full">Home</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#C05621] hover:bg-white rounded-full transition-all">Today</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#C05621] hover:bg-white rounded-full transition-all">Following</button>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-900 transition-colors p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
              <button className="hidden md:block px-6 py-2.5 rounded-full bg-[#2D3748] text-white text-sm font-medium hover:bg-black hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Submit Work
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-12 pb-10 sm:pt-20 sm:pb-16 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-6 tracking-tight leading-tight">
            Curating the <br className="hidden sm:block" /><span className="italic text-[#C05621] relative inline-block">
              extraordinary
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#C05621]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>.
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            A visual discovery engine for the creative mind. Find inspiration in architecture, design, and photography.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto group z-20 mb-10">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400 group-focus-within:text-[#C05621] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" className="block w-full pl-14 pr-32 py-4 rounded-full border-2 border-[#F4F1EA] bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#C05621] focus:ring-4 focus:ring-[#C05621]/10 shadow-sm hover:shadow-lg transition-all text-lg" placeholder="Search for 'minimalist'..." />
            <div className="absolute right-2 top-2 bottom-2">
              <button className="h-full bg-[#F4F1EA] hover:bg-[#C05621] hover:text-white text-gray-600 px-6 rounded-full font-medium text-sm transition-colors">Search</button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-[#2D3748] text-white shadow-md'
                    : 'bg-white border border-[#F4F1EA] text-gray-600 hover:border-[#C05621] hover:text-[#C05621] hover:shadow-md'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {displayedItems.map((item) => (
            <div key={item.id} className="break-inside-avoid mb-6 group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300" onClick={() => openLightbox(item)}>
                <img src={item.img} alt={item.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <button className="bg-[#C05621] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-[#9C4221]">Save</button>
                  </div>
                  <div>
                    <h3 className="text-white font-serif italic text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-center px-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                    <img src={item.userImg} className="w-full h-full object-cover" alt={item.user} />
                  </div>
                  <span className="text-xs font-medium text-gray-700 hover:underline">{item.user}</span>
                </div>
                <button
                  className={`transition-colors transform active:scale-125 duration-150 ${likedItems.has(item.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                  onClick={() => toggleLike(item.id)}
                >
                  <svg className="w-5 h-5" fill={likedItems.has(item.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button onClick={loadMore} className="px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-medium hover:border-[#C05621] hover:text-[#C05621] hover:shadow-sm transition-all">
              Load more inspiration
            </button>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm p-4 sm:p-8" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-50"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="w-full md:w-2/3 h-1/2 md:h-96 bg-gray-50 relative">
              <img src={selectedItem.img} className="w-full h-full object-contain" alt={selectedItem.title} />
            </div>
            <div className="w-full md:w-1/3 h-1/2 md:h-96 p-8 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src={selectedItem.userImg} className="w-full h-full object-cover" alt={selectedItem.user} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{selectedItem.user}</h3>
                    <p className="text-xs text-gray-500">Follow</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-[#C05621] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">{selectedItem.title}</h2>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C05621] mb-4">{selectedItem.type}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                This is a curated piece selected for its unique aesthetic and contribution to the visual arts.
              </p>
              <div className="mt-auto">
                <button className="w-full py-3 bg-[#C05621] hover:bg-[#9C4221] text-white rounded-full font-medium transition-colors shadow-lg shadow-[#C05621]/30">
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-[#F4F1EA] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="font-serif text-xl font-bold text-gray-900 block">Explore.</span>
            <span className="text-xs text-gray-400 mt-1 block">Curated by designers, for designers.</span>
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="text-gray-500 hover:text-[#C05621] transition-colors">About</a>
            <a href="#" className="text-gray-500 hover:text-[#C05621] transition-colors">Submission Rules</a>
            <a href="#" className="text-gray-500 hover:text-[#C05621] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ExploreIdeas
