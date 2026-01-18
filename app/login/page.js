"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result.error) {
                setError('Invalid credentials');
                setLoading(false);
            } else {
                router.push('/admin/dashboard');
            }
        } catch (err) {
            setError('An error occurred');
            setLoading(false);
        }
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 grid-bg selection:bg-primary selection:text-black">
        <div className="scanline"></div>
        <div className="w-full max-w-md">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="size-10 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-black font-bold text-2xl">terminal</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter uppercase">codeAKstan</h2>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary/60">
              <span className="h-px w-8 bg-primary/30"></span>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Secure Core v4.0.1</p>
              <span className="h-px w-8 bg-primary/30"></span>
            </div>
          </div>
          <div className="bg-surface-dark border border-white/10 p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 size-2 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute top-0 right-0 size-2 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 size-2 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 size-2 border-b-2 border-r-2 border-primary"></div>
            <div className="flex items-center gap-3 mb-10">
              <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
              <h1 className="text-xl font-bold tracking-tight uppercase">System Access</h1>
            </div>
            
            {error && (
                <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-xs font-mono">
                    {error}
                </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Identification</label>
                  <span className="text-[9px] text-primary/40 font-mono">UID_REQUIRED</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 material-symbols-outlined text-sm">alternate_email</span>
                  <input 
                    autoComplete="off" 
                    className="w-full bg-black border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-primary placeholder:text-slate-700 py-4 pl-12 pr-4 transition-all outline-none font-mono text-sm" 
                    placeholder="username or email" 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Secure Passcode</label>
                  <span className="text-[9px] text-primary/40 font-mono">ENCRYPTED_LINK</span>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 material-symbols-outlined text-sm">lock_person</span>
                  <input 
                    className="w-full bg-black border border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 text-primary placeholder:text-slate-700 py-4 pl-12 pr-4 transition-all outline-none font-mono text-sm" 
                    placeholder="••••••••••••" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="pt-4">
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-primary text-black font-bold uppercase tracking-[0.2em] py-4 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group/btn shadow-[0_0_20px_rgba(16,209,205,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm">{loading ? 'AUTHENTICATING...' : 'Terminal Access'}</span>
                  {!loading && <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">login</span>}
                </button>
              </div>
            </form>
            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-600 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="size-1.5 bg-primary rounded-full animate-pulse"></span>
                <span>Node: BRL-01</span>
              </div>
              <span>SSL: Active</span>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm text-red-900">warning</span>
              Unauthorized access is logged &amp; traceable
            </p>
            <div className="mt-6">
              <a className="text-[9px] text-slate-700 hover:text-primary transition-colors uppercase tracking-widest" href="/">Return to Public Interface</a>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full"></div>
        </div>
      </div>
    )
  }
