import React, { useState } from 'react';
import { Maximize2, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import type { GalleryItem } from '../types/gym';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Photos', value: 'all' },
    { label: 'Gym Interior', value: 'interior' },
    { label: 'Heavy Equipment', value: 'equipment' },
    { label: 'Workout Sessions', value: 'workouts' },
    { label: 'Transformations', value: 'transformations' }
  ];

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };

  const activeItem: GalleryItem | null =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-gym-charcoal/40 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gym-accent/10 border border-gym-accent/20 text-gym-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Tour & Transformations</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white font-heading uppercase tracking-tight mb-4">
            INSIDE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-gym-accentCrimson">THE FORGE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore our state-of-the-art platforms, cardio deck, Finnish saunas, and real client bodily metamorphoses.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setFilter(c.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  filter === c.value
                    ? 'bg-gym-accent text-white shadow-lg shadow-gym-accent/30'
                    : 'bg-gym-card text-slate-400 hover:text-white border border-gym-border'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer border border-gym-border hover:border-gym-accent/60 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110">
                <Maximize2 className="w-4 h-4 text-gym-accent" />
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-gym-accent">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-1 mt-0.5">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-gym-accent text-white transition-colors z-20 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gym-accent text-white transition-colors z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gym-accent text-white transition-colors z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox content */}
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4 max-w-2xl">
              <span className="text-xs uppercase font-extrabold tracking-widest text-gym-accent">
                {activeItem.category} • Image {(activeLightboxIndex ?? 0) + 1} of {filteredItems.length}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {activeItem.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
