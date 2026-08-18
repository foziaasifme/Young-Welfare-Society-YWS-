import React, { useState } from 'react';
import { GalleryImage } from '../types';
import { Eye, X } from 'lucide-react';

interface GalleryPageProps {
  gallery: GalleryImage[];
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ gallery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Community', 'Youth', 'Workshops', 'Events', 'Welfare'];

  const filtered = gallery.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-emerald-950 text-white py-16 sm:py-24 hero-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-emerald-300 font-semibold text-xs uppercase tracking-widest bg-emerald-800/80 px-3.5 py-1.5 rounded-full">
            Visual Heritage & Moments
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            YWS Photo Gallery
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Explore moments from our community welfare work, youth conventions, and educational support camps.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-900 border border-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200/80">
            <h3 className="text-xl font-bold text-gray-800">No photos found</h3>
            <p className="text-gray-500 text-sm mt-1">Try selecting a different category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-sm bg-gray-200 cursor-pointer border border-gray-200/60"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-emerald-100 text-xs mt-1 line-clamp-1">{item.caption}</p>
                </div>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border border-emerald-800 flex flex-col">
            <div className="relative h-[60vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2.5 rounded-full shadow transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-emerald-900 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">{selectedImage.category}</span>
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-emerald-100 text-sm mt-1">{selectedImage.caption}</p>
              </div>
              <span className="text-xs bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full">{selectedImage.date}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
