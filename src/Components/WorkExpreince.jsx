import React from "react";
import { 
  FaBuilding, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaCode,
  FaDatabase,
  FaRocket,
  FaUsers
} from "react-icons/fa";
import { Link } from "react-router-dom";

const workExperience = [
  {
    id: 1,
    role: "Software Engineer",
    companyName: "AIZTS INFOTECH PVT LTD",
    startDate: "Aug 2024",
    endDate: "Present",
    location: "Remote / Office",
    tech: ["React.js", "MERN", "PostgreSQL", "Prisma", "Tailwind", "ShadCN UI", "Redux", "TanStack Query"],
    description: [
      "Delivered responsive, user-focused web applications for job portal, education, and jewelry e-commerce domains.",
      "Built clean, scalable UI using React.js, MERN stack, PostgreSQL, Prisma, Tailwind CSS, and ShadCN UI.",
      "Integrated APIs, optimized data flow, and ensured smooth frontend–backend communication.",
      "Managed application state with Redux Toolkit and TanStack React Query for improved performance.",
      "Enhanced UI/UX and cross-platform compatibility, ensuring mobile-first responsiveness.",
      "Collaborated with cross-functional teams using Git, GitHub, Docker, Linux, and Postman.",
    ],
    status: "current",
    projects: 3,
    contributions: 56,
    techStars: 24
  },
  {
    id: 2,
    role: "Intern",
    companyName: "AIZTS Infotech PVT LTD",
    startDate: "May 2024",
    endDate: "Aug 2024",
    location: "Pathruth Chowk, Solapur, Maharashtra",
    tech: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "PostgreSQL", "Git"],
    description: [
      "Developed and maintained responsive web interfaces using modern frontend technologies.",
      "Managed and optimized PostgreSQL and MongoDB databases.",
      "Integrated APIs to enhance frontend-backend communication.",
      "Used Git for version control and collaborated in teams to improve user experience and performance.",
    ],
    status: "completed",
    projects: 2,
    contributions: 32,
    techStars: 18
  },
];

const stats = [
  { label: "Total Experience", value: "1+ Years", description: "Professional development" },
  { label: "Projects Delivered", value: "5+", description: "Production applications" },
  { label: "Technologies", value: "15+", description: "Mastered tools" },
  { label: "Code Commits", value: "200+", description: "Git contributions" },
];

const ExperienceCard = ({ job }) => {
  const period = `${job.startDate} — ${job.endDate}`;
  const isCurrent = job.status === "current";

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-colors mb-6">
      {/* Card Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gray-900 text-blue-400">
              <FaBuilding className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white hover:text-blue-300 transition-colors">
                {job.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-medium text-gray-300">{job.companyName}</span>
                {isCurrent && (
                  <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-xs rounded-full border border-green-800">
                    Current
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-xs" />
                  {period}
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-xs" />
                  {job.location}
                </span>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-700 rounded-md transition-colors">
            <FaStar className="text-gray-400 hover:text-yellow-400" />
          </button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 border-b border-gray-700">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {job.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-900/70 text-gray-300 text-sm rounded-md hover:bg-gray-800 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <FaCode className="text-blue-400" />
          <h4 className="font-semibold text-white">Responsibilities & Achievements</h4>
        </div>
        <ul className="space-y-3">
          {job.description.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stats Footer */}
      <div className="px-4 sm:px-6 py-4 bg-gray-900/50 border-t border-gray-700 rounded-b-lg">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    
    {/* Stats Section */}
    <div className="flex flex-wrap gap-4 sm:gap-6">
      
      <div className="flex items-center gap-2">
        <FaCodeBranch className="text-gray-400 text-sm" />
        <span className="text-xs sm:text-sm text-gray-300">
          {job.projects} projects
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FaUsers className="text-gray-400 text-sm" />
        <span className="text-xs sm:text-sm text-gray-300">
          {job.contributions} contributions
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FaStar className="text-gray-400 text-sm" />
        <span className="text-xs sm:text-sm text-gray-300">
          {job.techStars} stars
        </span>
      </div>

    </div>

    {/* Button */}
    <Link
      to="/projects"
      className="
        flex items-center justify-center gap-2
        w-full sm:w-auto
        px-4 py-2
        bg-gray-700 hover:bg-gray-600
        text-white text-xs sm:text-sm
        rounded-md
        transition-colors
      "
    >
      <FaEye className="text-sm" />
      View Projects
    </Link>

  </div>
</div>

    </div>
  );
};

export default function WorkExperience() {
  return (
    <section id="experience" className="min-h-screen bg-gray-900 text-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Work Experience</h1>
          <p className="text-gray-400 mt-2">Professional journey and career milestones</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4"
            >
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-300">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Professional Experience</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="px-2 py-1 bg-gray-800 rounded">2 positions</span>
              <span className="px-2 py-1 bg-gray-800 rounded">2 companies</span>
            </div>
          </div>

          <div className="space-y-6">
            {workExperience.map((job) => (
              <ExperienceCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Tech Evolution Timeline */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Technology Evolution</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 ml-12">
              {[
                { 
                  period: "2023 - 2024", 
                  title: "Full-Stack Development", 
                  tech: ["React", "Node.js", "MongoDB", "PostgreSQL"], 
                  level: "Advanced"
                },
                { 
                  period: "2024 - Present", 
                  title: "Modern Stack", 
                  tech: ["TypeScript", "Next.js", "Prisma", "Docker"], 
                  level: "Expert",
                  current: true
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute -left-8 top-2 w-3 h-3 rounded-full border-2 ${item.current ? 'border-blue-500 bg-blue-500/20' : 'border-gray-600 bg-gray-900'}`}>
                    {item.current && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 absolute inset-0 m-auto"></div>}
                  </div>
                  
                  <div className="bg-gray-900/70 rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">{item.title}</span>
                      <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full">{item.level}</span>
                    </div>
                    <div className="text-xs text-gray-400 mb-3">{item.period}</div>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Goals */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg border border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Career Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaRocket className="text-green-400" />
                <span className="text-white">Lead Technical Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="text-blue-400" />
                <span className="text-white">Mentor Junior Developers</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCode className="text-purple-400" />
                <span className="text-white">Contribute to Open Source</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaDatabase className="text-yellow-400" />
                <span className="text-white">Architect Scalable Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <FaStar className="text-pink-400" />
                <span className="text-white">Master Microservices</span>
              </div>
              <div className="flex items-center gap-3">
                <FaExternalLinkAlt className="text-cyan-400" />
                <span className="text-white">Explore AI/ML Integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 max-w-lg">
            <h3 className="text-xl font-bold text-white">Ready to Collaborate?</h3>
            <p className="text-gray-400">
              Let's build something amazing together. I'm always open to discussing new opportunities.
            </p>
           <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
  
  <Link
    to="/contact"
    className="
      w-full sm:w-auto
      px-6 py-2.5
      bg-blue-600 hover:bg-blue-700
      text-white text-sm sm:text-base font-medium
      rounded-md
      transition-colors
      flex items-center justify-center gap-2
    "
  >
    <FaExternalLinkAlt className="text-sm" />
    Contact Me
  </Link>

  <Link
    to="/projects"
    className="
      w-full sm:w-auto
      px-6 py-2.5
      bg-gray-700 hover:bg-gray-600
      text-white text-sm sm:text-base font-medium
      rounded-md
      transition-colors
      flex items-center justify-center gap-2
    "
  >
    <FaEye className="text-sm" />
    View Projects
  </Link>

</div>

          </div>
        </div>
      </div>
    </section>
  );
}