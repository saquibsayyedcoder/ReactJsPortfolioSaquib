import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiSun,
  FiMoon,
  FiX,
  FiGithub,
  FiLinkedin,
  FiDownload
} from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { id: 1, text: "Home", path: "#home", icon: <FiHome /> },
  { id: 2, text: "About", path: "#about", icon: <FiUser /> },
  { id: 3, text: "Skills", path: "#skills", icon: <FiCode /> },
  { id: 4, text: "Projects", path: "#projects", icon: <FiBriefcase /> },
  { id: 5, text: "Contact", path: "#contact", icon: <FiMail /> },
];

const socialLinks = [
  { icon: <FiGithub />, href: "https://github.com/saquibsayyedcoder", label: "GitHub" },
  { icon: <FiLinkedin />, href: "https://linkedin.com/in/saquib-arif-sayyed", label: "LinkedIn" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme } = useTheme();

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
      
      // Update active section
      const sections = navItems.map(item => item.path.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const scrollToSection = (e, path) => {
    e.preventDefault();
    const id = path.replace("#", "");
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollTop = elementTop - offset;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Modern Navbar */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled 
          ? isDarkMode 
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-slate-800' 
            : 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-gray-200/50 border-b border-gray-100'
          : isDarkMode
            ? 'bg-transparent'
            : 'bg-transparent'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className={`
                relative group cursor-pointer
                ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}
              `}>
                <div className={`
                  w-12 h-12 rounded-2xl border-2 transition-all duration-500
                  ${isDarkMode 
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-pink-500/20' 
                    : 'border-purple-400 bg-gradient-to-br from-purple-100 to-pink-100'
                  }
                  group-hover:scale-110 group-hover:rotate-3
                `}>
                  <img
                    src="/img4.jpg"
                    alt="Saquib"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <div className={`
                  absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                  opacity-0 group-hover:opacity-20 blur transition-opacity duration-500
                `} />
              </div>
              
              <div className="flex flex-col">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "#home")}
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  SAQUIB
                </a>
                <p className={`
                  text-sm transition-colors duration-300
                  ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}
                  ${scrolled ? 'opacity-100' : 'opacity-0'}
                `}>
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <div className={`
                flex items-center space-x-1 px-4 py-2 rounded-2xl transition-all duration-500
                ${isDarkMode 
                  ? 'bg-slate-800/50 border border-slate-700/50' 
                  : 'bg-gray-100/80 border border-gray-200/50'
                }
              `}>
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                    className={`
                      relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                      ${activeSection === item.path.replace('#', '')
                        ? isDarkMode
                          ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                          : 'text-gray-900 bg-gradient-to-r from-purple-100 to-pink-100'
                        : isDarkMode
                          ? 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                      }
                    `}
                  >
                    {item.text}
                    {activeSection === item.path.replace('#', '') && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Social Links */}
              <div className="hidden md:flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 rounded-xl transition-all duration-300 transform hover:scale-110
                      ${isDarkMode
                        ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }
                    `}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Resume Download */}
           
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`
                  p-3 rounded-xl transition-all duration-500 transform hover:scale-110
                  ${isDarkMode
                    ? 'text-yellow-400 hover:bg-slate-800 hover:text-yellow-300'
                    : 'text-orange-500 hover:bg-gray-100 hover:text-orange-600'
                  }
                `}
              >
                {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className={`
                  lg:hidden p-3 rounded-xl transition-all duration-300
                  ${isDarkMode
                    ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu */}
      <div
        className={`
          lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-out
          ${menuOpen 
            ? "opacity-100 visible" 
            : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        {/* Backdrop with blur */}
        <div
          className={`
            absolute inset-0 transition-all duration-500
            ${menuOpen 
              ? isDarkMode 
                ? 'bg-black/60 backdrop-blur-xl' 
                : 'bg-white/60 backdrop-blur-xl'
              : ''
            }
          `}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div className={`
          relative ml-auto w-80 sm:w-96 h-full flex flex-col transition-transform duration-500
          ${isDarkMode 
            ? 'bg-slate-900 border-l border-slate-800' 
            : 'bg-white border-l border-gray-200'
          }
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          {/* Header */}
          <div className={`
            p-6 border-b transition-colors duration-300
            ${isDarkMode ? 'border-slate-800' : 'border-gray-200'}
          `}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`
                  w-10 h-10 rounded-xl border-2
                  ${isDarkMode 
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-pink-500/20' 
                    : 'border-purple-400 bg-gradient-to-br from-purple-100 to-pink-100'
                  }
                `}>
                  <img
                    src="/img4.jpg"
                    alt="Saquib"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  SAQUIB
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className={`
                  p-2 rounded-xl transition-all duration-300
                  ${isDarkMode
                    ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                    className={`
                      flex items-center gap-4 p-4 rounded-xl font-medium transition-all duration-300 group
                      ${activeSection === item.path.replace('#', '')
                        ? isDarkMode
                          ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                          : 'text-gray-900 bg-gradient-to-r from-purple-100 to-pink-100'
                        : isDarkMode
                          ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }
                    `}
                  >
                    <span className={`
                      text-xl transition-transform duration-300
                      ${activeSection === item.path.replace('#', '')
                        ? 'scale-110'
                        : 'group-hover:scale-110'
                      }
                    `}>
                      {item.icon}
                    </span>
                    <span className={`
                      transition-transform duration-300
                      ${activeSection === item.path.replace('#', '')
                        ? 'translate-x-1'
                        : 'group-hover:translate-x-1'
                      }
                    `}>
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Section */}
          <div className={`
            p-6 border-t space-y-4
            ${isDarkMode ? 'border-slate-800' : 'border-gray-200'}
          `}>
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-3 rounded-xl transition-all duration-300 transform hover:scale-110
                    ${isDarkMode
                      ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }
                  `}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <a
                href="/resume.pdf"
                download
                className={`
                  flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-all duration-300
                  ${isDarkMode
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                  }
                  transform hover:-translate-y-0.5
                `}
              >
                <FiDownload className="text-sm" />
                Download Resume
              </a>
              
              <button
                onClick={toggleTheme}
                className={`
                  flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium transition-all duration-300
                  ${isDarkMode
                    ? 'border border-slate-700 text-gray-300 hover:bg-slate-800 hover:text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
                Switch to {isDarkMode ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}

export default Navbar;