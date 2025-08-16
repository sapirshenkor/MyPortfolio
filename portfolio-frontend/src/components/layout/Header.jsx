"use client";

/**
 * Ultra-Modern Header with Advanced Animations
 *
 * Features:
 * - Particle animation background
 * - 3D hover effects
 * - Neon glow animations
 * - Floating elements
 * - Morphing shapes
 * - Interactive particles
 */

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Sparkles,
  ArrowRight,
  Zap,
  Star,
  Hexagon,
} from "lucide-react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaRocket,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import Button from "../common/Button";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: FaHome,
      color: "from-blue-400 to-cyan-400",
      emoji: "🏠",
    },
    {
      id: "about",
      label: "About",
      icon: FaUser,
      color: "from-purple-400 to-pink-400",
      emoji: "👨‍💻",
    },
    {
      id: "skills",
      label: "Skills",
      icon: FaCode,
      color: "from-yellow-400 to-orange-400",
      emoji: "⚡",
    },
    {
      id: "projects",
      label: "Projects",
      icon: FaProjectDiagram,
      color: "from-green-400 to-emerald-400",
      emoji: "🚀",
    },
    {
      id: "contact",
      label: "Contact",
      icon: FaEnvelope,
      color: "from-red-400 to-pink-400",
      emoji: "💬",
    },
  ];

  // Create floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.documentElement.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Animated Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-30">
        {/* Dynamic Gradient Orbs */}
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.2 - 250}px, ${
              mousePosition.y * 0.1 - 100
            }px) rotate(${mousePosition.x * 0.1}deg)`,
            left: "20%",
            top: "10%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-purple-500/25 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.15}px, ${
              mousePosition.y * -0.2
            }px) rotate(${-mousePosition.x * 0.1}deg)`,
            right: "15%",
            top: "5%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <Hexagon
            className="absolute text-blue-400/20 animate-spin"
            size={60}
            style={{
              left: "10%",
              top: "20%",
              animationDuration: "20s",
              transform: `translate(${mousePosition.x * 0.05}px, ${
                mousePosition.y * 0.03
              }px)`,
            }}
          />
          <Star
            className="absolute text-purple-400/30 animate-pulse"
            size={40}
            style={{
              right: "20%",
              top: "30%",
              animationDelay: "2s",
              transform: `translate(${mousePosition.x * -0.03}px, ${
                mousePosition.y * 0.05
              }px)`,
            }}
          />
          <Zap
            className="absolute text-yellow-400/25 animate-bounce"
            size={35}
            style={{
              left: "70%",
              top: "15%",
              animationDelay: "1s",
              animationDuration: "3s",
            }}
          />
        </div>

        {/* Animated Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: "0 0 6px currentColor",
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8),
              0 0 60px rgba(59, 130, 246, 0.3);
          }
        }
        @keyframes textGlow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(147, 51, 234, 0.8),
              0 0 30px rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>

      <header
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-700 ease-out
          ${
            isScrolled
              ? "bg-slate-900/70 backdrop-blur-2xl border-b border-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-2xl"
              : "bg-transparent"
          }
        `}
        style={{
          background: isScrolled
            ? `linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.9) 100%)`
            : "transparent",
          borderImage: isScrolled
            ? "linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3)) 1"
            : "none",
        }}
      >
        {/* Animated Border */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-all duration-700 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        </div>

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Ultra-Enhanced Logo */}
            <div
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => scrollToSection("home")}
            >
              {/* 3D Logo Container with Neon Effect */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"
                  style={{ animation: "glow 2s ease-in-out infinite" }}
                />

                {/* Main logo */}
                <div className="relative p-4 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl border border-white/20">
                  <FaCode size={28} className="text-white drop-shadow-lg" />
                  <Sparkles
                    className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                </div>
              </div>

              {/* Enhanced Logo Text with Glowing Effect */}
              <div className="flex flex-col">
                <span
                  className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
                  style={{ animation: "textGlow 3s ease-in-out infinite" }}
                >
                  Sapir Shenkor
                </span>
                <div className="flex items-center space-x-5">
                  <span className="text-xs text-gray-400 font-bold tracking-[0.2em] uppercase">
                    Full-Stack Developer
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-semibold animate-pulse">
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Ultra-Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative px-6 py-4 rounded-2xl text-sm font-semibold 
                      transition-all duration-500 group overflow-hidden
                      transform hover:scale-105 hover:-translate-y-1
                      ${
                        activeSection === item.id
                          ? "text-white shadow-2xl"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      filter:
                        activeSection === item.id
                          ? "drop-shadow(0 0 10px rgba(59, 130, 246, 0.7))"
                          : "none",
                    }}
                  >
                    {/* Animated background with gradient */}
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-r ${item.color} 
                      rounded-2xl transition-all duration-500 transform
                      ${
                        activeSection === item.id
                          ? "opacity-20 scale-100 rotate-0"
                          : "opacity-0 scale-90 rotate-2 group-hover:opacity-10 group-hover:scale-100 group-hover:rotate-0"
                      }
                    `}
                    />

                    {/* Glass morphism effect */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Neon glow effect */}
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg 
                      transition-all duration-500 opacity-0 group-hover:opacity-30
                    `}
                    />

                    {/* Content with 3D effect */}
                    <span className="relative flex items-center space-x-3 transform group-hover:scale-110 transition-transform duration-300">
                      <item.icon
                        size={18}
                        className="transform group-hover:rotate-12 transition-transform duration-300"
                      />
                      <span className="tracking-wide">{item.label}</span>
                      <span className="text-sm opacity-60">{item.emoji}</span>
                    </span>

                    {/* Animated underline with glow */}
                    <div
                      className={`
                      absolute bottom-1 left-1/2 h-1 bg-gradient-to-r ${
                        item.color
                      } rounded-full
                      transition-all duration-500 transform -translate-x-1/2
                      ${
                        activeSection === item.id
                          ? "w-4/5 opacity-100 shadow-lg"
                          : "w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-80"
                      }
                    `}
                      style={{
                        boxShadow:
                          activeSection === item.id
                            ? "0 0 20px currentColor"
                            : "none",
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Ultra-Enhanced CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="relative group overflow-hidden shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                style={{ animation: "glow 3s ease-in-out infinite" }}
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />

                <span className="relative flex items-center space-x-3 font-bold tracking-wide">
                  <HiSparkles
                    size={18}
                    className="animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <span>Let's Create Magic</span>
                  <FaRocket
                    size={18}
                    className="group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300"
                  />
                </span>
              </Button>
            </div>

            {/* Ultra-Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 text-gray-300 hover:text-white transition-all duration-500 transform hover:scale-110 hover:rotate-3"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(59, 130, 246, 0.5) rgba(30, 41, 59, 0.3)",
              }}
            >
              <div className="relative transform transition-transform duration-300">
                {isMenuOpen ? (
                  <X size={28} className="animate-spin" />
                ) : (
                  <Menu size={28} className="group-hover:animate-pulse" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 hover:opacity-30 transition-opacity duration-500" />
            </button>
          </div>

          {/* Ultra-Enhanced Mobile Menu */}
          <div
            className={`
              md:hidden absolute top-full left-0 right-0 mt-4 mx-4
              bg-slate-900/80 backdrop-blur-2xl border border-white/20 rounded-3xl
              shadow-2xl overflow-hidden
              transition-all duration-700 ease-out
              max-h-[80vh] overflow-y-auto
              ${
                isMenuOpen
                  ? "opacity-100 transform translate-y-0 scale-100"
                  : "opacity-0 transform -translate-y-8 scale-95 pointer-events-none"
              }
            `}
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)",
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 50px rgba(59, 130, 246, 0.1)",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(59, 130, 246, 0.5) rgba(30, 41, 59, 0.3)",
            }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

            <div className="relative p-8 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    group w-full text-left p-5 rounded-2xl font-semibold text-lg
                    transition-all duration-500 border transform hover:scale-105 hover:-translate-y-1
                    ${
                      activeSection === item.id
                        ? `bg-gradient-to-r ${item.color} bg-opacity-20 text-white border-white/30 shadow-xl`
                        : "text-gray-300 hover:text-white hover:bg-white/5 border-transparent hover:border-white/20"
                    }
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    boxShadow:
                      activeSection === item.id
                        ? "0 10px 30px rgba(0, 0, 0, 0.3)"
                        : "none",
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <item.icon
                      size={22}
                      className="transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
                    />
                    <span className="tracking-wide text-lg">{item.label}</span>
                    <span className="text-lg opacity-70">{item.emoji}</span>
                    <ArrowRight
                      size={20}
                      className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300"
                    />
                  </div>
                </button>
              ))}

              {/* Mobile CTA with animations */}
              <div className="pt-6 border-t border-white/10">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="w-full justify-center shadow-2xl transform hover:scale-105 transition-all duration-500"
                  style={{ animation: "glow 3s ease-in-out infinite" }}
                >
                  <span className="flex items-center space-x-3 font-bold text-lg">
                    <Sparkles size={20} className="animate-spin" />
                    <span>Let's Create Magic</span>
                    <ArrowRight size={20} className="animate-bounce" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
