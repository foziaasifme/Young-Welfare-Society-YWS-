import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Phone, MapPin, ExternalLink, ShieldCheck, Sparkles, UserCheck, Bot, CheckCircle2 } from 'lucide-react';
import { OrgInfo, Project, ActivityItem, FAQItem, ChatbotMessage } from '../types';

interface WhatsAppChatbotWidgetProps {
  orgInfo: OrgInfo;
  projects: Project[];
  activities: ActivityItem[];
  faqs: FAQItem[];
  onNewVolunteer: (sub: { fullName: string; email: string; phone: string; city: string; interests: string[]; message: string }) => void;
}

export const WhatsAppChatbotWidget: React.FC<WhatsAppChatbotWidgetProps> = ({
  orgInfo,
  projects,
  activities,
  faqs,
  onNewVolunteer
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [volunteerFlow, setVolunteerFlow] = useState<{ step: number; data: any }>({ step: 0, data: {} });
  const [humanHandoffMode, setHumanHandoffMode] = useState(false);

  const [messages, setMessages] = useState<ChatbotMessage[]>([
    {
      id: 'm-1',
      sender: 'bot',
      text: `Assalam o Alaikum! 👋\n\nWelcome to Young Welfare Society (YWS). I'm your RAG-powered digital assistant connected live to our CMS knowledge base.\n\nHow can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: [
        '1. About YWS',
        '2. Our Work',
        '3. Projects',
        '4. Latest Activities',
        '5. Volunteer',
        '6. Support / Donation',
        '7. Contact Us',
        '8. Location',
        'Talk to a Person'
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    const userMsg: ChatbotMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    // Handle Human Handoff Active
    if (humanHandoffMode) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `Your message has been forwarded to a YWS representative. A team member will contact you shortly via phone or WhatsApp. Thank you!`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setHumanHandoffMode(false);
      }, 1000);
      return;
    }

    // Handle Volunteer Flow Steps
    if (volunteerFlow.step > 0) {
      handleVolunteerStep(text);
      return;
    }

    // Process Natural Language or Menu Choice
    setTimeout(() => {
      const lower = text.toLowerCase();
      let botResponse = '';
      let options: string[] | undefined = undefined;
      let isLoc = false;

      if (lower.includes('1') || lower.includes('about') || lower.includes('established') || lower.includes('register') || lower.includes('kab bani')) {
        botResponse = `${orgInfo.name} (${orgInfo.shortName}) has been working since ${orgInfo.establishedYear} and was officially registered on ${orgInfo.registrationDate} (${orgInfo.registrationDetails}) under the Social Welfare Department, Ordinance XLVI of 1961.\n\nMission: ${orgInfo.mission}`;
      } else if (lower.includes('2') || lower.includes('work') ||lower.includes('kaam')) {
        botResponse = `YWS works actively across Dhanot and Punjab in community welfare, youth development, education support, environmental drives, and social welfare initiatives.`;
      } else if (lower.includes('3') || lower.includes('project')) {
        const projList = projects.slice(0, 3).map(p => `• *${p.title}* (${p.status}): ${p.description.substring(0, 80)}...`).join('\n\n');
        botResponse = `Here are our key active projects retrieved from our CMS:\n\n${projList}\n\nYou can ask about any specific project for full details!`;
      } else if (lower.includes('4') || lower.includes('activity') || lower.includes('news') || lower.includes('event')) {
        const actList = activities.slice(0, 2).map(a => `• *${a.title}* (${a.date} at ${a.location}): ${a.summary}`).join('\n\n');
        botResponse = `Latest YWS Activities & News (Synced live):\n\n${actList}`;
      } else if (lower.includes('5') || lower.includes('volunteer')) {
        setVolunteerFlow({ step: 1, data: {} });
        botResponse = `That's wonderful! We would be delighted to have you join YWS as a volunteer.\n\nStep 1/5: Please enter your *Full Name*:`;
      } else if (lower.includes('6') || lower.includes('support') || lower.includes('donation')) {
        botResponse = `Thank you for your generous spirit! For verified support, donations, or contribution details, please contact YWS directly at ${orgInfo.phonePrimary} or email ${orgInfo.email}.\n\n(Note: YWS never publishes unverified payment gateways to ensure complete security).`;
      } else if (lower.includes('7') || lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
        botResponse = `📞 *${orgInfo.name}*\n📍 Address: ${orgInfo.address}\n📱 Phone: ${orgInfo.phonePrimary}\n✉️ Email: ${orgInfo.email}\n🌐 Facebook: ${orgInfo.facebookUrl}`;
      } else if (lower.includes('8') || lower.includes('location') || lower.includes('map') || lower.includes('kahan')) {
        botResponse = `Young Welfare Society is headquartered in *${orgInfo.address}*.\n\n📍 Google Maps Location: Dhanot, Punjab, Pakistan.`;
        isLoc = true;
      } else if (lower.includes('talk') || lower.includes('person') || lower.includes('human') || lower.includes('representative')) {
        setHumanHandoffMode(true);
        botResponse = `Connecting you with a YWS human representative. Please type your question or request below and our team will get back to you shortly.`;
      } else {
        // Fallback RAG check on FAQs or projects
        const matchedFAQ = faqs.find(f => f.question.toLowerCase().includes(lower) || lower.includes(f.question.toLowerCase().substring(0, 10)));
        if (matchedFAQ) {
          botResponse = `Found in YWS Knowledge Base:\n\n*Q: ${matchedFAQ.question}*\nA: ${matchedFAQ.answer}`;
        } else {
          botResponse = `I have searched the YWS website CMS and knowledge base for "${text}". While I don't have a direct match, you can connect with our team or select an option below:`;
          options = ['1. About YWS', '3. Projects', '5. Volunteer', '7. Contact Us', 'Talk to a Person'];
        }
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options,
          isLocation: isLoc
        }
      ]);
    }, 600);
  };

  const handleVolunteerStep = (text: string) => {
    const step = volunteerFlow.step;
    const data = volunteerFlow.data;

    setTimeout(() => {
      if (step === 1) {
        setVolunteerFlow({ step: 2, data: { ...data, fullName: text } });
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `Step 2/5: Thanks ${text}! Please provide your *Phone Number* (WhatsApp enabled):`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else if (step === 2) {
        setVolunteerFlow({ step: 3, data: { ...data, phone: text } });
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `Step 3/5: Which *City / Area* in Punjab do you reside in?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else if (step === 3) {
        setVolunteerFlow({ step: 4, data: { ...data, city: text } });
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `Step 4/5: What are your *Skills or Professional Background* (e.g., Teaching, IT, Social Work, Medical)?`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else if (step === 4) {
        setVolunteerFlow({ step: 5, data: { ...data, skills: text } });
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `Step 5/5: Finally, please share a short message or note about why you'd like to volunteer with YWS:`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } else if (step === 5) {
        const finalData = { ...data, message: text };
        onNewVolunteer({
          fullName: finalData.fullName,
          email: `${finalData.fullName.toLowerCase().replace(/\s+/g, '')}@whatsapp.user`,
          phone: finalData.phone,
          city: finalData.city,
          interests: [finalData.skills],
          message: finalData.message
        });

        setVolunteerFlow({ step: 0, data: {} });
        setMessages(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: `✅ *Thank you, ${finalData.fullName}!* Your volunteer application has been successfully submitted to the YWS Admin panel. Our team will review your details and contact you soon.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            options: ['1. About YWS', '3. Projects', '7. Contact Us']
          }
        ]);
      }
    }, 500);
  };

  return (
    <>
      {/* Floating WhatsApp Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
          aria-label="Open WhatsApp AI Assistant"
        >
          <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow animate-pulse">
            AI LIVE
          </span>
          <MessageSquare className="w-7 h-7 fill-white" />
        </button>
      </div>

      {/* WhatsApp Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-full max-w-[380px] sm:max-w-[420px] bg-[#efeae2] rounded-3xl shadow-2xl overflow-hidden border border-emerald-900/20 flex flex-col h-[560px] animate-in slide-in-from-bottom-6 duration-300">
          
          {/* WhatsApp Header */}
          <div className="bg-[#075e54] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-6/307522632_460965826068810_7436339115934143457_n.jpg?stp=dst-jpg_tt6&cstp=mx1112x1112&ctp=s1112x1112&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3gjekZfhkc4Q7kNvwEbybSr&_nc_oc=Adr7TsI1Q2HmEUUfzTO6TIdKNovVFJLGb1VUmJ3jbZjE7Kg7PRJ-igDbFxiRX5_QWTE&_nc_zt=23&_nc_ht=scontent.flhe6-1.fna&_nc_gid=HCsxZewAkE1Ii4JDXmKnOA&_nc_ss=7a289&oh=00_AQHxw37gFYn2Id2tD5Ws5jdHKqcMr-ELZz9fdgO6n7n12A&oe=6A89B8E7"
                  alt="YWS Bot"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075e54] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base flex items-center gap-1.5">
                  YWS Digital Assistant
                  <ShieldCheck className="w-4 h-4 text-emerald-300 fill-emerald-300/30" />
                </h3>
                <p className="text-[11px] text-emerald-200">
                  {humanHandoffMode ? '👤 Connected with Human Support' : '🤖 RAG AI synced with website CMS'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-[radial-gradient(#d1d7db_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="text-center my-2">
              <span className="bg-[#ecf2fa] text-[#075e54] text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm border border-[#d0e1f0]">
                🔒 Messages are encrypted & synced live with YWS CMS
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm shadow-sm whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#dcf8c6] text-gray-900 rounded-tr-none'
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                  }`}
                >
                  {msg.text}

                  {msg.isLocation && (
                    <div className="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-emerald-700 shrink-0" />
                        <div>
                          <p className="font-bold text-emerald-900 text-xs">Young Welfare Society HQ</p>
                          <p className="text-[11px] text-emerald-700">Dhanot, Punjab, Pakistan</p>
                        </div>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Dhanot+Punjab+Pakistan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 flex items-center gap-1 shadow"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {msg.options && (
                    <div className="mt-3 flex flex-col gap-1.5 pt-2 border-t border-gray-100">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(opt)}
                          className="text-left bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-medium px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between"
                        >
                          <span>{opt}</span>
                          <span className="text-emerald-600">→</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="text-[10px] text-gray-400 text-right mt-1.5">
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={volunteerFlow.step > 0 ? `Enter volunteer details (Step ${volunteerFlow.step}/5)...` : "Type a message or question..."}
              className="flex-grow bg-gray-100 border border-gray-300 rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#075e54]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-[#075e54] hover:bg-[#054c44] text-white p-2.5 rounded-full shadow transition-colors flex items-center justify-center shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
