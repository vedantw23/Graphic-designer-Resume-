"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useMousePosition } from "@/hooks/useMousePosition";
import { resume } from "@/data/resume";

export default function Hero() {
  const mousePosition = useMousePosition();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Spotlight Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 212, 0, 0.05), transparent 40%)`
        }}
      />

      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Graphic & UI/UX Designer
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium">
                Designing intuitive digital experiences that blend creativity, functionality, and user-centered thinking.
              </p>
            </div>

            <p className="text-lg md:text-xl text-subtext max-w-xl leading-relaxed">
              As a Graphic & UI/UX Designer, I specialize in creating clean, modern, and user-focused digital experiences. With hands-on experience in branding, web design, social media creatives, and product interfaces, I combine creativity with strategic thinking to deliver designs that are both visually appealing and highly functional.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a
                href="/Amogh_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-accent text-background font-medium rounded-xl flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(255,212,0,0.3)] hover:shadow-[0_0_30px_rgba(255,212,0,0.5)] transition-shadow"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <ArrowRight size={18} />
                <span>View Portfolio</span>
              </motion.a>
              
              <motion.a
                href="/Amogh_Resume_2026.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-secondary text-white font-medium rounded-xl border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="px-4 py-3 text-subtext hover:text-white font-medium flex items-center gap-2 transition-colors ml-2"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-subtext">
                <MapPin size={14} className="text-accent" />
                {resume.location}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-subtext">
                <span className="w-2 h-2 rounded-full bg-accent/70" />
                BFA Graphic & UI/UX Design, Batch 2024
              </div>
            </div>
          </motion.div>

          {/* Image/3D Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
          >
            <motion.div 
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-secondary/50 backdrop-blur-sm"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/amogh-portrait.png"
                alt={resume.fullName}
                fill
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-accent/10 mix-blend-overlay pointer-events-none z-[1]" />
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none z-[1]" />

              <div className="absolute inset-0 z-10 flex items-end justify-between p-6 pointer-events-none">
                <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">Location</p>
                  <p className="text-sm text-white mt-1">{resume.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">Contact</p>
                  <p className="text-sm text-white mt-1">{resume.email}</p>
                </div>
              </div>

              <div className="absolute top-5 left-5 z-10 rounded-full border border-white/10 bg-black/25 backdrop-blur-md px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/65">
                Crafted with intention
              </div>
            </motion.div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[100px] rounded-full" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
