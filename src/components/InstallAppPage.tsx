import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { Smartphone, Download, Check, Copy, ExternalLink, ShieldCheck, Zap, Globe, ArrowRight, Sparkles } from 'lucide-react';

interface InstallAppPageProps {
  setTab: (tab: PageTab) => void;
}

export const InstallAppPage: React.FC<InstallAppPageProps> = ({ setTab }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [copied, setCopied] = useState(false);

  const installAppUrl = 'https://youngwelfare.vercel.app/installapp';

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already running standalone
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      alert("To install the app on your mobile device, open your browser menu (Chrome / Safari) and select 'Add to Home Screen' or 'Install App'.");
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(installAppUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Banner */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-800 rounded-full filter blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-800 border border-emerald-700 px-3.5 py-1.5 rounded-full text-emerald-200 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Official Progressive Web App (PWA)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Install Young Welfare Society App
            </h1>

            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Get instant access to YWS welfare projects, community updates, volunteer registrations, and direct communication right from your mobile home screen or desktop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleInstallClick}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 text-base"
              >
                <Download className="w-5 h-5" />
                <span>{isInstalled ? 'App Installed Successfully' : 'Install App Now'}</span>
              </button>
              
              <button
                onClick={() => setTab('home')}
                className="bg-emerald-950 hover:bg-emerald-900 text-emerald-100 border border-emerald-700 font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Shareable Client Link Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100 space-y-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-700" />
            <span>Shareable Client App Link</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Share this dedicated PWA installation link with clients, volunteers, and community members:
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 bg-gray-50 border border-gray-200 p-3.5 rounded-2xl">
            <input
              type="text"
              readOnly
              value={installAppUrl}
              className="w-full bg-transparent text-emerald-950 font-mono text-sm px-2 focus:outline-none"
            />
            <button
              onClick={copyLink}
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shrink-0 shadow"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Features & Installation Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Lightning Fast</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Cached assets and service workers ensure instant loading even on slow mobile networks in rural areas.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Secure & Official</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Verified PWA package representing Young Welfare Society, Dhanot, District Lodhran.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-bold">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-base">Android & iOS Ready</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Works seamlessly across all mobile phones. Add to home screen via Chrome or Safari in seconds.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
