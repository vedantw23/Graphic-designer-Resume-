"use client";

import { motion } from "framer-motion";
import { Layers3, Palette, PenTool, Globe } from "lucide-react";
import { resume } from "@/data/resume";

const highlightIcons = [Palette, Globe, Layers3, PenTool];

export default function Projects() {
  return (
    <section id="highlights" className="py-24 relative bg-secondary/20">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-subtext mb-3">Selected Strengths</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Resume <span className="text-accent">Highlights</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto md:mx-0" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resume.highlights.map((highlight, idx) => {
            const Icon = highlightIcons[idx % highlightIcons.length];

            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="group h-full rounded-3xl bg-[#111111] border border-white/5 hover:border-accent/30 transition-all duration-500 p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-subtext text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
