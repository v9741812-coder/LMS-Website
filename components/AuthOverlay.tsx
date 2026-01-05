import React, { useState } from 'react';
import { validateCredentials } from '../services/authService';
import { AuthStatus } from '../types';

interface AuthOverlayProps {
  onSuccess: (email: string) => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
}

const AuthOverlay: React.FC<AuthOverlayProps> = ({ onSuccess, onNavigateAbout, onNavigateContact }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.IDLE);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === AuthStatus.PENDING) return;
    
    setStatus(AuthStatus.PENDING);
    setErrorMsg('');

    try {
      const isValid = await validateCredentials(email, password);

      if (isValid) {
        setStatus(AuthStatus.SUCCESS);
        setTimeout(() => onSuccess(email), 500);
      } else {
        setStatus(AuthStatus.FAILED);
        setErrorMsg('Authentication Failure. Verify your access key.');
      }
    } catch (err: any) {
      setStatus(AuthStatus.FAILED);
      setErrorMsg(err.message || 'System error. Check your connection.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#030303]">
      <div className="w-full max-w-[460px] relative ferrari-entry">
        <div className="bg-[#080808] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] relative">
          
          <div className="pt-20 pb-10 px-14 text-center">
            <div className="w-32 h-32 auth-logo-circle flex items-center justify-center mx-auto mb-12 overflow-hidden group">
               <img 
                src="https://lh3.googleusercontent.com/d/1WLtVCPjQqdSHIqLHiiVFDtlSXPyRLySD" 
                alt="Logo" 
                className="w-full h-full object-cover rounded-full logo-img transition-transform duration-1000 group-hover:scale-110"
                style={{ imageRendering: 'auto' }}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-4 italic text-nowrap">
              The Growth <span className="animate-lab-gradient-navbar uppercase tracking-normal font-black">Lab</span>
            </h1>
            <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.7em]">user login portal</p>
          </div>

          <form onSubmit={handleSubmit} className="px-14 pb-20 space-y-6">
            <div className="space-y-2">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-[1.2rem] px-8 py-5 text-white placeholder:text-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all text-sm font-medium"
                placeholder="Enter Email"
              />
            </div>

            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-[1.2rem] pl-8 pr-16 py-5 text-white placeholder:text-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05] transition-all text-sm font-medium"
                placeholder="Enter Access Key"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-[11px] uppercase font-black tracking-widest text-slate-500 hover:text-orange-500 transition-colors"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            {errorMsg && (
              <div className="p-6 rounded-[1.2rem] bg-red-500/5 border border-red-500/10 text-red-500 text-[11px] font-bold italic text-center animate-in fade-in">
                {errorMsg}
              </div>
            )}

            <button 
              type="submit"
              disabled={status === AuthStatus.PENDING}
              className={`w-full py-6 rounded-[1.2rem] font-black text-[12px] uppercase tracking-[0.6em] transition-all shadow-3xl ${
                status === AuthStatus.PENDING 
                ? 'bg-neutral-900 text-neutral-700 cursor-not-allowed' 
                : 'bg-orange-500 text-neutral-950 hover:bg-orange-400 active:scale-[0.97] hover:shadow-orange-500/30'
              }`}
            >
              {status === AuthStatus.PENDING ? 'Verifying...' : 'AUTHORIZE ENTRANCE'}
            </button>
            
            <div className="pt-12 border-t border-white/5 flex flex-col items-center space-y-10">
              <div className="flex items-center space-x-14">
                <button 
                  type="button"
                  onClick={onNavigateAbout}
                  className="text-[10px] text-slate-500 hover:text-white font-black uppercase tracking-[0.5em] transition-colors"
                >
                  ABOUT
                </button>
                <button 
                  type="button"
                  onClick={onNavigateContact}
                  className="text-[10px] text-slate-500 hover:text-white font-black uppercase tracking-[0.5em] transition-colors"
                >
                  SUPPORT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthOverlay;