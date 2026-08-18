import React, { useState } from 'react';
import { GalleryImage, PageTab } from '../types';
import { ArrowRight, X, Eye } from 'lucide-react';

interface GallerySectionProps {
  gallery: GalleryImage[];
  setTab: (tab: PageTab) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery, setTab }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const previewImages = gallery.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
              Visual Moments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              YWS Community Gallery
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Glimpses of our welfare activities, youth workshops, plantation campaigns, and community gatherings.
            </p>
          </div>
          <button
            onClick={() => setTab('gallery')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-sm bg-gray-200 cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
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
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
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
    </section>
  );
};
