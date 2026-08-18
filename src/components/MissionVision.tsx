import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';

interface MissionVisionProps {
  mission: string;
  vision: string;
}

export const MissionVision: React.FC<MissionVisionProps> = ({ mission, vision }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
            Our Purpose & Guiding Light
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Mission & Vision of YWS
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg">
            Guiding our daily endeavors in community welfare, youth development, and social uplifting across Dhanot and Punjab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-70 pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                "{mission}"
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Dedicated to Grassroots Social Impact</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-70 pointer-events-none"></div>
            <div className="relative z-10 space-y-6">
              <div className="w-14 h-14 bg-emerald-700 text-white rounded-2xl flex items-center justify-center shadow">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                "{vision}"
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Building a Resilient & Educated Future</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
