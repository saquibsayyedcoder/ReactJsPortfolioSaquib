// Home.jsx
import React, { useEffect, useState, useMemo } from "react";
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
import saqibimg from "/img4.jpg"; // ✅ optimized WebP
import backgroundImage from "/code2.jpeg"; // ✅ optimized WebP (see note below)
import { Link } from "react-router-dom";

// Predefined static data — already memoized by nature (const)
const SOCIALS = [
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/saquib-arif-sayyed-62b88b1a1",
    hoverClass: "hover:bg-[#0A66C2] hover:text-white",
    color: "#0A66C2",
  },
  {
    id: "instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ss.saqib_muhammed",
    hoverClass: "hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white",
    color: "#DD2A7B",
  },
  {
    id: "github",
    icon: <FaGithub />,
    href: "https://github.com/saquibsayyedcoder",
    hoverClass: "hover:bg-[#111827] hover:text-white",
    color: "#111827",
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

  // Mount effect (only client-side)
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
      suppressHydrationWarning={true}
    >
      {/* Optimized Background */}
      <div 
        className="absolute inset-0 bg-slate-900 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/95 z-10"></div>
        {/* Optional: animated gradient overlay (light) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Intro Text */}
          <div
            className={`lg:w-1/2 space-y-6 text-center lg:text-left transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-purple-300 tracking-wider uppercase border border-white/10">
              Welcome to my digital space
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Saquib
              </span>
            </h1>

            <div className="text-xl md:text-3xl lg:text-4xl font-bold flex items-baseline flex-wrap justify-center lg:justify-start gap-2 min-h-[2.5rem]">
              <span className="text-gray-300">I'm a</span>
              <div className="text-purple-400 font-extrabold relative">
                {currentShown}
                <span
                  className="inline-block w-1 h-5 ml-1 bg-purple-400 animate-pulse"
                  aria-hidden="true"
                ></span>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              As a full-stack developer experienced in MERN and PERN stacks, I build scalable, accessible web applications — from database design to UI/UX implementation. Performance, maintainability, and user delight are at the core of everything I create.
            </p>

            {/* CTA Buttons */}
<div className="flex flex-col xs:flex-row gap-2 sm:gap-3 justify-center lg:justify-start">
  <Link to="/resume" className="group">
    <button
      className="px-4 py-2 w-full xs:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg text-xs sm:text-sm shadow-sm hover:from-purple-700 hover:to-indigo-700 hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 flex items-center justify-center gap-1.5"
      aria-label="View my resume"
    >
      Resume
      <FaArrowRight className="text-[0.75rem] group-hover:translate-x-0.5 transition-transform duration-200" />
    </button>
  </Link>

  <a href="#projects" className="group">
    <button
      className="px-4 py-2 w-full xs:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg text-xs sm:text-sm hover:bg-white/20 hover:border-white/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
      aria-label="See my projects"
    >
      Projects
    </button>
  </a>
</div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-sm md:text-base font-semibold mb-3 text-white">Connect with me</h3>
              <div className="flex justify-center lg:justify-start space-x-3">
                {SOCIALS.map((s, idx) => (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 ${s.hoverClass}`}
                    aria-label={s.id}
                  >
                    <span className="text-lg">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile & Tech Stack */}
          <div
            className={`lg:w-5/12 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-col items-center">
              {/* Profile Image */}
              <div className="relative mb-10 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={saqibimg}
                  alt="Saquib Arif Sayyed"
                  width={320}
                  height={320}
                  loading="eager" // critical image
                  decoding="async"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white/20 shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tech Stack */}
              <div className="w-full max-w-md">
                <h3 className="text-lg md:text-xl font-semibold mb-5 text-center text-white">
                  Tech I Love Working With
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  {TECH.map((t, idx) => (
                    <div
                      key={t.id}
                      className="flex flex-col items-center group cursor-pointer"
                      onMouseEnter={() => setActiveTech(t.id)}
                      onMouseLeave={() => setActiveTech(null)}
                    >
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                        style={{
                          color: t.color,
                          boxShadow:
                            activeTech === t.id
                              ? `0 0 12px ${t.color}66`
                              : "none",
                        }}
                        aria-hidden
                      >
                        <span className="text-xl">{t.icon}</span>
                      </div>
                      <span
                        className={`mt-1 text-[0.65rem] md:text-xs font-medium text-center transition-opacity duration-300 ${
                          activeTech === t.id
                            ? "opacity-100 text-white"
                            : "opacity-60 text-gray-300"
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

      {/* Scroll indicator (only on desktop) */}
      <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs mb-1">Scroll Down</span>
          <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-500 rounded-full mt-1.5 animate-bounce-slow"></div>
          </div>
        </div>
      </div>

      {/* Custom animation for scroll indicator */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
}