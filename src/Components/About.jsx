import React, { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiPostgresql, SiTailwindcss, SiRedux, SiDocker, SiExpress } from "react-icons/si";

/* Data - Simplified */
const SKILLS = [
  { name: "React.js", level: 90, icon: <RiReactjsFill />, category: "frontend" },
  { name: "Redux / RTK", level: 82, icon: <SiRedux />, category: "frontend" },
  { name: "Node.js / Express", level: 85, icon: <SiExpress />, category: "backend" },
  { name: "MongoDB", level: 80, icon: <DiMongodb />, category: "backend" },
  { name: "PostgreSQL", level: 76, icon: <SiPostgresql />, category: "backend" },
  { name: "Tailwind CSS", level: 88, icon: <SiTailwindcss />, category: "frontend" },
  { name: "Docker & Git", level: 70, icon: <SiDocker />, category: "tools" },
];

const SKILL_CATEGORIES = [
  { id: "all", name: "All", icon: <FaCode /> },
  { id: "frontend", name: "Frontend", icon: <RiReactjsFill /> },
  { id: "backend", name: "Backend", icon: <SiExpress /> },
  { id: "tools", name: "Tools", icon: <SiDocker /> },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState("all");
  const skillsRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  // Simplified intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative min-h-screen text-white py-12 bg-gray-900">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header - Simplified */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full text-sm font-medium text-purple-300 border border-purple-500/30">
              About Me
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building modern web applications with React, Node.js, and scalable databases.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-4">Professional Profile</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in both MERN and PERN stacks, creating full-stack applications 
                with clean architecture and excellent user experience. Passionate about 
                solving complex problems with elegant solutions.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View Projects
                </a>
                <a
                  href="/resume"
                  target="_blank"
                  className="px-5 py-2.5 bg-gray-700/50 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  View Resume
                </a>
              </div>
            </div>

            {/* Skills Section */}
            <div 
              ref={skillsRef} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold">Technical Skills</h3>
                
                {/* Category Filters - Simplified */}
                <div className="flex flex-wrap gap-2">
                  {SKILL_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-1.5 ${
                        activeCategory === category.id
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <span className="text-xs">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSkills.map((skill, idx) => (
                  <div 
                    key={skill.name} 
                    className={`bg-gray-900/50 rounded-xl p-4 transition-all duration-300 hover:border-purple-500/50 border border-gray-700/50 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: inView ? `${idx * 50}ms` : '0ms' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400">
                          {skill.icon}
                        </div>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-purple-300">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: inView ? `${idx * 100}ms` : '0ms'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <h4 className="text-lg font-semibold mb-3 text-gray-300">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React", "TypeScript", "Node.js", "Express", "MongoDB", 
                    "PostgreSQL", "Tailwind", "Docker", "Git", "REST APIs"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-900/70 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              
              <div className="space-y-3">
                <a 
                  href="mailto:saquibsayyed12345@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors"
                >
                  <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-gray-400 truncate">saquibsayyed12345@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/saquib-sayyed-62b88b1a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors"
                >
                  <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                    <FaLinkedin />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-gray-400">Connect with me</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/saquibsayyedcoder"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 transition-colors"
                >
                  <div className="p-2 bg-gray-600/20 rounded-lg text-gray-300">
                    <FaGithub />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-gray-400">View my code</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400">
                    <FaBriefcase />
                  </div>
                  <div>
                    <div className="font-medium">Experience</div>
                    <div className="text-sm text-gray-400">1+ years in software development</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <div className="font-medium">Education</div>
                    <div className="text-sm text-gray-400">BCA/MCA from BVDU Pune</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-600/20 rounded-lg text-green-400">
                    <FaCode />
                  </div>
                  <div>
                    <div className="font-medium">Status</div>
                    <div className="text-sm text-gray-400">Open to opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Simplified */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-500/30">
          <h4 className="text-2xl font-bold mb-3">Let's Build Together</h4>
          <p className="text-gray-300 mb-6">
            Open to freelance and full-time opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="mailto:saquibsayyed12345@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a 
              href="/resume"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-800/50 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}