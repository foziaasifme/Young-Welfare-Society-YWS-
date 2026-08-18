import React from 'react';
import { PageTab } from '../types';
import { Heart, Sparkles, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  setTab: (tab: PageTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ setTab }) => {
  return (
    <div className="relative text-white overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* Background Image of Caring Community Hands */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000')`, // Heartwarming holding hands/community theme
        }}
      />
      
      {/* Immersive Deep Emerald / Teal Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/75 to-emerald-950/90 z-0" />

      {/* Decorative Golden Ambient Blur */}
      <div className="absolute -left-12 top-1/4 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl opacity-15 pointer-events-none z-0"></div>
      <div className="absolute -right-12 bottom-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center space-y-8">
        
        {/* Verification Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-900/60 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-full text-emerald-200 text-xs sm:text-sm font-semibold tracking-wide shadow-lg"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Reg. 16 Feb 1995 (Social Welfare Dept) • Dhanot, Lodhran</span>
        </motion.div>

        {/* Master Heading inspired by attached layout */}
        <div className="space-y-3">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white drop-shadow-md"
            style={{ fontFamily: "'Playfair Display', serif, system-ui" }}
          >
            Your Welfare,<br />
            <span className="text-yellow-400 font-black relative">
              Our Mission
              {/* Subtle underline wave */}
              <span className="absolute left-0 right-0 bottom-[-8px] h-2 bg-yellow-400 rounded-full opacity-40"></span>
            </span>
          </motion.h1>
        </div>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto leading-relaxed font-light"
        >
          At Young Welfare Society (YWS), your journey is our mission: empowering individuals, providing clean drinking water, enabling education, supporting widows, and organizing free medical camps across rural Punjab with absolute transparency since 1992.
        </motion.p>

        {/* Centered Yellow Call-to-Action Pill matching the prompt style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={() => {
              const el = document.getElementById('heart-of-work');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-emerald-950 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-yellow-500/20 transition-all flex items-center justify-center gap-2 text-base tracking-wider uppercase"
          >
            <span>Our Mission</span>
            <span className="bg-yellow-600/30 text-emerald-950 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-mono">
              +
            </span>
          </button>

          <button
            onClick={() => setTab('get-involved')}
            className="w-full sm:w-auto bg-emerald-800/40 hover:bg-emerald-800/60 backdrop-blur-md text-emerald-100 border border-emerald-400/30 font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 text-base"
          >
            <span>Become a Volunteer</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Curved Bottom Edge Section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[40px] z-10"></div>
    </div>
  );
};
