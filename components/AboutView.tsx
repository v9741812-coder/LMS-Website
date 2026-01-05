import React from 'react';

interface AboutViewProps {
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
  const courseImageUrl = "https://lh3.googleusercontent.com/d/1qboe6ctfxci2ydgLdG0Vjvh1GNVWoLJq";

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

      <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
        <header className="space-y-10 md:space-y-16">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full bg-neutral-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={courseImageUrl} 
              alt="Course Banner" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-7xl font-serif text-white tracking-tighter leading-tight italic">
              Build Your Best Body – <br className="hidden md:block"/>
              <span className="text-orange-500 not-italic font-black">A Complete Fitness Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed italic opacity-90">
              Build Your Best Body – A Complete Fitness Guide is a structured, beginner-friendly course designed to help you build a strong, healthy, and sustainable body from the ground up.
            </p>
          </div>
        </header>

        <div className="h-px w-full bg-white/5" />

        <article className="prose prose-invert max-w-none space-y-20 md:space-y-24">
          <section className="space-y-8">
            <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed italic">
              This course goes beyond random workouts and diet tips. It focuses on building the right foundation — mentally, physically, and practically — so you can make long-term progress without confusion, burnout, or misinformation.
            </p>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed italic">
              Whether you are just starting your fitness journey or restarting after a break, this course will guide you step by step through the core principles of fitness, helping you understand why things work, not just what to do.
            </p>
          </section>

          <section className="space-y-10">
            <h2 className="text-[11px] font-black text-orange-500 uppercase tracking-[0.5em]">What You’ll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                "The mental foundation of fitness and how to stay consistent",
                "How training actually works (strength, hypertrophy, endurance)",
                "Fundamentals of nutrition without extreme diets",
                "Recovery, rest, and injury prevention",
                "How to structure workouts intelligently",
                "How to build habits that last long term"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-5 p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[2rem] group hover:border-orange-500/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
                  <span className="text-slate-300 text-sm md:text-base font-medium italic">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 italic text-lg pt-4">Each module is designed to be clear, practical, and actionable, so you can apply what you learn immediately.</p>
          </section>

          <section className="space-y-10">
            <h2 className="text-[11px] font-black text-orange-500 uppercase tracking-[0.5em]">What This Course Includes</h2>
            <ul className="space-y-4 text-slate-300 text-lg md:text-xl font-light italic list-none">
              <li className="flex items-start">
                <span className="text-orange-500 mr-4">•</span>
                Easy-to-follow video lessons
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4">•</span>
                Concept-based learning (not just routines)
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-4">•</span>
                Well-structured modules for progressive learning
              </li>
            </ul>
            <p className="text-slate-400 italic">All lessons are organized so you can learn at your own pace and revisit concepts anytime.</p>
          </section>

          <section className="space-y-10">
            <h2 className="text-[11px] font-black text-orange-500 uppercase tracking-[0.5em]">Who This Course Is For</h2>
            <div className="space-y-4">
              {[
                "Beginners who feel confused about fitness",
                "Students or busy individuals who want a simple, structured approach",
                "Anyone tired of misinformation and unrealistic fitness advice",
                "People who want long-term results, not quick fixes"
              ].map((item, i) => (
                <div key={i} className="text-slate-300 text-lg md:text-xl font-light italic flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 mr-6" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-orange-500/80 font-bold uppercase tracking-widest text-xs pt-4">No prior fitness knowledge is required.</p>
          </section>

          <section className="space-y-10">
            <h2 className="text-[11px] font-black text-orange-500 uppercase tracking-[0.5em]">Why This Course Is Different</h2>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed italic">
              Instead of chasing trends, this course focuses on fundamentals that actually matter. By understanding the basics properly, you’ll be able to:
            </p>
            <div className="grid gap-4 mt-8">
              {["Make better training and nutrition decisions", "Avoid common beginner mistakes", "Build a healthier relationship with fitness"].map((text, idx) => (
                <div key={idx} className="p-6 border-l-2 border-orange-500 bg-white/[0.02] italic text-slate-200">
                  {text}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-10">
             <div className="bg-orange-500 p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-neutral-950 space-y-8 relative overflow-hidden">
                <h3 className="text-3xl md:text-5xl font-serif font-black italic tracking-tighter">Start Building Your Best Body</h3>
                <p className="text-lg md:text-2xl font-medium tracking-tight italic opacity-90 leading-relaxed">
                  Fitness is not about perfection — it’s about progress, consistency, and understanding. 
                  This course is your guide to building a strong foundation that you can rely on for years to come.
                </p>
             </div>
             <div className="p-10 md:p-16 border border-white/5 rounded-[2.5rem] md:rounded-[4rem] bg-[#080808] space-y-8">
                <p className="text-slate-300 text-lg md:text-xl font-light italic leading-relaxed">
                  Build Your Best Body: A Complete Fitness Guide is a thoughtfully structured course created to help you understand fitness from the ground up by focusing on the principles that actually matter. Instead of overwhelming you with random workouts or restrictive diet plans, this course helps you build a strong mental and physical foundation by teaching how training, nutrition, recovery, and consistency truly work together over time. Through clear video lessons and supportive study materials, you’ll learn how to approach fitness logically, avoid common beginner mistakes, and develop habits that are sustainable rather than extreme. The course is designed to remove confusion, break fitness down into simple, understandable concepts, and empower you to make informed decisions about your body and health long after the course is completed. Whether you are starting fresh, returning after a break, or simply want clarity and structure, this course gives you the tools, understanding, and confidence to progress steadily, stay consistent, and build a healthier, stronger body in a realistic and long-term way.
                </p>
             </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default AboutView;