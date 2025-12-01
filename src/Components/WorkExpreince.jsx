import React from "react";
import { 
  FaBuilding, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaTasks, 
  FaRocket,
  FaCode,
  FaDatabase,
  FaMobile,
  FaUsers,
  FaExternalLinkAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const workExperience = [
  {
    id: 1,
    role: "Software Engineer",
    companyName: "AIZTS INFOTECH PVT LTD",
    startDate: "Aug 2024",
    endDate: "Present",
    location: "Remote / Office",
    tech: ["React.js", "MERN", "PostgreSQL", "Prisma", "Tailwind", "ShadCN UI", "Redux", "TanStack Query"],
    description: [
      "Delivered responsive, user-focused web applications for job portal, education, and jewelry e-commerce domains.",
      "Built clean, scalable UI using React.js, MERN stack, PostgreSQL, Prisma, Tailwind CSS, and ShadCN UI.",
      "Integrated APIs, optimized data flow, and ensured smooth frontend–backend communication.",
      "Managed application state with Redux Toolkit and TanStack React Query for improved performance.",
      "Enhanced UI/UX and cross-platform compatibility, ensuring mobile-first responsiveness.",
      "Collaborated with cross-functional teams using Git, GitHub, Docker, Linux, and Postman.",
    ],
    gradient: "from-purple-500 to-pink-500",
    icon: <FaRocket />,
    achievements: 6,
    projects: 3
  },
  {
    id: 2,
    role: "Intern",
    companyName: "AIZTS Infotech PVT LTD",
    startDate: "May 2024",
    endDate: "Aug 2024",
    location: "Pathruth Chowk, Solapur, Maharashtra",
    tech: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "PostgreSQL", "Git"],
    description: [
      "Developed and maintained responsive web interfaces using modern frontend technologies.",
      "Managed and optimized PostgreSQL and MongoDB databases.",
      "Integrated APIs to enhance frontend-backend communication.",
      "Used Git for version control and collaborated in teams to improve user experience and performance.",
    ],
    gradient: "from-blue-500 to-cyan-500",
    icon: <FaCode />,
    achievements: 4,
    projects: 2
  },
];

const stats = [
  { label: "Total Experience", value: "1+ Years", icon: <FaCalendarAlt /> },
  { label: "Projects Delivered", value: "5+", icon: <FaTasks /> },
  { label: "Technologies", value: "15+", icon: <FaCode /> },
  { label: "Team Collaboration", value: "100%", icon: <FaUsers /> },
];

const TechPill = ({ tech, jobId, index, isDarkMode }) => (
  <span
    key={`${jobId}-${index}`}
    className={`
      text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105
      ${isDarkMode 
        ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
      }
    `}
  >
    {tech}
  </span>
);

const ExperienceCard = ({ job, index, isDarkMode }) => {
  const period = `${job.startDate} — ${job.endDate}`;
  const isOngoing = job.endDate === "Present";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className={`
        relative group overflow-hidden rounded-3xl border-2 transition-all duration-500
        ${isDarkMode 
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-slate-600/50' 
          : 'bg-gradient-to-br from-white to-gray-50/50 border-gray-200/50 hover:border-gray-300/50'
        }
        hover:shadow-2xl
      `}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Main Content */}
      <div className="relative p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
          {/* Company Info */}
          <div className="flex items-start gap-4 flex-1">
            {/* Icon */}
            <div className={`
              w-16 h-16 rounded-2xl flex items-center justify-center text-white
              bg-gradient-to-r ${job.gradient} shadow-lg
            `}>
              {job.icon}
            </div>
            
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h3 className={`
                text-xl md:text-2xl font-bold mb-2
                ${isDarkMode ? 'text-white' : 'text-gray-900'}
              `}>
                {job.role}
              </h3>
              
              <div className={`
                text-lg md:text-xl font-semibold mb-3
                bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent
              `}>
                {job.companyName}
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3">
                <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FaCalendarAlt className="text-purple-500" />
                  <span>{period}</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex lg:flex-col items-center lg:items-end gap-4">
            <div className={`
              px-4 py-2 rounded-full text-sm font-semibold
              ${isOngoing 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                : 'bg-gray-200 text-gray-700'
              }
            `}>
              {isOngoing ? "🚀 Ongoing" : "Completed"}
            </div>
            
            <Link
              to="/contact"
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105
                ${isDarkMode
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              Contact <FaExternalLinkAlt className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className={`
            text-sm font-semibold mb-3 uppercase tracking-wider
            ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
          `}>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {job.tech.map((tech, idx) => (
              <TechPill 
                key={`${job.id}-${idx}`} 
                tech={tech} 
                jobId={job.id} 
                index={idx}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>

        {/* Description & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Achievements */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                <FaTasks className="text-purple-500 text-lg" />
              </div>
              <h4 className={`
                text-lg font-semibold
                ${isDarkMode ? 'text-white' : 'text-gray-900'}
              `}>
                Key Achievements
              </h4>
            </div>

            <ul className="space-y-3">
              {job.description.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.1 }}
                  className={`
                    flex items-start gap-3 text-sm leading-relaxed
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}
                  `}
                >
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${job.gradient}`} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Stats Sidebar */}
          <div className={`
            rounded-2xl p-6 space-y-6
            ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-100/50'}
          `}>
            {/* Quick Stats */}
            <div>
              <h5 className={`
                text-sm font-semibold mb-4 uppercase tracking-wider
                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
              `}>
                Role Impact
              </h5>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Achievements</span>
                    <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{job.achievements}</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}>
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${job.gradient}`}
                      style={{ width: `${(job.achievements / 6) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Projects</span>
                    <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{job.projects}</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}>
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${job.gradient}`}
                      style={{ width: `${(job.projects / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/projects"
              className={`
                w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105
                bg-gradient-to-r ${job.gradient} text-white shadow-lg hover:shadow-xl
              `}
            >
              View Projects <FaExternalLinkAlt className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function WorkExperience() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="experience"
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50'
      }`}
      aria-labelledby="experience-heading"
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
              Professional Journey
            </span>
          </div>
          <h1 
            id="experience-heading"
            className={`text-4xl md:text-6xl font-sans bg-clip-text text-transparent bg-gradient-to-r mb-4 ${
              isDarkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
            }`}
          >
            Work Experience
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Crafting digital excellence through carefully engineered solutions and production-ready applications
          </p>
        </motion.header>

        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                rounded-2xl p-6 text-center transition-all duration-500 transform hover:scale-105
                ${isDarkMode 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                }
              `}
            >
              <div className={`text-2xl mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                {stat.icon}
              </div>
              <div className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <ExperienceCard 
              key={job.id} 
              job={job} 
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`
            text-center mt-16 p-8 rounded-3xl border-2
            ${isDarkMode 
              ? 'bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/20' 
              : 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200'
            }
          `}
        >
          <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ready to Build Something Amazing?
          </h3>
          <p className={`text-lg mb-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start a Project <FaRocket />
            </a>
            <a
              href="#projects"
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 ${
                isDarkMode 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              View My Work <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}