export default function DashboardPage() {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface-dark border border-panel-border p-6 rounded-xl hover:border-primary/50 transition-colors group">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4">Total Deployments</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">142</h3>
              <span className="text-primary material-symbols-outlined mb-1">rocket_launch</span>
            </div>
          </div>
          <div className="bg-surface-dark border border-panel-border p-6 rounded-xl hover:border-primary/50 transition-colors group">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4">Last Resume Update</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">2D ago</h3>
              <span className="text-primary material-symbols-outlined mb-1">history</span>
            </div>
          </div>
          <div className="bg-surface-dark border border-panel-border p-6 rounded-xl hover:border-primary/50 transition-colors group">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4">Uptime (Core)</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">99.98%</h3>
              <span className="text-primary material-symbols-outlined mb-1">bolt</span>
            </div>
          </div>
          <div className="bg-surface-dark border border-panel-border p-6 rounded-xl hover:border-primary/50 transition-colors group">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4">Signal Integrity</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">100%</h3>
              <span className="text-primary material-symbols-outlined mb-1">check_circle</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-surface-dark border border-panel-border rounded-xl flex flex-col">
            <div className="px-6 py-4 border-b border-panel-border flex items-center justify-between bg-black/20">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">terminal</span>
                System_Activity_Log
              </h3>
              <div className="flex gap-2">
                <div className="size-2 rounded-full bg-slate-800"></div>
                <div className="size-2 rounded-full bg-slate-800"></div>
                <div className="size-2 rounded-full bg-slate-800"></div>
              </div>
            </div>
            <div className="p-6 font-mono text-[11px] leading-relaxed overflow-y-auto h-[400px] custom-scrollbar bg-black/40">
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-20 14:22:01]</span>
                <span className="text-primary">[INFO]</span>
                <span className="text-slate-300">Deployment successful: Project 'SWIVLY' updated to v1.2.0</span>
              </div>
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-20 12:45:10]</span>
                <span className="text-yellow-500">[WARN]</span>
                <span className="text-slate-300">Cache invalidated on Edge Node 04: TTL expired</span>
              </div>
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-20 09:11:55]</span>
                <span className="text-primary">[INFO]</span>
                <span className="text-slate-300">Resume data synced with LinkedIn API</span>
              </div>
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-19 23:59:00]</span>
                <span className="text-slate-500">[LOG]</span>
                <span className="text-slate-300">Daily system backup completed (4.2GB)</span>
              </div>
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-19 18:30:12]</span>
                <span className="text-primary">[INFO]</span>
                <span className="text-slate-300">New connection request received via handshake protocol</span>
              </div>
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-19 15:00:00]</span>
                <span className="text-red-500">[FAIL]</span>
                <span className="text-slate-300">Automated test suite failed: 2 broken links in legacy archives</span>
              </div>
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-19 14:55:22]</span>
                <span className="text-primary">[INFO]</span>
                <span className="text-slate-300">System initialization... all cores functional</span>
              </div>
              <div className="mb-3 flex gap-4">
                <span className="text-slate-600">[2024-05-19 12:20:01]</span>
                <span className="text-primary">[INFO]</span>
                <span className="text-slate-300">New skill badge added: 'Rust/WASM'</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-dark border border-panel-border rounded-xl flex flex-col">
            <div className="px-6 py-4 border-b border-panel-border bg-black/20">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Project_Focus</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="p-4 border border-panel-border rounded flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">VOLT</h4>
                  <p className="text-[9px] text-slate-500 font-mono">STATUS: BETA_ENV</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
              <div className="p-4 border border-panel-border rounded flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">VALUECYCLE</h4>
                  <p className="text-[9px] text-slate-500 font-mono">STATUS: LIVE</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
              <div className="p-4 border border-panel-border rounded flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">SWIVLY</h4>
                  <p className="text-[9px] text-slate-500 font-mono">STATUS: PRODUCTION</p>
                </div>
                <span className="material-symbols-outlined text-primary text-sm">open_in_new</span>
              </div>
              <div className="p-4 border border-panel-border rounded flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
                <div>
                  <h4 className="text-xs font-bold text-white mb-1">OLD-PORTFOLIO</h4>
                  <p className="text-[9px] text-slate-500 font-mono">STATUS: DEPRECATED</p>
                </div>
                <span className="material-symbols-outlined text-slate-700 text-sm">archive</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
