"use client";

import { useState } from "react";
import { BiChevronDown, BiCalendar, BiBuilding } from "react-icons/bi";

const experiences = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Nissan Digital",
    location: "India",
    duration: "2022 - 2024",
    type: "Full-time",
    description: "Built vendor portals and responsive UI systems using React, Node.js, and Git. Collaborated with QA using Selenium.",
    responsibilities: [
      "Developed and maintained large-scale web applications using React and Node.js",
      "Built responsive UI components and vendor portal systems",
      "Collaborated with QA teams for automated testing using Selenium",
      "Implemented modern frontend architectures and best practices",
      "Worked with cross-functional teams to deliver high-quality products",
      "Optimized application performance and user experience"
    ],
    technologies: ["React", "Node.js", "JavaScript", "Git", "Selenium", "HTML/CSS"],
    achievements: [
      "Successfully delivered multiple vendor portal projects",
      "Improved application performance by 30%",
      "Mentored junior developers on React best practices"
    ]
  },
  {
    id: 2,
    title: "Founder & Freelance Developer",
    company: "Tic Tech Toe",
    location: "India",
    duration: "April 2024 - Present",
    type: "Freelance",
    description: "Started freelancing in April 2024. Delivered web solutions, UI/UX upgrades, and built products for clients as a one-man tech team.",
    responsibilities: [
      "Founded and managed freelance development business",
      "Delivered custom web solutions for small businesses",
      "Designed and developed modern, responsive websites",
      "Provided UI/UX design and development services",
      "Managed client relationships and project timelines",
      "Built AI-enhanced web applications and tools"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS", "AI Integration"],
    achievements: [
      "Successfully launched 10+ client projects",
      "Built strong client relationships with 100% satisfaction rate",
      "Expanded skill set to include AI integration and modern web technologies"
    ]
  }
];

const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SIEM, MAKAUT University",
    duration: "2018 - 2022",
    description: "Completed engineering degree with focus on computer science fundamentals, programming, and software development.",
    subjects: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Software Engineering", "Web Technologies", "Computer Networks"]
  },
  {
    id: 2,
    degree: "Full Stack Development Bootcamp",
    institution: "Geekster",
    duration: "2024",
    description: "Intensive bootcamp focused on modern web development technologies and problem-solving skills.",
    subjects: ["React", "Java", "SQL", "System Design", "Data Structures & Algorithms", "Full Stack Development"]
  }
];

export default function Experience() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="relative z-10 py-24 px-6 md:px-20 max-w-7xl mx-auto text-text">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-16 text-center drop-shadow-[0_0_4px_var(--color-accent)]">
        Experience & Education
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 p-1 bg-background/50 border border-accent/10 rounded-full backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'experience'
                ? "bg-accent text-white shadow-lg"
                : "text-light hover:text-accent hover:bg-accent/10"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'education'
                ? "bg-accent text-white shadow-lg"
                : "text-light hover:text-accent hover:bg-accent/10"
            }`}
          >
            Education
          </button>
        </div>
      </div>

      {/* Experience Section */}
      {activeTab === 'experience' && (
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-background/50 border border-accent/10 rounded-2xl p-8 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(127,90,240,0.1)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-accent mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-light mb-2">
                    <BiBuilding size={16} />
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-light/60">•</span>
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-light/80 text-sm mb-4">
                    <BiCalendar size={16} />
                    <span>{exp.duration}</span>
                    <span className="text-light/60">•</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-light mb-6 leading-relaxed">{exp.description}</p>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                className="flex items-center gap-2 text-accent hover:text-primary font-medium mb-4 transition-colors duration-300"
              >
                {expandedExp === exp.id ? "Show Less" : "Show More Details"}
                <BiChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    expandedExp === exp.id ? "rotate-180" : ""
                  }`} 
                />
              </button>

              {/* Expanded Content */}
              {expandedExp === exp.id && (
                <div className="space-y-6 border-t border-accent/10 pt-6">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-light text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-light text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {activeTab === 'education' && (
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-background/50 border border-accent/10 rounded-2xl p-8 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(127,90,240,0.1)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-accent mb-2">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-light mb-2">
                    <BiBuilding size={16} />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-light/80 text-sm mb-4">
                    <BiCalendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-light mb-6 leading-relaxed">{edu.description}</p>

              {/* Subjects */}
              <div>
                <h4 className="font-semibold text-accent mb-3">Key Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Additional Achievements */}
      <div className="mt-16">
        <div className="bg-background/50 border border-accent/10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-accent mb-6 text-center">Additional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">400+</div>
              <div className="text-light text-sm">DSA Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-light text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
              <div className="text-light text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}