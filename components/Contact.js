"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Transmission successful. Signal received." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Transmission failed. Retry." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Signal lost." });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <p className="text-white font-mono hover:text-primary transition-colors">codeakstan@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="size-12 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined">share_location</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Location</p>
                <p className="text-white font-mono">Jupiter // Remote</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 md:p-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Client_Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="Identification..." 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Contact_Protocol</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="Email source..." 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Subject_Header</label>
              <input 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                placeholder="System message topic..." 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mono-text">Data_Payload</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" 
                placeholder="Project specifications..." 
                rows="4"
              ></textarea>
            </div>
            
            {status.message && (
              <div className={`p-4 rounded-lg text-xs font-mono border ${status.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                <span className="font-bold uppercase tracking-widest">{status.type === 'success' ? 'SUCCESS' : 'ERROR'}:</span> {status.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-background-dark py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="size-4 border-2 border-background-dark border-t-transparent rounded-full animate-spin"></span>
                  Transmitting...
                </>
              ) : (
                'Transmit Signal'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
