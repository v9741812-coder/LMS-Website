import React, { useState, useMemo, useEffect } from 'react';
import AuthOverlay from './components/AuthOverlay';
import LessonViewer from './components/LessonViewer';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import { FITNESS_CURRICULUM } from './constants';
import { Course, Lesson } from './types';

type AppView = 'curriculum' | 'about' | 'contact';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentView, setCurrentView] = useState<AppView>('curriculum');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Transition logic for "closing" and "opening" views
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewToRender, setViewToRender] = useState<AppView>('curriculum');
  const [isViewingLesson, setIsViewingLesson] = useState(false);

  const userName = useMemo(() => {
    if (!userEmail) return 'Scholar';
    return userEmail.split('@')[0];
  }, [userEmail]);

  const activeCourse = FITNESS_CURRICULUM;

  const activeLesson = useMemo(() => {
    if (!selectedCourseId) return null;
    return activeCourse.lessons.find(l => l.id === activeLessonId) || activeCourse.lessons[0];
  }, [selectedCourseId, activeLessonId]);

  const handleLessonStart = (lessonId: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCourseId(activeCourse.id);
      setActiveLessonId(lessonId);
      setIsViewingLesson(true);
      setViewToRender('curriculum');
      setCurrentView('curriculum');
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleLogout = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsAuthenticated(false);
      setUserEmail('');
      setSelectedCourseId(null);
      setActiveLessonId(null);
      setIsViewingLesson(false);
      setViewToRender('curriculum');
      setCurrentView('curriculum');
      setIsTransitioning(false);
    }, 300);
  };

  const navigateTo = (view: AppView) => {
    if (view === viewToRender && !isViewingLesson) return;
    
    setIsTransitioning(true);
    setIsMobileMenuOpen(false);
    
    // Smooth transition delay to allow "closing" feel before "opening" the next view
    setTimeout(() => {
      setSelectedCourseId(null);
      setActiveLessonId(null);
      setIsViewingLesson(false);
      setViewToRender(view);
      setCurrentView(view);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 350);
  };

  const resetView = () => navigateTo('curriculum');

  const toggleModule = (id: string) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  if (!isAuthenticated) {
    if (currentView === 'about') return <AboutView onBack={resetView} />;
    if (currentView === 'contact') return <ContactView onBack={resetView} />;
    
    return (
      <AuthOverlay 
        onSuccess={(email) => {
          setUserEmail(email);
          setIsAuthenticated(true);
        }}
        onNavigateAbout={() => navigateTo('about')}
        onNavigateContact={() => navigateTo('contact')}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#030303] text-slate-200 selection:bg-orange-500/20">
      
      {/* INTEGRATED FLUSH TOP NAVIGATION BAR */}
      <div className="fixed top-0 left-0 w-full z-[100]">
        <nav className="w-full bg-[#080808]/90 backdrop-blur-3xl border-b border-white/5 px-4 lg:px-12 h-16 lg:h-20 flex items-center justify-between pointer-events-auto">
          
          {/* Left: Branding */}
          <div className="flex items-center space-x-3 lg:space-x-6 cursor-pointer group shrink-0" onClick={resetView}>
            <div className="w-8 h-8 lg:w-11 lg:h-11 bg-black logo-glow flex items-center justify-center overflow-hidden shrink-0 shadow-xl transition-transform group-hover:scale-105">
               <img 
                src="https://lh3.googleusercontent.com/d/1WLtVCPjQqdSHIqLHiiVFDtlSXPyRLySD" 
                className="w-full h-full object-cover rounded-full logo-img" 
                alt="Logo" 
                style={{ imageRendering: 'auto' }}
              />
            </div>
            <span className="font-serif text-sm lg:text-xl text-white tracking-tight italic block">
              The Growth <span className="animate-lab-gradient-navbar uppercase tracking-normal font-black">Lab</span>
            </span>
          </div>

          {/* Middle: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {['curriculum', 'about', 'contact'].map((view) => (
              <button 
                key={view}
                onClick={() => navigateTo(view as AppView)}
                className={`text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] transition-all hover:text-white relative ${viewToRender === view ? 'text-orange-500' : 'text-slate-400'}`}
              >
                {view}
              </button>
            ))}
          </div>

          {/* Right: User Section */}
          <div className="flex items-center space-x-2 lg:space-x-6 shrink-0">
            <div className="flex items-center space-x-2 lg:space-x-5">
              <div className="text-right flex flex-col items-end">
                <p className="text-[8px] lg:text-[11px] font-black text-white uppercase tracking-widest max-w-[80px] md:max-w-none truncate">{userName}</p>
                {/* Logout only visible on Desktop here; mobile uses dropdown */}
                <button 
                  onClick={handleLogout}
                  className="text-[7px] lg:text-[9px] font-black text-orange-500/70 hover:text-orange-500 uppercase tracking-widest text-right w-full hidden md:block transition-colors"
                >
                  LOGOUT
                </button>
              </div>
              
              <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group hover:border-orange-500/30 transition-all cursor-pointer overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 lg:w-7 lg:h-7">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full md:hidden bg-[#080808]/98 backdrop-blur-3xl border-b border-white/5 p-8 space-y-6 animate-in slide-in-from-top duration-500 shadow-2xl pointer-events-auto">
            {['curriculum', 'about', 'contact'].map((view) => (
              <button 
                key={view}
                onClick={() => navigateTo(view as AppView)}
                className={`block w-full text-left text-xs font-black uppercase tracking-[0.4em] ${viewToRender === view ? 'text-orange-500' : 'text-slate-400'}`}
              >
                {view}
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="block w-full text-left text-xs font-black uppercase tracking-[0.4em] text-red-500 pt-4 border-t border-white/5"
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>

      <main className={`flex-1 pt-24 lg:pt-32 pb-32 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-8 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'}`}>
        {viewToRender === 'about' ? (
          <AboutView onBack={resetView} />
        ) : viewToRender === 'contact' ? (
          <ContactView onBack={resetView} />
        ) : isViewingLesson && activeLesson ? (
          <LessonViewer 
            course={activeCourse} 
            lesson={activeLesson} 
            onBack={resetView}
            onSelectLesson={(id) => setActiveLessonId(id)}
          />
        ) : (
          <div className="max-w-6xl mx-auto px-6">
            <header className="mb-32 mt-12 overflow-hidden">
              <h1 className="ferrari-entry text-5xl md:text-8xl font-serif text-white mb-10 tracking-tighter leading-[0.9] italic">
                Build Your Best Body — <br className="block"/>
                <span className="lava-text not-italic font-black tracking-normal block mt-4 text-4xl md:text-7xl">A Complete Fitness Guide</span>
              </h1>
              <p className="ferrari-entry text-slate-100 max-w-4xl text-lg md:text-2xl font-light leading-relaxed italic opacity-95" style={{ animationDelay: '0.1s' }}>
                Everything you need to build your best body—training, nutrition, recovery, mindset and so much more—packed into one place with an unbeatable price. Your transformation starts here.
              </p>
            </header>

            <div className="space-y-10">
              <div className="flex items-center justify-between mb-12 ferrari-entry" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-[12px] font-black text-orange-500 uppercase tracking-[0.6em] flex items-center">
                  <span className="w-16 h-px bg-orange-500/40 mr-8" />
                  CURRICULUM PIPELINE
                </h2>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{activeCourse.lessons.length} LEARNING PHASES</span>
              </div>
              
              <div className="grid gap-6">
                {activeCourse.lessons.map((module, idx) => (
                  <div 
                    key={module.id} 
                    className={`bg-[#080808] border rounded-[2.5rem] transition-all duration-700 overflow-hidden ferrari-entry ${expandedModuleId === module.id ? 'border-orange-500/30 ring-1 ring-orange-500/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)]' : 'border-white/5 hover:border-white/20 hover:bg-[#0c0c0c]'}`}
                    style={{ animationDelay: `${0.3 + idx * 0.05}s` }}
                  >
                    <button 
                      onClick={() => toggleModule(module.id)}
                      className="w-full px-10 md:px-14 py-12 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center space-x-12">
                        <span className={`font-serif italic text-4xl md:text-5xl transition-all duration-500 shrink-0 ${expandedModuleId === module.id ? 'text-orange-500 drop-shadow-[0_0_8px_rgba(255,140,0,0.4)]' : 'text-white/40 group-hover:text-white/60'}`}>
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        <h3 className={`text-xl md:text-3xl font-serif italic tracking-tight transition-colors ${expandedModuleId === module.id ? 'text-orange-500 font-bold' : 'text-white/95 group-hover:text-white'}`}>
                          {module.title}
                        </h3>
                      </div>
                      <div className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 ${expandedModuleId === module.id ? 'bg-orange-500 border-orange-500 text-neutral-950 rotate-180' : 'text-slate-500 hover:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>
                    
                    {expandedModuleId === module.id && (
                      <div className="px-10 md:px-14 pb-14 animate-in fade-in slide-in-from-top-6 duration-700">
                        <div className="h-px w-full bg-white/5 mb-12" />
                        <div className="max-w-4xl">
                            <p className="text-slate-200 text-lg md:text-2xl font-light leading-relaxed italic mb-12 whitespace-pre-line opacity-95">
                              {module.description}
                            </p>
                            <button 
                              onClick={() => handleLessonStart(module.id)}
                              className="w-full md:w-auto px-16 py-6 bg-orange-500 text-neutral-950 rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.5em] hover:bg-orange-400 transition-all shadow-3xl hover:shadow-orange-500/40 active:scale-95"
                            >
                              Launch Module
                            </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="relative bg-black py-32 border-t border-white/5 overflow-hidden">
        <div className="cloud-fog" />
        <div className="cloud-fog-2" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 flex flex-col items-center">
          <div className="flex flex-col items-center space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h4 className="text-[11px] font-black uppercase tracking-[0.6em] text-slate-200 opacity-90">
              The Growth Lab Masterclass Registry
            </h4>
            <div className="w-12 h-px bg-orange-500/40" />
            <span className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em]">
              © BUILD YOUR BEST BODY™
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;