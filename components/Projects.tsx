"use client";

import { useState } from "react";
import { BiChevronDown, BiGithub, BiLinkExternal } from "react-icons/bi";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A complete e-commerce solution with user authentication, product management, and payment integration.",
    longDescription: "Built a comprehensive e-commerce platform using React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, order management, and Stripe payment integration. Implemented responsive design and optimized for performance.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/chandradeep",
    live: "https://ecommerce-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    category: "Frontend",
    description: "A modern task management application with drag-and-drop functionality and real-time updates.",
    longDescription: "Developed a task management dashboard with drag-and-drop functionality using React DnD. Features include task creation, assignment, progress tracking, and real-time collaboration. Integrated with Firebase for backend services.",
    tech: ["React", "TypeScript", "Firebase", "React DnD", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/chandradeep",
    live: "https://taskmanager-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather App",
    category: "Frontend",
    description: "A responsive weather application with location-based forecasts and interactive maps.",
    longDescription: "Created a weather application that provides current weather conditions and 7-day forecasts. Features location-based weather, interactive maps, weather alerts, and beautiful animations. Used OpenWeatherMap API for weather data.",
    tech: ["React", "JavaScript", "OpenWeatherMap API", "CSS3", "Geolocation"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/chandradeep",
    live: "https://weather-app-demo.com",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Frontend",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    longDescription: "Designed and developed a personal portfolio website showcasing projects and skills. Features smooth animations, responsive design, dark mode toggle, and optimized performance. Built with modern web technologies.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/chandradeep",
    live: "https://chandradeep-portfolio.com",
    featured: false
  },
  {
    id: 5,
    title: "Chat Application",
    category: "Full Stack",
    description: "Real-time chat application with user authentication and message encryption.",
    longDescription: "Built a real-time chat application with Socket.io for instant messaging. Features include user authentication, private and group chats, message encryption, file sharing, and online status indicators. Deployed on AWS.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "AWS"],
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/chandradeep",
    live: "https://chat-app-demo.com",
    featured: true
  },
  {
    id: 6,
    title: "Blog Platform",
    category: "Full Stack",
    description: "A content management system for bloggers with rich text editor and SEO optimization.",
    longDescription: "Developed a blog platform with rich text editor, comment system, and SEO optimization. Features include user roles, content moderation, analytics dashboard, and social media integration. Built with modern web technologies.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/chandradeep",
    live: "https://blog-platform-demo.com",
    featured: false
  }
];

const categories = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-20 max-w-7xl mx-auto text-text">
      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-16 text-center drop-shadow-[0_0_4px_var(--color-accent)]">
        Featured Projects
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 p-1 bg-background/50 border border-accent/10 rounded-full backdrop-blur-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-accent text-white shadow-lg"
                  : "text-light hover:text-accent hover:bg-accent/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-background/60 border border-accent/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(127,90,240,0.15)]"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Links */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/80 text-accent rounded-full hover:bg-accent hover:text-white transition-colors duration-300 backdrop-blur-sm"
                >
                  <BiGithub size={18} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/80 text-accent rounded-full hover:bg-accent hover:text-white transition-colors duration-300 backdrop-blur-sm"
                >
                  <BiLinkExternal size={18} />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-light text-sm mb-4 leading-relaxed">
                {expandedProject === project.id ? project.longDescription : project.description}
              </p>

              {/* Expand Button */}
              <button
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                className="flex items-center gap-1 text-accent hover:text-primary text-sm font-medium mb-4 transition-colors duration-300"
              >
                {expandedProject === project.id ? "Show Less" : "Read More"}
                <BiChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    expandedProject === project.id ? "rotate-180" : ""
                  }`} 
                />
              </button>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <a
          href="https://github.com/chandradeep"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent/10 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
        >
          <BiGithub size={20} />
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}