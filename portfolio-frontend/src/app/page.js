"use client";
import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { useScrollSpy } from "../hooks/useScrollSpy";
import Button from "../components/common/Button";

export default function Home() {
  // Simulate active section for testing
  const activeSection = useScrollSpy([
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header Component */}
      <Header activeSection={activeSection} />

      {/* Test Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
