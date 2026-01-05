import React, { useEffect, useRef } from 'react';
import { Course, Lesson } from '../types';

interface LessonViewerProps {
  course: Course;
  lesson: Lesson;
  onBack: () => void;
  onSelectLesson: (lessonId: string) => void;
}

const LessonViewer: React.FC<LessonViewerProps> = ({ course, lesson, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      const forbiddenKeys = ['s', 'u', 'i', 'j', 'c'];
      if ((e.ctrlKey || e.metaKey) && forbiddenKeys.includes(e.key.toLowerCase())) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (e.key === 'F12') e.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('keydown', handleKeydown, { capture: true });

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('keydown', handleKeydown, { capture: true });
    };
  }, []);

  const videoUrl = lesson.content;
  const isDirectVideo = videoUrl.toLowerCase().endsWith('.mp4') || videoUrl.includes('github.com');
  const lessonIndex = course.lessons.findIndex(l => l.id === lesson.id) + 1;

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 animate-in fade-in duration-700 select-none">
      <button 
        onClick={onBack}
        className="group flex items-center text-slate-400 hover:text-white mb-10 font-black text-[10px] uppercase tracking-[0.4em] transition-all"
      >
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mr-4 group-hover:border-orange-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </div>
        Return to Modules
      </button>

      <div className="flex flex-col space-y-12">
        {/* Secure Video Player */}
        <div 
          ref={containerRef} 
          className="relative w-full max-w-5xl mx-auto shadow-2xl rounded-[2rem] overflow-hidden border border-white/5 bg-black"
        >
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', height: 0 }}>
            {isDirectVideo ? (
              <video
                ref={videoRef}
                src={videoUrl}
                className="absolute top-0 left-0 w-full h-full object-contain"
                controls
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                disablePictureInPicture
                playsInline
              />
            ) : (
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
                src={videoUrl} 
                allowFullScreen={true}
                title={lesson.title}
              />
            )}
            <div className="absolute inset-0 pointer-events-none z-10" onContextMenu={(e) => e.preventDefault()} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
             <div className="space-y-4">
                <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.5em] block">Module {lessonIndex}</span>
                <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight italic leading-tight">{lesson.title}</h1>
             </div>
             
             <div className="h-px w-full bg-white/5" />
             
             <div className="prose prose-invert max-w-none">
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed italic whitespace-pre-line">
                  {lesson.description || "In-depth details are reserved for authenticated members."}
                </p>
             </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            {lesson.studyMaterials && lesson.studyMaterials.length > 0 && (
              <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8">
                <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-8 flex items-center">
                  <span className="w-1.5 h-6 bg-orange-500 rounded-full mr-4" />
                  Study Material
                </h4>
                <div className="space-y-4">
                  {lesson.studyMaterials.map((material, index) => (
                    <a 
                      key={index}
                      href={material.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-orange-500/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-orange-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold text-white uppercase tracking-widest truncate">
                          {material.title}
                        </p>
                        <p className="text-[8px] text-slate-600 font-bold uppercase tracking-widest mt-0.5">Secure PDF</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;