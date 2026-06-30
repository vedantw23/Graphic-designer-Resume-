"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const ProjectsShowcase = dynamic(() => import("@/components/TechStack"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex min-h-screen flex-col overflow-x-hidden pb-24 md:pb-32">
        <Hero />
        <About />
        <ProjectsShowcase />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
