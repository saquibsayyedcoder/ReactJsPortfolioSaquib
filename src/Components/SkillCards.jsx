import React, { useState, useRef } from "react";
import {
  FaSearch,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
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

/* ------------------ SKILLS DATA ------------------ */

const skills = [
  { name: 'React.js', icon: <DiReact />, type: 'Frontend', proficiency: 90, description: 'Component architecture with hooks and state management', language: 'JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript />, type: 'Frontend', proficiency: 85, description: 'Type-safe JavaScript for scalable applications', language: 'TypeScript' },
  { name: 'Next.js', icon: <SiNextdotjs />, type: 'Frontend', proficiency: 88, description: 'React framework with SSR and static generation', language: 'JavaScript' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, type: 'Frontend', proficiency: 88, description: 'Utility-first CSS framework', language: 'CSS' },
  { name: 'JavaScript', icon: <SiJavascript />, type: 'Frontend', proficiency: 92, description: 'Modern ES6+ and async programming', language: 'JavaScript' },
  { name: 'Redux Tool Kit', icon: <SiRedux />, type: 'Tool', proficiency: 85, description: 'Predictable state container', language: 'JavaScript' },
  { name: 'Node.js', icon: <DiNodejs />, type: 'Backend', proficiency: 85, description: 'Server-side JavaScript runtime', language: 'JavaScript' },
  { name: 'Express.js', icon: <SiExpress />, type: 'Backend', proficiency: 83, description: 'Fast web framework for Node.js', language: 'JavaScript' },
  { name: 'MongoDB', icon: <DiMongodb />, type: 'Database', proficiency: 80, description: 'NoSQL database', language: 'JavaScript' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, type: 'Database', proficiency: 75, description: 'Open-source relational database', language: 'SQL' },
  { name: 'Docker', icon: <SiDocker />, type: 'DevOps', proficiency: 70, description: 'Containerization platform', language: 'YAML' },
  { name: 'Git', icon: <SiGit />, type: 'Tool', proficiency: 88, description: 'Version control system', language: 'Git' },
];

/* ------------------ COLORS ------------------ */

const languageColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  CSS: '#1572B6',
  SQL: '#E38C00',
  YAML: '#CB171E',
  Git: '#F05032',
};

/* ------------------ COMPONENT ------------------ */

export default function Skills() {

  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 85) return "text-green-400";
    if (proficiency >= 75) return "text-blue-400";
    if (proficiency >= 60) return "text-yellow-400";
    return "text-gray-400";
  };

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 85) return "Expert";
    if (proficiency >= 75) return "Advanced";
    if (proficiency >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
  <section className="min-h-screen bg-gray-900 text-gray-100 py-8 md:py-12">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

    {/* Heading */}
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 md:mb-8">
      Skills & Technologies
    </h1>

    {/* Search */}
    <div className="relative mb-6 md:mb-8 w-full sm:max-w-md">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
      <input
        type="text"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-9 pr-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Carousel Section */}
    <div className="relative">

      {/* Left Arrow (Desktop only) */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full shadow hover:bg-gray-700"
      >
        <FaChevronLeft />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="
          flex gap-4 md:gap-6
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          scrollbar-hide
          pb-4
        "
      >
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="
              snap-start
              min-w-[85%] sm:min-w-[300px] md:min-w-[320px]
              bg-gray-800
              p-4 sm:p-5
              rounded-xl
              border border-gray-700
              flex-shrink-0
              transition-transform duration-300
              hover:scale-[1.03]
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-2 bg-gray-900 rounded text-lg sm:text-xl"
                style={{ color: languageColors[skill.language] }}
              >
                {skill.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-400">
                  {skill.type}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed">
              {skill.description}
            </p>

            {/* Proficiency */}
            <div className="text-xs text-gray-400 mb-1 flex justify-between">
              <span>{getProficiencyLabel(skill.proficiency)}</span>
              <span className={getProficiencyColor(skill.proficiency)}>
                {skill.proficiency}%
              </span>
            </div>

            <div className="w-full h-2 bg-gray-700 rounded-full mb-4">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>

            {/* Button */}
            <button className="w-full py-2 bg-gray-900 hover:bg-gray-700 rounded-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors">
              <FaEye className="text-xs sm:text-sm" />
              View Projects
            </button>
          </div>
        ))}
      </div>

      {/* Right Arrow (Desktop only) */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full shadow hover:bg-gray-700"
      >
        <FaChevronRight />
      </button>
    </div>

  </div>
</section>

  );
}
