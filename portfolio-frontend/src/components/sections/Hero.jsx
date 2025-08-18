"use client";

/**
 * Hero Section Component
 *
 * The landing section with stunning animations, personal branding,
 * and call-to-action buttons. First impression for visitors.
 *
 * Features:
 * - Animated background with particles and geometric shapes
 * - Typewriter effect for dynamic text
 * - 3D hover effects on profile image
 * - Floating tech stack badges
 * - Smooth scroll call-to-actions
 * - Mouse-reactive background elements
 */

import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Download, Mail } from "lucide-react";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaRocket,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiPostgresql,
  SiVercel,
  SiRailway,
} from "react-icons/si";
import Button from "../common/Button";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Dynamic text rotation
  const dynamicTexts = [
    "Full Stack Developer",
    "Backend Developer",
    "Continuous Learner",
    "Python Enthusiast",
    "Problem Solver",
  ];

  // Tech stack for floating badges
  const techStack = [
    { icon: FaPython, name: "Python", color: "text-yellow-400", delay: 0 },
    { icon: SiFastapi, name: "FastAPI", color: "text-green-400", delay: 0.2 },
    { icon: FaReact, name: "React", color: "text-blue-400", delay: 0.4 },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white", delay: 0.6 },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "text-cyan-400",
      delay: 0.8,
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      color: "text-blue-300",
      delay: 1.0,
    },
    { icon: SiRailway, name: "Railway", color: "text-purple-400", delay: 1.2 },
    { icon: SiVercel, name: "Vercel", color: "text-gray-300", delay: 1.4 },
  ];

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll functions
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToProjects = () => scrollToSection("projects");
  const scrollToContact = () => scrollToSection("contact");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Gradient Orbs */}
        <div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.3 - 300}px, ${
              mousePosition.y * 0.2 - 100
            }px) rotate(${mousePosition.x * 0.1}deg)`,
            left: "10%",
            top: "20%",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-purple-500/15 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.2}px, ${
              mousePosition.y * -0.3
            }px) rotate(${-mousePosition.x * 0.05}deg)`,
            right: "10%",
            top: "10%",
            animation: "float 12s ease-in-out infinite reverse",
          }}
        />

        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-30">
          {[
            { left: 15, top: 20, delay: 0, duration: 2.5 },
            { left: 85, top: 15, delay: 0.5, duration: 3.2 },
            { left: 25, top: 70, delay: 1, duration: 2.8 },
            { left: 75, top: 85, delay: 1.5, duration: 3.5 },
            { left: 45, top: 35, delay: 2, duration: 2.2 },
            { left: 65, top: 55, delay: 2.5, duration: 3.8 },
            { left: 35, top: 90, delay: 3, duration: 2.7 },
            { left: 55, top: 10, delay: 3.5, duration: 3.1 },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(3deg);
          }
        }
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
        .typewriter {
          overflow: hidden;
          border-right: 2px solid #3b82f6;
          white-space: nowrap;
          animation: typewriter 2s steps(20) forwards, blink 1s infinite;
        }
      `}</style>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Content Layout - Side by side on larger screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Text Content - Left side on large screens */}
          <div className="flex-1 text-center lg:text-left lg:order-1 order-2">
            {/* Main Heading */}
            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Greeting */}
              <div className="text-xl md:text-2xl text-gray-300 font-light">
                <span
                  className="inline-block animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  👋
                </span>
                <span className="ml-2">Hello, I'm</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Sapir Shenkor
                </span>
              </h1>

              {/* Dynamic Role */}
              <div className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-300 h-12 lg:h-16 flex items-center justify-center lg:justify-start">
                <span
                  className={`typewriter ${isTyping ? "typing" : ""}`}
                  key={currentText}
                >
                  {dynamicTexts[currentText]}
                </span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about crafting exceptional digital experiences with{" "}
                <span className="text-blue-400 font-semibold">
                  modern technologies
                </span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">
                  clean code
                </span>
                . Let's build something amazing together!
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-8 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                className="group relative overflow-hidden shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500"
              >
                <span className="relative flex items-center space-x-3 font-bold text-lg">
                  <FaRocket
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300"
                  />
                  <span>View My Work</span>
                  <ChevronDown
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300"
                  />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="group shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500"
              >
                <span className="flex items-center space-x-3 font-bold text-lg">
                  <Mail
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <span>Let's Connect</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center lg:justify-start space-x-6 mt-8 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/sapirshenkor",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/sapir-shenkor-796b99302",
                  label: "LinkedIn",
                },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image - Right side on large screens, moved down on mobile */}
          <div
            className="flex-shrink-0 animate-fade-in lg:order-2 order-1 mt-8 lg:mt-0"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative inline-block group">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Main profile container */}
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                <img
                  src="/images/profilePhoto.jpg"
                  alt="Sapir Shenkor - Full Stack Developer"
                  className="w-full h-full object-cover rounded-3xl transition-all duration-500"
                  style={{
                    objectPosition: "50% 30%",
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback icon (hidden by default) */}
                <div
                  className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <FaCode size={80} className="text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Floating particles around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-80" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-60" />
            </div>
          </div>
        </div>

        {/* Floating Tech Stack - Full width below main content */}
        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-medium text-center">
            Powered by
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group relative"
                  style={{ animationDelay: `${tech.delay}s` }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tech badge */}
                  <div className="relative flex items-center space-x-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                    <IconComponent
                      size={20}
                      className={`${tech.color} drop-shadow-lg`}
                    />
                    <span className="text-gray-300 font-medium text-sm">
                      {tech.name}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Scroll to explore
          </span>
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
