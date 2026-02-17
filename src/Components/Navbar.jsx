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
  FiDownload,
  FiBell,
  FiPlus,
  FiSearch,
} from "react-icons/fi";
import { FaChevronDown, FaRegStar } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { id: 1, text: "Overview", path: "#home", icon: <FiHome /> },
  { id: 2, text: "Projects", path: "#projects", icon: <FiBriefcase /> },
  { id: 3, text: "Skills", path: "#skills", icon: <FiCode /> },
  { id: 4, text: "About", path: "#about", icon: <FiUser /> },
  { id: 5, text: "Contact", path: "#contact", icon: <FiMail /> },
];

const notificationCount = 3;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);

      // Update active section
      const sections = navItems.map((item) => item.path.replace("#", ""));
      const current = sections.find((section) => {
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <>
      {/* GitHub-style Navbar */}
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-200
        ${
          isDarkMode
            ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800"
            : "bg-gray-50/95 backdrop-blur-xl border-b border-gray-200"
        }
        ${scrolled ? "shadow-lg" : ""}
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo and Navigation */}
            <div className="flex items-center space-x-4">
              {/* GitHub Logo */}
              <div className="flex items-center space-x-3">
                <FiGithub
                  className={`w-7 h-7 ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
                />
                <div className="hidden md:block">
                  <span
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    /
                  </span>
                  <span
                    className={`ml-2 font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    saquibsayyedcoder
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                    className={`
                      px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                      ${
                        activeSection === item.path.replace("#", "")
                          ? isDarkMode
                            ? "text-white bg-gray-800"
                            : "text-gray-900 bg-gray-200"
                          : isDarkMode
                            ? "text-gray-400 hover:text-white hover:bg-gray-800"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }
                    `}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center space-x-2">
              {/* Mobile Search Button */}
              <button className="md:hidden p-2">
                <FiSearch
                  className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                />
              </button>

              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center space-x-1">
                {/* Notification Bell */}
                <button
                  className={`
                  relative p-2 rounded-md transition-colors duration-200
                  ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }
                `}
                >
                  <FiBell className="w-5 h-5" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium bg-red-500 text-white rounded-full">
                      {notificationCount}
                    </span>
                  )}
                </button>

                {/* Add Button with Dropdown */}
                <div className="relative group">
                  <button
                    className={`
                    flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }
                  `}
                  >
                    <FiPlus className="w-4 h-4" />
                    <FaChevronDown className="w-3 h-3" />
                  </button>
                  <div
                    className={`
                    absolute right-0 top-full mt-2 w-48 py-1 rounded-lg border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
                    ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    }
                  `}
                  >
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm hover:underline ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      New repository
                    </a>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm hover:underline ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      Import repository
                    </a>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-sm hover:underline ${isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`}
                    >
                      New gist
                    </a>
                  </div>
                </div>

                {/* Resume Button */}
                <a
                  href="/resume.pdf"
                  download
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${
                      isDarkMode
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }
                  `}
                >
                  <FiDownload className="w-4 h-4" />
                  <span className="hidden sm:inline">Resume</span>
                </a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`
                  p-2 rounded-md transition-colors duration-200
                  ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }
                `}
              >
                {isDarkMode ? (
                  <FiSun className="w-5 h-5" />
                ) : (
                  <FiMoon className="w-5 h-5" />
                )}
              </button>

              {/* Profile Avatar */}
              <div className="hidden md:flex items-center">
                <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
                  <img
                    src="/saquibNew.jpeg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-gray-700"
                  />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className={`
                  lg:hidden p-2 rounded-md transition-colors duration-200
                  ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }
                `}
                aria-label="Open menu"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - GitHub Style */}
      <div
        className={`
          lg:hidden fixed inset-0 z-50 transition-all duration-200 ease-out
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 transition-all duration-200
            ${
              menuOpen
                ? isDarkMode
                  ? "bg-black/60 backdrop-blur-sm"
                  : "bg-black/40 backdrop-blur-sm"
                : ""
            }
          `}
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`
          relative ml-auto w-80 h-full flex flex-col transition-transform duration-200
          ${
            isDarkMode
              ? "bg-gray-900 border-l border-gray-800"
              : "bg-white border-l border-gray-200"
          }
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          {/* Header */}
          <div
            className={`
            p-4 border-b flex items-center justify-between
            ${isDarkMode ? "border-gray-800" : "border-gray-200"}
          `}
          >
            <div className="flex items-center gap-3">
              <img
                src="/img4.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-700"
              />
              <div>
                <div
                  className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  saquibsayyedcoder
                </div>
                <div
                  className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  Full-Stack Developer
                </div>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className={`
                p-2 rounded-md transition-colors duration-200
                ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }
              `}
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto">
            {/* Search Bar */}
            <div className="p-4 border-b">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search repositories..."
                    className={`
                      w-full pl-9 pr-3 py-2 text-sm rounded-md border
                      ${
                        isDarkMode
                          ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                          : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
                      }
                    `}
                  />
                  <FiSearch
                    className={`
                    absolute left-3 top-1/2 transform -translate-y-1/2
                    ${isDarkMode ? "text-gray-500" : "text-gray-400"}
                  `}
                  />
                </div>
              </form>
            </div>

            {/* Navigation Items */}
            <nav className="p-4">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      onClick={(e) => scrollToSection(e, item.path)}
                      className={`
                        flex items-center gap-3 p-3 rounded-md font-medium transition-colors duration-200
                        ${
                          activeSection === item.path.replace("#", "")
                            ? isDarkMode
                              ? "text-white bg-gray-800"
                              : "text-gray-900 bg-gray-200"
                            : isDarkMode
                              ? "text-gray-400 hover:text-white hover:bg-gray-800"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }
                      `}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="p-4 border-t">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <a
                  href="/resume.pdf"
                  download
                  className={`
                    flex items-center justify-center gap-2 p-3 rounded-md text-sm font-medium transition-colors duration-200
                    ${
                      isDarkMode
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }
                  `}
                >
                  <FiDownload />
                  Resume
                </a>
                <button
                  className={`
                  flex items-center justify-center gap-2 p-3 rounded-md text-sm font-medium transition-colors duration-200
                  ${
                    isDarkMode
                      ? "border border-gray-700 text-gray-300 hover:bg-gray-800"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }
                `}
                >
                  <FaRegStar />
                  Star
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 p-4 border-t">
                <a
                  href="https://github.com/saquibsayyedcoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-md transition-colors duration-200
                    ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }
                  `}
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/saquib-arif-sayyed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-md transition-colors duration-200
                    ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }
                  `}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}

export default Navbar;
