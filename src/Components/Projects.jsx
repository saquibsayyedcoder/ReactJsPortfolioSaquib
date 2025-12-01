import React, { useEffect, useState } from "react";
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCode, 
  FaServer, 
  FaDatabase,
  FaRocket,
  FaFilter,
  FaTimes,
  FaEye,
  FaLaptopCode
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const projects = [
  {
    id: "honor",
    title: "HONOR FREELANCE",
    description: "A job search platform built using the MERN stack, with role-based access for recruiters and job seekers, job applications, and admin dashboards.",
    longDescription: "Full-featured job portal with advanced user management, real-time notifications, and comprehensive admin dashboard for managing job postings and applications.",
    image: "/honor.png",
    url: "https://honorfreelance.com/",
    github: null,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux"],
    category: "fullstack",
    featured: true
  },
  {
    id: "aizts",
    title: "AIZTS OFFICIAL WEBSITE",
    description: "Corporate website with CMS integration and responsive UI built with modern web technologies.",
    longDescription: "Official company website featuring content management system, responsive design, and optimized performance for better user engagement.",
    image: "/aizts.png",
    url: "https://aiztsinfotech.com/",
    github: null,
    tech: ["React", "PostgreSQL", "Node.js", "Tailwind CSS", "Express"],
    category: "fullstack",
    featured: true
  },
  {
    id: "tailor",
    title: "TAILOR SHOP MANAGEMENT",
    description: "Full-stack Tailor Shop Management app for handling customers, multi-garment orders with measurements, and worker assignment.",
    longDescription: "Complete tailor shop management system streamlining bespoke tailoring workflows with customer management, order tracking, and financial management.",
    image: "/tailor.jpg",
    url: null,
    github: "https://github.com/yourusername/tailor-shop",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "DaisyUI"],
    category: "fullstack",
    featured: false
  },
  {
    id: "chat",
    title: "REAL-TIME CHAT APPLICATION",
    description: "Real-time chat with one-to-one & group conversations, presence, typing indicators and message history.",
    longDescription: "Advanced chat application featuring real-time messaging, group chats, online status indicators, and message persistence with MongoDB.",
    image: "/chatapp.jpg",
    url: null,
    github: "https://github.com/yourusername/chat-app",
    tech: ["React", "Socket.IO", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    featured: false
  },
  {
    id: "jewel",
    title: "JEWELRY SHOP MANAGEMENT",
    description: "PERN stack application that manages inventory, purchases, sales invoices, and customer profiles with secure admin panel.",
    longDescription: "Comprehensive jewelry shop management system with inventory control, sales tracking, customer management, and secure administrative features.",
    image: "/jewel2.jpg",
    url: null,
    github: "https://github.com/yourusername/jewelry-shop",
    tech: ["React", "PostgreSQL", "Prisma", "Tailwind CSS", "Node.js"],
    category: "fullstack",
    featured: false
  },
  {
    id: "school",
    title: "SCHOOL MANAGEMENT SYSTEM",
    description: "Centralized super-admin system for multi-school management with student/teacher management and fee tracking.",
    longDescription: "Enterprise-grade school management system supporting multiple institutions with comprehensive student, teacher, and financial management features.",
    image: "/school.jpg",
    url: null,
    github: "https://github.com/yourusername/school-management",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma", "DaisyUI"],
    category: "fullstack",
    featured: false
  },
  {
    id: "bookstore",
    title: "BOOK STORE (MERN)",
    description: "Full-stack bookstore application with JWT-based authentication, cart management, and order processing.",
    longDescription: "Modern e-commerce bookstore with user authentication, shopping cart functionality, order management, and admin dashboard for inventory control.",
    image: "/bookstore.jpg",
    url: null,
    github: "https://github.com/yourusername/bookstore",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    category: "fullstack",
    featured: false
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: <FaLaptopCode />, count: projects.length },
  { id: "fullstack", name: "Full Stack", icon: <FaCode />, count: projects.filter(p => p.category === "fullstack").length },
  { id: "featured", name: "Featured", icon: <FaRocket />, count: projects.filter(p => p.featured).length },
];

const ProjectCard = ({ project, index, onOpen, isDarkMode }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`
        relative group cursor-pointer rounded-3xl overflow-hidden border-2
        transition-all duration-500
        ${isDarkMode 
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-purple-500/50' 
          : 'bg-gradient-to-br from-white to-gray-50/50 border-gray-200/50 hover:border-purple-400/50'
        }
        hover:shadow-2xl
      `}
      onClick={() => onOpen(project)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Tech Stack Overlay */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={`
                  px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm
                  ${isDarkMode 
                    ? 'bg-white/20 text-white' 
                    : 'bg-black/20 text-white'
                  }
                `}
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className={`
                px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm
                ${isDarkMode 
                  ? 'bg-white/20 text-white' 
                  : 'bg-black/20 text-white'
                }
              `}>
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`
          text-xl font-bold mb-3 line-clamp-2
          ${isDarkMode ? 'text-white' : 'text-gray-900'}
        `}>
          {project.title}
        </h3>

        <p className={`
          text-sm leading-relaxed mb-4 line-clamp-3
          ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}
        `}>
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className={`
              flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300
              ${isDarkMode
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-purple-500 text-white hover:bg-purple-600'
              }
            `}>
              <FaEye className="text-xs" />
              View Details
            </button>
          </div>

          <div className="flex items-center gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`
                  p-2 rounded-lg transition-all duration-300 hover:scale-110
                  ${isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`
                  p-2 rounded-lg transition-all duration-300 hover:scale-110
                  ${isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
                aria-label="Source Code"
              >
                <FaGithub className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  );
};

const ProjectModal = ({ project, onClose, isDarkMode }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`
          relative max-w-4xl w-full rounded-3xl overflow-hidden
          ${isDarkMode 
            ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
            : 'bg-gradient-to-br from-white to-gray-50'
          }
          shadow-2xl border-2
          ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`
            absolute top-4 right-4 z-10 p-3 rounded-xl transition-all duration-300 hover:scale-110
            ${isDarkMode
              ? 'bg-white/10 text-white hover:bg-white/20' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 lg:h-full min-h-[400px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                  ⭐ Featured Project
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <h2 className={`
              text-2xl lg:text-3xl font-bold mb-4
              ${isDarkMode ? 'text-white' : 'text-gray-900'}
            `}>
              {project.title}
            </h2>

            <p className={`
              text-lg leading-relaxed mb-6
              ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}
            `}>
              {project.longDescription || project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className={`
                text-sm font-semibold mb-3 uppercase tracking-wider
                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
              `}>
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`
                      px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300
                      ${isDarkMode
                        ? 'bg-white/10 text-white hover:bg-white/20' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                    bg-gradient-to-r from-purple-600 to-pink-600 text-white
                    hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-1
                  `}
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </a>
              ) : (
                <span className={`
                  px-6 py-3 rounded-xl text-center
                  ${isDarkMode ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'}
                `}>
                  Demo Coming Soon
                </span>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                    ${isDarkMode
                      ? 'bg-white/10 text-white hover:bg-white/20' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                    transform hover:-translate-y-1
                  `}
                >
                  <FaGithub />
                  Source Code
                </a>
              ) : (
                <span className={`
                  px-6 py-3 rounded-xl text-center
                  ${isDarkMode ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'}
                `}>
                  Private Repository
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return project.featured;
    return project.category === activeCategory;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section 
      id="projects" 
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDarkMode ? (
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className={`
              px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase border transition-colors duration-300
              ${isDarkMode 
                ? 'bg-white/10 backdrop-blur-sm text-purple-300 border-white/10' 
                : 'bg-purple-100 text-purple-700 border-purple-200'
              }`}
            >
              My Portfolio
            </span>
          </div>
          <h1 className={`text-4xl md:text-6xl font-sans bg-clip-text text-transparent bg-gradient-to-r mb-4 ${
            isDarkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
          }`}>
            Featured Projects
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A collection of production-ready applications and innovative solutions built with modern technologies
          </p>
        </motion.header>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform -translate-y-1'
                  : isDarkMode 
                    ? 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:transform hover:-translate-y-1 border border-white/10'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:transform hover:-translate-y-1 border border-gray-200 shadow-sm'
                }
              `}
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id 
                  ? 'bg-white/20' 
                  : isDarkMode ? 'bg-black/20' : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
                isDarkMode={isDarkMode}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className={`
                group relative
                inline-flex items-center justify-center
                px-8 py-4 rounded-xl
                font-semibold text-base
                transition-all duration-300 transform hover:-translate-y-1
                ${isDarkMode
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/25'
                }
              `}
            >
              <span className="flex items-center gap-2">
                {showAll ? "Show Less" : "Load More Projects"}
                <FaRocket className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </span>
            </button>
          </motion.div>
        )}

  
      
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </section>
  );
}