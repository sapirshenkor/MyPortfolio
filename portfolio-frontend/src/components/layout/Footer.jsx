"use client";

/**
 * Footer Component
 *
 * Modern footer with social links, contact info, and back-to-top functionality.
 * Features gradient backgrounds and smooth animations.
 */

import React from "react";
import { Mail, Heart, ArrowUp, Code } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/sapirshenkor",
      label: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-700",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sapir-shenkor-796b99302",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },

    {
      icon: Mail,
      href: "mailto:sapir000311@gmail.com",
      label: "Email",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500/20",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(147,51,234,0.1),transparent_50%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Code size={24} className="text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Sapir Shenkor
                </span>
                <p className="text-sm text-gray-400">
                  Full-Stack Software engineer
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Hands-on full-stack/Backend development experience. Skilled in
              building robust, scalable applications from concept to deployment.
              Known for problem-solving, independent learning, and teamwork!
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-3 rounded-xl bg-slate-800 border border-slate-700 
                      text-gray-400 transition-all duration-300 
                      hover:scale-110 hover:border-slate-600 
                      ${social.color} ${social.bgColor}
                    `}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">sapir000311@gmail.com</p>
              <p className="text-gray-400">Available for work</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">
                  Currently available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>
              © {currentYear} Sapir-Shenkor-SoftwareEngineer. Made with
            </span>
            <Heart size={16} className="text-red-500 mx-2 animate-pulse" />
            <span>using React & FastAPI</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm group bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-600"
          >
            <span className="mr-2">Back to top</span>
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
