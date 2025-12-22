import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaPalette, 
  FaServer, 
  FaTools,
  FaRocket,
  FaStar,
  FaLayerGroup,
  FaSearch,
  FaBolt,
  FaCheckCircle
} from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: '/html.png', type: 'Frontend', proficiency: 95 },
  { name: 'CSS', icon: '/css.jpg', type: 'Frontend', proficiency: 90 },
  { name: 'Tailwind CSS', icon: '/tailwindcss.png', type: 'Frontend', proficiency: 88 },
  { name: 'JavaScript', icon: '/javascript.jpg', type: 'Frontend', proficiency: 92 },
  { name: 'React.js', icon: '/reactjs.png', type: 'Frontend', proficiency: 90 },
  { name: 'Redux', icon: '/redux.png', type: 'Tool', proficiency: 85 },
  { name: 'TanStack Query', icon: '/tanstack.jpeg', type: 'Tool', proficiency: 80 },
  { name: 'shadcn UI', icon: '/shadcn.png', type: 'Tool', proficiency: 85 },
  { name: 'Material UI', icon: '/material.png', type: 'Tool', proficiency: 82 },
  { name: 'DaisyUI', icon: '/daisyUI1.png', type: 'Tool', proficiency: 78 },
  { name: 'GitHub', icon: '/github.png', type: 'Tool', proficiency: 88 },
  { name: 'Node.js', icon: '/node.png', type: 'Backend', proficiency: 85 },
  { name: 'Express.js', icon: '/express.png', type: 'Backend', proficiency: 83 },
  { name: 'MongoDB', icon: '/mongodb.jpg', type: 'Database', proficiency: 80 },
  { name: 'PostgreSQL', icon: '/hathi.png', type: 'Database', proficiency: 75 },
  { name: 'Java', icon: '/java.png', type: 'Backend', proficiency: 70 },
];

const skillCategories = [
  { id: 'all', name: 'All Skills', icon: <FaLayerGroup />, count: skills.length },
  { id: 'Frontend', name: 'Frontend', icon: <FaPalette />, count: skills.filter(s => s.type === 'Frontend').length },
  { id: 'Backend', name: 'Backend', icon: <FaServer />, count: skills.filter(s => s.type === 'Backend').length },
  { id: 'Database', name: 'Database', icon: <FaDatabase />, count: skills.filter(s => s.type === 'Database').length },
  { id: 'Tool', name: 'Tools', icon: <FaTools />, count: skills.filter(s => s.type === 'Tool').length },
];

const typeColors = {
  Frontend: { 
    gradient: 'from-purple-500 via-violet-500 to-pink-500',
    bg: 'bg-gradient-to-br from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    icon: 'text-purple-400',
    glow: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]'
  },
  Backend: { 
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    icon: 'text-blue-400',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]'
  },
  Database: { 
    gradient: 'from-emerald-500 via-green-500 to-lime-500',
    bg: 'bg-gradient-to-br from-emerald-500/20 to-green-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    icon: 'text-emerald-400',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]'
  },
  Tool: { 
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    bg: 'bg-gradient-to-br from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    icon: 'text-amber-400',
    glow: 'shadow-[0_0_20px_rgba(245,158,11,0.3)]'
  },
};

const skillDescriptions = {
  HTML: 'Semantic markup and accessible HTML5 structure',
  CSS: 'Modern CSS, responsive layouts and animations',
  'Tailwind CSS': 'Utility-first styling with responsive design',
  JavaScript: 'ES6+, modern patterns and async programming',
  'React.js': 'Component architecture with hooks and state',
  Redux: 'Global state management and middleware',
  'TanStack Query': 'Server state and caching management',
  'shadcn UI': 'Composable UI with design consistency',
  'Material UI': 'Component library for rapid development',
  DaisyUI: 'Tailwind plugin with component classes',
  'Node.js': 'Server-side JavaScript runtime',
  'Express.js': 'REST APIs and middleware architecture',
  MongoDB: 'NoSQL database with aggregation pipelines',
  PostgreSQL: 'Relational database with SQL optimization',
  GitHub: 'Version control and collaboration workflows',
  Java: 'Object-oriented backend development',
};

// High-performance background image URLs (choose one)
const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80', // Space/tech
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80', // Tech/gradient
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80', // Network/circuits
  '/tech-bg.jpg', // Use your local optimized image
];

export default function SkillCard({ isDarkMode = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [bgLoaded, setBgLoaded] = useState(false);
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = BACKGROUND_IMAGES[0];
    img.onload = () => setBgLoaded(true);
  }, []);

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesCategory = activeCategory === 'all' || skill.type === activeCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.type.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getProficiencyStars = useCallback((proficiency) => {
    const filledStars = Math.floor(proficiency / 20);
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`text-xs transition-all duration-300 ${
          i < filledStars 
            ? 'text-yellow-400 fill-current scale-110' 
            : 'text-gray-600 fill-gray-600/30'
        }`}
      />
    ));
  }, []);

  const getTypeColors = useCallback((type) => {
    return typeColors[type] || typeColors.Frontend;
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-16 overflow-hidden"
      aria-label="Technical Skills"
    >
      {/* Beautiful Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          ref={bgImageRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGES[0]})`,
            opacity: bgLoaded ? 1 : 0,
          }}
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48ZyBvcGFjaXR5PSIwLjA1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3MCAxNjBINTMwVjIzMEg0NzBWMzAwSDUzMFYzNzBINDcwVjQ0MEg1MzBWNTMwSDQ3MFY2MjBINTMwVjY5MEg0NzBWNzcwSDUzMFY4NzBINDcwVjk0MEg1MzBWMTAwMEg0NzBWNjYwSDUzMFY1NzBINDcwVjUwMEg1MzBWNDMwSDQ3MFYzNjBINTMwVjMwMEg0NzBWMjMwSDUzMFYxNjBINDcwWiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-pulse">
            <FaBolt className="text-yellow-400" />
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              Tech Stack Mastery
            </span>
            <FaCheckCircle className="text-green-400 ml-2" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Cutting-edge technologies I wield to build exceptional digital experiences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-8">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
              <div className="relative flex items-center">
                <FaSearch className="absolute left-5 text-gray-400 text-lg z-10" />
                <input
                  type="text"
                  placeholder="Search technologies by name or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-12 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 text-gray-400 hover:text-white transition-colors text-xl"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => {
              const colors = getTypeColors(category.id);
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-500 flex items-center gap-3 border backdrop-blur-sm overflow-hidden ${
                    isActive
                      ? `${colors.glow} scale-105 border-transparent`
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-20`} />
                  )}
                  <span className={`relative text-lg transition-transform duration-300 group-hover:scale-125 ${
                    isActive ? 'text-white' : colors.icon
                  }`}>
                    {category.icon}
                  </span>
                  <span className="relative text-white font-semibold">{category.name}</span>
                  <span className={`relative px-2.5 py-1 rounded-full text-xs font-bold ${
                    isActive ? 'bg-white/30 text-white' : 'bg-black/40 text-gray-300'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredSkills.map((skill, index) => {
            const colors = getTypeColors(skill.type);
            
            return (
              <div
                key={skill.name}
                className={`group relative backdrop-blur-lg border rounded-2xl p-6 transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } hover:-translate-y-3 hover:shadow-2xl bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 border-white/20 hover:border-white/30`}
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                {/* Skill Icon with Glow */}
                <div className="relative mb-5">
                  <div className={`absolute inset-0 ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center`}>
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className="hidden w-10 h-10 flex items-center justify-center text-white font-bold text-lg">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Proficiency Stars */}
                  <div className="absolute -top-2 -right-2 bg-gray-900/90 backdrop-blur-sm rounded-full p-2.5 border border-white/10 shadow-lg">
                    <div className="flex gap-1">
                      {getProficiencyStars(skill.proficiency)}
                    </div>
                  </div>
                </div>

                {/* Skill Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {skill.name}
                    </h3>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${colors.bg} ${colors.border} ${colors.text} border`}>
                      {skill.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed min-h-[3rem]">
                    {skillDescriptions[skill.name] || 'Expert-level proficiency'}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">Mastery Level</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{skill.proficiency}%</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out ${
                          isVisible ? 'w-full' : 'w-0'
                        }`}
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${colors.border} rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${colors.border} rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-24 backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl mb-16">
            <div className="text-7xl mb-6 text-gray-500">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-3">No technologies found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search criteria or select a different category
            </p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillCategories.slice(1).map((category, index) => {
            const colors = getTypeColors(category.id);
            return (
              <div
                key={category.id}
                className={`backdrop-blur-lg border rounded-2xl p-6 text-center transition-all duration-700 transform hover:-translate-y-2 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } bg-gradient-to-br from-white/5 to-transparent border-white/20 hover:border-white/30`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border mb-4`}>
                  {React.cloneElement(category.icon, { className: `text-xl ${colors.icon}` })}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{category.count}</div>
                <div className="text-gray-400 font-medium">{category.name} Skills</div>
                <div className="mt-3 text-xs text-gray-500">Expertise Level</div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-xl border-2 border-white/20 hover:border-purple-500/50 transition-all duration-500 group hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            <FaRocket className="text-purple-400 text-xl animate-bounce group-hover:animate-spin" />
            <span className="text-white text-lg font-bold">
              Let's Build Something Amazing Together
            </span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <p className="text-gray-400 mt-6 text-sm">
            • Proficient in {skills.length} technologies • Always learning new tools •
          </p>
        </div>
      </div>

      {/* Performance optimized styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Optimize image rendering */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `}</style>
    </section>
  );
}