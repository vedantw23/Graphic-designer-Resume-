"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { FaBehance, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { resume } from "@/data/resume";

export default function Contact() {
  const composeEmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    resume.email
  )}&su=${encodeURIComponent("Portfolio Inquiry")}&body=${encodeURIComponent(
    "Hi Amogh,\n\nI came across your portfolio and would like to connect."
  )}`;
  const whatsappHref = `https://wa.me/91${resume.phone.replace(/\D/g, "").slice(-10)}?text=${encodeURIComponent(
    "Hi Amogh, I came across your portfolio and would like to connect."
  )}`;

  const handleComposeEmail = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(composeEmailHref, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-accent">Touch</span></h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-subtext max-w-2xl mx-auto">
            Open to meaningful design opportunities, collaboration, and conversations around brand, UI/UX, and visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <a
              href={composeEmailHref}
              onClick={handleComposeEmail}
              className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <span className="text-subtext hover:text-accent transition-colors">
                  {resume.email}
                </span>
              </div>
            </a>
            
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <a href="tel:+919404091633" className="text-subtext hover:text-accent transition-colors">
                  {resume.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <span className="text-subtext">{resume.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-accent hover:text-background transition-colors border border-white/10">
                <FaLinkedin size={20} />
              </a>
              <a href={resume.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance profile" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-accent hover:text-background transition-colors border border-white/10">
                <FaBehance size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="p-5 sm:p-6 md:p-8 rounded-3xl bg-[#111111] border border-white/10 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -z-10" />
              <div className="flex flex-col gap-6 h-full">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-subtext mb-3">Direct Reach</p>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Fastest ways to connect</h3>
                  <p className="text-subtext max-w-2xl leading-relaxed">
                    Use any of the channels below to reach Amogh for freelance collaboration, design opportunities, or portfolio reviews.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <a href={composeEmailHref} onClick={handleComposeEmail} className="group rounded-2xl border border-white/5 bg-secondary/30 p-4 sm:p-5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-subtext mb-1">Email</p>
                        <p className="text-white font-medium">{resume.email}</p>
                      </div>
                      <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/5 bg-secondary/30 p-4 sm:p-5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-subtext mb-1">LinkedIn</p>
                        <p className="text-white font-medium">Profile</p>
                      </div>
                      <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <a href={resume.behance} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/5 bg-secondary/30 p-4 sm:p-5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-subtext mb-1">Behance</p>
                        <p className="text-white font-medium">Projects</p>
                      </div>
                      <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  <div className="rounded-2xl border border-white/5 bg-secondary/30 p-4 sm:p-5">
                    <p className="text-sm text-subtext mb-1">Location</p>
                    <p className="text-white font-medium">{resume.location}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-subtext">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Brand Identity
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-subtext">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    UI/UX
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-subtext">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Print & Social
                  </span>
                </div>

                <a
                  href={whatsappHref}
                  onClick={handleWhatsApp}
                  className="group mt-2 flex w-full flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-[#25D366]/20 bg-gradient-to-r from-[#0f2416] via-[#0d1c12] to-[#111111] p-5 sm:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50"
                  aria-label="Contact via WhatsApp"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] ring-1 ring-[#25D366]/20">
                      <FaWhatsapp size={26} />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.32em] text-[#25D366]/80 mb-2">Instant Chat</p>
                      <h4 className="text-lg sm:text-xl font-semibold text-white">WhatsApp</h4>
                      <p className="mt-1 text-sm text-subtext">Start a direct conversation instantly</p>
                    </div>
                  </div>
                  <div className="rounded-full border border-[#25D366]/20 bg-[#25D366]/10 p-3 text-[#25D366] transition-transform duration-300 group-hover:translate-x-1 self-end sm:self-auto">
                    <MessageCircle size={18} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
