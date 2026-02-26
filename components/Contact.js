'use client';

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SketchedBorder from "./SketchedBorder";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.from(".contact-header", { opacity: 0, x: -30, duration: 0.8, ease: "power2.out" })
      .from(".contact-form", { opacity: 0, x: 30, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .from(".contact-info-item", { opacity: 0, y: 20, stagger: 0.2, duration: 0.6, ease: "power2.out" }, "-=0.4");

  }, { scope: containerRef });

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
    <section ref={containerRef} className="story-wrapper min-h-screen flex flex-col items-center justify-center py-32 px-6" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 w-full">
        <div className="contact-header">
          <span className="font-note text-[#ff8a65] text-lg font-bold uppercase mb-2 block tracking-widest">Connection Request</span>
          <h2 className="text-4xl md:text-6xl font-sketch text-[#2c2c2c] mb-8 leading-tight">Initiate<br />Handshake.</h2>
          <p className="font-hand text-2xl text-[#4a4a4a] mb-12 max-w-md leading-relaxed">
            Have a project that requires deep technical expertise? Let's discuss the architectural requirements and build something world-class.
          </p>
          <div className="space-y-8">
            <div className="contact-info-item flex items-center gap-6 group cursor-pointer">
              <SketchedBorder className="size-14 bg-white flex items-center justify-center text-[#2c2c2c] group-hover:border-[#ff8a65] transition-colors">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </SketchedBorder>
              <div>
                <p className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">Email Address</p>
                <p className="font-hand text-2xl text-[#2c2c2c] hover:text-[#ff8a65] transition-colors">codeakstan@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item flex items-center gap-6 group cursor-pointer">
              <SketchedBorder className="size-14 bg-white flex items-center justify-center text-[#2c2c2c] group-hover:border-[#ff8a65] transition-colors">
                <span className="material-symbols-outlined text-3xl">share_location</span>
              </SketchedBorder>
              <div>
                <p className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">Location</p>
                <p className="font-hand text-2xl text-[#2c2c2c]">Jupiter // Remote</p>
              </div>
            </div>
          </div>
        </div>
        <SketchedBorder className="contact-form bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(44,44,44,0.05)] transform rotate-1">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">Client_Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-[#2c2c2c]/10 py-3 font-hand text-xl text-[#2c2c2c] focus:outline-none focus:border-[#ff8a65] transition-colors"
                  placeholder="Identification..." 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">Contact_Protocol</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-[#2c2c2c]/10 py-3 font-hand text-xl text-[#2c2c2c] focus:outline-none focus:border-[#ff8a65] transition-colors"
                  placeholder="Email source..." 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">Subject_Header</label>
              <input 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-[#2c2c2c]/10 py-3 font-hand text-xl text-[#2c2c2c] focus:outline-none focus:border-[#ff8a65] transition-colors"
                placeholder="System message topic..." 
                type="text" 
              />
            </div>
            <div className="space-y-2">
              <label className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">Data_Payload</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-[#2c2c2c]/10 py-3 font-hand text-xl text-[#2c2c2c] focus:outline-none focus:border-[#ff8a65] transition-colors resize-none"
                placeholder="Project specifications..." 
                rows="4"
              ></textarea>
            </div>
            
            {status.message && (
              <div className={`p-4 font-note text-lg border-2 ${status.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#2c2c2c] text-white py-4 font-sketch text-xl uppercase tracking-widest hover:bg-[#ff8a65] hover:shadow-[4px_4px_0px_0px_rgba(44,44,44,0.2)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <span className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Transmitting...
                </>
              ) : (
                <>
                    <span>Transmit Signal</span>
                    <span className="material-symbols-outlined">send</span>
                </>
              )}
            </button>
          </form>
        </SketchedBorder>
      </div>
    </section>
  )
}
