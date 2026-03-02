import LogoutButton from '@/components/LogoutButton';

export default function AdminLayout({ children }) {
    return (
      <div className="min-h-screen flex overflow-hidden bg-[#f4f4f2] text-[#2c2c2c]">
        <aside className="w-64 border-r border-[#2c2c2c]/20 flex flex-col shrink-0 bg-white">
          <div className="p-6 border-b border-[#2c2c2c]/20 flex items-center gap-3">
            <div className="size-8 bg-[#ff8a65] rounded flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(44,44,44,0.2)]">
              <span className="material-symbols-outlined text-white font-bold text-xl">terminal</span>
            </div>
            <h2 className="text-sm font-bold tracking-tighter uppercase">codeAKstan <span className="text-[#ff8a65] text-[10px]">v2.0</span></h2>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <a className="flex items-center gap-3 px-4 py-3 bg-[#ff8a65]/10 text-[#ff8a65] border border-[#ff8a65]/30 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#ff8a65]/15 transition-colors" href="/admin/dashboard">
              <span className="material-symbols-outlined text-lg">dashboard</span>
              Overview
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#4a4a4a] hover:text-[#ff8a65] hover:bg-[#ff8a65]/10 transition-all rounded-lg text-xs font-bold uppercase tracking-widest" href="/admin/projects">
              <span className="material-symbols-outlined text-lg">folder_open</span>
              Project Manager
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#4a4a4a] hover:text-[#ff8a65] hover:bg-[#ff8a65]/10 transition-all rounded-lg text-xs font-bold uppercase tracking-widest" href="/admin/profile">
              <span className="material-symbols-outlined text-lg">description</span>
              Resume/Bio
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-[#4a4a4a] hover:text-[#ff8a65] hover:bg-[#ff8a65]/10 transition-all rounded-lg text-xs font-bold uppercase tracking-widest" href="#">
              <span className="material-symbols-outlined text-lg">settings</span>
              System Settings
            </a>
            <LogoutButton />
          </nav>
          <div className="p-4 border-t border-[#2c2c2c]/20">
            <div className="p-4 bg-white border border-[#2c2c2c]/20 rounded-lg shadow-[6px_6px_0px_0px_rgba(44,44,44,0.08)]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#4a4a4a] uppercase font-bold tracking-widest">Core Status</span>
                <span className="size-2 rounded-full bg-[#ff8a65] animate-pulse"></span>
              </div>
              <div className="h-1 bg-[#2c2c2c]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#ff8a65] w-[82%]"></div>
              </div>
              <p className="text-[9px] text-[#4a4a4a] mt-2 uppercase font-bold">Node Affinity: Optimized</p>
            </div>
          </div>
        </aside>
        <main className="flex-1 flex flex-col min-w-0 grid-bg">
          <header className="h-16 border-b border-[#2c2c2c]/20 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md">
            <div>
              <h1 className="text-xs font-bold tracking-[0.3em] text-[#4a4a4a] uppercase">Administrator_Dashboard / Overview</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4a4a4a] text-lg">notifications</span>
                <span className="text-[10px] text-[#4a4a4a] font-bold">3 ACTIVE ALERTS</span>
              </div>
              <div className="h-8 w-px bg-[#2c2c2c]/20"></div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs font-bold">ADMIN_ROOT</p>
                  <p className="text-[10px] text-[#ff8a65]">AUTHORIZED</p>
                </div>
                <div className="w-10 h-10 rounded bg-white border border-[#2c2c2c]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4a4a4a]">person</span>
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
