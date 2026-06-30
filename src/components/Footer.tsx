"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { resume } from "@/data/resume";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="text-lg font-semibold text-white tracking-[0.2em] uppercase">
              {resume.shortName}
            </div>
            <div className="w-1 h-1 rounded-full bg-accent" />
          </motion.div>

          <p className="text-subtext text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {resume.fullName}. All rights reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-accent hover:bg-accent/10 transition-colors"
          >
            <ArrowUp size={20} className="text-subtext group-hover:text-accent transition-colors" />
          </button>

        </div>
      </div>
    </footer>
  );
}
