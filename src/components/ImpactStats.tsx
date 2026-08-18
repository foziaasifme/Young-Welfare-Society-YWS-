import React from 'react';
import { Sparkles, Calendar, ShieldCheck, HeartHandshake, Award, Puzzle, Star, ClipboardCheck } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  return (
    <section className="bg-yellow-400 py-20 relative overflow-hidden">
      
      {/* Absolute Decorative Geometric Gradients */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-60 -mr-20 -mb-20 pointer-events-none"></div>
      <div className="absolute left-10 top-10 w-48 h-48 bg-emerald-700/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text and CTA exactly like wesds.png */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-black text-emerald-950 leading-tight">
            We’re Making a <br />
            <span className="text-emerald-800 underline decoration-emerald-800/40">Difference</span>
          </h2>
          <p className="text-emerald-900/90 text-sm sm:text-base leading-relaxed font-light">
            Young Welfare Society transforms lives by empowering youth, providing health coverage, supporting widows, and securing pure water. We foster independence, relief, and educational growth to create a more resilient, self-sufficient society in Lodhran.
          </p>

          <div className="pt-2">
            <button className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg">
              <span>Our Impact</span>
              <span className="bg-emerald-800 text-yellow-300 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-mono">+</span>
            </button>
          </div>
        </div>

        {/* Right Side: Collage & Large Stats cards matching wesds.png */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1: 5000+ individuals (Warm Yellow/White block) */}
          <div className="bg-white rounded-[28px] p-8 shadow-md border border-yellow-200/50 space-y-4 relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <span className="text-5xl sm:text-6xl font-black text-emerald-950 tracking-tight block">
                5000+
              </span>
              <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center shrink-0">
                <Puzzle className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-lg">Individuals Supported</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Empowered with medical consultations, eye spectacles, pure water access, and emergency relief support.
              </p>
            </div>
          </div>

          {/* Card 2: 34+ Years */}
          <div className="bg-emerald-900 rounded-[28px] p-8 shadow-md text-white space-y-4 relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <span className="text-5xl sm:text-6xl font-black text-yellow-400 tracking-tight block">
                34+
              </span>
              <div className="w-10 h-10 bg-emerald-800 text-yellow-300 rounded-xl flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-emerald-100 text-lg">Years of Commitment</h4>
              <p className="text-emerald-200/80 text-xs sm:text-sm leading-relaxed">
                Continuous on-ground social development, food drives, and youth mentoring since 1992 in Dhanot, Punjab.
              </p>
            </div>
          </div>

          {/* Card 3: 98% Transparency */}
          <div className="bg-white rounded-[28px] p-8 shadow-md border border-yellow-200/50 space-y-4 relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start">
              <span className="text-5xl sm:text-6xl font-black text-emerald-950 tracking-tight block">
                98%
              </span>
              <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-gray-900 text-lg">Transparency Score</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Active auditing, detailed project completion reports, and open donation utilization lists for every program.
              </p>
            </div>
          </div>

          {/* Card 4: Micro Gallery Collage block */}
          <div className="bg-emerald-950 rounded-[28px] overflow-hidden shadow-md h-full relative group min-h-[180px]">
            <div className="absolute inset-0 bg-emerald-900/40 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400" 
              alt="Community smile" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-1">
              <span className="bg-yellow-400 text-emerald-950 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md">
                100% Volunteer NGO
              </span>
              <p className="text-xs text-emerald-100 leading-snug">Empowering locals through localized action networks.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
