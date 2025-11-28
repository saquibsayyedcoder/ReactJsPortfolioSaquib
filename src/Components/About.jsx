import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaPalette,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPostgresql, SiTailwindcss, SiRedux, SiPrisma, SiDocker, SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";

/* Data */
const SKILLS = [
  { name: "React.js", level: 90, icon: <RiReactjsFill />, category: "frontend", color: "from-blue-500 to-cyan-500" },
  { name: "Redux / RTK", level: 82, icon: <SiRedux />, category: "frontend", color: "from-purple-500 to-pink-500" },
  { name: "TanStack Query", level: 78, icon: <FaCode />, category: "frontend", color: "from-red-500 to-orange-500" },
  { name: "Node.js / Express", level: 85, icon: <SiExpress />, category: "backend", color: "from-green-500 to-emerald-500" },
  { name: "MongoDB", level: 80, icon: <DiMongodb />, category: "backend", color: "from-green-400 to-teal-500" },
  { name: "PostgreSQL / Prisma", level: 76, icon: <SiPostgresql />, category: "backend", color: "from-blue-600 to-indigo-600" },
  { name: "Tailwind CSS / ShadCN", level: 88, icon: <SiTailwindcss />, category: "frontend", color: "from-cyan-500 to-blue-500" },
  { name: "Linux / Git / Docker", level: 70, icon: <SiDocker />, category: "tools", color: "from-gray-600 to-gray-800" },
];

const SKILL_CATEGORIES = [
  { id: "all", name: "All Skills", icon: <FaTools /> },
  { id: "frontend", name: "Frontend", icon: <FaPalette /> },
  { id: "backend", name: "Backend", icon: <FaServer /> },
  { id: "tools", name: "Tools", icon: <FaDatabase /> },
];

export default function About() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const skillsRef = useRef(null);

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  // Trigger animation when skills section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      name="about"
      className="relative min-h-screen text-white py-16 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/codeimg2.jpg')" }}
    >
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-slide-in {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .skill-bar-fill {
          animation: progressFill 1.5s ease-out forwards;
          animation-delay: var(--animation-delay);
        }
        
        .glow-hover:hover {
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.4);
          transform: translateY(-5px);
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .glass-effect {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-effect-light {
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block mb-4 floating">
            <span className="px-4 py-2 glass-effect-light rounded-full text-sm font-medium text-purple-300 tracking-wider uppercase">
              About Me
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Crafting Digital Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer passionate about building production-ready applications with 
            <span className="text-purple-300 font-semibold"> clean architecture</span>, 
            <span className="text-purple-300 font-semibold"> exceptional UX</span>, and 
            <span className="text-purple-300 font-semibold"> scalable solutions</span>.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Profile & Contact */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <div className="glass-effect rounded-2xl p-8 glow-hover transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                    Professional Profile
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    I'm a full-stack developer specializing in both <span className="text-purple-300 font-semibold">MERN</span> and <span className="text-purple-300 font-semibold">PERN</span> ecosystems. 
                    I transform complex problems into elegant, maintainable solutions — from pixel-perfect frontends 
                    to robust backend services that scale effortlessly.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/projects" 
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-medium hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                    >
                      View My Work
                      <FaExternalLinkAlt className="text-sm" />
                    </Link>
                    <Link 
                      to="/resume" 
                      target="_blank" 
                      className="px-6 py-3 glass-effect-light rounded-xl font-medium hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      View Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div ref={skillsRef} className="glass-effect rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                  Technical Expertise
                </h3>
                
                {/* Skill Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {SKILL_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeCategory === category.id
                          ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                          : "glass-effect-light text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <span className="text-xs">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill, idx) => (
                  <div 
                    key={skill.name} 
                    className="glass-effect-light rounded-xl p-4 transition-all duration-500 hover:bg-white/10 hover:border-white/20 glow-hover"
                    style={{ 
                      animationDelay: `${idx * 100}ms`,
                      animation: skillsVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white`}>
                          {skill.icon}
                        </div>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-purple-300">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} skill-bar-fill`}
                        style={{
                          '--target-width': `${skill.level}%`,
                          '--animation-delay': `${idx * 150}ms`,
                          width: skillsVisible ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies Cloud */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold mb-4 text-gray-300">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React", "TypeScript", "Next.js", "Redux Toolkit", "TanStack Query", 
                    "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "Tailwind CSS", 
                    "ShadCN UI", "Docker", "Git", "Linux", "REST APIs", "GraphQL"
                  ].map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-3 py-2 rounded-lg text-sm glass-effect-light transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10 ${
                        skillsVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transitionDelay: skillsVisible ? `${i * 30}ms` : "0ms",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Quick Facts */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="glass-effect rounded-2xl p-6 glow-hover transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Get In Touch</h3>
                <div className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">
                  Available
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:saquibsayyed12345@gmail.com" 
                  className="flex items-center gap-4 p-3 rounded-xl glass-effect-light hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400 group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-400">saquibsayyed12345@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/saquib-sayyed-62b88b1a1/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl glass-effect-light hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                    <FaLinkedin />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      Connect with me <FaExternalLinkAlt className="text-xs" />
                    </div>
                  </div>
                </a>

                <a 
                  href="https://github.com/saquibsayyedcoder" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl glass-effect-light hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gray-500/20 rounded-lg text-gray-400 group-hover:scale-110 transition-transform">
                    <FaGithub />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      View my code <FaExternalLinkAlt className="text-xs" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 mt-1">
                    <FaBriefcase />
                  </div>
                  <div>
                    <div className="font-semibold">Experience</div>
                    <div className="text-sm text-gray-400">1+ years (Intern → Associate Engineer → Software Engineer)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 mt-1">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-sm text-gray-400">Solapur, Maharashtra (Open to remote)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg text-green-400 mt-1">
                    <FaCode />
                  </div>
                  <div>
                    <div className="font-semibold">Availability</div>
                    <div className="text-sm text-gray-400">Immediate / Notice-based</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
                Education & Certifications
              </h3>
              <div className="space-y-4">
                <div className="p-4 glass-effect-light rounded-xl">
                  <div className="font-semibold flex items-center gap-2">
                    <FaGraduationCap className="text-purple-400" />
                    BCA / MCA
                  </div>
                  <div className="text-sm text-gray-400 mt-1">BHARTI VIDYAPEETH PUNE UNIVERSITY · 2018-2024</div>
                </div>
                <div className="p-4 glass-effect-light rounded-xl">
                  <div className="font-semibold">Full Stack Development</div>
                  <div className="text-sm text-gray-400 mt-1">UDEMY · 2023</div>
                </div>
                <div className="p-4 glass-effect-light rounded-xl">
                  <div className="font-semibold">PostgreSQL & Database Modeling</div>
                  <div className="text-sm text-gray-400 mt-1">Prisma Workshop · 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <footer className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 glass-effect rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold mb-3">Ready to Build Something Amazing?</h4>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm open to freelance & full-time opportunities. Let's connect and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:saquibsayyed12345@gmail.com" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <FaEnvelope />
              Start a Conversation
            </a>
            <a 
              href="/resume" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 glass-effect-light rounded-xl font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              View Full Resume
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}