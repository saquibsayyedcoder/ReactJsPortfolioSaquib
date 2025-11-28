// Home.jsx
import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import saqibimg from "/img4.jpg";
import { Link } from "react-router-dom";

const SOCIALS = [
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1",
    hoverClass: "hover:bg-[#0A66C2] hover:text-white",
    color: "#0A66C2"
  },
  {
    id: "instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ss.saqib_muhammed/",
    hoverClass: "hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white",
    color: "#DD2A7B"
  },
  {
    id: "github",
    icon: <FaGithub />,
    href: "https://github.com/saquibsayyedcoder",
    hoverClass: "hover:bg-[#111827] hover:text-white",
    color: "#111827"
  },
];

const TECH = [
  { id: "mongodb", icon: <DiMongodb />, color: "#10B981", name: "MongoDB" },
  { id: "express", icon: <SiExpress />, color: "#F59E0B", name: "Express" },
  { id: "node", icon: <FaNodeJs />, color: "#22C55E", name: "Node.js" },
  { id: "nextjs", icon: <RiNextjsFill />, color: "#0F172A", name: "Next.js" },
  { id: "typescript", icon: <SiTypescript />, color: "#0EA5E9", name: "TypeScript" },
  { id: "react", icon: <RiReactjsFill />, color: "#3B82F6", name: "React" },
];

const TYPED_WORDS = ["Full-Stack Developer", "Problem Solver", "Creative Coder"];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTech, setActiveTech] = useState(null);

  // Mount animation
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentWord = TYPED_WORDS[wordIndex];
    if (!isDeleting && subIndex === currentWord.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pause);
    }
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % TYPED_WORDS.length);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setSubIndex((s) => s + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, wordIndex]);

  const currentShown = TYPED_WORDS[wordIndex].substring(0, subIndex);

  return (
    <section
      id="home"
      name="home"
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen flex items-center overflow-hidden"
    >
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .floaty { animation: floaty 6s ease-in-out infinite; }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #0f172a, #1e1b4b, #0f172a);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .typed-caret {
          width: 3px;
          height: 1.2em;
          background: #8b5cf6;
          display: inline-block;
          margin-left: 6px;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        
        .glow {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Intro Text */}
          <div
            className={`lg:w-1/2 space-y-8 text-center lg:text-left transition-all duration-1000 ease-out transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="transition-all delay-150">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-purple-300 tracking-wider uppercase border border-white/10">
                Welcome to my digital space
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Saquib</span>
              </h1>
              
              <div className="text-2xl md:text-4xl font-bold flex flex-wrap items-baseline justify-center lg:justify-start gap-2 min-h-[3rem]">
                <span className="text-gray-300">I'm a</span>
                <div className="text-purple-400 font-extrabold relative">
                  <span>{currentShown}</span>
                  <span className="typed-caret" aria-hidden />
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              As a full-stack developer experienced in both MERN and PERN ecosystems, I bring end-to-end product development skills — from PostgreSQL schema design to component architecture. My focus on performance, accessibility, and maintainable code ensures applications that scale beautifully and delight users.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/resume" className="group">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300/50 flex items-center gap-2">
                  View My Resume
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              
              <a href="#projects" className="group">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/30">
                  See My Work
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 text-white">Connect with me</h3>
              <div className="flex justify-center lg:justify-start space-x-4">
                {SOCIALS.map((s, idx) => (
                  <a
                    key={s.id}
                    href={s.href.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 ${s.hoverClass}`}
                    style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                    aria-label={s.id}
                  >
                    <span className="text-xl">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile & Tech Stack */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 ease-out transform ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative mb-12 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img
                    src={saqibimg}
                    alt="Saqib"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl floaty transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="w-full max-w-md">
                <h3 className="text-xl font-semibold mb-6 text-center text-white">Tech I Love Working With</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  {TECH.map((t, idx) => (
                    <div
                      key={t.id}
                      className="flex flex-col items-center group cursor-pointer"
                      onMouseEnter={() => setActiveTech(t.id)}
                      onMouseLeave={() => setActiveTech(null)}
                    >
                      <div
                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110 card-hover"
                        style={{
                          transitionDelay: `${idx * 100 + 400}ms`,
                          color: t.color,
                          boxShadow: activeTech === t.id ? `0 0 20px ${t.color}80` : 'none',
                        }}
                        aria-hidden
                      >
                        <span className="text-2xl">{t.icon}</span>
                      </div>
                      <span 
                        className={`mt-2 text-xs font-medium transition-all duration-300 ${
                          activeTech === t.id ? 'opacity-100 scale-100 text-white' : 'opacity-70 scale-95 text-gray-300'
                        }`}
                      >
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-400 animate-bounce">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}