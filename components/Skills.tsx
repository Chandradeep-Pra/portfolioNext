"use client";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiFramer,
  SiWeb3Dotjs,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiJest,
  SiCypress,
  SiFigma,
  SiPostman
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-400", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", level: 85 },
      { name: "Next.js", icon: SiNextdotjs, color: "text-gray-100", level: 80 },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", level: 90 },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-400", level: 95 },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500", level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", level: 85 },
      { name: "Redux", icon: SiRedux, color: "text-purple-400", level: 75 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-400", level: 80 },
      { name: "Express", icon: SiExpress, color: "text-gray-300", level: 75 },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: 70 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", level: 65 },
      { name: "GraphQL", icon: SiGraphql, color: "text-pink-400", level: 60 },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400", level: 75 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-400", level: 85 },
      { name: "VS Code", icon: VscCode, color: "text-blue-300", level: 90 },
      { name: "Docker", icon: SiDocker, color: "text-blue-400", level: 60 },
      // { name: "AWS", icon: SiAws, color: "text-orange-300", level: 55 },
      { name: "Vercel", icon: SiVercel, color: "text-gray-100", level: 80 },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-400", level: 75 }
    ]
  },
  {
    title: "Testing & Design",
    skills: [
      { name: "Jest", icon: SiJest, color: "text-red-400", level: 70 },
      { name: "Cypress", icon: SiCypress, color: "text-green-400", level: 65 },
      { name: "Figma", icon: SiFigma, color: "text-purple-400", level: 75 },
      { name: "Postman", icon: SiPostman, color: "text-orange-400", level: 80 },
      { name: "Framer Motion", icon: SiFramer, color: "text-pink-400", level: 70 },
      { name: "Web3", icon: SiWeb3Dotjs, color: "text-purple-400", level: 50 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-24 mx-auto md:px-20 max-w-7xl text-text">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-16 text-center drop-shadow-[0_0_4px_var(--color-accent)]">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-background/50 border border-accent/10 rounded-2xl p-8 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(127,90,240,0.1)] transition-all duration-300"
          >
            <h3 className="flex items-center gap-2 mb-6 text-xl font-bold text-accent">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              {category.title}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="font-medium transition-colors duration-300 text-light group-hover:text-accent">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-light/60">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-2 overflow-hidden rounded-full bg-background/60">
                      <div
                        className="h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-accent to-primary"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills Summary */}
      <div className="mt-16 text-center">
        <div className="p-8 border bg-background/50 border-accent/10 rounded-2xl backdrop-blur-sm">
          <h3 className="mb-4 text-xl font-bold text-accent">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "RESTful APIs",
              "Agile/Scrum",
              "Performance Optimization",
              "SEO",
              "Accessibility",
              "CI/CD",
              "Code Review",
              "Problem Solving",
              "Team Collaboration"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-full cursor-default bg-accent/10 text-accent border-accent/20 hover:bg-accent hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
}