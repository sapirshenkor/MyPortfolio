"use client";

/**
 * Skills Section Component
 *
 * Showcases technologies with hands-on experience, currently learning,
 * and future goals. Honest approach focused on growth and learning.
 *
 * Features:
 * - Interactive skill cards with hover effects
 * - Experience levels (Learning, Working, Comfortable)
 * - Category organization (Frontend, Backend, Tools)
 * - Animated progress indicators
 * - "Always Learning" mindset
 */

import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Globe,
  Palette,
  Zap,
  BookOpen,
  Target,
  Server,
  Monitor,
  Settings,
  Terminal,
  FileCode,
  Cloud,
  GitBranch,
  Layers,
  Box,
  Coffee,
} from "lucide-react";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaBootstrap,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import AWSIcon from "react-aws-icons/dist/aws/logo/AWS";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("working");
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillsRef = useRef(null);

  // Skills organized by experience level
  const skillCategories = {
    working: {
      title: "Technologies I Work With",
      subtitle: "Hands-on experience building applications",
      color: "text-green-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      skills: [
        {
          category: "Frontend",
          icon: Monitor,
          color: "text-blue-400",
          techs: [
            {
              icon: FaReact,
              name: "React",
              level: "Comfortable",
              description: "Component-based web applications",
            },
            {
              icon: FaJs,
              name: "JavaScript",
              level: "Comfortable",
              description: "ES6+ and DOM manipulation",
            },
            {
              icon: FaHtml5,
              name: "HTML5",
              level: "Comfortable",
              description: "Semantic markup and accessibility",
            },
            {
              icon: FaCss3Alt,
              name: "CSS3",
              level: "Comfortable",
              description: "Responsive design and animations",
            },
            {
              icon: FaBootstrap,
              name: "Bootstrap",
              level: "Working",
              description: "Rapid UI development",
            },
          ],
        },
        {
          category: "Backend",
          icon: Server,
          color: "text-purple-400",
          techs: [
            {
              icon: FaPython,
              name: "Python",
              level: "Comfortable",
              description: "APIs, scripts, and data processing",
            },
            {
              icon: Zap,
              name: "FastAPI",
              level: "Working",
              description: "High-performance REST APIs",
            },
            {
              icon: FaNodeJs,
              name: "Node.js",
              level: "Working",
              description: "JavaScript backend development",
            },
            {
              icon: Server,
              name: "Express",
              level: "Working",
              description: "Web server framework",
            },
            {
              icon: Code,
              name: "ASP.NET MVC",
              level: "Working",
              description: "C# web applications",
            },
            {
              icon: FaJava,
              name: "Java",
              level: "Working",
              description: "Object-oriented programming",
            },
          ],
        },
        {
          category: "Databases",
          icon: Database,
          color: "text-green-400",
          techs: [
            {
              icon: Database,
              name: "PostgreSQL",
              level: "Comfortable",
              description: "Relational database design & PostGIS",
            },
            {
              icon: Database,
              name: "SQL Server",
              level: "Working",
              description: "Enterprise database solutions",
            },
            {
              icon: Database,
              name: "MongoDB",
              level: "Working",
              description: "NoSQL document database",
            },
          ],
        },
        {
          category: "Tools & Development",
          icon: Settings,
          color: "text-orange-400",
          techs: [
            {
              icon: FaGitAlt,
              name: "Git",
              level: "Comfortable",
              description: "Version control and collaboration",
            },
            {
              icon: FileCode,
              name: "Visual Studio",
              level: "Comfortable",
              description: "IDE for .NET development",
            },
            {
              icon: Code,
              name: "VS Code",
              level: "Comfortable",
              description: "Primary code editor",
            },
            {
              icon: Terminal,
              name: "IntelliJ IDEA",
              level: "Working",
              description: "Java development environment",
            },
            {
              icon: FaPython,
              name: "PyCharm",
              level: "Working",
              description: "Python development IDE",
            },
          ],
        },
      ],
    },
    learning: {
      title: "Currently Expanding",
      subtitle: "Deepening knowledge and exploring new areas",
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      skills: [
        {
          category: "Advanced Frontend",
          icon: Zap,
          color: "text-cyan-400",
          techs: [
            {
              icon: FaReact,
              name: "Next.js",
              level: "Learning",
              description: "React framework with SSR",
            },
            {
              icon: Palette,
              name: "Tailwind CSS",
              level: "Learning",
              description: "Utility-first CSS framework",
            },
            {
              icon: Code,
              name: "TypeScript",
              level: "Learning",
              description: "Type-safe JavaScript",
            },
          ],
        },
        {
          category: "DevOps & Deployment",
          icon: Cloud,
          color: "text-purple-400",
          techs: [
            {
              icon: FaDocker,
              name: "Docker",
              level: "Learning",
              description: "Containerization and deployment",
            },
            {
              icon: Cloud,
              name: "Railway",
              level: "Learning",
              description: "Modern deployment platform",
            },
            {
              icon: Globe,
              name: "Vercel",
              level: "Learning",
              description: "Frontend hosting and CI/CD",
            },
          ],
        },
        {
          category: "Methodologies",
          icon: Target,
          color: "text-green-400",
          techs: [
            {
              icon: Settings,
              name: "Agile/Scrum",
              level: "Working",
              description: "Project management methodologies",
            },
            {
              icon: GitBranch,
              name: "CI/CD",
              level: "Learning",
              description: "Automated workflows",
            },
            {
              icon: Server,
              name: "REST API Design",
              level: "Comfortable",
              description: "API architecture and testing",
            },
          ],
        },
      ],
    },
    goals: {
      title: "Future Goals",
      subtitle: "Technologies I want to explore next",
      color: "text-purple-400",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        {
          category: "Advanced Topics",
          icon: Target,
          color: "text-pink-400",
          techs: [
            {
              icon: Box,
              name: "Kubernetes",
              level: "Goal",
              description: "Container orchestration",
            },
            {
              icon: FaAws,
              name: "AWS",
              level: "Goal",
              description: "Cloud infrastructure",
            },
            {
              icon: Layers,
              name: "Redis",
              level: "Goal",
              description: "Caching and real-time features",
            },
            {
              icon: Server,
              name: "GraphQL",
              level: "Goal",
              description: "Modern API query language",
            },
          ],
        },
      ],
    },
  };

  // Level colors and indicators
  const levelConfig = {
    Comfortable: {
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      width: "w-4/5",
    },
    Working: {
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      width: "w-3/5",
    },
    Learning: {
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
      width: "w-2/5",
    },
    Goal: {
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      width: "w-1/5",
    },
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const currentCategory = skillCategories[activeCategory];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-slate-800/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={skillsRef}>
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full mb-4">
            <BookOpen size={16} className="text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">
              Always Learning
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technologies & Experience
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey with modern web technologies - from hands-on experience
            to future goals.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm
                ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.bgColor} border ${category.borderColor} ${category.color} shadow-lg`
                    : "bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-white hover:border-slate-600"
                }
              `}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Content */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {/* Category Header */}
          <div className="text-center mb-12">
            <h3 className={`text-2xl font-bold ${currentCategory.color} mb-2`}>
              {currentCategory.title}
            </h3>
            <p className="text-gray-400">{currentCategory.subtitle}</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCategory.skills.map((skillGroup, groupIndex) => {
              const CategoryIcon = skillGroup.icon;
              return (
                <div
                  key={skillGroup.category}
                  className="space-y-6 animate-slide-up"
                  style={{ animationDelay: `${0.6 + groupIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`p-3 bg-slate-800 rounded-xl border border-slate-700 ${skillGroup.color}`}
                    >
                      <CategoryIcon size={20} />
                    </div>
                    <h4 className="text-xl font-semibold text-white">
                      {skillGroup.category}
                    </h4>
                  </div>

                  {/* Skills in Category */}
                  <div className="space-y-4">
                    {skillGroup.techs.map((tech, techIndex) => {
                      const TechIcon = tech.icon;
                      const levelConfig = {
                        Comfortable: {
                          color: "text-green-400",
                          bgColor: "bg-green-400/10",
                          width: "w-4/5",
                          border: "border-green-400/30",
                        },
                        Working: {
                          color: "text-blue-400",
                          bgColor: "bg-blue-400/10",
                          width: "w-3/5",
                          border: "border-blue-400/30",
                        },
                        Learning: {
                          color: "text-yellow-400",
                          bgColor: "bg-yellow-400/10",
                          width: "w-2/5",
                          border: "border-yellow-400/30",
                        },
                        Goal: {
                          color: "text-purple-400",
                          bgColor: "bg-purple-400/10",
                          width: "w-1/5",
                          border: "border-purple-400/30",
                        },
                      };
                      const config = levelConfig[tech.level];

                      return (
                        <div
                          key={tech.name}
                          className={`group p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${config.bgColor}`}
                          style={{
                            animationDelay: `${0.8 + techIndex * 0.05}s`,
                          }}
                        >
                          {/* Tech Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <TechIcon
                                size={24}
                                className={`${config.color} drop-shadow-lg`}
                              />
                              <span className="font-semibold text-white">
                                {tech.name}
                              </span>
                            </div>
                            <span
                              className={`text-xs px-2 py-1 ${config.bgColor} ${config.color} rounded-full border ${config.border}`}
                            >
                              {tech.level}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-400 text-sm mb-3">
                            {tech.description}
                          </p>

                          {/* Experience Bar */}
                          <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                            <div
                              className={`h-full ${config.color.replace(
                                "text-",
                                "bg-"
                              )} rounded-full transition-all duration-1000 ${
                                hasAnimated ? config.width : "w-0"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8">
            <BookOpen size={32} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              My Learning Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              "I see software development as a journey of constant growth. Each
              project I take on sharpens my skills, each bug I solve deepens my
              understanding, and every new technology I explore expands my
              perspective. I don’t claim to know everything — but I’m driven by
              curiosity, persistence, and a genuine love for building solutions
              that work."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
