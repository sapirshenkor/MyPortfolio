"use client";

/**
 * About Section Component
 *
 * Personal story, stats, and professional journey.
 * Features animated counters, timeline, and call-to-action.
 *
 * Features:
 * - Animated statistics counters
 * - Professional timeline
 * - Skills overview
 * - Personal story
 * - Downloadable resume CTA
 */

import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  Users,
  Coffee,
  Award,
  Calendar,
  MapPin,
  Heart,
} from "lucide-react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import Button from "../common/Button";

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    coffee: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRef = useRef(null);

  // Target values for counters
  const targetValues = {
    projects: 5, // Personal/side projects
    experience: 3, // Years learning/coding
    technologies: 10, // Technologies mastered
    coffee: 500, // Cups of coffee
  };

  // Statistics configuration
  const stats = [
    {
      icon: FaCode,
      key: "projects",
      label: "Projects",
      suffix: "+",
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Calendar,
      key: "experience",
      label: "Years Learning",
      suffix: "+",
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Award,
      key: "technologies",
      label: "Technologies",
      suffix: "+",
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Coffee,
      key: "coffee",
      label: "Cups of Coffee",
      suffix: "+",
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  // Learning & Development timeline
  const timeline = [
    {
      icon: FaShieldAlt,
      title: "Classified Role",
      company: "Ministry of Defense",
      period: "2020 - 2022",
      description:
        "Served in a classified position requiring security clearance Level 1. Gained discipline, teamwork, and problem-solving skills in high-responsibility environments.",
      color: "text-red-400",
    },
    {
      icon: FaGraduationCap,
      title: "Academic Studies",
      company: "Sami Shamoon College of Engineering",
      period: "2022 - Present",
      description:
        "Pursuing a B.Sc. in Software Engineering (Data Science Track, GPA 91). Building strong foundations in algorithms, databases, and object-oriented programming.",
      color: "text-blue-400",
    },
    {
      icon: FaCode,
      title: "Hands-On Projects",
      company: "Personal & Academic Work",
      period: "2023 - Present",
      description:
        "Developed multiple full-stack projects, from GIS-based real estate apps to e-commerce systems. Worked with React, FastAPI, Node.js, PostgreSQL, and MongoDB.",
      color: "text-purple-400",
    },
  ];

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animate counters
  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const intervals = {};

    Object.keys(targetValues).forEach((key) => {
      const target = targetValues[key];
      const increment = target / (duration / 50);
      let current = 0;

      intervals[key] = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[key]);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={aboutRef}>
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-4">
            <Heart size={16} className="text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Passion Meets Purpose
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every line of code tells a story. Here's mine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="text-blue-400 font-semibold">
                  full-stack software engineering student
                </span>{" "}
                with a background in the Ministry of Defense, where I developed
                discipline, problem-solving skills, and the ability to perform
                under pressure. Since 2022, I’ve been pursuing my B.Sc. in
                Software Engineering (Data Science track, GPA 91) while building
                real-world projects that challenge me to grow as a developer.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I’ve gained hands-on experience with{" "}
                <span className="text-green-400 font-semibold">FastAPI</span>{" "}
                and
                <span className="text-yellow-400 font-semibold">
                  {" "}
                  Python
                </span>{" "}
                for backend development, building dynamic interfaces with{" "}
                <span className="text-blue-400 font-semibold">React</span>, and
                working with databases like{" "}
                <span className="text-purple-400 font-semibold">
                  PostgreSQL
                </span>{" "}
                and{" "}
                <span className="text-purple-400 font-semibold">MongoDB</span>.
                I’ve also deployed applications using platforms such as Railway
                and Vercel.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Every project I take on pushes me to learn something new — from
                tackling complex algorithms to designing scalable systems. I’m
                curious by nature, always exploring new technologies, reading
                documentation, and building solutions that help me become a
                stronger, more versatile developer.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-700">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300"> Israel</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={18} className="text-purple-400" />
                <span className="text-gray-300">Open to opportunities</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                variant="primary"
                onClick={scrollToContact}
                className="group"
              >
                <Users
                  size={18}
                  className="mr-2 group-hover:scale-110 transition-transform"
                />
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Professional Timeline */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              My Journey
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400" />

              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6 pb-8 last:pb-0"
                  >
                    {/* Timeline Node */}
                    <div
                      className={`relative z-10 p-3 bg-slate-800 border-2 border-slate-600 rounded-xl ${item.color}`}
                    >
                      <IconComponent size={20} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-blue-400 font-medium">
                            {item.company}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-gray-300 text-md  leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.key}
                className="group relative"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={24} className={stat.color} />
                  </div>

                  {/* Counter */}
                  <div className="text-3xl font-bold text-white mb-2">
                    {counters[stat.key]}
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
