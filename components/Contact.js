export default function Contact() {
    return (
      <section className="py-32 px-6 bg-background-dark overflow-hidden" id="contact">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="mono-text text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Connection Request</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">INITIATE<br />HANDSHAKE.</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Have a project that requires deep technical expertise? Let's discuss the architectural requirements and build something world-class.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="size-12 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email Address</p>
                  <p className="text-white font-mono hover:text-primary transition-colors">architect@codeakstan.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="size-12 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">share_location</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-white font-mono">Berlin, Germany // Remote</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Client_Name</label>
                  <input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Identification..." type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Contact_Protocol</label>
                  <input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Email source..." type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Subject_Header</label>
                <input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="System message topic..." type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Data_Payload</label>
                <textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Project specifications..." rows="4"></textarea>
              </div>
              <button className="w-full bg-primary text-background-dark py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:brightness-110 active:scale-[0.98] transition-all">
                Transmit Signal
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
