"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { resume } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />
          <p className="text-lg text-subtext max-w-3xl leading-relaxed">
            {resume.about}
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="education"
            className="scroll-mt-28 md:scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-accent" size={28} />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {resume.education.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm hover:border-white/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.degree}</h4>
                      <div className="text-md font-medium text-accent mb-2">{item.focus}</div>
                      <p className="text-sm text-subtext">{item.school}</p>
                    </div>
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 w-max">
                      {item.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
            id="experience"
            className="scroll-mt-28 md:scroll-mt-32"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-accent" size={28} />
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {resume.experience.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-secondary group-hover:bg-accent group-hover:border-accent text-white group-hover:text-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
                    <div className="w-3 h-3 bg-white group-hover:bg-background rounded-full transition-colors duration-300" />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm group-hover:border-accent/30 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,212,0,0.05)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="text-xl font-bold text-white">{item.role}</h4>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">{item.period}</span>
                    </div>
                    <div className="text-md font-medium text-white/70 mb-4">{item.company}</div>
                    <ul className="space-y-3 text-subtext text-sm leading-relaxed">
                      {item.responsibilities.map((responsibility, responsibilityIdx) => (
                        <li key={responsibilityIdx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
