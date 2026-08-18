import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { Smartphone, Download, Check, Copy, ExternalLink, ShieldCheck, Zap, Globe, ArrowRight, Sparkles, Monitor, Phone, Share2, MessageCircle, QrCode } from 'lucide-react';

interface InstallAppPageProps {
  setTab: (tab: PageTab) => void;
}

export const InstallAppPage: React.FC<InstallAppPageProps> = ({ setTab }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTabOS, setActiveTabOS] = useState<'android' | 'ios' | 'desktop'>('android');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [clientCategory, setClientCategory] = useState<'general' | 'volunteer' | 'donor' | 'partner'>('general');

  const baseUrl = 'https://youngwelfare.vercel.app/installapp';
  const generatedClientUrl = `${baseUrl}?ref=${clientCategory}`;

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          setIsInstalled(true);
          setShowSuccessModal(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error(err);
      }
    } else {
      setIsInstalled(true);
      setShowSuccessModal(true);
    }
  };

  const copyLink = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareViaWhatsApp = () => {
    const message = encodeURIComponent(`Install Young Welfare Society official client app for ${clientCategory}s: ${generatedClientUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Success Modal / Banner Popup */}
        {showSuccessModal && (
          <div className="bg-emerald-50 border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 shadow-lg flex items-center justify-between gap-4 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-950">App Successfully Added!</h3>
                <p className="text-xs sm:text-sm text-emerald-800">
                  Young Welfare Society PWA is now ready on your device. You can access it anytime from your home screen or desktop icon.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-emerald-900 hover:text-emerald-950 font-bold text-sm px-4 py-2"
            >
              Close
            </button>
          </div>
        )}

        {/* Main Banner */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-800 rounded-full filter blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-800 border border-emerald-700 px-3.5 py-1.5 rounded-full text-emerald-200 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Official Progressive Web App (PWA) • District Lodhran</span>
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
                <span>{isInstalled ? 'App Ready / Installed' : 'Install App Now'}</span>
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

        {/* Client Link Generator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-700" />
                <span>Generate & Share Client Install Link</span>
              </h2>
              <p className="text-gray-600 text-sm">
                Create tailored installation links for donors, volunteers, partners, and community clients:
              </p>
            </div>

            {/* Category Selector */}
            <div className="flex bg-gray-100 p-1.5 rounded-2xl text-xs font-semibold gap-1">
              {(['general', 'volunteer', 'donor', 'partner'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setClientCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl capitalize transition-all ${clientCategory === cat ? 'bg-emerald-700 text-white shadow' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl space-y-3">
            <label className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
              Generated Install Link ({clientCategory.toUpperCase()} Client Channel):
            </label>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                readOnly
                value={generatedClientUrl}
                className="w-full bg-white border border-emerald-300 text-emerald-950 font-mono text-sm px-3.5 py-2.5 rounded-xl focus:outline-none shadow-sm"
              />
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => copyLink(generatedClientUrl)}
                  className="flex-1 sm:flex-none bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
                <button
                  onClick={shareViaWhatsApp}
                  className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow"
                  title="Share via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
            <p className="text-xs text-emerald-800 italic">
              💡 Clients clicking this link on mobile or desktop will be instantly directed to this PWA installation guide.
            </p>
          </div>
        </div>

        {/* Step-by-Step Installation Guide Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">How to Install on Your Device</h2>
              <p className="text-gray-600 text-xs sm:text-sm">Select your operating system for easy installation steps:</p>
            </div>
            
            {/* OS Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTabOS('android')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTabOS === 'android' ? 'bg-emerald-700 text-white shadow' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Android / Chrome
              </button>
              <button
                onClick={() => setActiveTabOS('ios')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTabOS === 'ios' ? 'bg-emerald-700 text-white shadow' : 'text-gray-700 hover:text-gray-900'}`}
              >
                iPhone / Safari
              </button>
              <button
                onClick={() => setActiveTabOS('desktop')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTabOS === 'desktop' ? 'bg-emerald-700 text-white shadow' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Desktop PC
              </button>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-4">
            {activeTabOS === 'android' && (
              <div className="space-y-3">
                <h3 className="font-bold text-emerald-950 flex items-center gap-2 text-base">
                  <Phone className="w-5 h-5 text-emerald-700" />
                  <span>Android & Google Chrome Installation</span>
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-emerald-900 text-sm">
                  <li>Open Google Chrome on your Android phone.</li>
                  <li>Visit <strong className="font-mono text-emerald-950">https://youngwelfare.vercel.app/installapp</strong></li>
                  <li>Tap the browser menu icon (<span className="font-bold">⋮</span>) at the top right corner.</li>
                  <li>Tap <strong className="font-semibold">"Install App"</strong> or <strong className="font-semibold">"Add to Home screen"</strong>.</li>
                  <li>Confirm by tapping <strong className="font-semibold">"Install"</strong>. The YWS app icon will appear on your home screen!</li>
                </ol>
              </div>
            )}

            {activeTabOS === 'ios' && (
              <div className="space-y-3">
                <h3 className="font-bold text-emerald-950 flex items-center gap-2 text-base">
                  <Smartphone className="w-5 h-5 text-emerald-700" />
                  <span>iPhone & Apple Safari Installation</span>
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-emerald-900 text-sm">
                  <li>Open Safari on your iPhone or iPad.</li>
                  <li>Visit <strong className="font-mono text-emerald-950">https://youngwelfare.vercel.app/installapp</strong></li>
                  <li>Tap the Share button (<span className="font-bold">⎋</span> or box with arrow pointing up) at the bottom toolbar.</li>
                  <li>Scroll down and tap <strong className="font-semibold">"Add to Home Screen"</strong>.</li>
                  <li>Tap <strong className="font-semibold">"Add"</strong> at the top right. The YWS app is now installed on your iPhone!</li>
                </ol>
              </div>
            )}

            {activeTabOS === 'desktop' && (
              <div className="space-y-3">
                <h3 className="font-bold text-emerald-950 flex items-center gap-2 text-base">
                  <Monitor className="w-5 h-5 text-emerald-700" />
                  <span>Windows & Mac Desktop Installation</span>
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-emerald-900 text-sm">
                  <li>Open Google Chrome, Edge, or Brave on your computer.</li>
                  <li>Navigate to <strong className="font-mono text-emerald-950">https://youngwelfare.vercel.app/installapp</strong></li>
                  <li>Click the install icon (<span className="font-bold">⊕</span> or computer monitor with downward arrow) located on the right side of the address bar.</li>
                  <li>Click <strong className="font-semibold">"Install"</strong>. The app will launch in its own standalone window.</li>
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Features Grid */}
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
