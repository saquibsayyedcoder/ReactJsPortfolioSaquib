import React, { useState } from "react";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaRegStar,
  FaEye
} from "react-icons/fa";
import {
  DiMongodb,
  DiNodejs,
  DiReact
} from "react-icons/di";
import {
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiDocker,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiGit
} from "react-icons/si";

const skills = [
  { 
    name: 'React.js', 
    icon: <DiReact />, 
    type: 'Frontend', 
    proficiency: 90,
    description: 'Component architecture with hooks and state management',
    language: 'JavaScript',
    stars: 124,
    lastUsed: '2024-06'
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript />, 
    type: 'Frontend', 
    proficiency: 85,
    description: 'Type-safe JavaScript for scalable applications',
    language: 'TypeScript',
    stars: 98,
    lastUsed: '2024-06'
  },
  { 
    name: 'Next.js', 
    icon: <SiNextdotjs />, 
    type: 'Frontend', 
    proficiency: 88,
    description: 'React framework with SSR and static generation',
    language: 'JavaScript',
    stars: 156,
    lastUsed: '2024-06'
  },
  { 
    name: 'Tailwind CSS', 
    icon: <SiTailwindcss />, 
    type: 'Frontend', 
    proficiency: 88,
    description: 'Utility-first CSS framework',
    language: 'CSS',
    stars: 89,
    lastUsed: '2024-06'
  },
  { 
    name: 'JavaScript', 
    icon: <SiJavascript />, 
    type: 'Frontend', 
    proficiency: 92,
    description: 'Modern ES6+ and async programming',
    language: 'JavaScript',
    stars: 210,
    lastUsed: '2024-06'
  },
  { 
    name: 'Redux', 
    icon: <SiRedux />, 
    type: 'Tool', 
    proficiency: 85,
    description: 'Predictable state container for JavaScript apps',
    language: 'JavaScript',
    stars: 76,
    lastUsed: '2024-05'
  },
  { 
    name: 'Node.js', 
    icon: <DiNodejs />, 
    type: 'Backend', 
    proficiency: 85,
    description: 'Server-side JavaScript runtime',
    language: 'JavaScript',
    stars: 145,
    lastUsed: '2024-06'
  },
  { 
    name: 'Express.js', 
    icon: <SiExpress />, 
    type: 'Backend', 
    proficiency: 83,
    description: 'Fast, unopinionated web framework for Node.js',
    language: 'JavaScript',
    stars: 112,
    lastUsed: '2024-06'
  },
  { 
    name: 'MongoDB', 
    icon: <DiMongodb />, 
    type: 'Database', 
    proficiency: 80,
    description: 'NoSQL database with aggregation pipelines',
    language: 'JavaScript',
    stars: 92,
    lastUsed: '2024-06'
  },
  { 
    name: 'PostgreSQL', 
    icon: <SiPostgresql />, 
    type: 'Database', 
    proficiency: 75,
    description: 'Powerful, open-source object-relational database',
    language: 'SQL',
    stars: 68,
    lastUsed: '2024-05'
  },
  { 
    name: 'Docker', 
    icon: <SiDocker />, 
    type: 'DevOps', 
    proficiency: 70,
    description: 'Containerization platform for applications',
    language: 'YAML',
    stars: 84,
    lastUsed: '2024-05'
  },
  { 
    name: 'Git', 
    icon: <SiGit />, 
    type: 'Tool', 
    proficiency: 88,
    description: 'Distributed version control system',
    language: 'Git',
    stars: 102,
    lastUsed: '2024-06'
  },
  { 
    name: 'Java', 

    type: 'Backend', 
    proficiency: 70,
    description: 'Object-oriented programming language',
    language: 'Java',
    stars: 45,
    lastUsed: '2024-04'
  }
];

const skillCategories = [
  { id: 'all', name: 'All Skills', icon: <FaCode />, count: skills.length },
  { id: 'Frontend', name: 'Frontend', icon: <FaCode />, count: skills.filter(s => s.type === 'Frontend').length },
  { id: 'Backend', name: 'Backend', icon: <FaServer />, count: skills.filter(s => s.type === 'Backend').length },
  { id: 'Database', name: 'Database', icon: <FaDatabase />, count: skills.filter(s => s.type === 'Database').length },
  { id: 'DevOps', name: 'DevOps', icon: <FaTools />, count: skills.filter(s => s.type === 'DevOps').length },
  { id: 'Tool', name: 'Tools', icon: <FaTools />, count: skills.filter(s => s.type === 'Tool').length },
];

const languageColors = {
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'CSS': '#1572B6',
  'SQL': '#E38C00',
  'YAML': '#CB171E',
  'Git': '#F05032',
  'Java': '#007396'
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('proficiency');
  const [showFilters, setShowFilters] = useState(false);

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.type === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'stars':
        return b.stars - a.stars;
      case 'lastUsed':
        return new Date(b.lastUsed) - new Date(a.lastUsed);
      default:
        return b.proficiency - a.proficiency;
    }
  });

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 85) return 'text-green-400';
    if (proficiency >= 75) return 'text-blue-400';
    if (proficiency >= 60) return 'text-yellow-400';
    return 'text-gray-400';
  };

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 85) return 'Expert';
    if (proficiency >= 75) return 'Advanced';
    if (proficiency >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Skills & Technologies</h1>
          <p className="text-gray-400 mt-2">My technical expertise and proficiency levels</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-sm hover:bg-gray-800 transition-colors"
              >
                <FaFilter />
                Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="proficiency">Sort by Proficiency</option>
                <option value="name">Sort by Name</option>
                <option value="stars">Sort by Stars</option>
                <option value="lastUsed">Sort by Last Used</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className={`mt-4 transition-all duration-200 ${showFilters ? 'block' : 'hidden'}`}>
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className="text-xs">{category.icon}</span>
                  {category.name}
                  <span className="text-xs bg-black/30 px-2 py-0.5 rounded">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-5 hover:border-gray-600 transition-colors group"
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-900 text-xl" style={{ color: languageColors[skill.language] || '#6B7280' }}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="px-2 py-1 bg-gray-900 rounded">{skill.type}</span>
                      <div className="flex items-center gap-1">
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: languageColors[skill.language] || '#6B7280' }}
                        />
                        {skill.language}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-700 rounded">
                  <FaRegStar className="text-gray-400 hover:text-yellow-400" />
                </button>
              </div>

              {/* Skill Description */}
              <p className="text-sm text-gray-300 mb-4">
                {skill.description}
              </p>

              {/* Skill Stats */}
              <div className="space-y-3">
                {/* Proficiency */}
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${getProficiencyColor(skill.proficiency)}`}>
                        {getProficiencyLabel(skill.proficiency)}
                      </span>
                      <span className="font-bold text-white">{skill.proficiency}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${skill.proficiency}%`,
                        background: `linear-gradient(90deg, ${skill.proficiency >= 85 ? '#10B981' : skill.proficiency >= 75 ? '#3B82F6' : '#F59E0B'}, ${skill.proficiency >= 85 ? '#34D399' : skill.proficiency >= 75 ? '#60A5FA' : '#FBBF24'})`
                      }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between text-xs text-gray-400 pt-2 border-t border-gray-700">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      {skill.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch />
                      {Math.floor(skill.stars / 3)}
                    </span>
                  </div>
                  <span>Last used: {skill.lastUsed}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">
                  <FaEye />
                  View Projects
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-5xl mb-4 text-gray-600">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No skills found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Stats Summary */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Skill Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategories.slice(1).map((category) => (
              <div key={category.id} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{category.count}</div>
                <div className="text-gray-400 text-sm">{category.name}</div>
                <div className="mt-2 text-xs text-gray-500">
                  {Math.round((category.count / skills.length) * 100)}% of total
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language Breakdown */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
          <h2 className="text-xl font-bold mb-6">Language Breakdown</h2>
          <div className="space-y-4">
            {Object.entries(
              skills.reduce((acc, skill) => {
                acc[skill.language] = (acc[skill.language] || 0) + 1;
                return acc;
              }, {})
            ).map(([language, count]) => (
              <div key={language}>
                <div className="flex justify-between text-sm mb-1">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: languageColors[language] || '#6B7280' }}
                    />
                    <span className="text-gray-300">{language}</span>
                  </div>
                  <span className="text-gray-400">{count} skills ({Math.round((count / skills.length) * 100)}%)</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${(count / skills.length) * 100}%`,
                      backgroundColor: languageColors[language] || '#6B7280'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}