import React from 'react';
import { Heart, Activity, Droplet, Users, Sparkles } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  return (
    <section id="heart-of-work" className="bg-white py-20 relative overflow-hidden">
      
      {/* Curved Brush stroke effect or accent shapes on sides */}
      <div className="absolute top-1/4 left-0 w-24 h-48 bg-yellow-400 rounded-r-full filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-64 bg-emerald-400 rounded-l-full filter blur-3xl opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12 relative z-10">
        
        {/* Title and Subtitle inspired exactly by wesds.png */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            The <span className="bg-yellow-400 text-emerald-950 px-4 py-1.5 rounded-2xl inline-block transform -rotate-1 shadow-sm font-extrabold relative">
              Heart
              <span className="absolute -top-1.5 -right-1.5 text-red-500 animate-pulse">❤️</span>
            </span> of Our Work
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Discover the life-changing community programs and compassionate support operated by YWS. We help families, students, and marginalized individuals build a brighter, independent future.
          </p>

          <div className="pt-2">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-emerald-950 font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all flex items-center gap-2 mx-auto shadow-md">
              <span>Our Programs and Services</span>
              <span className="bg-yellow-600/30 text-emerald-950 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-mono">+</span>
            </button>
          </div>
        </div>

        {/* Beautiful Highlight Card: Quick Facts & Highlights of YWS NGO */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-[32px] p-6 sm:p-8 max-w-4xl mx-auto shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 text-emerald-950 rounded-3xl flex items-center justify-center shrink-0 shadow-md">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse text-emerald-900" />
          </div>
          <div className="space-y-4 flex-grow">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-950 tracking-tight">
                Young Welfare Society at a Glance
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800">
                Key foundational milestones of Dhanot's leading social support organization:
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-emerald-900 font-medium text-left">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-0.5">•</span>
                <span><strong>Government Registered:</strong> Licensed by the Social Welfare Dept, Government of Punjab since February 1995.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-0.5">•</span>
                <span><strong>100% Volunteer NGO:</strong> Every single donation is directed fully to on-ground public projects with zero administrative overhead.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-0.5">•</span>
                <span><strong>Water Access Leader:</strong> Over 15 massive water filtration plants actively maintained in Dhanot and District Lodhran.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 font-bold mt-0.5">•</span>
                <span><strong>Healthcare Partner:</strong> Organized over 50+ free eye surgery and clinical diagnostic camps for remote families.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3-Column Grid representing the beautiful cards in the uploaded design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          
          {/* Card 1: Free Medical Camps (Styled with purple/emerald dual block + image) */}
          <div className="group rounded-[32px] overflow-hidden bg-emerald-900 text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col min-h-[440px]">
            <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-emerald-800 rounded-2xl flex items-center justify-center shadow border border-emerald-700">
                  <Activity className="w-6 h-6 text-yellow-300" />
                </div>
                <span className="bg-emerald-800 text-yellow-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-emerald-700">
                  Health Initiative
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-yellow-300 transition-colors">
                  Free Medical & Eye Camps
                </h3>
                <p className="text-emerald-100/85 text-xs sm:text-sm leading-relaxed">
                  Regular health programs, diabetic consultations, and free eye checking camps providing free spectacles and medicine to thousands in Dhanot and adjacent villages.
                </p>
              </div>
            </div>
            {/* Image Section */}
            <div className="h-52 overflow-hidden relative">
              <div className="absolute inset-0 bg-emerald-950/20 group-hover:opacity-0 transition-opacity z-10" />
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600" 
                alt="Free Medical Camp YWS" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 2: Safe Water Filtration Plants (Styled exactly like the middle card) */}
          <div className="group rounded-[32px] overflow-hidden bg-white border border-emerald-100 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col min-h-[440px]">
            {/* Image Section top half */}
            <div className="h-52 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-yellow-400 text-emerald-950 rounded-2xl flex items-center justify-center shadow">
                <Droplet className="w-6 h-6" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=600" 
                alt="Clean Water Plant Lodhran" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                  Safe Water Program
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-emerald-800 transition-colors">
                  Clean Drinking Water
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Installing high-capacity water filtration plants and safe hand pumps in poor neighborhoods to combat water-borne diseases and supply secure, pure water.
                </p>
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>15+ Plants Installed</span>
                <span className="text-yellow-600">Pure Life</span>
              </div>
            </div>
          </div>

          {/* Card 3: Youth Skills & Women Livelihood */}
          <div className="group rounded-[32px] overflow-hidden bg-white border border-emerald-100 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col min-h-[440px]">
            {/* Image Section top half */}
            <div className="h-52 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow">
                <Users className="w-6 h-6" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600" 
                alt="Women skill center YWS" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                  Livelihood & Skills
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-emerald-800 transition-colors">
                  Vocational & IT Training
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Empowering rural women with stitching / tailoring training and youth with basic IT courses to foster economic independence and livelihood security.
                </p>
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>350+ Graduates</span>
                <span className="text-yellow-600">Empowerment</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
