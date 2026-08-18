import React from 'react';
import { PageTab } from '../types';
import { Heart, Users, Sparkles, ShieldCheck, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  setTab: (tab: PageTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ setTab }) => {
  return (
    <div className="relative bg-emerald-950 text-white overflow-hidden">
      {/* Absolute White and Clear Dotted Pakistani Map Background including Full Kashmir, highlighting District Lodhran */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none flex items-center justify-end pr-6 sm:pr-20 overflow-hidden">
        <svg
          viewBox="0 0 600 700"
          className="w-full max-w-2xl h-full object-contain filter drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Northern Areas & Full Kashmir Region (White & Clear Dotted Map) */}
          <g fill="#FFFFFF" opacity="0.65">
            <circle cx="320" cy="70" r="3.5" />
            <circle cx="340" cy="80" r="3.5" />
            <circle cx="360" cy="90" r="4" />
            <circle cx="380" cy="105" r="3.5" />
            <circle cx="400" cy="120" r="3" />
            <circle cx="330" cy="100" r="3.5" />
            <circle cx="350" cy="115" r="3.5" />
            <circle cx="370" cy="125" r="3.5" />
            <circle cx="390" cy="135" r="3.5" />
            <circle cx="310" cy="120" r="3.5" />
            <circle cx="330" cy="135" r="4" />
            <circle cx="355" cy="145" r="3.5" />
            <circle cx="375" cy="155" r="3.5" />
            <circle cx="395" cy="170" r="3.5" />
          </g>

          {/* Pakistan Map Grid of Dots (White & Clear) */}
          <g fill="#FFFFFF" opacity="0.45">
            {/* KPK & Northern Punjab */}
            <circle cx="280" cy="150" r="3.5" />
            <circle cx="300" cy="165" r="3.5" />
            <circle cx="325" cy="175" r="3.5" />
            <circle cx="350" cy="185" r="3.5" />
            <circle cx="335" cy="205" r="3.5" />
            <circle cx="310" cy="215" r="3.5" />
            <circle cx="285" cy="200" r="3.5" />
            <circle cx="260" cy="185" r="3.5" />
            
            <circle cx="295" cy="240" r="4" />
            <circle cx="320" cy="250" r="4" />
            <circle cx="345" cy="265" r="3.5" />
            <circle cx="270" cy="235" r="3.5" />
            <circle cx="250" cy="220" r="3.5" />

            {/* Central Punjab Region */}
            <circle cx="280" cy="275" r="3.5" />
            <circle cx="305" cy="285" r="4" />
            <circle cx="330" cy="300" r="3.5" />

            {/* District Lodhran / Dhanot Region (Highlighted with glowing green & gold beacon) */}
            <g transform="translate(295, 328)">
              <circle cx="0" cy="0" r="18" fill="#10B981" opacity="0.4" className="animate-ping" />
              <circle cx="0" cy="0" r="10" fill="#34D399" className="animate-pulse" />
              <circle cx="0" cy="0" r="5" fill="#F59E0B" />
              <text x="16" y="4" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.8))">
                District Lodhran (YWS)
              </text>
            </g>

            {/* Sindh & Balochistan */}
            <circle cx="240" cy="310" r="3.5" />
            <circle cx="220" cy="290" r="3.5" />
            <circle cx="190" cy="280" r="3.5" />
            <circle cx="160" cy="270" r="3.5" />
            <circle cx="130" cy="260" r="3.5" />
            <circle cx="210" cy="340" r="3.5" />
            <circle cx="235" cy="365" r="3.5" />
            <circle cx="260" cy="390" r="3.5" />
            <circle cx="225" cy="415" r="3.5" />
            <circle cx="200" cy="440" r="3.5" />
            <circle cx="170" cy="420" r="3.5" />
            <circle cx="140" cy="390" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 bg-emerald-950/85 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-900 border border-emerald-700 px-3.5 py-1.5 rounded-full text-emerald-200 text-xs sm:text-sm font-medium shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Community • Youth • Welfare • District Lodhran, Punjab • Since 1992</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building Stronger Communities, <span className="text-emerald-300">Empowering Youth</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Young Welfare Society has been working for community welfare and social development since 1992, serving communities in Dhanot, District Lodhran, Punjab, and beyond with unwavering commitment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => setTab('about')}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Learn About YWS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setTab('get-involved')}
              className="w-full sm:w-auto bg-emerald-900 hover:bg-emerald-800 border border-emerald-700 text-emerald-100 font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current text-rose-300" />
              <span>Get Involved</span>
            </button>
          </div>

          <div className="pt-6 border-t border-emerald-800 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">30+</p>
              <p className="text-xs sm:text-sm text-emerald-300">Years of Service</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">1995</p>
              <p className="text-xs sm:text-sm text-emerald-300">Officially Registered</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-1 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">Lodhran</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-300">District HQ / Dhanot</p>
            </div>
          </div>
        </div>

        {/* Right column: Visual card featuring official YWS logo and credibility */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md bg-emerald-900 border border-emerald-700 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6"
          >
            <div className="absolute -top-4 -right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
              Official YWS • District Lodhran
            </div>

            <div className="flex items-center gap-4">
              <img
                src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307522632_460965826068810_7436339115934143457_n.jpg?stp=dst-jpg_tt6&cstp=mx1112x1112&ctp=s1112x1112&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3gjekZfhkc4Q7kNvwEbybSr&_nc_oc=Adr7TsI1Q2HmEUUfzTO6TIdKNovVFJLGb1VUmJ3jbZjE7Kg7PRJ-igDbFxiRX5_QWTE&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=HCsxZewAkE1Ii4JDXmKnOA&_nc_ss=7a289&oh=00_AQHxw37gFYn2Id2tD5Ws5jdHKqcMr-ELZz9fdgO6n7n12A&oe=6A89B8E7"
                alt="Young Welfare Society Logo"
                className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Young Welfare Society</h3>
                <p className="text-xs text-emerald-300 font-medium">Non-Profit • Non-Governmental • Non-Political</p>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-200">
                  <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Reg. 16 February 1995</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-sm text-emerald-100">
              <p className="leading-relaxed">
                "Working tirelessly toward community welfare, youth empowerment, and educational upliftment in Dhanot, District Lodhran since 1992."
              </p>
              <div className="flex items-center justify-between text-xs text-emerald-300 pt-2 border-t border-emerald-800">
                <span>Social Welfare Dept, Ordinance XLVI of 1961</span>
                <span className="font-semibold text-white">Verified NGO</span>
              </div>
            </div>

            <button
              onClick={() => setTab('projects')}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm shadow flex items-center justify-center gap-2"
            >
              <span>Explore Our Welfare Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
