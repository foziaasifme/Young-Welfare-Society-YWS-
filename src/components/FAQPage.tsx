import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp, Search, HelpCircle, ShieldCheck } from 'lucide-react';

interface FAQPageProps {
  faqs: FAQItem[];
}

export const FAQPage: React.FC<FAQPageProps> = ({ faqs }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const categories = ['All', 'Registration', 'Membership & Volunteering', 'Donations & Support', 'General'];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-emerald-950 text-white py-16 sm:py-24 hero-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-emerald-300 font-semibold text-xs uppercase tracking-widest bg-emerald-800 px-3.5 py-1.5 rounded-full">
            Help & Information
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Find answers to common questions about Young Welfare Society, membership, donations, and our history since 1992.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8">
        {/* Search & Category Filter */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 space-y-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords..."
              className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200/80">
            <HelpCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-800">No FAQs found</h3>
            <p className="text-gray-500 text-sm mt-1">Try searching with different keywords or category.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-emerald-50/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                        Q
                      </div>
                      <span className="font-bold text-gray-900 text-base sm:text-lg">{faq.question}</span>
                    </div>
                    <div className="p-1 rounded-full bg-gray-100 text-gray-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-emerald-50/20 text-gray-700 text-base leading-relaxed space-y-3">
                      <p>{faq.answer}</p>
                      <div className="flex items-center gap-2 pt-2 text-xs font-medium text-emerald-800">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Category: {faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
