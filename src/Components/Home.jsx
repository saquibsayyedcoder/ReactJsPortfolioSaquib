// Home.jsx - Fixed Version
import React, { useEffect, useState, useMemo } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCalendar,
  FaMapMarkerAlt,
  FaEnvelope,
  FaStar,
  FaCodeBranch,
  FaUser
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTypescript, SiDocker, SiPostgresql, SiLinux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import saqibimg from "/img4.jpg";
import { Link } from "react-router-dom";

// Static data
const SOCIALS = [
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1",
    label: "LinkedIn",
    username: "@saquib-arif"
  },
  {
    id: "instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ss.saqib_muhammed",
    label: "Instagram",
    username: "@ss.saqib_muhammed"
  },
  {
    id: "github",
    icon: <FaGithub />,
    href: "https://github.com/saquibsayyedcoder",
    label: "GitHub",
    username: "@saquibsayyedcoder"
  },
];

const TECH_STACK = {
  frontend: [
    { id: "react", icon: <RiReactjsFill />, color: "#61DAFB", name: "React" },
    { id: "nextjs", icon: <RiNextjsFill />, color: "#000000", name: "Next.js" },
    { id: "typescript", icon: <SiTypescript />, color: "#3178C6", name: "TypeScript" },
  ],
  backend: [
    { id: "node", icon: <FaNodeJs />, color: "#339933", name: "Node.js" },
    { id: "express", icon: <SiExpress />, color: "#000000", name: "Express" },
    { id: "mongodb", icon: <DiMongodb />, color: "#47A248", name: "MongoDB" },
    { id: "postgresql", icon: <SiPostgresql />, color: "#336791", name: "PostgreSQL" },
  ],
  devops: [
    { id: "docker", icon: <SiDocker />, color: "#2496ED", name: "Docker" },
    { id: "linux", icon: <SiLinux />, color: "#FCC624", name: "Linux" },
    { id: "git", icon: <FaCodeBranch />, color: "#F05032", name: "Git" },
  ]
};

const TYPED_WORDS = ["Full-Stack Developer", "PERN Stack", "MERN Stack", "Open Source Contributor"];

const REPO_STATS = [
  { label: "Repositories", value: "24+" },
  { label: "Contributions", value: "1.2k+" },
  { label: "Stars Earned", value: "86" },
  { label: "Projects", value: "15+" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");

  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentWord = TYPED_WORDS[wordIndex];
    let timeout;

    if (!isDeleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length);
    } else {
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIndex]);

  const currentShown = useMemo(() => {
    return TYPED_WORDS[wordIndex].substring(0, subIndex);
  }, [wordIndex, subIndex]);

  return (
    <section 
      id="home" 
      name="home" 
      className="min-h-screen bg-gray-900 text-gray-100"
    >
      {/* GitHub-style header */}
      <div className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Header content if needed */}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - GitHub profile style */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-sm"></div>
                  <img
                    src={saqibimg}
                    alt="Saquib Arif Sayyed"
                    className="relative w-40 h-40 rounded-full border-4 border-gray-800 object-cover"
                  />
                </div>
                
                <h1 className="text-2xl font-bold text-white mb-1">Saquib Arif Sayyed</h1>
                <div className="text-gray-400 text-sm mb-2 flex items-center gap-1">
                  <span className="font-mono bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {currentShown}
                    <span className="inline-block w-1 h-4 ml-0.5 bg-purple-400 animate-pulse" />
                  </span>
                </div>
                
                <p className="text-gray-300 text-center text-sm mb-4">
                  Building scalable web applications with PERN & MERN stacks. 
                  Passionate about microservices, clean architecture, and open source.
                </p>
                
                {/* Follow button */}
                <button className="w-full py-2 mb-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm font-medium transition-colors">
                  Follow
                </button>
                
                {/* Profile info */}
                <div className="w-full space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMapMarkerAlt />
                    <span>Mumbai, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaEnvelope />
                    <span>saquib.sayyed@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendar />
                    <span>Joined 2021</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <div className="space-y-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        {social.icon}
                      </span>
                      <div>
                        <div className="text-sm font-medium text-white">{social.label}</div>
                        <div className="text-xs text-gray-400">{social.username}</div>
                      </div>
                    </div>
                    <FaExternalLinkAlt className="text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Repository stats */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h3 className="font-semibold text-white mb-4">Repository Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {REPO_STATS.map((stat) => (
                  <div key={stat.label} className="text-center p-3 bg-gray-900/50 rounded-lg">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            {/* About section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">README.md</h2>
                <span className="px-3 py-1 bg-gray-900 rounded-md text-xs font-mono text-gray-400">
                  Updated recently
                </span>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <h3 className="text-lg font-semibold text-white mb-4">👋 Hello, I'm Saquib!</h3>
                
                <p className="text-gray-300 mb-4">
                  I'm a Full-Stack Developer specializing in <span className="text-blue-400 font-medium">PERN</span> (PostgreSQL, Express, React, Node.js) and <span className="text-green-400 font-medium">MERN</span> (MongoDB, Express, React, Node.js) stacks. With experience in both <span className="text-purple-400 font-medium">monolithic</span> and <span className="text-pink-400 font-medium">microservices</span> architectures, I build scalable and maintainable web applications.
                </p>
                
                <div className="bg-gray-900/50 rounded-lg p-4 my-4 border-l-4 border-blue-500">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-white">Currently:</span> Building full-stack applications with focus on performance optimization and clean code architecture.
                  </p>
                </div>
                
                <h4 className="font-semibold text-white mt-6 mb-3">🔧 Tech Stack & Tools</h4>
                
                {/* Tech category tabs - FIXED VERSION */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {Object.keys(TECH_STACK).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 capitalize z-10 relative ${
                        activeCategory === category
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Tech stack display - FIXED with better visibility */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 min-h-[200px] relative">
                  {TECH_STACK[activeCategory].map((tech) => (
                    <div
                      key={tech.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors duration-200"
                    >
                      <span className="text-2xl" style={{ color: tech.color }}>
                        {tech.icon}
                      </span>
                      <div>
                        <div className="font-medium text-white">{tech.name}</div>
                        <div className="text-xs text-gray-400 capitalize">{activeCategory}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h4 className="font-semibold text-white mt-6 mb-3">🎯 Current Focus</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Building scalable microservices with Docker & Kubernetes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Contributing to open-source projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Mastering system design and architecture patterns
                  </li>
                </ul>
              </div>
            </div>

            {/* Pinned repositories section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-bold text-white mb-6">Pinned Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project 1 */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-700 p-4 hover:border-gray-600 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-white text-lg">E-Commerce Platform</h3>
                    <FaStar className="text-yellow-500" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Full-featured e-commerce platform with MERN stack, payment integration, and admin dashboard.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        React
                      </span>
                      <span className="flex items-center gap-1">
                        <FaStar />
                        24
                      </span>
                    </div>
                    <span>Updated 2 days ago</span>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-gray-900/50 rounded-lg border border-gray-700 p-4 hover:border-gray-600 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-white text-lg">Task Management API</h3>
                    <FaCodeBranch className="text-green-500" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Microservices-based task management system with real-time updates and Redis caching.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        Node.js
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch />
                        8
                      </span>
                    </div>
                    <span>Updated 1 week ago</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm font-medium transition-colors"
                >
                  View all projects
                  <FaArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Contributions graph placeholder */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Contributions</h2>
              <div className="bg-gray-900/50 rounded-lg p-8 text-center border border-gray-700">
                <div className="flex justify-center mb-4">
                  {/* Contribution graph placeholder */}
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 84 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-sm"
                        style={{
                          backgroundColor: `rgba(56, 189, 248, ${Math.random() * 0.8})`
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  <span className="text-blue-400 font-medium">1,248 contributions</span> in the last year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Saquib Arif Sayyed. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Inspired by GitHub's UI • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
  );
}