// src/components/sections/Contact.jsx
"use client";

/**
 * Contact Section Component
 *
 * Professional contact form with FastAPI backend integration.
 * Features form validation, success/error handling, and contact information.
 *
 * Features:
 * - Working contact form connected to FastAPI backend
 * - Real-time form validation
 * - Success/error message handling
 * - Contact information display
 * - Social media links
 * - Professional styling with animations
 */

import React, { useState } from "react";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  Heart,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContactForm } from "../../hooks/useContactForm";
import Button from "../common/Button";
import StatusMessage from "../common/StatusMessage";

const Contact = () => {
  const { formdata, status, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com",
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: MapPin,
      title: "Location",
      value: " Israel",
      link: null,
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      link: null,
      color: "text-purple-400",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-700/20",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-slate-800/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full mb-4">
            <Heart size={16} className="text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.title}
                    className="group relative animate-slide-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Background Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Card */}
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${info.bgColor} rounded-xl border border-slate-600`}
                        >
                          <IconComponent size={24} className={info.color} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className={`${info.color} hover:text-white transition-colors`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-400">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl 
                        text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1
                        hover:border-slate-600/50 ${social.color} ${social.bgColor}
                      `}
                      aria-label={social.name}
                    >
                      <IconComponent
                        size={24}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <h4 className="font-semibold text-white mb-3">Quick Response</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  Usually responds within 24 hours
                </div>

                <div className="flex items-center text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                  Open to collaboration opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              {/* Status Message */}
              {status.message && (
                <div className="mb-6 animate-fade-in">
                  <StatusMessage type={status.type} message={status.message} />
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formdata.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-slate-500"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-slate-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formdata.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-vertical hover:border-slate-500"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formdata.message.length}/2000
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full group shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send
                        size={18}
                        className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Form Info */}
                <p className="text-gray-500 text-xs text-center">
                  Your message will be sent directly to my inbox. I'll get back
                  to you as soon as possible!
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8">
            <Mail size={32} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Prefer Email?</h3>
            <p className="text-gray-300 mb-4">
              You can also reach me directly at{" "}
              <a
                href="mailto:sapir000311@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
              >
                sapir000311@gmail.com
              </a>
            </p>
            <Button
              variant="outline"
              onClick={() =>
                window.open("mailto:sapir000311@gmail.com", "_blank")
              }
              className="group"
            >
              <Mail
                size={18}
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              Open Email Client
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
