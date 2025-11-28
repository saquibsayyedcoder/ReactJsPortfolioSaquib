import React, { useEffect, useRef, useState } from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaPalette, 
  FaServer, 
  FaTools,
  FaRocket,
  FaStar,
  FaLayerGroup,
  FaSearch
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
  { name: 'PostgreSQL/Prisma ORM', icon: '/hathi.png', type: 'Database', proficiency: 75 },
  { name: 'Java', icon: '/java.png', type: 'Backend', proficiency: 70 },
];

const skillCategories = [
  { id: 'all', name: 'All Skills', icon: <FaLayerGroup />, count: skills.length },
  { id: 'Frontend', name: 'Frontend', icon: <FaPalette />, count: skills.filter(s => s.type === 'Frontend').length },
  { id: 'Backend', name: 'Backend', icon: <FaServer />, count: skills.filter(s => s.type === 'Backend').length },
  { id: 'Database', name: 'Database', icon: <FaDatabase />, count: skills.filter(s => s.type === 'Database').length },
  { id: 'Tool', name: 'Tools', icon: <FaTools />, count: skills.filter(s => s.type === 'Tool').length },
];

// Color schemes for both dark and light modes
const typeColors = {
  Frontend: { 
    gradient: 'from-purple-500 to-pink-500',
    dark: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-300' },
    light: { bg: 'bg-purple-100', border: 'border-purple-200', text: 'text-purple-700' }
  },
  Backend: { 
    gradient: 'from-blue-500 to-cyan-500',
    dark: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-300' },
    light: { bg: 'bg-blue-100', border: 'border-blue-200', text: 'text-blue-700' }
  },
  Database: { 
    gradient: 'from-green-500 to-emerald-500',
    dark: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-300' },
    light: { bg: 'bg-green-100', border: 'border-green-200', text: 'text-green-700' }
  },
  Tool: { 
    gradient: 'from-orange-500 to-red-500',
    dark: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-300' },
    light: { bg: 'bg-orange-100', border: 'border-orange-200', text: 'text-orange-700' }
  },
};

function getSkillDesc(name) {
  const map = {
    HTML: 'Semantic markup and accessible HTML5 structure',
    CSS: 'Modern CSS, responsive layouts and animations',
    'Tailwind CSS': 'Utility-first styling, responsive design',
    JavaScript: 'ES6+, DOM, async/await, and modern patterns',
    'React.js': 'Component design, hooks, state management',
    Redux: 'App-level state management and middleware patterns',
    'TanStack Query': 'Server state management and caching',
    'shadcn UI': 'Composable UI primitives and design consistency',
    'Material UI': 'Component library for quick, accessible UIs',
    'DaisyUI': 'Tailwind plugin for component-ready classes',
    'Node.js': 'Server-side JS, event-driven architecture',
    'Express.js': 'REST APIs, middleware, route handling',
    MongoDB: 'NoSQL modeling, aggregation pipelines',
    PostgreSQL: 'Relational modeling and SQL optimization',
    GitHub: 'Version control, PRs, branching workflows',
    Java: 'OOP, backend fundamentals and JVM ecosystem',
  };
  return map[name] ?? 'Experienced with this technology';
}

export default function SkillCard({ isDarkMode = true }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRef = useRef(null);

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.type === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         skill.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const getProficiencyStars = (proficiency) => {
    const stars = [];
    const filledStars = Math.floor(proficiency / 20);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-sm ${
            i < filledStars 
              ? 'text-yellow-400 fill-current' 
              : isDarkMode ? 'text-gray-600' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  const getTypeColors = (type) => {
    const colors = typeColors[type] || typeColors.Frontend;
    return {
      gradient: colors.gradient,
      ...colors[isDarkMode ? 'dark' : 'light']
    };
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`min-h-screen py-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50'
      }`}
      aria-label="Skills section"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.6); }
        }
        
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
        
        .skill-card:hover .skill-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .glowing {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDarkMode ? (
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </>
        ) : (
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 floating">
            <span className={`px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase border transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-white/10 backdrop-blur-sm text-purple-300 border-white/10' 
                : 'bg-purple-100 text-purple-700 border-purple-200'
            }`}>
              Technical Expertise
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r mb-4 ${
            isDarkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'
          }`}>
            My Skill Set
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies and tools I use to build performant web applications and exceptional user experiences
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className={`flex-1 relative ${
            isDarkMode 
              ? 'bg-white/5 backdrop-blur-sm border-white/10' 
              : 'bg-white border-gray-200 shadow-sm'
          } rounded-2xl border p-2`}>
            <div className="flex items-center gap-3 px-4">
              <FaSearch className={`text-lg ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`flex-1 py-4 bg-transparent outline-none text-lg placeholder-${
                  isDarkMode ? 'gray-400' : 'gray-500'
                }`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className={`p-2 rounded-lg ${
                    isDarkMode 
                      ? 'hover:bg-white/10 text-gray-400' 
                      : 'hover:bg-gray-100 text-gray-500'
                  }`}
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => {
              const colors = getTypeColors(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 group ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg transform -translate-y-1`
                      : isDarkMode 
                        ? 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 hover:transform hover:-translate-y-1 border border-white/10'
                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:transform hover:-translate-y-1 border border-gray-200 shadow-sm'
                  }`}
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
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const colors = getTypeColors(skill.type);
            return (
              <div
                key={skill.name}
                className={`relative group skill-card rounded-2xl border p-6 transition-all duration-500 transform-gpu
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${
                    isDarkMode 
                      ? 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20' 
                      : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                  }`}
                style={{ 
                  animationDelay: isVisible ? `${index * 80}ms` : '0ms',
                  animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                {/* Skill Icon */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center skill-icon transition-transform duration-300`}>
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span className="hidden text-white font-bold text-lg">
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Proficiency Indicator */}
                  <div className={`absolute -top-2 -right-2 rounded-full p-1 border ${
                    isDarkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-gray-200 shadow-sm'
                  }`}>
                    <div className="flex gap-0.5">
                      {getProficiencyStars(skill.proficiency)}
                    </div>
                  </div>
                </div>

                {/* Skill Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.bg} ${colors.border} ${colors.text}`}>
                      {skill.type}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {getSkillDesc(skill.name)}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-600'}>Proficiency</span>
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-700'}>{skill.proficiency}%</span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      isDarkMode ? 'bg-white/10' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          transitionDelay: isVisible ? `${index * 100 + 500}ms` : '0ms'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                
                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${colors.border} rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${colors.border} rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${colors.border} rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${colors.border} rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className={`text-center py-16 rounded-2xl ${
            isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
          } border`}>
            <div className={`text-6xl mb-4 ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              🔍
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              No skills found
            </h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillCategories.slice(1).map((category, index) => {
            const colors = getTypeColors(category.id);
            return (
              <div 
                key={category.id}
                className={`rounded-2xl border p-6 text-center transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10' 
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 200 + 1000}ms` : '0ms',
                  animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center mx-auto mb-3`}>
                  {category.icon}
                </div>
                <div className={`text-2xl font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{category.count}</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{category.name} Skills</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border ${
            isDarkMode 
              ? 'bg-white/10 backdrop-blur-sm border-white/10 text-gray-300' 
              : 'bg-gray-50 border-gray-200 text-gray-700'
          }`}>
            <FaRocket className={isDarkMode ? "text-purple-400" : "text-purple-600"} />
            <span>Ready to bring your ideas to life with these technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}