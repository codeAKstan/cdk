export default function ProfilePage() {
    return (
        <main>
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-black/90 backdrop-blur-md">
                <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded flex items-center justify-center">
                                <span className="material-symbols-outlined text-black font-bold text-sm">settings</span>
                            </div>
                            <h2 className="text-lg font-bold tracking-tighter mono-text uppercase text-white">codeAKstan <span className="text-primary/60 ml-2">{"//"} ROOT_ADMIN</span></h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-6 ml-8 border-l border-white/10 pl-8">
                            <a className="text-[11px] font-bold text-primary mono-text tracking-widest uppercase" href="#">Profile_Editor</a>
                            <a className="text-[11px] font-bold text-slate-500 hover:text-white transition-colors mono-text tracking-widest uppercase" href="#">Project_Manager</a>
                            <a className="text-[11px] font-bold text-slate-500 hover:text-white transition-colors mono-text tracking-widest uppercase" href="#">Metric_Logs</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end mr-4">
                            <span className="text-[10px] mono-text text-primary">SESSION_ACTIVE</span>
                            <span className="text-[9px] mono-text text-slate-500">IP: 192.168.1.104</span>
                        </div>
                        <button className="size-10 border border-primary/20 rounded flex items-center justify-center hover:bg-primary/10 transition-all">
                            <span className="material-symbols-outlined text-primary">logout</span>
                        </button>
                    </div>
                </div>
            </header>
            <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="mono-text text-primary text-[10px] font-bold tracking-[0.4em] uppercase">System Configuration</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">Resume &amp; Profile</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2.5 border border-white/20 hover:border-white/40 text-white mono-text text-xs font-bold uppercase tracking-widest transition-all">
                            Revert_Changes
                        </button>
                        <button className="px-6 py-2.5 bg-primary text-black mono-text text-xs font-bold uppercase tracking-widest hover:brightness-110 cyan-glow transition-all">
                            Save_Changes
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 space-y-8">
                        <div className="bg-surface-dark border border-primary/20 rounded-lg p-6 cyan-glow">
                            <div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-4">
                                <h3 className="mono-text text-sm font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">person_edit</span>
                                    01. ABOUT_ME_TEXT
                                </h3>
                                <span className="text-[10px] text-slate-500 mono-text uppercase font-medium">Character_count: 452</span>
                            </div>
                            <div className="space-y-4">
                                <div className="group">
                                    <label className="block mono-text text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2 group-focus-within:text-primary transition-colors">Headline_Input</label>
                                    <input className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors" type="text" value="DIGITAL ARCHITECT // Engineering high-performance backends" />
                                </div>
                                <div className="group">
                                    <label className="block mono-text text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-2 group-focus-within:text-primary transition-colors">Biography_Payload</label>
                                    <textarea className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none custom-scrollbar" rows="8">
                                        I specialize in building robust backend systems and pixel-perfect frontend experiences. My approach is rooted in the philosophy that complexity is the enemy of reliability.
                                        Whether it&apos;s orchestrating Kubernetes clusters or fine-tuning React rendering cycles, I translate high-level business requirements into elegant, high-performance code that scales effortlessly.
                                        Currently focusing on Rust-based system utilities and distributed database architectures.
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-dark border border-primary/20 rounded-lg p-6 cyan-glow">
                            <div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-4">
                                <h3 className="mono-text text-sm font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">terminal</span>
                                    02. CORE_CAPABILITIES
                                </h3>
                                <button className="text-[10px] text-primary mono-text uppercase font-bold border border-primary/30 px-2 py-1 hover:bg-primary/10 transition-colors">
                                    + Add_Entry
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-3 border border-white/5 bg-black rounded flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] mono-text text-slate-500 uppercase">Skill_Node</span>
                                        <span className="text-sm font-mono text-white">React / Next.js</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-primary font-bold font-mono">98%</span>
                                        <button className="text-slate-600 hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-sm">close</span></button>
                                    </div>
                                </div>
                                <div className="p-3 border border-white/5 bg-black rounded flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] mono-text text-slate-500 uppercase">Skill_Node</span>
                                        <span className="text-sm font-mono text-white">TypeScript</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-primary font-bold font-mono">95%</span>
                                        <button className="text-slate-600 hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-sm">close</span></button>
                                    </div>
                                </div>
                                <div className="p-3 border border-white/5 bg-black rounded flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] mono-text text-slate-500 uppercase">Skill_Node</span>
                                        <span className="text-sm font-mono text-white">GoLang</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-primary font-bold font-mono">88%</span>
                                        <button className="text-slate-600 hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-sm">close</span></button>
                                    </div>
                                </div>
                                <div className="p-3 border border-white/5 bg-black rounded flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] mono-text text-slate-500 uppercase">Skill_Node</span>
                                        <span className="text-sm font-mono text-white">Kubernetes</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-primary font-bold font-mono">92%</span>
                                        <button className="text-slate-600 hover:text-red-500 transition-colors"><span className="material-symbols-outlined text-sm">close</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-surface-dark border border-primary/20 rounded-lg p-6 cyan-glow flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6 border-b border-primary/10 pb-4">
                                <h3 className="mono-text text-sm font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">upload_file</span>
                                    03. RESUME_BINARY_UPLOAD
                                </h3>
                            </div>
                            <div className="flex-1 border-2 border-dashed border-white/10 rounded-xl bg-black/40 flex flex-col items-center justify-center p-12 text-center group hover:border-primary/40 transition-all cursor-pointer">
                                <div className="size-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary text-4xl">picture_as_pdf</span>
                                </div>
                                <p className="mono-text text-sm text-white mb-2 uppercase font-bold tracking-tight">Drop Resume PDF here</p>
                                <p className="text-[10px] text-slate-500 mono-text uppercase tracking-widest mb-6">Max_File_Size: 5MB // Extension: .pdf</p>
                                <button className="px-5 py-2 border border-primary/50 text-primary text-[10px] mono-text font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
                                    Browse_Local_System
                                </button>
                            </div>
                            <div className="mt-8 pt-8 border-t border-primary/10">
                                <p className="mono-text text-[10px] text-slate-500 uppercase font-bold mb-4 tracking-widest">Currently_Deployed_Assets</p>
                                <div className="flex items-center justify-between p-4 bg-black border border-white/10 rounded">
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-red-400">picture_as_pdf</span>
                                        <div>
                                            <p className="text-xs font-mono text-white">stan_resume_v2.4.pdf</p>
                                            <p className="text-[10px] font-mono text-slate-500">Uploaded: 2024-03-15 // 1.2MB</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-slate-500 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                        </button>
                                        <button className="p-2 text-slate-500 hover:text-red-500 transition-colors">
                                            <span className="material-symbols-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] mono-text text-slate-400 uppercase tracking-widest">Last_Sync</span>
                                    <span className="text-[10px] mono-text text-primary">2024.05.12 14:32:01 UTC</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] mono-text text-slate-400 uppercase tracking-widest">Public_View_Status</span>
                                    <span className="px-2 py-0.5 bg-primary/20 text-primary text-[9px] mono-text font-bold rounded uppercase">Online</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] mono-text text-slate-400 uppercase tracking-widest">DB_Integrity</span>
                                    <span className="text-[10px] mono-text text-green-500">100% VERIFIED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mt-12 py-8 border-t border-white/5 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <p className="text-[10px] text-slate-600 mono-text uppercase font-bold tracking-widest">Admin_Console_v0.8.2-alpha</p>
                        <p className="text-[9px] text-slate-700 mono-text uppercase">System: Running kernel v5.10.x</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-[10px] mono-text text-primary/50">ENCRYPTION: AES-256</span>
                        <span className="text-[10px] mono-text text-primary/50">CONNECTION: SECURE</span>
                    </div>
                </div>
            </footer>
        </main>
    )
}
