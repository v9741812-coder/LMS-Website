
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: (id: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div 
      onClick={() => onClick(course.id)}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-amber-500/40 transition-all duration-700 cursor-pointer shadow-2xl hover:shadow-amber-500/10"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0 brightness-[0.7] group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-6 left-6 flex items-center space-x-2">
          <div className="bg-amber-500/90 text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full text-neutral-950 shadow-xl backdrop-blur-md">
            {course.category}
          </div>
        </div>
      </div>

      <div className="p-10">
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors leading-tight italic">
          {course.title}
        </h3>
        <p className="text-slate-500 text-sm mb-10 line-clamp-2 font-light leading-relaxed italic tracking-wide">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-8">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 text-amber-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.25c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            {course.lessons.length} Modules
          </span>
          <span className="flex items-center space-x-3">
             <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-amber-500 font-bold italic">
              {course.instructor[0]}
            </div>
            <span className="tracking-widest">{course.instructor}</span>
          </span>
        </div>

        <div className="space-y-3 pt-6 border-t border-white/5 relative">
          <div className="flex justify-between text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">
            <span>Completion Quotient</span>
            <span className="text-amber-500">{course.progress}%</span>
          </div>
          <div className="w-full h-1 bg-white/[0.03] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-300 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
