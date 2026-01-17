export default function ProjectsPage() {
    return (
        <main>
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <div className="inline-flex items-center gap-2 mb-2 px-2 py-0.5 rounded border border-primary/30 bg-primary/5">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Portfolio Project Management</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic">Project_Manager</h2>
                </div>
                <button className="bg-primary text-background-dark px-6 py-3 rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,209,205,0.2)]">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Add New Project
                </button>
            </header>
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Current_Deployments (03)</h3>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                                <input className="bg-surface-dark border border-border-dark rounded-md pl-9 pr-4 py-2 text-[10px] text-white focus:outline-none focus:border-primary w-48 uppercase tracking-widest" placeholder="Search logs..." type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-border-dark p-6 rounded-lg flex items-center gap-6 group hover:border-primary/30 transition-all">
                        <div className="size-20 bg-background-dark border border-border-dark rounded overflow-hidden flex-shrink-0">
                            <img alt="Project Thumbnail" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjFhx-ThNVIol3emTCRis8VfkJYrc4-IBCzEiXTNLy6Y1aTV1HcLJB1G3JLjbAQ_YMyIROuK-Akr4ssmVXdg0QzBHo99lD9vqBYea507mMLBy6f-w6jd0pnGPD0gEHVAOUwBwSmtQEt-fBtRQijMRGpsRf4EQORGQKex7a5Bd9zSJJhpnescNw-45v6ZDZG1Q_KDmBqNwfAIehUHv3IHqQ5h6-oUGfkqy0K7ZrO9Rixi6YycNPJTweYoYcxIYy34fAv9IETwHsFRk" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-[10px] text-primary font-bold">#ID_01</span>
                                <h4 className="font-bold text-white uppercase tracking-tight">NEURAL-VIS ARCHITECT</h4>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 line-clamp-1">High-performance data visualization engine for neural network monitoring.</p>
                            <div className="flex gap-2">
                                <span className="text-[9px] px-2 py-0.5 bg-background-dark border border-border-dark text-slate-400 uppercase">Rust</span>
                                <span className="text-[9px] px-2 py-0.5 bg-background-dark border border-border-dark text-slate-400 uppercase">WebGL</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-primary text-slate-500 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-lg">edit</span>
                            </button>
                            <button className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-red-500 text-slate-500 hover:text-red-500 transition-all">
                                <span className="material-symbols-outlined text-lg">delete</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-border-dark p-6 rounded-lg flex items-center gap-6 group hover:border-primary/30 transition-all">
                        <div className="size-20 bg-background-dark border border-border-dark rounded overflow-hidden flex-shrink-0">
                            <img alt="Project Thumbnail" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE1Djic536sCMrLL1y40AiPzaNkpuJxnc9Z7z-W2pzMOj9Cvvge-UulqHwpsQw1l3Yxe7Q8MR1k4_mgt3MAKAYOTvoLPhAaxd0kK1IPC2LlFyNA3nGgMxJ5A89_8BT4Ts41wx1canokx6vEuZXwfCNQq6QlBeKkfzYw8VCHFEGmGQtGRrCT3lxykjV6M0ehogqefOoR1B_tkrPYXMDXvA4Gnywgvg3BYFLRfjl9it994zJ1GJiXSFGv68_PHPucz7IfxHYp60rq2E" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-[10px] text-primary font-bold">#ID_02</span>
                                <h4 className="font-bold text-white uppercase tracking-tight">QUANTUM-LEDGER</h4>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 line-clamp-1">Distributed ledger system with post-quantum encryption standards.</p>
                            <div className="flex gap-2">
                                <span className="text-[9px] px-2 py-0.5 bg-background-dark border border-border-dark text-slate-400 uppercase">GoLang</span>
                                <span className="text-[9px] px-2 py-0.5 bg-background-dark border border-border-dark text-slate-400 uppercase">gRPC</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-primary text-slate-500 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-lg">edit</span>
                            </button>
                            <button className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-red-500 text-slate-500 hover:text-red-500 transition-all">
                                <span className="material-symbols-outlined text-lg">delete</span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-surface-dark border border-border-dark p-6 rounded-lg flex items-center gap-6 group hover:border-primary/30 transition-all">
                        <div className="size-20 bg-background-dark border border-border-dark rounded overflow-hidden flex-shrink-0">
                            <img alt="Project Thumbnail" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDl3bnb-oYPRuuAKV6-BtfxLLRFepGNhr0l9HLwuDRLhUrr5cTybSN7yF0qxLBNyZQ6I0PYH1mt3ZcFOw8mIoRXqQPIiuhRXmSBpsgtxZB1P7nxcq_1SYmLHrGOVJ9olkv7BnwrvI7zI-dv6ikzLLhMQhsjldk2zl5hruhOwj0UKO1v-3srmYY8SfhuQjTJJXH_KQWlFX5kuQJ9Wx87xuwWC-PqDnwietdIJrSgd_HGg3S-l2nWZ1aV6SAGSoqy3rClheaNCEveEw" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-[10px] text-primary font-bold">#ID_03</span>
                                <h4 className="font-bold text-white uppercase tracking-tight">ORBIT-API GATEWAY</h4>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 line-clamp-1">Intelligent API gateway with dynamic rate limiting capabilities.</p>
                            <div className="flex gap-2">
                                <span className="text-[9px] px-2 py-0.5 bg-background-dark border border-border-dark text-slate-400 uppercase">Python</span>
                                <span className="text-[9px] px-2 py-0.5 bg-background-dark border border-border-dark text-slate-400 uppercase">K8s</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-primary text-slate-500 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-lg">edit</span>
                            </button>
                            <button className="size-10 flex items-center justify-center rounded border border-border-dark hover:border-red-500 text-slate-500 hover:text-red-500 transition-all">
                                <span className="material-symbols-outlined text-lg">delete</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-surface-dark border border-primary/20 p-8 rounded-lg sticky top-10">
                        <div className="mb-8 border-b border-border-dark pb-4">
                            <h3 className="text-white font-bold text-lg uppercase tracking-widest italic flex items-center gap-2">
                                <span className="size-2 bg-primary animate-pulse"></span>
                                Project_Entry
                            </h3>
                        </div>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Project_Name</label>
                                <input className="w-full bg-background-dark border border-border-dark rounded px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Enter identification string..." type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Technical_Description</label>
                                <textarea className="w-full bg-background-dark border border-border-dark rounded px-4 py-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none resize-none" placeholder="Payload details..." rows="4"></textarea>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Tech_Stack_Tags</label>
                                <div className="flex flex-wrap gap-2 p-3 bg-background-dark border border-border-dark rounded min-h-[44px]">
                                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] rounded flex items-center gap-1">
                                        NEXT.JS <span className="material-symbols-outlined text-[10px] cursor-pointer">close</span>
                                    </span>
                                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] rounded flex items-center gap-1">
                                        TAILWIND <span className="material-symbols-outlined text-[10px] cursor-pointer">close</span>
                                    </span>
                                    <input className="flex-1 bg-transparent border-none p-0 text-[10px] text-slate-400 focus:ring-0 uppercase" placeholder="Add Tag..." type="text" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Image_Asset</label>
                                <div className="border-2 border-dashed border-border-dark rounded-lg p-8 flex flex-col items-center justify-center group hover:border-primary/50 cursor-pointer transition-all">
                                    <span className="material-symbols-outlined text-3xl text-slate-500 group-hover:text-primary mb-2">upload_file</span>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">Drop_Asset_Here</p>
                                </div>
                            </div>
                            <div className="pt-4 flex gap-4">
                                <button className="flex-1 bg-primary text-background-dark py-4 rounded font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all" type="submit">
                                    Commit_Changes
                                </button>
                                <button className="px-6 py-4 rounded border border-border-dark text-slate-500 hover:text-white transition-all uppercase text-[10px] font-bold" type="reset">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="fixed bottom-0 left-64 right-0 border-t border-border-dark bg-background-dark/90 backdrop-blur-md px-6 py-2 flex items-center justify-between z-40">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">System Online</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        DB_Lat: <span className="text-primary">12ms</span>
                    </div>
                </div>
                <div className="text-[10px] text-slate-600 font-bold tracking-widest uppercase">
                    © 2024 CORE_ADMIN_PROTOCOL // V3.0.4-STABLE
                </div>
            </footer>
        </main>
    )
}
