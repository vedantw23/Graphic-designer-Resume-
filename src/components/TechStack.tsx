"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Heart } from "lucide-react";
import { resume } from "@/data/resume";

const visibleProjects = resume.projects.slice(0, 5);
const marqueeProjects = [...visibleProjects, ...visibleProjects];

export default function TechStack() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,212,0,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_30%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>
        </motion.div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f] p-3 sm:p-4 md:p-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="projects-marquee-track group flex w-max gap-4 sm:gap-6 pr-4 sm:pr-6">
            {marqueeProjects.map((project, index) => {
              const number = String((index % visibleProjects.length) + 1).padStart(2, "0");

              return (
                <motion.a
                  key={`${project.title}-${index}`}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex w-[82vw] max-w-[320px] sm:w-[320px] md:w-[380px] flex-shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-secondary/30 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-[1]" />
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex h-full w-full flex-col justify-between p-4 sm:p-5 md:p-6 min-h-[340px] sm:min-h-[400px]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">
                        Project {number}
                      </div>
                      <ArrowUpRight size={16} className="sm:size-[18px] text-accent" />
                    </div>

                    <div className="mt-auto space-y-4">
                      <div className="space-y-2">
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-accent/80">Behance</p>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-white">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[11px] sm:text-xs text-subtext backdrop-blur-md">
                          <Heart size={12} className="text-accent sm:size-[13px]" />
                          {project.appreciations} appreciations
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[11px] sm:text-xs text-subtext backdrop-blur-md">
                          <Eye size={12} className="text-accent sm:size-[13px]" />
                          {project.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
