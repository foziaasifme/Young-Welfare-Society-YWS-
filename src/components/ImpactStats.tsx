import React from 'react';
import { Calendar, ShieldCheck, Users, HeartHandshake, Award } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  return (
    <section className="bg-emerald-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-950 z-0 opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-300 font-semibold text-xs uppercase tracking-widest bg-emerald-800 px-3 py-1 rounded-full border border-emerald-700">
            Commitment & Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Three Decades of Dedicated Service
          </h2>
          <p className="text-emerald-200 text-sm sm:text-base mt-2">
            Rooted in Dhanot, Punjab since 1992, YWS continues to serve communities with integrity and compassion.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="bg-emerald-800 border border-emerald-700 p-6 sm:p-8 rounded-2xl text-center shadow-lg">
            <div className="w-12 h-12 bg-emerald-700 text-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
              <Calendar className="w-6 h-6 text-emerald-200" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">34+</div>
            <div className="text-sm text-emerald-200 font-medium">Years of Service (Since 1992)</div>
          </div>

          <div className="bg-emerald-800 border border-emerald-700 p-6 sm:p-8 rounded-2xl text-center shadow-lg">
            <div className="w-12 h-12 bg-emerald-700 text-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
              <ShieldCheck className="w-6 h-6 text-emerald-200" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">1995</div>
            <div className="text-sm text-emerald-200 font-medium">Official Registration (16 Feb)</div>
          </div>

          <div className="bg-emerald-800 border border-emerald-700 p-6 sm:p-8 rounded-2xl text-center shadow-lg">
            <div className="w-12 h-12 bg-emerald-700 text-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
              <Users className="w-6 h-6 text-emerald-200" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">Multiple</div>
            <div className="text-sm text-emerald-200 font-medium">Communities & Youth Reached</div>
          </div>

          <div className="bg-emerald-800 border border-emerald-700 p-6 sm:p-8 rounded-2xl text-center shadow-lg">
            <div className="w-12 h-12 bg-emerald-700 text-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
              <HeartHandshake className="w-6 h-6 text-emerald-200" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">100%</div>
            <div className="text-sm text-emerald-200 font-medium">Volunteer Driven & Non-Profit</div>
          </div>
        </div>
      </div>
    </section>
  );
};
