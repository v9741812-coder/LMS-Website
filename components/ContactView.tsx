import React from 'react';

interface ContactViewProps {
  onBack: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
       <button 
        onClick={onBack}
        className="group flex items-center text-slate-500 hover:text-white mb-12 md:mb-16 font-black text-[10px] uppercase tracking-[0.4em] transition-all"
      >
        <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 mr-4 group-hover:border-orange-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 md:w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </div>
        Return to Dashboard
      </button>

      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter mb-16 italic">Get In <span className="text-orange-500 not-italic font-black">Touch</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-12 hover:border-orange-500/30 transition-all group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-orange-500 mb-8 md:mb-10 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-3 md:mb-4">Email</h3>
            <a href="mailto:aarush56kk@gmail.com" className="text-xl md:text-2xl font-serif italic text-white hover:text-orange-500 transition-colors break-words block">
              aarush56kk@gmail.com
            </a>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-12 hover:border-orange-500/30 transition-all group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center text-orange-500 mb-8 md:mb-10 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <h3 className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-3 md:mb-4">Phone</h3>
            <a href="tel:+918825061493" className="text-xl md:text-2xl font-serif italic text-white hover:text-orange-500 transition-colors block">
              +91 88250 61493
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;