"use client";

/**
 * Projects Section Component
 *
 * Showcases portfolio projects with filtering, detailed cards, and API integration.
 * Features real projects from CV with rich descriptions and tech stacks.
 *
 * Features:
 * - Dynamic project loading from FastAPI backend
 * - Technology filtering and search
 * - Detailed project cards with hover effects
 * - Responsive gallery layout
 * - GitHub and live demo links
 * - Fallback to static CV projects
 */

import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Eye,
  Star,
  Filter,
  Search,
  MapPin,
  Heart,
  ShoppingCart,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPaypal,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiDotnet,
  SiBootstrap,
  SiLeaflet,
  SiOpenstreetmap,
} from "react-icons/si";
import Button from "../common/Button";

// Add this new component after your imports and before the main Projects component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const ProjectIcon = project.icon || Eye;
  const techIcons = {
    Python: FaPython,
    React: FaReact,
    FastAPI: SiFastapi,
    PostgreSQL: SiPostgresql,
    PostGIS: SiPostgresql,
    OpenStreetMap: SiOpenstreetmap,
    Leaflet: SiLeaflet,
    "Node.js": FaNodeJs,
    Express: SiExpress,
    MongoDB: SiMongodb,
    CSS: FaCss3Alt,
    "ASP.NET MVC": SiDotnet,
    "C#": SiDotnet,
    "SQL Server": FaDatabase,
    "Entity Framework": SiDotnet,
    Bootstrap: SiBootstrap,
    "PayPal API": FaPaypal,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header Image */}
          <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
            {project.image_url ? (
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ProjectIcon size={64} className="text-slate-500" />
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Project Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-3 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30">
                  <ProjectIcon size={24} className="text-blue-400" />
                </div>
                {project.featured && (
                  <div className="flex items-center px-3 py-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full">
                    <Star size={14} className="text-yellow-400 mr-1" />
                    <span className="text-xs text-yellow-400 font-medium">
                      Featured Project
                    </span>
                  </div>
                )}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm">
                {project.category?.replace("-", " ").toUpperCase()}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors group"
                >
                  <FaGithub
                    size={18}
                    className="mr-2 group-hover:scale-110 transition-transform"
                  />
                  View Code
                </a>
              )}
            </div>

            {/* Project Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Project Overview
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                {project.detailed_description && (
                  <p className="text-gray-400 leading-relaxed">
                    {project.detailed_description}
                  </p>
                )}
              </div>
            </div>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={highlight}
                      className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(project.tech_stack || []).map((tech) => {
                  const TechIcon = techIcons[tech];
                  return (
                    <div
                      key={tech}
                      className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group"
                    >
                      {TechIcon && (
                        <TechIcon
                          size={20}
                          className="text-blue-400 group-hover:scale-110 transition-transform"
                        />
                      )}
                      <span className="text-gray-300 text-sm font-medium">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Challenges */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Technical Highlights
                </h3>
                <div className="space-y-3">
                  {/* Custom highlights based on project */}
                  {project.id === 1 && (
                    <>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            GIS Integration
                          </h4>
                          <p className="text-gray-400 text-sm">
                            PostGIS for spatial queries and OpenStreetMap data
                            integration
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            Interactive Maps
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Leaflet.js for dynamic map visualization with custom
                            layers
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            API Architecture
                          </h4>
                          <p className="text-gray-400 text-sm">
                            RESTful FastAPI endpoints for real estate data
                            analysis
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {project.id === 2 && (
                    <>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            Child-Centric Design
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Intuitive UI designed specifically for children's
                            interaction patterns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            Secure Sessions
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Session management with parental monitoring
                            capabilities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            Real-time Alerts
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Node.js backend for instant parental notifications
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {project.id === 3 && (
                    <>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            E-commerce Flow
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Complete purchase/rental system with persistent cart
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            Payment Integration
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Secure PayPal API integration for transactions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <h4 className="text-gray-300 font-medium">
                            Role-based Access
                          </h4>
                          <p className="text-gray-400 text-sm">
                            Admin panel with user management and analytics
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Project Stats */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Project Impact
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">
                      {project.tech_stack?.length || 0}+
                    </div>
                    <div className="text-gray-400 text-sm">
                      Technologies Used
                    </div>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">
                      Full-Stack
                    </div>
                    <div className="text-gray-400 text-sm">
                      End-to-End Development
                    </div>
                  </div>
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">
                      Production
                    </div>
                    <div className="text-gray-400 text-sm">
                      Deployment Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const cvProjects = [
    {
      id: 1,
      title: "SmartEstate – GIS-based Real Estate Advisor",
      description:
        "Developed a Python + FastAPI backend with REST API endpoints for property data analysis, integrating OSM (OpenStreetMap) for geospatial data. Built a React frontend using Leaflet to display interactive maps with layered nearby amenities.",
      detailed_description:
        "A comprehensive real estate analysis platform that helps users make informed property decisions using geospatial data and nearby amenities analysis.",
      tech_stack: [
        "Python",
        "React",
        "FastAPI",
        "PostgreSQL",
        "PostGIS",
        "OpenStreetMap",
        "Leaflet",
      ],
      category: "full-stack",
      featured: true,
      github_url: "https://github.com/sapirshenkor/SmartEstate",
      live_url: "https://smartestate-demo.vercel.app",
      image_url:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      highlights: [
        "GIS Integration",
        "Interactive Maps",
        "Real Estate Analytics",
        "Geospatial Queries",
      ],
      icon: MapPin,
    },
    {
      id: 2,
      title: "Emotional Support App for Children",
      description:
        "Built an interactive application with a Node.js + Express backend providing RESTful services for user sessions and parental alerts. Connected to a MongoDB database for data storage and retrieval, and implemented secure API communication with the React frontend.",
      detailed_description:
        "A compassionate application designed to provide emotional support for children with secure parental monitoring and session management.",
      tech_stack: ["React", "Node.js", "Express", "CSS", "MongoDB"],
      category: "full-stack",
      featured: true,
      github_url: "https://github.com/sapirshenkor/MTB",
      live_url: "https://emotional-support-demo.vercel.app",
      image_url:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=300&fit=crop",
      highlights: [
        "Child-Friendly UI",
        "Parental Alerts",
        "Secure Sessions",
        "MongoDB Integration",
      ],
      icon: Heart,
    },
    {
      id: 3,
      title: "Digital Library Website",
      description:
        "Created a .NET MVC platform supporting user authentication, role-based admin management, encrypted password storage, and complete e-commerce flow: book purchases/rentals, persistent shopping cart, and payment integration via PayPal API.",
      detailed_description:
        "A full-featured digital library platform with e-commerce capabilities, user management, and secure payment processing.",
      tech_stack: [
        "ASP.NET MVC",
        "C#",
        "SQL Server",
        "Entity Framework",
        "Bootstrap",
        "PayPal API",
      ],
      category: "backend",
      featured: true,
      github_url: "https://github.com/sapirshenkor/ebook_proj",
      live_url: "https://digital-library-demo.azurewebsites.net",
      image_url:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      highlights: [
        "E-commerce Flow",
        "Payment Integration",
        "Role-based Access",
        "Shopping Cart",
      ],
      icon: ShoppingCart,
    },
  ];

  // Use API projects if available, otherwise use CV projects
  const projects = cvProjects;

  // Technology mapping for icons
  const techIcons = {
    Python: FaPython,
    React: FaReact,
    FastAPI: SiFastapi,
    PostgreSQL: SiPostgresql,
    PostGIS: SiPostgresql,
    OpenStreetMap: SiOpenstreetmap,
    Leaflet: SiLeaflet,
    "Node.js": FaNodeJs,
    Express: SiExpress,
    MongoDB: SiMongodb,
    CSS: FaCss3Alt,
    "ASP.NET MVC": SiDotnet,
    "C#": SiDotnet,
    "SQL Server": FaDatabase,
    "Entity Framework": SiDotnet,
    Bootstrap: SiBootstrap,
    "PayPal API": FaPaypal,
    JavaScript: FaJs,
    HTML: FaHtml5,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
  };

  // Get unique technologies for filtering
  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.tech_stack || [])),
  ];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "all" ||
      (project.category && project.category === selectedFilter) ||
      (project.tech_stack &&
        project.tech_stack.some((tech) =>
          tech.toLowerCase().includes(selectedFilter.toLowerCase())
        ));

    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.tech_stack &&
        project.tech_stack.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        ));

    return matchesFilter && matchesSearch;
  });

  const ProjectCard = ({ project, index }) => {
    const ProjectIcon = project.icon || Eye;

    return (
      <div
        className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-up cursor-pointer"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => openProjectModal(project)}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center px-3 py-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full">
              <Star size={14} className="text-yellow-400 mr-1" />
              <span className="text-xs text-yellow-400 font-medium">
                Featured
              </span>
            </div>
          </div>
        )}

        {/* Project Image */}
        <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-slate-700 to-slate-800">
          {project.image_url ? (
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ProjectIcon size={48} className="text-slate-500" />
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={16} />
              </a>
            )}
          </div>

          {/* Project Icon */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-3 bg-blue-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30">
              <ProjectIcon size={24} className="text-blue-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-md font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(project.tech_stack || []).slice(0, 4).map((tech) => {
              const TechIcon = techIcons[tech];
              return (
                <div
                  key={tech}
                  className="flex items-center space-x-1 px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-md font-medium"
                  title={tech}
                >
                  {TechIcon && <TechIcon size={12} />}
                  <span>{tech}</span>
                </div>
              );
            })}
            {(project.tech_stack || []).length > 4 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{(project.tech_stack || []).length - 4} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group/link"
                >
                  <FaGithub
                    size={16}
                    className="mr-2 group-hover/link:scale-110 transition-transform"
                  />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-4">
            <Eye size={16} className="text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">My Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development, API
            design, and modern technologies.
          </p>
        </div>

        {/* Filters & Search */}
        <div
          className="flex flex-col md:flex-row gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {["all", "full-stack", "backend", "frontend"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 capitalize
                  ${
                    selectedFilter === filter
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-slate-800/50 text-gray-400 border border-slate-700 hover:text-white hover:border-slate-600"
                  }
                `}
              >
                <Filter size={14} className="inline mr-2" />
                {filter.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedFilter("all");
                setSearchTerm("");
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* View All Projects CTA */}
        {filteredProjects.length > 0 && (
          <div
            className="text-center mt-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://github.com/sapirshenkor", "_blank")
              }
              className="group"
            >
              <FaGithub
                size={20}
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              View All Projects on GitHub
            </Button>
          </div>
        )}
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects;
