import LogoutButton from '@/components/LogoutButton';

export default function AdminLayout({ children }) {
    return (
      <div className="min-h-screen flex overflow-hidden bg-background-dark text-slate-100">
        <aside className="w-64 border-r border-panel-border flex flex-col shrink-0 bg-black">
          <div className="p-6 border-b border-panel-border flex items-center gap-3">
            <div className="size-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-black font-bold text-xl">terminal</span>
            </div>
            <h2 className="text-sm font-bold tracking-tighter uppercase">codeAKstan <span className="text-primary text-[10px]">v2.0</span></h2>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold uppercase tracking-widest" href="/admin/dashboard">
              <span className="material-symbols-outlined text-lg">dashboard</span>
              Overview
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-white hover:bg-white/5 transition-all rounded-lg text-xs font-bold uppercase tracking-widest" href="/admin/projects">
              <span className="material-symbols-outlined text-lg">folder_open</span>
              Project Manager
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-white hover:bg-white/5 transition-all rounded-lg text-xs font-bold uppercase tracking-widest" href="/admin/profile">
              <span className="material-symbols-outlined text-lg">description</span>
              Resume/Bio
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-white hover:bg-white/5 transition-all rounded-lg text-xs font-bold uppercase tracking-widest" href="#">
              <span className="material-symbols-outlined text-lg">settings</span>
              System Settings
            </a>
            <LogoutButton />
          </nav>
          <div className="p-4 border-t border-panel-border">
            <div className="p-4 bg-surface-dark border border-panel-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Core Status</span>
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[82%]"></div>
              </div>
              <p className="text-[9px] text-slate-600 mt-2 uppercase font-bold">Node Affinity: Optimized</p>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col min-w-0 grid-bg">
          <header className="h-16 border-b border-panel-border flex items-center justify-between px-8 bg-black/50 backdrop-blur-md">
            <div>
              <h1 className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Administrator_Dashboard / Overview</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-500 text-lg">notifications</span>
                <span className="text-[10px] text-slate-500 font-bold">3 ACTIVE ALERTS</span>
              </div>
              <div className="h-8 w-px bg-panel-border"></div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs font-bold">ADMIN_ROOT</p>
                  <p className="text-[10px] text-primary">AUTHORIZED</p>
                </div>
                <div className="w-10 h-10 rounded bg-surface-dark border border-panel-border flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-300">person</span>
                </div>
              </div>
            </div>
          </header>
          <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </main>
      </div>
    );
  }
